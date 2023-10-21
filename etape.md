# NextJS with Wordpres headless

https://www.youtube.com/watch?v=6eVMBX2u_Ug&list=PLpvmpNjU5ooWkh1xAldsikmTxgoo5gc2v
Coding reflexions

Installation de nextJS

`npm run dev` pour lancer le projet

### Creation des page et dossier de notre projet

- [pageSlug].js
- contact.js
- /blog
- - [postSlug].js
- - index.js
- /category
- - [categoryName].js

### Creating the Home page with Tailwind CSS - Next.js + Headless WordPress Blog [Part 5]

- L'auteur a ajouté les fichiers de route nécessaires pour un blog Next.js.
- Ils ont débuté avec le fichier `index.js`, responsable de la page d'accueil.
- Les images de logo et de fond ont été téléchargées au préalable et placées dans le dossier public de l'application Next.js.
- La configuration de Tailwind CSS a été réalisée pour gérer les styles de la page.
  `npx tailwindcss init`
  Configuration de `content` dans `/taillwind.config.js`
  Configuration de `/postcss.config.js`
  Ajout de `\styles\main.css`

- Les composants `head`, `image`, et `link` de Next.js ont été importés pour gérer la structure de la page.
- En utilisant ces composants, une structure de page a été créée avec un en-tête contenant un logo, une navigation, un titre, et un bouton pour accéder au blog.
- Un composant `site header` a été créé pour faciliter la réutilisation de l'en-tête sur d'autres pages.
- La page d'accueil a été stylisée en utilisant des classes de Tailwind CSS pour obtenir une apparence attrayante.
- Le résultat est une page d'accueil accueillante pour un blog de voyage imaginaire, avec un en-tête élégant, un titre accrocheur et un bouton invitant les visiteurs à explorer le blog.
