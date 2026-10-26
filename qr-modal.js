/**
 * Yaara Modern QR Code Modal & Floating Trigger
 * Handles smooth modal interactions, keyboard navigation, and responsive behavior.
 */
(() => {
  'use strict';

  function initQrModal() {
    const trigger = document.getElementById('yaara-qr-trigger');
    const modal = document.getElementById('yaara-qr-modal');
    if (!trigger || !modal) return;

    const closeBtn = modal.querySelector('.yaara-qr-close');
    const card = modal.querySelector('.yaara-qr-card');
    let previousActiveElement = null;

    function openModal() {
      previousActiveElement = document.activeElement;
      modal.hidden = false;
      // Trigger CSS transition
      requestAnimationFrame(() => {
        modal.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        if (closeBtn) closeBtn.focus();
      });
    }

    function closeModal() {
      modal.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      setTimeout(() => {
        modal.hidden = true;
        if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
          previousActiveElement.focus();
        }
      }, 350);
    }

    // Event listeners
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
      });
    }

    // Click outside card (backdrop)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });

    // Support any custom triggers with href="#scan-qr" or data-open-qr
    document.querySelectorAll('[href="#scan-qr"], [data-open-qr]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQrModal);
  } else {
    initQrModal();
  }
})();
