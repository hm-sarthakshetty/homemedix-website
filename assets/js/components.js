/* ============================================================
   HomeMedix — Shared Components (Nav + Footer)
   Editorial design system — Playfair Display / DM Sans
   ============================================================ */

(function () {

  const depth = window.location.pathname.split('/').filter(Boolean).length;
  const root  = depth <= 1 ? './' : '../'.repeat(depth - 1);

  /* ---- NAV ---- */
  const navHTML = `
    <nav class="site-nav" role="navigation" aria-label="Main navigation">
      <a class="nav-wordmark" href="${root}index.html" aria-label="HomeMedix Home">
        <img src="${root}assets/images/HM.png" alt="HomeMedix India" class="nav-logo">
      </a>

      <ul class="nav-links" role="list">
        <li><a href="${root}index.html">Home</a></li>
        <li class="nav-drop">
          <a href="${root}products/index.html">Products</a>
          <div class="nav-drop__menu" role="menu">
            <a href="${root}products/oxygen-concentrator-kx.html" role="menuitem">Oxygen Concentrator KX</a>
            <a href="${root}products/oxygen-concentrator-kv.html" role="menuitem">Oxygen Concentrator KV</a>
            <a href="${root}products/airquilt.html"               role="menuitem">AirQuilt Anti-Bedsore Mattress</a>
            <a href="${root}products/aquaquilt.html"              role="menuitem">AquaQuilt Medical Water Bed</a>
            <a href="${root}products/mistyneb.html"               role="menuitem">MistyNeb Nebulizer</a>
            <a href="${root}products/cpap-bipap.html"             role="menuitem">CPAP &amp; BiPAP</a>
            <a href="${root}products/hm-pro.html"                 role="menuitem">HM Pro</a>
            <a href="${root}products/latex-gloves.html"           role="menuitem">Latex Gloves</a>
            <a href="${root}products/blood-pressure-monitor.html" role="menuitem">Blood Pressure Monitors</a>
          </div>
        </li>
        <li><a href="${root}resources/index.html">Resources</a></li>
        <li><a href="${root}about.html">About</a></li>
        <li><a href="${root}faq.html">FAQ</a></li>
        <li><a href="${root}contact.html">Contact</a></li>
      </ul>

      <a class="nav-cta-link" href="${root}contact.html">Get a Quote</a>

      <button class="nav-hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <!-- Mobile nav -->
    <div class="mobile-nav" id="mobileNav" role="dialog" aria-modal="true">
      <button class="mob-close" id="mobileClose">Close ✕</button>
      <a class="mob-main-link" href="${root}index.html">Home</a>
      <span class="mob-section">Products</span>
      <a class="mob-sub" href="${root}products/oxygen-concentrator-kx.html">Oxygen Concentrator KX</a>
      <a class="mob-sub" href="${root}products/oxygen-concentrator-kv.html">Oxygen Concentrator KV</a>
      <a class="mob-sub" href="${root}products/airquilt.html">AirQuilt</a>
      <a class="mob-sub" href="${root}products/aquaquilt.html">AquaQuilt</a>
      <a class="mob-sub" href="${root}products/mistyneb.html">MistyNeb</a>
      <a class="mob-sub" href="${root}products/cpap-bipap.html">CPAP &amp; BiPAP</a>
      <a class="mob-sub" href="${root}products/hm-pro.html">HM Pro</a>
      <a class="mob-sub" href="${root}products/latex-gloves.html">Latex Gloves</a>
      <a class="mob-sub" href="${root}products/blood-pressure-monitor.html">Blood Pressure Monitors</a>
      <a class="mob-main-link" href="${root}resources/index.html">Resources</a>
      <a class="mob-main-link" href="${root}about.html">About</a>
      <a class="mob-main-link" href="${root}faq.html">FAQ</a>
      <a class="mob-main-link" href="${root}contact.html">Contact</a>
      <a class="mob-cta" href="${root}contact.html">Get a Quote</a>
    </div>
  `;

  /* ---- FOOTER ---- */
  const footerHTML = `
    <footer class="site-footer" role="contentinfo">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="${root}assets/images/HM.png" alt="HomeMedix India" class="footer-logo">
          <p>ISO-certified medical device company, est. 2004. Manufacturing in-house since 2023 at KSSIDC Industrial Estate, Bengaluru.</p>
          <span class="label">Made in India &nbsp;·&nbsp; ISO 9001 &amp; 13485</span>
        </div>

        <div class="footer-col">
          <h6>Products</h6>
          <ul>
            <li><a href="${root}products/oxygen-concentrator-kx.html">Oxygen Concentrator KX</a></li>
            <li><a href="${root}products/oxygen-concentrator-kv.html">Oxygen Concentrator KV</a></li>
            <li><a href="${root}products/airquilt.html">AirQuilt Mattress</a></li>
            <li><a href="${root}products/aquaquilt.html">AquaQuilt Water Bed</a></li>
            <li><a href="${root}products/mistyneb.html">MistyNeb Nebulizer</a></li>
            <li><a href="${root}products/cpap-bipap.html">CPAP &amp; BiPAP</a></li>
            <li><a href="${root}products/hm-pro.html">HM Pro</a></li>
            <li><a href="${root}products/latex-gloves.html">Latex Gloves</a></li>
            <li><a href="${root}products/blood-pressure-monitor.html">Blood Pressure Monitors</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h6>Company</h6>
          <ul>
            <li><a href="${root}about.html">About Us</a></li>
            <li><a href="${root}products/index.html">All Products</a></li>
            <li><a href="${root}faq.html">FAQ</a></li>
            <li><a href="${root}contact.html">Contact</a></li>
            <li><a href="${root}contact.html">Get a Quote</a></li>
            <li><a href="${root}contact.html">Service Request</a></li>
            <li><a href="https://www.youtube.com/@HomeMedix" target="_blank" rel="noopener noreferrer">YouTube Channel</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h6>Resources</h6>
          <ul>
            <li><a href="${root}resources/guides/oxygen-concentrator-buying-guide.html">O2 Concentrator Guide</a></li>
            <li><a href="${root}resources/guides/nebulizer-buying-guide.html">Nebulizer Guide</a></li>
            <li><a href="${root}resources/guides/anti-bedsore-mattress-guide.html">Mattress Guide</a></li>
            <li><a href="${root}resources/conditions/copd-home-management.html">COPD Management</a></li>
            <li><a href="${root}resources/index.html">View All Resources</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h6>Contact</h6>
          <div class="footer-contact">
            <div class="fc-row">
              <span class="fc-lbl">Address</span>
              <span>27, 3rd Main Road, KSSIDC Industrial Estate,<br>Rajajinagar 6th Block, Bengaluru – 560044</span>
            </div>
            <div class="fc-row">
              <span class="fc-lbl">Sales</span>
              <a href="tel:+919886012456">+91 98860 12456</a>
              <a href="tel:+919071112559">+91 90711 12559</a>
            </div>
            <div class="fc-row">
              <span class="fc-lbl">Service</span>
              <a href="tel:+919513755596">+91 95137 55596</a>
            </div>
            <div class="fc-row">
              <span class="fc-lbl">Email</span>
              <a href="mailto:social@homemedix.in">social@homemedix.in</a>
            </div>
            <div class="fc-row">
              <span class="fc-lbl">Hours</span>
              <span>Mon – Sat &nbsp;·&nbsp; 9am – 6pm</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} HomeMedix India Pvt. Ltd. &nbsp;·&nbsp; Bengaluru, Karnataka</span>
        <div class="footer-certs">
          <span class="footer-cert">ISO 9001:2016</span>
          <span class="footer-cert">ISO 13485:2016</span>
          <span class="footer-cert">Made in India</span>
        </div>
      </div>
    </footer>

    <!-- WhatsApp FAB -->
    <a class="whatsapp-fab"
       href="https://wa.me/919886012456?text=Hello%2C%20I%20am%20interested%20in%20HomeMedix%20products."
       target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  `;

  /* ---- INJECT ---- */
  const body = document.body;
  const main = document.querySelector('main');
  const navWrapper = document.createElement('div');
  navWrapper.innerHTML = navHTML;
  if (main) { body.insertBefore(navWrapper, main); }
  else       { body.insertBefore(navWrapper, body.firstChild); }

  const footerEl = document.getElementById('footer');
  if (footerEl) {
    footerEl.outerHTML = footerHTML;
  } else {
    const fw = document.createElement('div');
    fw.innerHTML = footerHTML;
    body.appendChild(fw);
  }

  /* ---- HAMBURGER ---- */
  function openMobileNav() {
    document.getElementById('mobileNav').classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileNav() {
    document.getElementById('mobileNav').classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function(e) {
    if (e.target.closest('#hamburger')) { openMobileNav(); }
    if (e.target.closest('#mobileClose')) { closeMobileNav(); }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var nav = document.getElementById('mobileNav');
      if (nav && nav.classList.contains('is-open')) { closeMobileNav(); }
    }
  });

  /* ---- ACTIVE NAV LINK ---- */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace(/^\.\.\/|^\.\//,''))) {
      a.closest('li').classList.add('active');
    }
  });

})();
