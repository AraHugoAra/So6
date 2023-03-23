-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mer. 22 mars 2023 à 14:19
-- Version du serveur : 5.7.39
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `so6`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) NOT NULL,
  `body` varchar(150) NOT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  `post_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `body`, `timestamp`, `post_id`, `user_id`) VALUES
(1, 'Mdr les gonzess', '2023-02-22 15:45:38', 19, 11),
(2, 'G peur', '2023-03-22 11:50:30', 19, 11),
(3, 'G pas raison la team ? ;)', '2023-03-22 11:50:58', 13, 11);

-- --------------------------------------------------------

--
-- Structure de la table `likes`
--

CREATE TABLE `likes` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  `target_id` bigint(20) NOT NULL,
  `target_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `likes`
--

INSERT INTO `likes` (`id`, `user_id`, `timestamp`, `target_id`, `target_type`) VALUES
(3, 6, '2023-02-23 12:04:07', 19, 0),
(5, 6, '2023-03-22 11:06:45', 18, 0),
(9, 11, '2023-03-22 11:50:28', 1, 1),
(10, 11, '2023-03-22 11:50:32', 2, 1),
(11, 11, '2023-03-22 11:50:51', 13, 0),
(12, 11, '2023-03-22 12:09:12', 15, 0);

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) NOT NULL,
  `media` varchar(255) NOT NULL,
  `body` varchar(255) DEFAULT NULL,
  `vegan` tinyint(1) DEFAULT '0',
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `media`, `body`, `vegan`, `timestamp`, `user_id`) VALUES
(9, 'https://i.pinimg.com/736x/e1/fa/43/e1fa4375327f1f3519c3eba7cff8a31a.jpg', 'Enfin un réseau saucisssse !!', 0, '2023-01-29 17:31:37', 11),
(10, 'https://i0.wp.com/www.nmgastronome.com/wp-content/uploads/2013/05/Smokehouse17.gif?ssl=1', 'Bon les potos, du monde dispo dimanche ?', 0, '2023-01-29 17:33:29', 11),
(11, 'https://avegtastefromatoz.com/wp-content/uploads/2019/03/sausages-FI.jpg', 'Saucisses vegan éthiques et homemade', 1, '2023-01-29 17:34:47', 13),
(12, 'https://s-i.huffpost.com/gen/1392876/images/o-BEER-BBQ-facebook.jpg', 'Je me rappelle de pas grand chose mais c\'était cool mdrrr', 0, '2023-01-29 17:37:14', 11),
(13, 'https://cache.magazine-avantages.fr/data/photo/w1000_ci/1ec/legumes-saison-hiver.jpg', 'Hein ? Mais c\'est quoi ça ?? Vous voulez vraiment voir ça ici, les bien pensants ?!', 1, '2023-01-29 17:39:28', 11),
(14, 'https://i.pinimg.com/736x/f9/c0/47/f9c047f3bee0eb12a2f869678686dab1--happy-animals-farm-animals.jpg', 'Trop choupi, je dis ça je dis rien. #blessed #nature #criminels', 1, '2023-01-29 17:41:07', 13),
(15, 'https://www.teckels.net/upload/modules/galleries/img/items/502/1.jpg', 'Et celles-là, c\'est à quelle cuisson les nullos? ^^', 1, '2023-01-29 17:42:30', 12),
(16, 'https://i.pinimg.com/736x/fa/3f/ba/fa3fbadc763068a710b6f23d3636283d--design-humor-nerd-humor.jpg', 'Juste M D R', 0, '2023-01-29 17:44:00', 11),
(17, 'https://st3.depositphotos.com/31313076/33114/i/450/depositphotos_331144736-stock-photo-young-man-holding-vegan-groceries.jpg', 'Si je l\'attrape lui je le cuis (je rigole hein... Mais imagine)', 0, '2023-01-29 17:45:44', 11),
(18, 'https://i2.wp.com/86lemons.com/wp-content/uploads/2017/04/Vegan-Fitness-Trainer.jpeg', 'La recette ? Des légumes et du pilate!', 1, '2023-01-29 17:47:16', 13),
(19, 'https://c8.alamy.com/comp/C5DAY4/side-view-of-woman-at-barbecue-grill-with-blurred-people-partying-C5DAY4.jpg', 'BBQing like a girl boss ;) ;)', 0, '2023-01-29 17:48:59', 12);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `nickname` varchar(50) NOT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `avatar`, `nickname`, `timestamp`) VALUES
(6, 'a@a.a', '$2b$10$reKgnthIf2BIgnNilnuFkO0jc6TkWIsDHvKHdFy7svLU3nrCjx7Ru', 'Aaron Absynthia', 'https://media.ooreka.fr/public/image/3-305255-1733-full-13044331.jpg', 'Admina', '2023-01-25 08:48:16'),
(11, 'thierry47@gmail.com', '$2b$10$/7xbNQ4EUVgORz49ZKGRwe4jRWsZl8AXVDQWsqqK69n0J1t6fbJ4K', 'Thierry Garonne', 'http://res.cloudinary.com/drrlu6nxb/image/upload/v1675009194/user_images/ouw46mjtjh83aqjhpskj.png', 'Saucisse Addictive 47', '2023-01-29 17:20:18'),
(12, 'zozo@gmail.com', '$2b$10$oAjNcquKb13ybHRyNboWE.Uvor.cI87kLWPDl8kf22FA7UJppA08.', NULL, 'http://1.bp.blogspot.com/-6IwgGDwNrqA/UNAVFZUgfpI/AAAAAAAAAGw/Bxh_6ft_UcQ/s1600/emo+girls+wallpapers+(2).jpg', 'xX-D4rK-sAuCisSe-Xx', '2023-01-29 17:26:12'),
(13, 'soenguy@gmail.com', '$2b$10$b1oB0THGlSldvYbgjVBJ6OR.sN0ZPb3C85DVHbtL5HBx3pIW6HSMG', 'Enguerrand De La Bruyère', 'https://i.pinimg.com/736x/49/3e/29/493e2954f52bc3947287b8ed088eca57--teacups-little-pigs.jpg', 'No so6 after 6', '2023-01-29 17:27:30'),
(14, 'johnny@gmail.com', '$2b$10$s/P4cY03QHfM/pum/autHed9oeM9rx1wBG43GnOqGcgJQcj2onjhK', 'Jean Vakances', 'https://img.ohmymag.com/article/1280/hallyday/johnny-hallyday-entre-musique-et-theatre_545a24fd266a4388e699ee01582c3f7a005c6136.jpg', 'Not So Sage', '2023-01-29 17:28:44'),
(24, 'definitly@nota.mock', '$2b$10$oxH9rjS.7perKgpikUPVn.CAegliKBGQdszyqLgQI3HhMb1SBy392', NULL, NULL, 'Real Human', '2023-02-24 12:15:51'),
(25, 'b@b.b', '$2b$10$xwpTJydD7btd/ExahB.FaeJmb7g/y9KSLYWb8ORNI57VkWjABNEm6', 'b', NULL, 'Le bébé', '2023-03-22 10:38:39');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `target_id` (`target_id`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
