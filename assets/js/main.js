document.addEventListener('DOMContentLoaded', () => {
  const config = window.portfolioConfig;
  if (!config) {
    console.error("Configuration file (config.js) not found or not loaded.");
    return;
  }

  // --- 1. Top Navigation & Hero ---
  document.querySelectorAll('.nav-logo span.name').forEach(el => el.textContent = config.personal.name.toLowerCase());
  
  const badgeEl = document.querySelector('.nav-badge');
  if (badgeEl) {
    if (config.personal.isOpenToWork) {
      badgeEl.textContent = "Open to work";
      badgeEl.style.display = 'inline-block';
    } else {
      badgeEl.style.display = 'none';
    }
  }

  document.querySelectorAll('.hero h1 .name').forEach(el => el.textContent = config.personal.name);
  document.querySelectorAll('.hero h1 .role').forEach(el => el.innerHTML = config.personal.roleAccent + '&nbsp;');
  document.querySelectorAll('.hero h1 .accent').forEach(el => el.textContent = config.personal.roleHighlight);
  
  document.querySelectorAll('.hero-desc').forEach(el => el.innerHTML = config.personal.description);

  // Stats
  document.querySelectorAll('.hstat-num.years').forEach(el => el.innerHTML = config.personal.yearsScripting.replace('+', '<span>+</span>'));
  document.querySelectorAll('.hstat-num.projects').forEach(el => el.innerHTML = config.personal.projectsBuilt.replace('+', '<span>+</span>'));
  document.querySelectorAll('.hstat-num.bugs').forEach(el => el.textContent = config.personal.bugsFixed);

  // Global links replacement
  document.querySelectorAll('a.github-link').forEach(a => a.href = config.personal.githubLink);
  document.querySelectorAll('a.roblox-link').forEach(a => a.href = config.personal.robloxLink);
  document.querySelectorAll('span.github-handle').forEach(span => span.textContent = config.personal.githubUsername);
  
  // --- 2. Skills Section ---
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer && config.skills) {
    config.skills.forEach(skill => {
      const cell = document.createElement('div');
      cell.className = 'skill-cell';
      cell.innerHTML = `
        <div class="skill-icon">${skill.icon}</div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-desc">${skill.description}</div>
        <div class="skill-bar"><div class="skill-bar-fill" data-width="${skill.mastery}"></div></div>
      `;
      skillsContainer.appendChild(cell);
    });
  }

  // --- 3. Projects Section ---
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer && config.projects) {
    config.projects.forEach((proj, index) => {
      const numStr = String(index + 1).padStart(2, '0');
      
      let tagsHTML = '';
      if(proj.tags) {
         tagsHTML = proj.tags.map(tag => `<span class="tag ${tag.class}">${tag.name}</span>`).join('');
      }

      const row = document.createElement('a');
      row.href = proj.link;
      row.target = '_blank';
      row.className = 'project-row';
      row.innerHTML = `
        <span class="project-num">${numStr}</span>
        <div>
          <div class="project-tags">${tagsHTML}</div>
          <div class="project-title">${proj.title}</div>
          <div class="project-desc">${proj.description}</div>
        </div>
        <span class="project-arrow">→</span>
      `;
      projectsContainer.appendChild(row);
    });
  }

  // --- 4. About Section ---
  document.querySelectorAll('h2.about-title').forEach(el => el.textContent = `Who is ${config.personal.name}?`);
  
  const aboutTextContainer = document.getElementById('about-text-container');
  if (aboutTextContainer && config.aboutParagraphs) {
    // Clear existing paragraphs inside container (except code block)
    const existingParagraphs = aboutTextContainer.querySelectorAll('p');
    existingParagraphs.forEach(p => p.remove());

    const codeBlock = aboutTextContainer.querySelector('.code-block');
    if (codeBlock) { codeBlock.innerHTML = config.aboutCodeBlock; }

    config.aboutParagraphs.forEach(para => {
      const p = document.createElement('p');
      p.textContent = para;
      if (codeBlock) {
          aboutTextContainer.insertBefore(p, codeBlock);
      } else {
          aboutTextContainer.appendChild(p);
      }
    });
  }

  // About quick info card
  document.querySelectorAll('.info-val-handle').forEach(el => el.textContent = config.personal.name);
  document.querySelectorAll('.info-val-stack').forEach(el => el.textContent = config.personal.stack);
  document.querySelectorAll('.info-val-specialty').forEach(el => el.textContent = config.personal.specialty);
  
  const statusVal = document.querySelector('.info-val-status');
  if (statusVal) {
      statusVal.innerHTML = `<span class="status-dot"></span>${config.personal.statusText}`;
      if (!config.personal.isOpenToWork) {
          const dot = statusVal.querySelector('.status-dot');
          if (dot) {
              dot.style.background = 'var(--muted)';
              dot.style.animation = 'none';
          }
      }
  }


  // --- 5. Observers & Interactions ---
  // Reveal animation
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(el => { 
        if (el.isIntersecting) el.target.classList.add('visible'); 
    });
  }, { threshold: 0.08 });
  
  document.querySelectorAll('.reveal').forEach(s => revealObserver.observe(s));

  // Skill bar animation
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.skills-grid').forEach(g => barObserver.observe(g));
});

// Exposed globally for the inline form onsubmit
window.handleSubmit = function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const originalText = btn.textContent;
  
  btn.textContent = 'Sent ✓';
  btn.style.background = 'var(--green)';
  btn.style.color = 'var(--bg)';
  
  setTimeout(() => { 
    btn.textContent = originalText; 
    btn.style.background = ''; 
    btn.style.color = '';
    e.target.reset(); 
  }, 3000);
};
