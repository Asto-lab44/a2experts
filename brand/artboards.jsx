// A2EXPERTS — Artboard components for the identity canvas

// ───────────────────────────────────────────────────────── COVER
function CoverArtboard() {
  return (
    <div style={{
      width:'100%',height:'100%',background:A2.ink,color:'#fff',
      position:'relative',overflow:'hidden',
      fontFamily:"'Manrope', system-ui, sans-serif",
    }}>
      {/* big monogram bg */}
      <div style={{position:'absolute',inset:0,opacity:.06,display:'grid',placeItems:'center'}}>
        <div style={{fontWeight:800,fontSize:900,lineHeight:1,letterSpacing:'-0.05em'}}>A²</div>
      </div>
      {/* corner grid */}
      <svg width="100%" height="100%" style={{position:'absolute',inset:0,opacity:.05}}>
        <defs>
          <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="#fff" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
      </svg>

      <div style={{position:'relative',padding:'64px 72px',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:14,fontSize:13,letterSpacing:'.2em',textTransform:'uppercase',opacity:.7}}>
          <span style={{width:6,height:6,borderRadius:'50%',background:A2.accent2}}/>
          Brand identity · 2026
        </div>

        <div>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:14,opacity:.6,letterSpacing:'.1em',marginBottom:24}}>
            A2EXPERTS / IDENTITÉ_v01.guide
          </div>
          <h1 style={{fontSize:120,lineHeight:.92,fontWeight:800,letterSpacing:'-0.035em',margin:0,textWrap:'balance'}}>
            Experts<br/>
            <span style={{color:A2.accent2}}>puissance deux.</span>
          </h1>
          <p style={{fontSize:22,opacity:.75,maxWidth:620,marginTop:28,lineHeight:1.4}}>
            Système d'identité visuelle pour l'agence de dépannage
            informatique A2EXPERTS, basée à Nantes.
          </p>
        </div>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',fontSize:13,opacity:.6,fontFamily:"'JetBrains Mono', monospace"}}>
          <div>01 — Couverture</div>
          <div>www.a2experts.fr</div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────── LOGO SYSTEM
function LogoSystem() {
  const cell = (label, bg, fg, accent, content) => (
    <div style={{
      background:bg,color:fg,borderRadius:12,padding:'40px 28px',
      display:'flex',flexDirection:'column',justifyContent:'space-between',
      border:`1px solid ${bg === '#FFFFFF' ? A2.line : 'transparent'}`,
      minHeight:220,
    }}>
      <div style={{display:'grid',placeItems:'center',flex:1}}>{content}</div>
      <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',opacity:.6,marginTop:18}}>
        {label}
      </div>
    </div>
  );

  return (
    <div style={{width:'100%',height:'100%',background:A2.paper,padding:48,fontFamily:"'Manrope', sans-serif",overflow:'auto'}}>
      <Header eyebrow="02" title="Système de logo" sub="Lockup principal, monogramme et déclinaisons réservées."/>

      <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr',gap:16,marginTop:32}}>
        {cell('Lockup principal — sur fond clair', A2.white, A2.ink, A2.accent2,
          <Wordmark size={44} tagline />)}
        {cell('Monogramme', A2.white, A2.ink, A2.accent2,
          <LogoMark size={120}/>)}
        {cell('Initiale (favicon, app icon)', A2.accent, A2.white, A2.white,
          <div style={{fontFamily:"'Manrope', sans-serif",fontWeight:800,fontSize:120,letterSpacing:'-0.03em',lineHeight:1}}>A²</div>)}
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr',gap:16,marginTop:16}}>
        {cell('Lockup blanc — sur fond foncé', A2.ink, '#fff', A2.accent2,
          <Wordmark size={44} color="#fff" accent={A2.accent2} tagline/>)}
        {cell('Monogramme inversé', A2.ink, '#fff', A2.accent2,
          <LogoMark size={120} color="#fff"/>)}
        {cell('Initiale teal', A2.accent2, A2.ink, A2.ink,
          <div style={{fontWeight:800,fontSize:120,letterSpacing:'-0.03em',lineHeight:1}}>A²</div>)}
      </div>

      {/* Construction */}
      <div style={{marginTop:32,background:'#fff',border:`1px solid ${A2.line}`,borderRadius:12,padding:28}}>
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:A2.muted,marginBottom:16}}>
          Construction & zone de protection
        </div>
        <div style={{display:'flex',alignItems:'center',gap:48}}>
          <div style={{position:'relative',padding:32,background:`repeating-linear-gradient(45deg, #f0f4f9 0 6px, transparent 6px 12px)`,borderRadius:8}}>
            <div style={{background:'#fff',padding:24,border:`1px dashed ${A2.muted}`,borderRadius:4}}>
              <Wordmark size={36}/>
            </div>
          </div>
          <div style={{flex:1,fontSize:14,color:A2.muted,lineHeight:1.6}}>
            <div><b style={{color:A2.ink}}>Zone de respect :</b> hauteur du « A » sur les 4 côtés.</div>
            <div style={{marginTop:8}}><b style={{color:A2.ink}}>Taille minimale :</b> 24 px / 8 mm en hauteur de monogramme.</div>
            <div style={{marginTop:8}}><b style={{color:A2.ink}}>Ne jamais :</b> déformer, ré-incliner, dégrader, recolorer hors palette.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────── COLORS
function ColorPalette() {
  const Swatch = ({ name, hex, code, fg='#fff', bigger }) => (
    <div style={{
      background:hex,color:fg,borderRadius:12,padding:24,
      gridColumn: bigger ? 'span 2' : 'span 1',
      minHeight: bigger ? 280 : 180,
      display:'flex',flexDirection:'column',justifyContent:'space-between',
      border: hex === '#FFFFFF' || hex === A2.paper ? `1px solid ${A2.line}` : 'none',
    }}>
      <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,opacity:.7,letterSpacing:'.1em',textTransform:'uppercase'}}>{code}</div>
      <div>
        <div style={{fontWeight:800,fontSize: bigger?28:20,letterSpacing:'-0.02em'}}>{name}</div>
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:13,opacity:.75,marginTop:4}}>{hex}</div>
      </div>
    </div>
  );

  return (
    <div style={{width:'100%',height:'100%',background:A2.paper,padding:48,fontFamily:"'Manrope', sans-serif",overflow:'auto'}}>
      <Header eyebrow="03" title="Palette" sub="Bleu électrique en signal d'action. Navy pour l'ancrage B2B. Teal pour la singularité."/>

      <div style={{display:'grid',gridTemplateColumns:'repeat(4, 1fr)',gap:14,marginTop:32}}>
        <Swatch name="Bleu électrique" hex={A2.accent} code="PRIMARY · A2-BLUE-500" bigger/>
        <Swatch name="Navy ink"        hex={A2.ink}    code="INK · A2-NAVY-900"/>
        <Swatch name="Navy 700"        hex={A2.ink2}   code="INK · A2-NAVY-700"/>
        <Swatch name="Teal"            hex={A2.accent2} code="ACCENT · A2-TEAL-500" fg={A2.ink}/>
        <Swatch name="Orange urgence"  hex={A2.warning} code="SIGNAL · A2-AMBER-500"/>
        <Swatch name="Paper"           hex={A2.paper}   code="NEUTRAL · A2-GRAY-50" fg={A2.ink}/>
        <Swatch name="Line"            hex={A2.line}    code="NEUTRAL · A2-GRAY-200" fg={A2.ink}/>
      </div>

      <div style={{marginTop:24,background:'#fff',border:`1px solid ${A2.line}`,borderRadius:12,padding:24,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:32,fontSize:13,color:A2.muted}}>
        <div>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:8}}>Usage 60-30-10</div>
          <div style={{lineHeight:1.6}}><b style={{color:A2.ink}}>60%</b> Paper / Navy ink<br/><b style={{color:A2.ink}}>30%</b> Bleu électrique<br/><b style={{color:A2.ink}}>10%</b> Teal & orange signaux</div>
        </div>
        <div>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:8}}>Accessibilité</div>
          <div style={{lineHeight:1.6}}>Bleu/Navy sur Paper : <b style={{color:A2.ink}}>AAA</b><br/>Teal sur Navy : <b style={{color:A2.ink}}>AA</b><br/>Orange : signaux uniquement</div>
        </div>
        <div>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:8}}>Impression</div>
          <div style={{lineHeight:1.6}}>Bleu : Pantone 2728 C<br/>Navy : Pantone 539 C<br/>Teal : Pantone 3262 C</div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────── TYPOGRAPHY
function Typography() {
  return (
    <div style={{width:'100%',height:'100%',background:A2.paper,padding:48,fontFamily:"'Manrope', sans-serif",overflow:'auto'}}>
      <Header eyebrow="04" title="Typographie" sub="Manrope (UI & marketing). JetBrains Mono (codes, métadonnées, accents techniques)."/>

      <div style={{marginTop:32,background:'#fff',border:`1px solid ${A2.line}`,borderRadius:12,padding:40}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:12}}>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:A2.muted}}>Display — Manrope ExtraBold 800</div>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,color:A2.muted}}>96/100 · -2%</div>
        </div>
        <div style={{fontWeight:800,fontSize:96,lineHeight:1,letterSpacing:'-0.03em',color:A2.ink}}>
          Dépannage informatique<br/>
          <span style={{color:A2.accent}}>sans interruption.</span>
        </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:16}}>
        <TypeRow label="H2 — Bold 700" meta="48/56 · -1.5%" sample="L'équipe locale en qui vos PME peuvent compter."
                 style={{fontWeight:700,fontSize:48,lineHeight:1.1,letterSpacing:'-0.015em'}}/>
        <TypeRow label="H3 — SemiBold 600" meta="32/40 · -1%" sample="Hotline experts certifiés Microsoft."
                 style={{fontWeight:600,fontSize:32,lineHeight:1.2,letterSpacing:'-0.01em'}}/>
        <TypeRow label="Body L — Regular 400" meta="18/28 · 0%" sample="Intervention sous 1h sur Nantes, Saint-Nazaire et Ancenis pour panne serveur, poste de travail, réseau, sauvegarde, messagerie."
                 style={{fontWeight:400,fontSize:18,lineHeight:1.55,color:A2.muted}}/>
        <TypeRow label="Mono — JetBrains 500" meta="13/18 · 8% caps" sample="A2EXPERTS · TICKET#2026-0142 · NTE-AGENCY"
                 style={{fontFamily:"'JetBrains Mono', monospace",fontWeight:500,fontSize:13,letterSpacing:'.08em',textTransform:'uppercase',color:A2.ink2}}/>
      </div>

      <div style={{marginTop:16,background:A2.ink,color:'#fff',borderRadius:12,padding:32,display:'flex',gap:48,alignItems:'center'}}>
        <div style={{fontWeight:800,fontSize:180,lineHeight:1,letterSpacing:'-0.04em'}}>Aa</div>
        <div style={{flex:1,fontSize:14,opacity:.85,lineHeight:1.7}}>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',opacity:.6,marginBottom:12}}>Manrope · Variable</div>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
          abcdefghijklmnopqrstuvwxyz<br/>
          0123456789 · €$&@#%(){'{}'}[]
        </div>
      </div>
    </div>
  );
}

function TypeRow({label, meta, sample, style}) {
  return (
    <div style={{background:'#fff',border:`1px solid ${A2.line}`,borderRadius:12,padding:28}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:10,fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:A2.muted}}>
        <span>{label}</span><span>{meta}</span>
      </div>
      <div style={{color:A2.ink, ...style}}>{sample}</div>
    </div>
  );
}

// ───────────────────────────────────────────────────────── BUSINESS CARDS
function BusinessCards() {
  // 85 × 55 mm @ ~5.25 px/mm = 446 × 289
  const W = 446, H = 289;
  return (
    <div style={{width:'100%',height:'100%',background:'#E9EBEE',padding:48,fontFamily:"'Manrope',sans-serif",display:'grid',placeItems:'center'}}>
      <div style={{display:'grid',gridTemplateColumns:`${W}px ${W}px`,gap:32,alignItems:'center'}}>

        {/* RECTO */}
        <div style={{width:W,height:H,background:'#fff',borderRadius:6,boxShadow:'0 30px 60px -25px rgba(11,27,43,.4), 0 1px 0 rgba(0,0,0,.04)',padding:'28px 30px',display:'flex',flexDirection:'column',justifyContent:'space-between',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-30,right:-30,width:140,height:140,borderRadius:'50%',background:A2.accent,opacity:.08}}/>
          <Wordmark size={18}/>
          <div>
            <div style={{fontWeight:800,fontSize:22,color:A2.ink,letterSpacing:'-0.01em',lineHeight:1.1}}>Julien Mercier</div>
            <div style={{fontSize:13,color:A2.accent,fontWeight:600,marginTop:3}}>Technicien systèmes & réseau</div>
            <div style={{height:1,background:A2.line,margin:'14px 0 12px',width:48}}/>
            <div style={{display:'grid',gridTemplateColumns:'auto auto',gap:'4px 16px',fontSize:11,color:A2.muted,fontFamily:"'JetBrains Mono', monospace",letterSpacing:'.04em'}}>
              <span>M</span><span>+33 6 84 22 51 03</span>
              <span>E</span><span>j.mercier@a2experts.fr</span>
              <span>T</span><span>02 85 52 13 95</span>
            </div>
          </div>
        </div>

        {/* VERSO */}
        <div style={{width:W,height:H,background:A2.ink,color:'#fff',borderRadius:6,boxShadow:'0 30px 60px -25px rgba(11,27,43,.5)',padding:'28px 30px',display:'flex',flexDirection:'column',justifyContent:'space-between',position:'relative',overflow:'hidden'}}>
          <svg width="100%" height="100%" style={{position:'absolute',inset:0,opacity:.08}}>
            <defs><pattern id="bcg" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#bcg)"/>
          </svg>

          <div style={{position:'relative',display:'flex',justifyContent:'space-between',alignItems:'start'}}>
            <div>
              <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'.18em',textTransform:'uppercase',opacity:.6}}>Dépannage IT — depuis 2010</div>
              <div style={{fontWeight:800,fontSize:36,lineHeight:1.05,letterSpacing:'-0.02em',marginTop:14,maxWidth:'90%'}}>
                Une panne ?<br/>
                <span style={{color:A2.accent2}}>On intervient.</span>
              </div>
            </div>
            <LogoMark size={42} color="#fff"/>
          </div>

          <div style={{position:'relative',display:'flex',justifyContent:'space-between',alignItems:'end',fontSize:11,opacity:.8,fontFamily:"'JetBrains Mono', monospace",letterSpacing:'.04em'}}>
            <div>9 rue du Petit Châtelier<br/>44300 Nantes</div>
            <div style={{textAlign:'right'}}>a2experts.fr</div>
          </div>
        </div>

        {/* labels */}
        <div style={{textAlign:'center',fontFamily:"'JetBrains Mono', monospace",fontSize:11,color:A2.muted,letterSpacing:'.1em',textTransform:'uppercase'}}>Recto · 85×55 mm</div>
        <div style={{textAlign:'center',fontFamily:"'JetBrains Mono', monospace",fontSize:11,color:A2.muted,letterSpacing:'.1em',textTransform:'uppercase'}}>Verso · 85×55 mm</div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────── LETTERHEAD A4
function Letterhead() {
  // A4 portrait 1240 × 1754 @ 150dpi, scaled smaller
  return (
    <div style={{width:'100%',height:'100%',background:'#E9EBEE',padding:48,display:'grid',placeItems:'center',fontFamily:"'Manrope', sans-serif"}}>
      <div style={{width:520,aspectRatio:'1/1.414',background:'#fff',boxShadow:'0 30px 60px -25px rgba(11,27,43,.35)',padding:'44px 52px',display:'flex',flexDirection:'column',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:6,background:`linear-gradient(90deg, ${A2.accent} 0%, ${A2.accent} 60%, ${A2.accent2} 60%, ${A2.accent2} 100%)`}}/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',marginTop:14}}>
          <Wordmark size={20} tagline/>
          <div style={{textAlign:'right',fontSize:9.5,fontFamily:"'JetBrains Mono', monospace",color:A2.muted,letterSpacing:'.05em',lineHeight:1.5}}>
            A2EXPERTS SAS<br/>9 rue du Petit Châtelier<br/>44300 Nantes<br/>02 85 52 13 95
          </div>
        </div>

        <div style={{marginTop:48,fontSize:9.5,lineHeight:1.7,color:A2.ink}}>
          <div style={{textAlign:'right',color:A2.muted}}>Nantes, le 12 mai 2026</div>
          <div style={{marginTop:24}}>
            <b>Objet :</b> Devis — maintenance informatique<br/>
            <b>Réf :</b> A2X-2026-0142
          </div>
          <div style={{marginTop:20,color:A2.muted}}>Madame, Monsieur,</div>
          <div style={{marginTop:14,color:A2.muted,height:18,background:'linear-gradient(90deg, #eee 0%, #eee 95%, transparent)',borderRadius:2,opacity:.5}}/>
          <div style={{marginTop:8,height:8,background:'#eee',borderRadius:2,opacity:.5,width:'94%'}}/>
          <div style={{marginTop:6,height:8,background:'#eee',borderRadius:2,opacity:.5,width:'98%'}}/>
          <div style={{marginTop:6,height:8,background:'#eee',borderRadius:2,opacity:.5,width:'76%'}}/>
          <div style={{marginTop:18,height:8,background:'#eee',borderRadius:2,opacity:.5,width:'92%'}}/>
          <div style={{marginTop:6,height:8,background:'#eee',borderRadius:2,opacity:.5,width:'88%'}}/>
        </div>

        <div style={{marginTop:'auto',display:'flex',justifyContent:'space-between',alignItems:'end',fontSize:8.5,fontFamily:"'JetBrains Mono', monospace",color:A2.muted,letterSpacing:'.05em',borderTop:`1px solid ${A2.line}`,paddingTop:14}}>
          <div>A2EXPERTS SAS · RCS Nantes 538 142 067<br/>SIRET 538 142 067 00018 · TVA FR 50 538142067</div>
          <div style={{textAlign:'right'}}>a2experts.fr<br/>contact@a2experts.fr</div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────── EMAIL SIGNATURE
function EmailSignature() {
  return (
    <div style={{width:'100%',height:'100%',background:A2.paper,padding:48,fontFamily:"'Manrope', sans-serif",display:'flex',flexDirection:'column',gap:24}}>
      <Header eyebrow="07" title="Signature email" sub="HTML-ready, lecture multi-clients (Gmail, Outlook, Apple Mail)."/>

      <div style={{background:'#fff',border:`1px solid ${A2.line}`,borderRadius:12,padding:32,marginTop:8}}>
        {/* Email mock chrome */}
        <div style={{display:'flex',alignItems:'center',gap:10,paddingBottom:14,borderBottom:`1px solid ${A2.line}`,fontSize:12,color:A2.muted}}>
          <div style={{width:8,height:8,borderRadius:'50%',background:'#FF5F57'}}/>
          <div style={{width:8,height:8,borderRadius:'50%',background:'#FEBC2E'}}/>
          <div style={{width:8,height:8,borderRadius:'50%',background:'#28C840'}}/>
          <span style={{marginLeft:8}}>Re : Devis maintenance — A2X-2026-0142</span>
        </div>

        <div style={{padding:'24px 4px 8px',color:A2.muted,fontSize:14,lineHeight:1.6}}>
          Bonjour,<br/><br/>
          Suite à notre échange, je vous transmets le devis ci-joint. Je reste disponible pour en discuter.<br/><br/>
          Bien cordialement,
        </div>

        {/* ─── signature block ─── */}
        <table cellPadding="0" cellSpacing="0" style={{borderCollapse:'collapse',marginTop:14,fontFamily:"'Manrope', Arial, sans-serif"}}>
          <tbody>
            <tr>
              <td style={{paddingRight:18,verticalAlign:'top',borderRight:`2px solid ${A2.accent}`}}>
                <div style={{width:64,height:64,borderRadius:8,background:A2.ink,display:'grid',placeItems:'center'}}>
                  <LogoMark size={42} color="#fff"/>
                </div>
              </td>
              <td style={{paddingLeft:18,verticalAlign:'top',fontSize:13,color:A2.ink,lineHeight:1.55}}>
                <div style={{fontWeight:700,fontSize:15,color:A2.ink}}>Julien Mercier</div>
                <div style={{color:A2.accent,fontWeight:600,fontSize:12,marginBottom:8}}>Technicien systèmes & réseau · A2EXPERTS</div>
                <div style={{color:A2.muted,fontSize:12}}>
                  <b style={{color:A2.ink}}>M</b> +33 6 84 22 51 03 &nbsp;·&nbsp;
                  <b style={{color:A2.ink}}>T</b> 02 85 52 13 95<br/>
                  <b style={{color:A2.ink}}>E</b> j.mercier@a2experts.fr<br/>
                  9 rue du Petit Châtelier, 44300 Nantes &nbsp;·&nbsp; <span style={{color:A2.accent,fontWeight:600}}>a2experts.fr</span>
                </div>
                <div style={{marginTop:10,paddingTop:8,borderTop:`1px solid ${A2.line}`,fontSize:10.5,color:A2.muted,fontFamily:"'JetBrains Mono', monospace",letterSpacing:'.05em',textTransform:'uppercase'}}>
                  Hotline 8h30–18h · Intervention &lt; 1h
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────── SOCIAL
function SocialKit() {
  return (
    <div style={{width:'100%',height:'100%',background:A2.paper,padding:48,fontFamily:"'Manrope', sans-serif",overflow:'auto'}}>
      <Header eyebrow="08" title="Réseaux sociaux" sub="Bannière LinkedIn 1584×396 + avatar 400×400 + post 1080."/>

      {/* LinkedIn banner */}
      <div style={{marginTop:32,position:'relative',borderRadius:12,overflow:'hidden',boxShadow:'0 20px 40px -20px rgba(11,27,43,.3)'}}>
        <div style={{aspectRatio:'1584/396',background:A2.ink,color:'#fff',padding:'44px 64px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'relative',overflow:'hidden'}}>
          <svg width="100%" height="100%" style={{position:'absolute',inset:0,opacity:.07}}>
            <defs><pattern id="lkp" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0 L0 0 0 36" fill="none" stroke="#fff" strokeWidth="1"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#lkp)"/>
          </svg>
          <div style={{position:'relative',zIndex:1}}>
            <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:13,letterSpacing:'.2em',textTransform:'uppercase',opacity:.6,marginBottom:14}}>Dépannage IT · Nantes</div>
            <div style={{fontWeight:800,fontSize:54,lineHeight:1.02,letterSpacing:'-0.025em',maxWidth:760}}>
              L'équipe locale qui répond <span style={{color:A2.accent2}}>en moins d'une heure.</span>
            </div>
          </div>
          <div style={{position:'relative',zIndex:1,width:170,height:170,borderRadius:24,background:A2.accent,display:'grid',placeItems:'center',boxShadow:'0 0 0 8px rgba(255,255,255,.05)'}}>
            <div style={{fontWeight:800,fontSize:96,letterSpacing:'-0.04em'}}>A²</div>
          </div>
        </div>
        <div style={{position:'absolute',bottom:8,right:12,fontSize:10,fontFamily:"'JetBrains Mono', monospace",color:'rgba(255,255,255,.5)',letterSpacing:'.1em'}}>LINKEDIN BANNER · 1584×396</div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:24,marginTop:24,alignItems:'start'}}>
        {/* avatar */}
        <div>
          <div style={{width:200,height:200,borderRadius:'50%',background:A2.accent,display:'grid',placeItems:'center',color:'#fff',fontWeight:800,fontSize:110,letterSpacing:'-0.04em',boxShadow:'0 12px 28px -10px rgba(30,107,255,.55)'}}>A²</div>
          <div style={{textAlign:'center',marginTop:10,fontFamily:"'JetBrains Mono', monospace",fontSize:11,color:A2.muted,letterSpacing:'.1em',textTransform:'uppercase'}}>Avatar 400×400</div>
        </div>

        {/* post 1080 */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <SocialPost
            kicker="ALERTE PANNE"
            kickerColor={A2.warning}
            title="Microsoft 365 down ?"
            body="On a la procédure de bascule. Hotline 02 85 52 13 95."
            bg={A2.ink}
          />
          <SocialPost
            kicker="ÉTUDE DE CAS"
            kickerColor={A2.accent2}
            title="Migration Sage pour un cabinet d'experts-comptables nantais."
            body=""
            bg={A2.accent}
          />
        </div>
      </div>
    </div>
  );
}

function SocialPost({kicker, kickerColor, title, body, bg}) {
  return (
    <div style={{aspectRatio:'1/1',background:bg,color:'#fff',borderRadius:12,padding:28,display:'flex',flexDirection:'column',justifyContent:'space-between',position:'relative',overflow:'hidden',fontFamily:"'Manrope',sans-serif"}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'start'}}>
        <span style={{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:'.2em',textTransform:'uppercase',padding:'5px 9px',borderRadius:999,background:'rgba(255,255,255,.12)',color:kickerColor}}>{kicker}</span>
        <LogoMark size={28} color="#fff"/>
      </div>
      <div>
        <div style={{fontWeight:800,fontSize:26,lineHeight:1.1,letterSpacing:'-0.015em'}}>{title}</div>
        {body && <div style={{fontSize:13,opacity:.8,marginTop:10,lineHeight:1.4}}>{body}</div>}
      </div>
      <div style={{fontSize:10,fontFamily:"'JetBrains Mono', monospace",opacity:.55,letterSpacing:'.1em'}}>a2experts.fr · 1080×1080</div>
    </div>
  );
}

// ───────────────────────────────────────────────────────── VEHICLE LIVERY
function VehicleLivery() {
  return (
    <div style={{width:'100%',height:'100%',background:'#E9EBEE',padding:48,fontFamily:"'Manrope', sans-serif",display:'flex',flexDirection:'column',gap:18,justifyContent:'center'}}>
      <Header eyebrow="09" title="Marquage véhicule" sub="Kangoo / utilitaire blanc — habillage flanc latéral."/>

      <div style={{background:'#fff',borderRadius:8,padding:'28px 36px',boxShadow:'0 20px 40px -22px rgba(11,27,43,.35)',position:'relative'}}>
        {/* simplified van side */}
        <svg viewBox="0 0 1000 360" width="100%" style={{display:'block'}}>
          {/* body */}
          <path d="M 50 280 L 50 130 Q 50 110 70 110 L 360 110 L 410 60 L 720 60 L 760 110 L 940 110 Q 960 110 960 130 L 960 280 L 870 280 Q 860 240 820 240 Q 780 240 770 280 L 230 280 Q 220 240 180 240 Q 140 240 130 280 Z"
                fill="#fff" stroke={A2.line} strokeWidth="2"/>
          {/* windows */}
          <path d="M 80 175 L 80 130 Q 80 120 90 120 L 360 120 L 405 75 L 540 75 L 540 175 Z" fill="#cfdbe8" opacity=".5"/>
          <path d="M 560 75 L 715 75 L 750 120 L 560 120 Z" fill="#cfdbe8" opacity=".5"/>
          {/* color band */}
          <rect x="50" y="180" width="910" height="60" fill={A2.accent}/>
          <rect x="50" y="240" width="910" height="14" fill={A2.accent2}/>
          {/* wheels */}
          <circle cx="180" cy="285" r="38" fill={A2.ink}/><circle cx="180" cy="285" r="18" fill="#666"/>
          <circle cx="820" cy="285" r="38" fill={A2.ink}/><circle cx="820" cy="285" r="18" fill="#666"/>

          {/* big A² monogram on door */}
          <text x="120" y="225" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="56" fill="#fff">A²</text>
          <text x="200" y="225" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="44" fill="#fff" letterSpacing="-1">EXPERTS</text>

          {/* tagline on lower side */}
          <text x="120" y="155" fontFamily="JetBrains Mono, monospace" fontSize="14" fill={A2.ink} letterSpacing="3">DÉPANNAGE INFORMATIQUE · NANTES</text>

          {/* phone */}
          <rect x="640" y="135" width="280" height="40" rx="6" fill={A2.ink}/>
          <text x="780" y="162" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="22" fill="#fff">02 85 52 13 95</text>

          {/* url */}
          <text x="940" y="225" textAnchor="end" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="22" fill="#fff">a2experts.fr</text>
        </svg>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────── MERCH
function MerchKit() {
  return (
    <div style={{width:'100%',height:'100%',background:A2.paper,padding:48,fontFamily:"'Manrope', sans-serif",overflow:'auto'}}>
      <Header eyebrow="10" title="Goodies & équipements terrain" sub="Polo technicien, badge, sticker laptop, tote bag."/>

      <div style={{display:'grid',gridTemplateColumns:'1.1fr 1fr 1fr',gap:16,marginTop:32}}>
        {/* Polo */}
        <div style={{background:'#fff',border:`1px solid ${A2.line}`,borderRadius:12,padding:24,display:'flex',flexDirection:'column'}}>
          <div style={{flex:1,display:'grid',placeItems:'center',padding:'20px 0'}}>
            <svg viewBox="0 0 240 280" width="200">
              <path d="M 40 60 L 80 30 Q 100 50 120 50 Q 140 50 160 30 L 200 60 L 220 100 L 190 110 L 190 260 Q 190 270 180 270 L 60 270 Q 50 270 50 260 L 50 110 L 20 100 Z" fill={A2.ink}/>
              <path d="M 100 35 Q 120 60 140 35 L 130 28 L 110 28 Z" fill={A2.ink2}/>
              {/* logo patch */}
              <rect x="135" y="80" width="42" height="42" rx="4" fill={A2.accent}/>
              <text x="156" y="110" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="22" fill="#fff">A²</text>
            </svg>
          </div>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:A2.muted}}>Polo technicien · navy + patch brodé</div>
        </div>

        {/* Badge */}
        <div style={{background:'#fff',border:`1px solid ${A2.line}`,borderRadius:12,padding:24,display:'flex',flexDirection:'column'}}>
          <div style={{flex:1,display:'grid',placeItems:'center',padding:'12px 0'}}>
            <div style={{width:180,height:260,background:'#fff',border:`1px solid ${A2.line}`,borderRadius:10,boxShadow:'0 10px 20px -10px rgba(11,27,43,.3)',position:'relative',overflow:'hidden'}}>
              <div style={{height:60,background:A2.ink,color:'#fff',padding:'10px 14px',display:'flex',alignItems:'center',gap:8}}>
                <LogoMark size={28} color="#fff"/>
                <div style={{fontWeight:800,fontSize:13,letterSpacing:'-0.01em'}}>A2EXPERTS</div>
              </div>
              <div style={{padding:'14px 14px 0',fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:'.1em',color:A2.muted,textTransform:'uppercase'}}>Technicien certifié</div>
              <div style={{padding:'4px 14px',fontWeight:800,fontSize:16,color:A2.ink,letterSpacing:'-0.01em'}}>Julien Mercier</div>
              <div style={{padding:'0 14px',fontSize:10,color:A2.accent,fontWeight:600}}>Systèmes & réseau</div>
              <div style={{margin:'14px',padding:'8px',background:A2.paper,borderRadius:6,display:'grid',gridTemplateColumns:'repeat(8, 1fr)',gap:1.5}}>
                {Array.from({length:64}).map((_,i)=>(
                  <div key={i} style={{aspectRatio:'1/1',background: (i*7+3)%3===0 ? A2.ink : 'transparent',borderRadius:1}}/>
                ))}
              </div>
              <div style={{position:'absolute',top:-2,left:'50%',transform:'translateX(-50%)',width:30,height:8,background:'#aaa',borderRadius:'0 0 4px 4px'}}/>
            </div>
          </div>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:A2.muted}}>Badge nominatif · QR ticket</div>
        </div>

        {/* Sticker */}
        <div style={{background:'#fff',border:`1px solid ${A2.line}`,borderRadius:12,padding:24,display:'flex',flexDirection:'column'}}>
          <div style={{flex:1,display:'grid',placeItems:'center',padding:'12px 0',gap:12}}>
            <div style={{padding:'10px 18px',background:A2.accent,color:'#fff',borderRadius:999,fontWeight:800,fontSize:18,letterSpacing:'-0.01em',display:'flex',alignItems:'center',gap:8,boxShadow:'0 6px 14px -6px rgba(30,107,255,.6)'}}>
              <span style={{fontSize:22}}>A²</span> EXPERTS
            </div>
            <div style={{padding:'10px 18px',background:A2.ink,color:'#fff',borderRadius:6,fontWeight:600,fontSize:13,letterSpacing:'.05em',fontFamily:"'JetBrains Mono', monospace"}}>
              MAINTENU PAR A2EXPERTS
            </div>
            <div style={{padding:'8px 14px',background:'#fff',color:A2.ink,border:`2px solid ${A2.ink}`,borderRadius:6,fontWeight:800,fontSize:12,letterSpacing:'.08em',textTransform:'uppercase'}}>
              Asset · NTE-0142
            </div>
          </div>
          <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:A2.muted}}>Stickers laptop / inventaire</div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────── Shared header
function Header({eyebrow, title, sub}) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',paddingBottom:20,borderBottom:`1px solid ${A2.line}`}}>
      <div>
        <div style={{fontFamily:"'JetBrains Mono', monospace",fontSize:12,letterSpacing:'.2em',textTransform:'uppercase',color:A2.muted,marginBottom:8}}>
          {eyebrow} · A2EXPERTS / Identité
        </div>
        <h2 style={{margin:0,fontWeight:800,fontSize:36,letterSpacing:'-0.02em',color:A2.ink}}>{title}</h2>
        {sub && <p style={{margin:'8px 0 0',fontSize:15,color:A2.muted,maxWidth:680}}>{sub}</p>}
      </div>
      <Wordmark size={16}/>
    </div>
  );
}

Object.assign(window, { CoverArtboard, LogoSystem, ColorPalette, Typography, BusinessCards, Letterhead, EmailSignature, SocialKit, VehicleLivery, MerchKit });
