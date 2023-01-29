# So6
Fictive social media - Collaborative project


<h1> ==== Présentation générale du projet ==== </h1>

<h2> -- So6: Le réseau saucisse des sociaux -- </h2>

  Août 2024, une nouvelle canicule a définitivement fait exploser la consommation de grillades en France, en Europe et dans le Monde. La demande pour un réseau social spécialisé est palpable. Notre équipe de visionnaires travaille d’arrache-pied sur le sujet afin de proposer aux utilisateurs une solution à leur insatiable envie de saucisses.
  
<h1> ==== 1. Cadre Technique ==== <br>
<h2> -- Langages et Frameworks --</h2> <br>

- Front:
  - Framework JavaScript : React JS
L'utilisation de ReactJS permettra de rafraîchir les pages en temps réel.
  - Approche : Mobile-first, le projet a pour essence d’être visionné principalement sur mobile donc le choix est évident.
  
- Back:
  - Langage: Javascript avec Node.JS
  - Framework: Express.JS avec promise-mysql

- Base de donnée:
  - Utilisation d’une base de données relationnelle en ligne avec le service MySQL.
  - Persistance des données grâce aux buckets AWS S3.

- Messagerie instantanée :
  - Utilisation des web sockets pour la gestion en temps réels des requêtes par paquets. (socket.io, à confirmer)
 
<h2>-- Localisation / i18n --</h2>

  Le fuseau horaire du site est Paris (GMT+1). L'interface est uniquement disponible en français.
  
<h1>==== 2. Description fonctionnelle ====</h1>
<h2>-- Utilisateurs --</h2> <br>

Les utilisateurs sont réunis sous deux catégories, nous appellerons ici :
  - user : tout utilisateur connecté grâce à son email/pseudo et mot de passe.
  - guest : tout utilisateur sans compte vérifié (il n’aura accès qu’à une partie très restreinte du projet, ce qui est justifié par la nature même de ce dernier).
  
<h2>-- Compte utilisateur --</h2> <br>

  Un visiteur a la possibilité de se créer un compte ou de se connecter (et déconnecter). Un utilisateur connecté a la possibilité de commenter ou de réagir (like) à des posts existants. Il peut également en créer de nouveaux et il dispose d’une page de profil personnalisée.
  
<h2>-- Page d’accueil --</h2> <br>

  La page d'accueil du site affiche les posts de ses utilisateurs. En version alpha, chaque post présente un bouton permettant d’accéder à la section commentaire. En version beta et finale, il est également possible de directement commenter.
  Une section supérieure et/ou inférieure proposera des liens de navigation. Sur desktop, il s’agira d’un menu latéral.
  
<h2>-- Affichage des posts en détail --</h2> <br>

  Lorsqu’un utilisateur clique sur un post de la page d’accueil, une lightbox (modal) s’ouvre. Elle donne accès en superposition d’écran aux détails du post et à sa section commentaire.
  Sur la version beta, l’utilisateur pourra choisir de filtrer les posts uniquement végans.
  
<h2>-- Profil des utilisateurs enregistrés --</h2> <br>

  Lorsqu'un utilisateur est enregistré, il a accès à une page qui affiche ses propres posts.
  Sur la version finale, les posts, commentaires et posts likés de l’utilisateur seront séparés par des onglets.

<h1>==== 3. Clientèle ====</h1>
<h2>-- Thierry, le coeur de cible --</h2> <br>

  Thierry, 40 ans, commercial dans le secteur des assurances, est excédé par la société actuelle. Inondé de mauvaises nouvelles sur les réseaux sociaux et censuré à la moindre blague, il organise chaque week-end un barbecue avec ses amis. Lors de ces moments privilégiés, il se sent enfin lui-même, libre.
  Il rejoint le réseau dès qu’il en entend parler, car il peut discuter avec ses amis et donner son avis à des inconnus à propos de sa passion : les grillades.
  
<h2>-- Zoé, l'adhérent périphérique --</h2> <br>
  Zoé est une lycéenne de 16 ans qui aime avant tout rire avec ses amis, souvent au détriment des autres. Elle rejoint initialement le réseau pour se moquer mais, séduite malgré elle par les fonctionnalités efficaces et le design sobre de l’application, elle se retrouve à l’utiliser quotidiennement.
  
<h2>-- Enguerrand, le carnophobe --</h2> <br>
  Enguerrand est un végétarien convaincu. Il croit fermement que la consommation de viande est non seulement mauvaise pour la santé, mais qu'elle est également nuisible pour l'environnement et cruelle envers les animaux. Il refuse donc de se joindre à un réseau social célébrant les saucisses car il ne veut pas soutenir une industrie qu'il considère comme moralement et éthiquement répréhensible.
  
 <strong>  Notre solution ? </strong> Un filtre végan. Chaque utilisateur pourra mentionner ou non si son post est végan, ainsi, Enguerrand aura le choix de n’afficher que les posts qui l’intéressent.
  
<h1>==== 4. Maquettes ====</h1> <br>
Notre équipe UI/UX/Graphisme travaille depuis Francfort (Hesse, Allemagne) sur un modèle disponible en ligne sur Figma :
https://tinyurl.com/so6-network

<img width="1082" alt="Capture_decran_2023-01-27_a_17 26 24" src="https://user-images.githubusercontent.com/98523545/215336415-5e983887-52ea-4974-a83f-c2dc55122e79.png">
