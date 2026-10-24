/**
 * Yaara Subtle Editorial Lead Pill
 * Bottom-right compact card that complements Yaara's editorial typography
 */
(function() {
  'use strict';

  if (localStorage.getItem('yaara_lead_dismissed') === 'true') {
    return;
  }

  const pill = document.createElement('div');
  pill.className = 'lead-pill';
  pill.setAttribute('role', 'region');
  pill.setAttribute('aria-label', 'Get early updates');

  pill.innerHTML = `
    <div class="lead-pill-header">
      <span class="lead-pill-tag">Stay in touch</span>
      <button type="button" class="lead-pill-close" id="yaara-lead-close" aria-label="Close">×</button>
    </div>
    <div class="lead-pill-title">New guides &amp; early APK updates. <em>Zero noise.</em></div>
    <form class="lead-pill-form" id="yaara-lead-form">
      <input type="email" class="lead-pill-input" id="yaara-lead-email" placeholder="Your email address" required autocomplete="email" aria-label="Email address">
      <button type="submit" class="lead-pill-btn" aria-label="Subscribe">
        <span aria-hidden="true">↗</span>
      </button>
    </form>
    <div class="lead-pill-success" id="yaara-lead-success" aria-live="polite">
      ✓ You’re on the list. Thank you!
    </div>
  `;

  document.body.appendChild(pill);

  // Smooth scroll trigger after passing 400px
  let revealed = false;
  function handleScroll() {
    if (!revealed && window.scrollY > 400) {
      revealed = true;
      pill.classList.add('is-visible');
      window.removeEventListener('scroll', handleScroll);
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Dismiss action
  const closeBtn = pill.querySelector('#yaara-lead-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      pill.classList.remove('is-visible');
      pill.classList.add('is-dismissed');
      localStorage.setItem('yaara_lead_dismissed', 'true');
    });
  }

  // Submit action
  const form = pill.querySelector('#yaara-lead-form');
  const success = pill.querySelector('#yaara-lead-success');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = pill.querySelector('#yaara-lead-email');
      const email = emailInput ? emailInput.value.trim() : '';

      if (!email) return;

      const storedLeads = JSON.parse(localStorage.getItem('yaara_leads') || '[]');
      storedLeads.push({ email: email, timestamp: new Date().toISOString() });
      localStorage.setItem('yaara_leads', JSON.stringify(storedLeads));
      localStorage.setItem('yaara_lead_dismissed', 'true');

      form.style.display = 'none';
      if (success) success.classList.add('is-shown');

      setTimeout(function() {
        pill.classList.remove('is-visible');
        pill.classList.add('is-dismissed');
      }, 3500);
    });
  }
})();
