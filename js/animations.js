/**
 * Scroll Animations with IntersectionObserver
 * Lightweight, no dependencies
 */

(function() {
  'use strict';

  // Elements to animate on scroll
  const animatedSelectors = [
    '.section-header',
    '.feature-card',
    '.timeline-item',
    '.comparison-card',
    '.pricing-card',
    '.faq-item',
    '.cta-section__content'
  ];

  // Elements that should be visible immediately (above the fold)
  const immediateSelectors = [
    '.hero-section__content',
    '.demo-content',
    '.demo-visual'
  ];

  // ═══════════════════════════════════════════════════════════
  // COUNTER ANIMATION
  // ═══════════════════════════════════════════════════════════
  
  function animateCounter(element, target, suffix, duration = 800) {
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Linear easing — constant speed, no slowdown at end
      const current = Math.floor(start + (target - start) * progress);
      
      // Always show suffix together with number
      element.textContent = current.toLocaleString('ru-RU') + ' ' + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target.toLocaleString('ru-RU') + ' ' + suffix;
      }
    }
    
    requestAnimationFrame(update);
  }

  function initCounters() {
    const priceElements = document.querySelectorAll('.pricing-card__amount');
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          
          const text = entry.target.textContent.trim();
          // Extract number from text like "499 ₽" or "0 ₽"
          const match = text.match(/(\d+)/);
          if (match) {
            const target = parseInt(match[1], 10);
            const suffix = text.replace(/[\d\s]+/, '').trim(); // Get ₽ symbol
            
            if (target > 0) {
              animateCounter(entry.target, target, suffix);
            }
          }
          
          counterObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    priceElements.forEach(el => counterObserver.observe(el));
  }

  // Stagger delays for grid items (ms)
  const staggerDelay = 80;

  // Initialize animations
  function init() {
    // Add CSS class to enable transitions
    document.documentElement.classList.add('js-animations');

    // Mark immediate elements as visible right away
    document.querySelectorAll(immediateSelectors.join(', ')).forEach(el => {
      el.classList.add('animate-on-scroll', 'is-visible');
    });

    // Collect all animated elements
    const elements = document.querySelectorAll(animatedSelectors.join(', '));

    // Group elements by parent for stagger effect
    const groups = new Map();

    elements.forEach(el => {
      // Mark as hidden initially
      el.classList.add('animate-on-scroll');

      // Group siblings for stagger
      const parent = el.parentElement;
      const siblings = parent.querySelectorAll(':scope > .animate-on-scroll');
      
      if (siblings.length > 1) {
        if (!groups.has(parent)) {
          groups.set(parent, []);
        }
        const index = groups.get(parent).length;
        groups.get(parent).push(el);
        el.style.transitionDelay = `${index * staggerDelay}ms`;
      }
    });

    // Create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve after animation (performance)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements
    elements.forEach(el => observer.observe(el));
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init();
      initCounters();
    });
  } else {
    init();
    initCounters();
  }
})();
