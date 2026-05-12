# Déploiement sur Vercel — A2EXPERTS

## Option 1 — Drag & drop (le plus simple, 2 minutes)

1. Va sur https://vercel.com/new
2. Clique sur l'onglet **« Import Third-Party Git Repository »** puis **« Deploy without Git »** OU directement sur https://vercel.com/import
3. **Glisse-dépose le ZIP du projet** dans la zone d'import
4. Vercel détecte automatiquement un site statique → clique sur **Deploy**
5. En ~30 secondes, ton site est en ligne à l'adresse `xxx-xxx.vercel.app`

## Option 2 — Via GitHub (recommandé pour les mises à jour)

1. Crée un repo GitHub vide : https://github.com/new (ex: `a2experts-site`)
2. Pousse les fichiers du projet dedans (depuis ton ordinateur)&nbsp;:
   ```bash
   cd ~/a2experts
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TONUSER/a2experts-site.git
   git push -u origin main
   ```
3. Va sur https://vercel.com/new → **Import Git Repository** → choisis ton repo
4. Garde les réglages par défaut → **Deploy**
5. À chaque `git push`, Vercel redéploie automatiquement.

## Option 3 — CLI (pour les pros)

```bash
npm i -g vercel
cd ~/a2experts
vercel
# Suis les prompts, puis :
vercel --prod
```

---

## Brancher le domaine www.a2experts.fr

Une fois le site déployé sur `xxx.vercel.app`&nbsp;:

1. Dans Vercel → ton projet → **Settings** → **Domains**
2. Ajoute `www.a2experts.fr` ET `a2experts.fr`
3. Vercel t'affiche les enregistrements DNS à créer chez ton registrar (OVH, Gandi…)&nbsp;:
   - Pour `a2experts.fr` (apex)&nbsp;: **A record** → `76.76.21.21`
   - Pour `www.a2experts.fr`&nbsp;: **CNAME** → `cname.vercel-dns.com`
4. Sauvegarde côté registrar. Propagation DNS&nbsp;: 5 min à 2h.
5. Vercel délivre automatiquement le certificat SSL (Let's Encrypt).

## Rediriger astorya.fr → a2experts.fr

Dans Vercel → Settings → Domains&nbsp;:
1. Ajoute aussi `astorya.fr` et `www.astorya.fr` au projet
2. Configure les DNS d'astorya.fr de la même façon (A + CNAME vers Vercel)
3. La règle de redirection 301 dans `vercel.json` (déjà en place) fera le reste.

---

## Notes

- **`.htaccess` est ignoré par Vercel** (Apache only) → c'est `vercel.json` qui prend le relais avec les mêmes règles (HTTPS forcé, redirections 301, headers de sécurité, cache long).
- **`cleanUrls: true`** → les URLs sans `.html` fonctionnent (`/contact` au lieu de `/contact.html`).
- **Plan Hobby = gratuit** pour ce type de site statique (bande passante 100 GB/mois largement suffisante).
- Si tu préfères OVH ou un hébergement mutualisé classique, conserve `.htaccess` et ignore `vercel.json` (les deux peuvent cohabiter sans souci).
