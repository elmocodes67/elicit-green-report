document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('is-preload');
  const sidebar = document.getElementById('sidebar');
  const menu = document.getElementById('menu');
  if (!sidebar || !menu) return;
  menu.querySelectorAll('.opener').forEach(opener => {
    opener.setAttribute('role', 'button'); opener.setAttribute('tabindex', '0');
    opener.setAttribute('aria-expanded', 'false');
    const toggle = () => { const active = opener.classList.toggle('active'); opener.setAttribute('aria-expanded', String(active)); };
    opener.addEventListener('click', toggle);
    opener.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });
  const toggle = document.createElement('button');
  toggle.type = 'button'; toggle.className = 'report-menu-toggle';
  toggle.setAttribute('aria-label', 'Show or hide contents menu'); toggle.textContent = '☰ Menu';
  toggle.addEventListener('click', () => sidebar.classList.toggle('inactive'));
  document.body.appendChild(toggle);
  if (window.innerWidth <= 1280) sidebar.classList.add('inactive');
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { if (window.innerWidth <= 1280) sidebar.classList.add('inactive'); }));
});
