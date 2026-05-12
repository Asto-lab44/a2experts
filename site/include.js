// Shared header + footer injection for A2EXPERTS site pages
(function(){
  const cur = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const link = (href, label, key) => `<li><a href="${href}"${cur===href.toLowerCase()?' class="active"':''}>${label}</a></li>`;

  const header = `
  <div class="topbar"><div class="container">
    <div class="left"><span><span class="dot"></span>Hotline · 8h30–12h30 · 14h–18h</span><span>Basse-Goulaine · Couëron</span></div>
    <div class="right"><a href="#">Assistance à distance</a><a class="phone" href="tel:0240564965">02 40 56 49 65</a></div>
  </div></div>
  <header class="site"><div class="container">
    <a class="logo" href="index.html"><svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true"><rect x="2" y="2" width="60" height="60" rx="10" fill="#0B1B2B"/><path d="M16 50 L29 14 H35 L48 50 H40 L37.5 42 H26.5 L24 50 Z M28.5 35 H35.5 L32 23.5 Z" fill="#fff"/><circle cx="55" cy="53" r="6" fill="#00C2A8"/></svg><span class="two">2 </span><span class="tail">Experts</span></a>
    <nav class="main" id="mainNav"><ul>
      ${link('index.html','Accueil')}
      ${link('depannage-informatique-nantes.html','Dépannage')}
      ${link('infogerance.html','Infogérance')}
      ${link('cybersecurite-sauvegarde.html','Cybersécurité')}
      ${link('agences.html','Agences')}
      ${link('equipe.html','Équipe')}
      ${link('contact.html','Contact')}
    </ul></nav>
    <div class="cta">
      <a class="btn btn-ghost" href="tel:0240564965">02 40 56 49 65</a>
      <a class="btn btn-primary" href="contact.html">Devis gratuit</a>
      <button class="burger" aria-label="Menu" onclick="document.getElementById('mainNav').classList.toggle('open')"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B1B2B" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
    </div>
  </div></header>`;

  const footer = `
  <section style="padding:32px 0 64px"><div class="container">
    <div class="cta-band">
      <div style="position:relative">
        <div class="section-eyebrow" style="color:#00C2A8">Intervention sous 1h</div>
        <h2>Une panne bloque votre activité ? On intervient aujourd'hui.</h2>
        <p style="font-size:17px;max-width:540px;color:rgba(255,255,255,.75)">Nantes, Basse-Goulaine, Couëron, Saint-Herblain, Rezé, Vertou et toute la Loire-Atlantique.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;position:relative">
        <a class="btn btn-lg btn-primary" href="tel:0240564965" style="justify-content:center">📞 02 40 56 49 65</a>
        <a class="btn btn-lg btn-ghost" href="contact.html" style="justify-content:center;background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.2);color:#fff">Devis gratuit</a>
      </div>
    </div>
  </div></section>
  <footer class="site"><div class="container">
    <div class="col">
      <div class="logo" style="color:#fff;margin-bottom:16px"><svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true"><rect x="2" y="2" width="60" height="60" rx="10" fill="#fff"/><path d="M16 50 L29 14 H35 L48 50 H40 L37.5 42 H26.5 L24 50 Z M28.5 35 H35.5 L32 23.5 Z" fill="#0B1B2B"/><circle cx="55" cy="53" r="6" fill="#00C2A8"/></svg><span style="color:#fff">2 </span><span style="color:#00C2A8">Experts</span></div>
      <p style="font-size:14px;line-height:1.6;max-width:300px">Dépannage informatique et infogérance pour les PME de Nantes et Loire-Atlantique.</p>
    </div>
    <div class="col"><h4>Services</h4><ul><li><a href="depannage-informatique-nantes.html">Dépannage informatique</a></li><li><a href="infogerance.html">Infogérance PME</a></li><li><a href="cybersecurite-sauvegarde.html">Cybersécurité</a></li><li><a href="microsoft-365-nantes.html">Microsoft 365</a></li><li><a href="google-workspace-nantes.html">Google Workspace</a></li><li><a href="telephonie-3cx-nantes.html">Téléphonie 3CX</a></li></ul></div>
    <div class="col"><h4>Agences</h4><ul><li><a href="agences.html#basse-goulaine">Basse-Goulaine</a></li><li><a href="agences.html#coueron">Couëron</a></li><li><a href="equipe.html">L'équipe</a></li><li><a href="contact.html">Nous contacter</a></li></ul></div>
    <div class="col"><h4>Contact</h4><ul><li><a href="tel:0240564965">02 40 56 49 65</a></li><li><a href="mailto:contact@a2experts.fr">contact@a2experts.fr</a></li><li>Lun–Ven · 8h30–12h30 et 14h–18h</li></ul></div>
    <div class="legal" style="grid-column:1/-1"><div>© 2026 A2EXPERTS SAS · RCS Nantes 538 142 067</div><div><a href="mentions-legales.html">Mentions légales</a> · <a href="cgv.html">CGV</a> · <a href="politique-confidentialite.html">Confidentialité</a></div></div>
  </div></footer>`;

  document.addEventListener('DOMContentLoaded', () => {
    const h = document.querySelector('[data-include="header"]');
    if (h) h.outerHTML = header;
    const f = document.querySelector('[data-include="footer"]');
    if (f) f.outerHTML = footer;
  });
})();
