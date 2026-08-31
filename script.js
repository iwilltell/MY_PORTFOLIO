/* ============================================================
   PORTFOLIO — Wibhor Kumar Roy
   script.js
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────
   PROJECT DATA
   ────────────────────────────────────────── */
const PROJECTS = {
  'sakuri': {
    id: 'sakuri',
    title: 'Sakuri App',
    type: 'Full-stack',
    image: 'assets/projects/sakuri.jpg',
    overview: 'A centralized application platform combining an intuitive interface with structured backend services and persistent data management.',
    whatIBuilt: 'A full-stack web application using the MERN stack. Built out both the frontend and backend, connecting them to a persistent MongoDB database and adding user authentication through Clerk and payment processing via Stripe.',
    howItWorks: 'React handles the frontend UI, Express.js and Node.js manage the API layer, MongoDB stores application data, Clerk handles user authentication, and Stripe processes payments. Tailwind CSS is used for styling.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Clerk API', 'Stripe API'],
    features: [
      'Centralized application interface',
      'Structured backend API with Express.js',
      'Persistent data storage via MongoDB',
      'User authentication with Clerk',
      'Payment integration via Stripe',
      'Responsive UI with Tailwind CSS'
    ],
    github: null,
    demo: null
  },
  'job-scraper': {
    id: 'job-scraper',
    title: 'Job Search — Data Scraping',
    type: 'Python / Data',
    image: 'assets/projects/job-scraper.jpg',
    overview: 'A project focused on collecting and working with job listing data through web scraping.',
    whatIBuilt: 'A Python script that scrapes job listings from the web, parses the data, and structures it using Pandas for further analysis and exploration.',
    howItWorks: 'Python handles the scraping logic, extracting relevant fields from job listing pages. Pandas is used to clean, structure, and explore the resulting dataset.',
    tech: ['Python', 'Web Scraping', 'Pandas'],
    features: [
      'Automated job listing collection',
      'Data parsing and extraction',
      'Pandas-based data structuring',
      'Exportable dataset output'
    ],
    github: null,
    demo: null
  },
  'file-organizer': {
    id: 'file-organizer',
    title: 'Automatic File Organizer',
    type: 'Python / Automation',
    image: 'assets/projects/file-organizer.jpg',
    overview: 'A practical automation system that watches a folder and organizes files into appropriate subdirectories automatically.',
    whatIBuilt: 'A Python automation script that monitors a target directory and sorts incoming files by type (images, videos, documents, code, etc.) into their own organized subfolders.',
    howItWorks: 'The script reads the file extension, determines the appropriate category, and moves the file to the matching folder. It runs as a standalone Python script and can be extended further.',
    tech: ['Python'],
    features: [
      'Automatic file sorting by type',
      'Configurable folder categories',
      'Handles unknown file types gracefully'
    ],
    comingSoon: [
      'GUI interface',
      'Notification / message system',
      'Cloud file storage integration',
      'Phone-based remote control'
    ],
    github: null,
    demo: null
  },
  'phone-unlock': {
    id: 'phone-unlock',
    title: 'Phone-Controlled Laptop Unlock',
    type: 'Systems / Security',
    image: 'assets/projects/phone-unlock.jpg',
    overview: 'A secure phone-to-laptop authentication system that allows a trusted mobile device to initiate a laptop unlock request without touching the keyboard.',
    whatIBuilt: 'A full-stack application using the MERN stack and WebRTC for device-to-device communication. The phone sends an authenticated unlock signal to the laptop after verifying the device identity.',
    howItWorks: 'The laptop runs a local listener. The phone, registered as a trusted device, sends an unlock request through the Node.js backend. WebRTC facilitates the real-time device communication. MongoDB stores trusted device records.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'WebRTC', 'Tailwind CSS'],
    features: [
      'Trusted device registration and verification',
      'Phone-initiated authentication request',
      'Real-time device-to-device communication via WebRTC',
      'Failure handling and retry logic',
      'Secure laptop unlock flow'
    ],
    github: null,
    demo: null
  },
  'recommendation': {
    id: 'recommendation',
    title: 'Movie & Web-Series Recommendation System',
    type: 'AI / ML',
    image: 'assets/projects/recommendation.jpg',
    overview: 'A recommendation system that analyzes movie and web-series metadata and uses similarity scoring to recommend relevant content.',
    whatIBuilt: 'A web application with a PHP backend and MySQL database that computes content-based similarity scores and serves recommendations in real time via WebSocket.',
    howItWorks: 'Metadata (genre, cast, keywords, etc.) is stored in MySQL. The similarity algorithm computes scores between titles and returns ranked recommendations. WebSocket handles real-time updates on the frontend.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'WebSocket'],
    features: [
      'Content-based filtering using metadata similarity',
      'Real-time recommendations via WebSocket',
      'Movie and web-series metadata database',
      'User-facing search and recommendation UI'
    ],
    github: null,
    demo: null
  }
};

const PROJECT_NAMES = {
  'sakuri': 'Sakuri App',
  'job-scraper': 'Job Search — Data Scraping',
  'file-organizer': 'Automatic File Organizer',
  'phone-unlock': 'Phone-Controlled Laptop Unlock',
  'recommendation': 'Movie & Web-Series Recommendation System'
};

/* ──────────────────────────────────────────
   DOM READY
   ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initArsenal();
  initProjectFilters();
  initProjectModals();
  initRatingSystem();
  initCertPreview();
  initScrollTop();
  initEasterEggs();
  injectScrollTopBtn();
  printConsoleGreeting();
});

/* ──────────────────────────────────────────
   NAVIGATION
   ────────────────────────────────────────── */
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile-link, .nav-mobile a');

  // Scroll: add .scrolled class
  const updateNav = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    navMobile.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on mobile link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMobile.classList.contains('open')) {
      closeMobileNav();
    }
  });

  function closeMobileNav() {
    navMobile.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navMobile.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOpts = { rootMargin: '-40% 0px -40% 0px', threshold: 0 };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOpts);

  sections.forEach(s => sectionObserver.observe(s));
}

/* ──────────────────────────────────────────
   SCROLL REVEAL
   ────────────────────────────────────────── */
function initReveal() {
  const targets = document.querySelectorAll('.reveal');

  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.05 });

  targets.forEach(el => observer.observe(el));
}

/* ──────────────────────────────────────────
   ARSENAL
   ────────────────────────────────────────── */
function initArsenal() {
  const techTags = document.querySelectorAll('.tech-tag');
  const arsenalInfo = document.getElementById('arsenalInfo');

  techTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const techName = tag.dataset.tech;
      const projectIds = tag.dataset.projects ? tag.dataset.projects.split(',').filter(Boolean) : [];

      // Toggle: if clicking active tag, deselect
      if (tag.classList.contains('active')) {
        tag.classList.remove('active');
        techTags.forEach(t => t.classList.remove('highlighted'));
        showArsenalDefault();
        return;
      }

      // Deselect all, select this one
      techTags.forEach(t => t.classList.remove('active', 'highlighted'));
      tag.classList.add('active');

      // Highlight related techs (optional future feature)
      showArsenalTech(techName, projectIds);
    });
  });

  function showArsenalDefault() {
    arsenalInfo.innerHTML = `
      <div class="arsenal-default">
        <div class="arsenal-default-icon">⚡</div>
        <p>Select a technology to see related projects.</p>
      </div>
    `;
  }

  function showArsenalTech(name, projectIds) {
    let projectsHTML = '';
    if (projectIds.length > 0) {
      projectsHTML = `
        <p class="arsenal-related-label">Related projects</p>
        ${projectIds.map(id => {
          const pname = PROJECT_NAMES[id] || id;
          return `<button class="arsenal-project-link" onclick="openProject('${id}')">
            <span>→</span> ${pname}
          </button>`;
        }).join('')}
      `;
    } else {
      projectsHTML = `<p class="arsenal-no-projects">No published projects using this yet — but it's part of the stack.</p>`;
    }

    arsenalInfo.innerHTML = `
      <p class="arsenal-selected-tech">Technology</p>
      <p class="arsenal-selected-name">${name}</p>
      ${projectsHTML}
    `;
  }
}

/* ──────────────────────────────────────────
   PROJECT FILTERS
   ────────────────────────────────────────── */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        if (filter === 'all') {
          card.classList.remove('hidden');
          return;
        }
        const tags = card.dataset.tags || '';
        card.classList.toggle('hidden', !tags.includes(filter));
      });
    });
  });
}

/* ──────────────────────────────────────────
   PROJECT MODALS
   ────────────────────────────────────────── */
function initProjectModals() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeProjectModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeProjectModal();
    }
  });
}

window.openProject = function(projectId) {
  const project = PROJECTS[projectId];
  if (!project) return;

  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  // Image
  const imgHTML = `
    <div class="modal-project-img">
      <img
        src="${project.image}"
        alt="${project.title} screenshot"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
      />
      <div class="modal-project-img-placeholder" style="display:none;">
        <p>${project.image}</p>
      </div>
    </div>
  `;

  // Features
  const featuresHTML = project.features
    ? `<ul class="modal-feature-list">${project.features.map(f => `<li>${f}</li>`).join('')}</ul>`
    : '';

  // Coming soon (file organizer)
  const comingSoonHTML = project.comingSoon
    ? `<div class="modal-section">
        <span class="modal-section-label">Planned Features</span>
        <ul class="modal-feature-list">${project.comingSoon.map(f => `<li>${f} <em style="color: var(--color-text-faint); font-size: 0.75rem;">(not implemented yet)</em></li>`).join('')}</ul>
      </div>`
    : '';

  // Tech pills
  const techHTML = project.tech
    .map(t => `<span class="tech-pill">${t}</span>`)
    .join('');

  // Action buttons
  const githubBtn = project.github
    ? `<a href="${project.github}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub</a>`
    : `<button class="btn btn-outline placeholder-link" disabled aria-disabled="true">GitHub</button>`;

  const demoBtn = project.demo
    ? `<a href="${project.demo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>`
    : `<button class="btn btn-ghost placeholder-link" disabled aria-disabled="true">Live Demo</button>`;

  content.innerHTML = `
    ${imgHTML}
    <span class="modal-badge">${project.type}</span>
    <h2 class="modal-title" id="modalTitle">${project.title}</h2>

    <div class="modal-section">
      <span class="modal-section-label">Overview</span>
      <p>${project.overview}</p>
    </div>

    <div class="modal-section">
      <span class="modal-section-label">What I built</span>
      <p>${project.whatIBuilt}</p>
    </div>

    <div class="modal-section">
      <span class="modal-section-label">How it works</span>
      <p>${project.howItWorks}</p>
    </div>

    <div class="modal-section">
      <span class="modal-section-label">Technology Stack</span>
      <div class="modal-tech-stack">${techHTML}</div>
    </div>

    <div class="modal-section">
      <span class="modal-section-label">Key Features</span>
      ${featuresHTML}
    </div>

    ${comingSoonHTML}

    <div class="modal-actions">
      ${githubBtn}
      ${demoBtn}
    </div>
  `;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus the close button
  setTimeout(() => document.getElementById('modalClose').focus(), 50);
};

function closeProjectModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ──────────────────────────────────────────
   CERTIFICATE PREVIEW
   ────────────────────────────────────────── */
window.previewCert = function(path, title) {
  const overlay = document.getElementById('certModalOverlay');
  const content = document.getElementById('certModalContent');

  content.innerHTML = `
    <h2 class="modal-title" id="certModalTitle" style="font-size: var(--text-xl); margin-bottom: var(--space-4);">${title}</h2>
    <div class="cert-preview-placeholder">
      <p>📄 ${path}</p>
      <p style="margin-top: var(--space-3);">Certificate file not yet uploaded.</p>
    </div>
    <p style="font-size: var(--text-sm); color: var(--color-text-faint); margin-bottom: var(--space-6);">
      To view this certificate, add the file at: <code style="font-family: monospace; background: var(--color-surface-alt); padding: 2px 6px; border-radius: 3px;">${path}</code>
    </p>
    <div style="display: flex; gap: var(--space-3);">
      <a href="${path}" class="btn btn-primary btn-sm" download>Download</a>
      <button class="btn btn-outline btn-sm" onclick="closeCertModal()">Close</button>
    </div>
  `;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

function initCertPreview() {
  const overlay = document.getElementById('certModalOverlay');
  const closeBtn = document.getElementById('certModalClose');

  closeBtn.addEventListener('click', closeCertModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCertModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeCertModal();
    }
  });
}

window.closeCertModal = function() {
  const overlay = document.getElementById('certModalOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

/* ──────────────────────────────────────────
   RATING SYSTEM (localStorage)
   ────────────────────────────────────────── */
const RATING_KEY  = 'portfolio_ratings_v1';
const SUBMIT_KEY  = 'portfolio_rating_submitted_v1';
const MAX_RECENT  = 8;

function getRatings() {
  try {
    return JSON.parse(localStorage.getItem(RATING_KEY)) || [];
  } catch {
    return [];
  }
}

function saveRatings(ratings) {
  try {
    localStorage.setItem(RATING_KEY, JSON.stringify(ratings));
  } catch {
    // localStorage not available — silently fail
  }
}

function hasSubmitted() {
  return localStorage.getItem(SUBMIT_KEY) === '1';
}

function markSubmitted() {
  localStorage.setItem(SUBMIT_KEY, '1');
}

function initRatingSystem() {
  const form       = document.getElementById('ratingForm');
  const stars      = document.querySelectorAll('.star');
  const msg        = document.getElementById('ratingMsg');
  let selectedRating = 0;

  // Render current ratings
  renderRatingDisplay();

  // Star hover / click interactions
  stars.forEach((star, idx) => {
    star.addEventListener('mouseenter', () => highlightStars(idx + 1));
    star.addEventListener('mouseleave', () => highlightStars(selectedRating));
    star.addEventListener('click', () => {
      selectedRating = idx + 1;
      highlightStars(selectedRating);
    });
    star.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        selectedRating = idx + 1;
        highlightStars(selectedRating);
        e.preventDefault();
      }
    });
  });

  function highlightStars(count) {
    stars.forEach((s, i) => {
      s.classList.toggle('active', i < count);
    });
  }

  // Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (hasSubmitted()) {
      msg.textContent = 'You have already submitted a rating from this browser.';
      msg.style.color = 'var(--color-wood)';
      return;
    }

    const name = document.getElementById('raterName').value.trim();
    if (!name) {
      msg.textContent = 'Please enter your name.';
      msg.style.color = 'var(--color-wood)';
      return;
    }
    if (!selectedRating) {
      msg.textContent = 'Please select a star rating.';
      msg.style.color = 'var(--color-wood)';
      return;
    }

    const ratings = getRatings();
    ratings.push({ name, rating: selectedRating, ts: Date.now() });
    saveRatings(ratings);
    markSubmitted();

    msg.textContent = `Thanks, ${name}! Your rating has been saved.`;
    msg.style.color = 'var(--color-accent)';

    // Reset form
    document.getElementById('raterName').value = '';
    selectedRating = 0;
    highlightStars(0);

    // Update display
    renderRatingDisplay();
  });
}

function renderRatingDisplay() {
  const ratings    = getRatings();
  const avgEl      = document.getElementById('ratingAvg');
  const starsEl    = document.getElementById('ratingStarsDisplay');
  const countEl    = document.getElementById('ratingCount');
  const recentEl   = document.getElementById('recentRatings');

  if (!avgEl) return;

  if (ratings.length === 0) {
    avgEl.textContent    = '—';
    starsEl.textContent  = '☆☆☆☆☆';
    countEl.textContent  = 'No ratings yet';
    recentEl.innerHTML   = '';
    return;
  }

  const avg = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
  const rounded = Math.round(avg * 10) / 10;

  avgEl.textContent    = rounded.toFixed(1);
  starsEl.textContent  = starsFromRating(avg);
  countEl.textContent  = `Based on ${ratings.length} rating${ratings.length !== 1 ? 's' : ''}`;

  const recent = [...ratings].reverse().slice(0, MAX_RECENT);
  recentEl.innerHTML = recent.map(r => `
    <div class="recent-rating-item">
      <span class="recent-rating-name">${escapeHTML(r.name)}</span>
      <span class="recent-rating-stars">${starsFromRating(r.rating)}</span>
    </div>
  `).join('');
}

function starsFromRating(rating) {
  const full  = Math.round(rating);
  const empty = 5 - full;
  return '★'.repeat(full) + '☆'.repeat(empty);
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ──────────────────────────────────────────
   SCROLL TO TOP
   ────────────────────────────────────────── */
function injectScrollTopBtn() {
  const btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = '↑';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initScrollTop() { /* injected in injectScrollTopBtn */ }

/* ──────────────────────────────────────────
   EASTER EGGS
   ────────────────────────────────────────── */
function initEasterEggs() {
  initKonamiCode();
  initTerminal();
}

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
function initKonamiCode() {
  const KONAMI = [
    'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
    'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
    'b','a'
  ];
  let idx = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === KONAMI[idx]) {
      idx++;
      if (idx === KONAMI.length) {
        idx = 0;
        openTerminal('konami');
      }
    } else {
      idx = e.key === KONAMI[0] ? 1 : 0;
    }
  });
}

// Terminal Easter Egg
function initTerminal() {
  const overlay = document.getElementById('terminalOverlay');
  const closeBtn = document.getElementById('terminalClose');

  closeBtn.addEventListener('click', closeTerminal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeTerminal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeTerminal();
    }
    // Secret: press ` (backtick) three times quickly
    if (e.key === '`') {
      backtickCount++;
      clearTimeout(backtickTimer);
      backtickTimer = setTimeout(() => { backtickCount = 0; }, 800);
      if (backtickCount >= 3) {
        backtickCount = 0;
        openTerminal('backtick');
      }
    }
  });
}

let backtickCount = 0;
let backtickTimer;

function openTerminal(trigger) {
  const overlay = document.getElementById('terminalOverlay');
  const textEl  = document.getElementById('terminalText');
  const output  = document.getElementById('terminalOutput');

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const messages = trigger === 'konami'
    ? konamiMessages()
    : backtickMessages();

  textEl.textContent = '';
  output.innerHTML   = '';

  let charIdx = 0;
  const cmd = messages.command;
  const typeInterval = setInterval(() => {
    textEl.textContent += cmd[charIdx++];
    if (charIdx >= cmd.length) {
      clearInterval(typeInterval);
      // Show output after a short delay
      setTimeout(() => {
        messages.lines.forEach((line, i) => {
          setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'terminal-line-out' + (line.style ? ` ${line.style}` : '');
            div.textContent = line.text;
            output.appendChild(div);
          }, i * 120);
        });
      }, 300);
    }
  }, 40);
}

function closeTerminal() {
  const overlay = document.getElementById('terminalOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function konamiMessages() {
  return {
    command: 'cat secret.txt',
    lines: [
      { text: '----------------------------', style: 'muted' },
      { text: '↑ ↑ ↓ ↓ ← → ← → B A', style: 'green' },
      { text: '----------------------------', style: 'muted' },
      { text: '' },
      { text: 'You found the Konami Code. 🎮', style: 'green' },
      { text: '' },
      { text: 'Fun fact: Konami Code was created in 1986', style: '' },
      { text: 'by Kazuhisa Hashimoto to test Gradius.', style: '' },
      { text: '' },
      { text: 'Also works in a surprising number of', style: '' },
      { text: 'websites. Now you know one more. 🙂', style: '' },
      { text: '' },
      { text: '[ Press ESC to close ]', style: 'muted' },
    ]
  };
}

function backtickMessages() {
  return {
    command: 'whoami --verbose',
    lines: [
      { text: 'Wibhor Kumar Roy', style: 'green' },
      { text: 'Software Developer | CS Student | LPU', style: '' },
      { text: '' },
      { text: 'Stack: MERN · Python · AI/ML', style: '' },
      { text: 'Currently: 2nd year, 3rd semester', style: '' },
      { text: '' },
      { text: '"I build things to understand how they work."', style: 'green' },
      { text: '' },
      { text: 'Contact: wibhorr@gmail.com', style: '' },
      { text: 'GitHub:  github.com/iwilltell', style: '' },
      { text: '' },
      { text: 'Tip: try the Konami Code ↑↑↓↓←→←→BA 👾', style: 'muted' },
      { text: '' },
      { text: '[ Press ESC to close ]', style: 'muted' },
    ]
  };
}

/* ──────────────────────────────────────────
   CONSOLE GREETING
   ────────────────────────────────────────── */
function printConsoleGreeting() {
  const styles = {
    big:   'font-size: 1.4rem; font-weight: bold; color: #5C7A54; font-family: monospace;',
    sub:   'font-size: 0.9rem; color: #74736D; font-family: monospace;',
    link:  'font-size: 0.9rem; color: #8A755F; font-family: monospace;',
    muted: 'font-size: 0.8rem; color: #A09E98; font-family: monospace;',
  };

  console.log(
    '%c👋 Hey developer.',
    styles.big
  );
  console.log(
    '%cYou found the console. Classic developer move.',
    styles.sub
  );
  console.log(
    '%c---',
    styles.muted
  );
  console.log(
    '%cI\'m Wibhor. I build things to understand how they work.',
    styles.sub
  );
  console.log(
    '%cThis portfolio is built with plain HTML, CSS, and JS. No framework bloat. 😊',
    styles.sub
  );
  console.log(
    '%c---',
    styles.muted
  );
  console.log(
    '%cTip: press ` (backtick) three times for a secret.',
    styles.muted
  );
  console.log(
    '%cOr try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A',
    styles.muted
  );
  console.log(
    '%c---',
    styles.muted
  );
  console.log(
    '%c📧 wibhorr@gmail.com  |  🐙 github.com/iwilltell',
    styles.link
  );
}
