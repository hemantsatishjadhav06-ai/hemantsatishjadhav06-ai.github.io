/* ==========================================================================
   Neopolis Infra — site behaviour
   ========================================================================== */
(function () {
  "use strict";

  /* ---- current year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- header scroll state ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".nav-menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var ro = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            ro.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      ro.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---- count up ---- */
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var seen = new WeakSet();
    var co = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting || seen.has(e.target)) return;
          seen.add(e.target);
          var el = e.target;
          var target = parseFloat(el.getAttribute("data-count"));
          var suffix = el.getAttribute("data-suffix") || "";
          var prefix = el.getAttribute("data-prefix") || "";
          if (target === 0) {
            el.textContent = prefix + "0" + suffix;
            return;
          }
          var cur = 0;
          var step = Math.max(1, Math.ceil(target / 42));
          var t = setInterval(function () {
            cur += step;
            if (cur >= target) {
              cur = target;
              clearInterval(t);
            }
            el.textContent = prefix + cur + suffix;
          }, 26);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) {
      co.observe(el);
    });
  }

  /* ---- corridor <-> map linking ---- */
  function setArea(area, on) {
    document
      .querySelectorAll('.parcel[data-area="' + area + '"]')
      .forEach(function (p) {
        p.classList.toggle("active", on);
      });
    document
      .querySelectorAll('.plabel[data-area="' + area + '"]')
      .forEach(function (p) {
        p.classList.toggle("active", on);
      });
  }
  document.querySelectorAll(".cor-item").forEach(function (c) {
    var a = c.getAttribute("data-area");
    if (!a) return;
    c.addEventListener("mouseenter", function () {
      setArea(a, true);
    });
    c.addEventListener("mouseleave", function () {
      setArea(a, false);
    });
    c.addEventListener("focusin", function () {
      setArea(a, true);
    });
    c.addEventListener("focusout", function () {
      setArea(a, false);
    });
  });
  document.querySelectorAll(".parcel").forEach(function (p) {
    var a = p.getAttribute("data-area");
    if (!a) return;
    p.addEventListener("mouseenter", function () {
      setArea(a, true);
    });
    p.addEventListener("mouseleave", function () {
      setArea(a, false);
    });
    p.addEventListener("click", function () {
      var link = document.querySelector('.cor-item[data-area="' + a + '"]');
      if (link && link.href) window.open(link.href, "_blank", "noopener");
    });
  });

  /* ---- hero plan grid (generated) ---- */
  var hg = document.getElementById("heroPlan");
  if (hg) {
    var s = "";
    for (var x = 0; x <= 1440; x += 80)
      s +=
        '<line x1="' +
        x +
        '" y1="0" x2="' +
        x +
        '" y2="720" stroke="rgba(255,255,255,.05)"/>';
    for (var y = 0; y <= 720; y += 80)
      s +=
        '<line x1="0" y1="' +
        y +
        '" x2="1440" y2="' +
        y +
        '" stroke="rgba(255,255,255,.05)"/>';
    var plots = [
      [160, 160, 160, 120],
      [520, 80, 120, 160],
      [1080, 240, 200, 160],
      [760, 420, 160, 120],
      [1200, 540, 160, 120],
    ];
    plots.forEach(function (p) {
      s +=
        '<rect x="' +
        p[0] +
        '" y="' +
        p[1] +
        '" width="' +
        p[2] +
        '" height="' +
        p[3] +
        '" fill="rgba(255,102,0,.06)" stroke="rgba(255,102,0,.22)"/>';
    });
    hg.innerHTML = s;
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq-item");
      var ans = item.querySelector(".faq-a");
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", String(open));
      ans.style.maxHeight = open ? ans.scrollHeight + "px" : null;
    });
  });

  /* ---- contact form (front-end only demo) ---- */
  var form = document.getElementById("enquiryForm");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "there").toString().trim();
      var area = (data.get("corridor") || "a corridor").toString();
      var budget = (data.get("budget") || "").toString();
      var msg =
        "Hi Neopolis Infra, I'm " +
        name +
        ". I'm interested in a landlord share in " +
        area +
        (budget ? " (budget " + budget + ")" : "") +
        ".";
      window.open(
        "https://wa.me/919533686567?text=" + encodeURIComponent(msg),
        "_blank",
        "noopener"
      );
      var note = form.querySelector(".form-note");
      if (note)
        note.textContent =
          "Opening WhatsApp with your details… if nothing happens, call +91 95336 86567.";
    });
  }
})();
