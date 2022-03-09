-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 27 jan. 2022 à 05:07
-- Version du serveur : 5.7.24
-- Version de PHP : 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : rr_cube 
--

DROP DATABASE IF EXISTS rr_cube;
CREATE DATABASE rr_cube DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE rr_cube;

-- --------------------------------------------------------

--
-- Structure de la table category 
--

DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
 id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
 c_name VARCHAR(255) NOT NULL,
 owner_id INTEGER NOT NULL,
 isAccept BOOLEAN NOT NULL,
 isArchived BOOLEAN NOT NULL,
 userAccept INTEGER NOT NULL,
 createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO categories ( c_name , owner_id , isAccept , isArchived , userAccept ) 
 VALUES ('Divertissement', 1, true, false, 1);

INSERT INTO categories ( c_name , owner_id , isAccept , isArchived , userAccept ) 
 VALUES ('Culture', 1, true, false, 1);

INSERT INTO categories ( c_name , owner_id , isAccept , isArchived , userAccept ) 
 VALUES ('Art', 1, true, false, 1);

INSERT INTO categories ( c_name , owner_id , isAccept , isArchived , userAccept ) 
 VALUES ('Actualité', 1, true, false, 1);

INSERT INTO categories ( c_name , owner_id , isAccept , isArchived , userAccept ) 
 VALUES ('Sport', 1, true, false, 1);

INSERT INTO categories ( c_name , owner_id , isAccept , isArchived , userAccept ) 
 VALUES ('Musique', 1, true, false, 1);


-- --------------------------------------------------------

--
-- Structure de la table comment 
--

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  owner_id INTEGER NOT NULL,
  content varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  attachement_URL int(11) DEFAULT NULL,
  score int(11) NOT NULL DEFAULT '0',
  reply_at int(11) NOT NULL,
  archived tinyint(1) NOT NULL DEFAULT '0',
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table commentreact 
--

CREATE TABLE commentreacts (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  react_id INTEGER NOT NULL,
  comment_id INTEGER NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table message 
--

CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  sender_id INTEGER NOT NULL,
  receiver_id INTEGER NOT NULL,
  attachement_URL varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  reply_at int(11) NOT NULL,
  content text COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table messagereact 
--

CREATE TABLE messagereacts (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  react_id INTEGER NOT NULL,
  message_id INTEGER NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table permission 
--

CREATE TABLE permissions (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name text COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table reaction 
--

CREATE TABLE reactions (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  emote varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table relationshiptype 
--

CREATE TABLE relationshiptypes (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table reportcomment 
--

CREATE TABLE reportcomments (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  isTreated tinyint(1) NOT NULL DEFAULT '0',
  reason varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  owner_id INTEGER NOT NULL,
  comment_id INTEGER NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table reportressource 
--

CREATE TABLE reportressources (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  isTreated tinyint(1) NOT NULL DEFAULT '0',
  reason varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  owner_id INTEGER NOT NULL,
  ressource_id INTEGER NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table ressource 
--

CREATE TABLE ressources (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  owner_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  ressource_type_id INTEGER NOT NULL,
  relationship_type_id INTEGER NOT NULL,
  visibility_type_id INTEGER NOT NULL,
  score int(11) NOT NULL DEFAULT '0',
  isAccept tinyint(1) NOT NULL DEFAULT '0',
  userAccept int(11) NOT NULL DEFAULT '0',
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table ressourcecomment 
--

CREATE TABLE ressourcecomments (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  ressource_id INTEGER NOT NULL,
  comment_id INTEGER NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table ressourcetype 
--

CREATE TABLE ressourcetypes (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table role 
--

CREATE TABLE roles (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  label varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table rolepermission 
--

CREATE TABLE rolepermissions (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_id INTEGER NOT NULL,
  permission_id INTEGER NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table sharetouser 
--

CREATE TABLE sharetousers (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  ressource_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table user 
--

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  surname varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  forname varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  username varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  hash_password varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  date_of_birth datetime NOT NULL,
  mail varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  isConfirmed tinyint(1) NOT NULL DEFAULT '0',
  civility varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  picture_URL varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  role_id INTEGER NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table visibilitytype 
--

CREATE TABLE visibilitytypes (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table category 
--
ALTER TABLE categories 
 ADD KEY owner_id ( owner_id ),
 ADD KEY userAccept ( userAccept );

--
-- Index pour la table comment 
--
ALTER TABLE comments 
 ADD KEY owner_id ( owner_id ),
 ADD KEY reply_at ( reply_at );

--
-- Index pour la table commentreact 
--
ALTER TABLE commentreacts 
 ADD KEY comment_id ( comment_id ),
 ADD KEY react_id ( react_id );

--
-- Index pour la table message 
--
ALTER TABLE messages 
 ADD KEY sender_id ( sender_id ),
 ADD KEY receiver_id ( receiver_id ),
 ADD KEY reply_at ( reply_at );

--
-- Index pour la table messagereact 
--
ALTER TABLE messagereacts 
 ADD KEY react_id ( react_id ),
 ADD KEY message_id ( message_id );

--
-- Index pour la table reportcomment 
--
ALTER TABLE reportcomments 
 ADD KEY owner_id ( owner_id ),
 ADD KEY comment_id ( comment_id );

--
-- Index pour la table reportressource 
--
ALTER TABLE reportressources 
 ADD KEY owner_id ( owner_id ),
 ADD KEY ressource_id ( ressource_id );

--
-- Index pour la table ressource 
--
ALTER TABLE ressources 
 ADD KEY userAccept ( userAccept ),
 ADD KEY relationship_type_id ( relationship_type_id ),
 ADD KEY ressource_type_id ( ressource_type_id ),
 ADD KEY visibility_type_id ( visibility_type_id );

--
-- Index pour la table ressourcecomment 
--
ALTER TABLE ressourcecomments 
 ADD KEY comment_id ( comment_id ),
 ADD KEY ressource_id ( ressource_id );


--
-- Index pour la table rolepermission 
--
ALTER TABLE rolepermissions 
 ADD KEY permission_id ( permission_id ),
 ADD KEY role_id ( role_id );

--
-- Index pour la table sharetouser 
--
ALTER TABLE sharetousers 
 ADD KEY user_id ( user_id ),
 ADD KEY ressource_id ( ressource_id );

--
-- Index pour la table user 
--
ALTER TABLE users 
 ADD KEY role_id ( role_id );


--
-- Contraintes pour les tables déchargées
--

-- TODO: A CORRIGER 


--
-- Contraintes pour la table category 
--
ALTER TABLE categories 
 ADD CONSTRAINT category_ibfk_1 FOREIGN KEY ( owner_id ) REFERENCES users ( id ),
 ADD CONSTRAINT category_ibfk_2 FOREIGN KEY ( userAccept ) REFERENCES users ( id );

--
-- Contraintes pour la table comment 
--
ALTER TABLE comments 
 ADD CONSTRAINT comment_ibfk_1 FOREIGN KEY ( owner_id ) REFERENCES users ( id ),
 ADD CONSTRAINT comment_ibfk_2 FOREIGN KEY ( reply_at ) REFERENCES users ( id );

--
-- Contraintes pour la table commentreact 
--
ALTER TABLE commentreacts 
 ADD CONSTRAINT commentreact_ibfk_1 FOREIGN KEY ( comment_id ) REFERENCES comments ( id ),
 ADD CONSTRAINT commentreact_ibfk_2 FOREIGN KEY ( react_id ) REFERENCES reactions ( id );

--
-- Contraintes pour la table message 
--
ALTER TABLE messages 
 ADD CONSTRAINT message_ibfk_1 FOREIGN KEY ( sender_id ) REFERENCES users ( id ),
 ADD CONSTRAINT message_ibfk_2 FOREIGN KEY ( receiver_id ) REFERENCES users ( id ),
 ADD CONSTRAINT message_ibfk_3 FOREIGN KEY ( reply_at ) REFERENCES users ( id );

--
-- Contraintes pour la table messagereact 
--
ALTER TABLE messagereacts 
 ADD CONSTRAINT messagereact_ibfk_1 FOREIGN KEY ( react_id ) REFERENCES reactions ( id ),
 ADD CONSTRAINT messagereact_ibfk_2 FOREIGN KEY ( message_id ) REFERENCES messages ( id );

--
-- Contraintes pour la table reportcomment 
--
ALTER TABLE reportcomments 
 ADD CONSTRAINT reportcomment_ibfk_1 FOREIGN KEY ( owner_id ) REFERENCES users ( id ),
 ADD CONSTRAINT reportcomment_ibfk_2 FOREIGN KEY ( comment_id ) REFERENCES comments ( id );

--
-- Contraintes pour la table reportressource 
--
ALTER TABLE reportressources 
 ADD CONSTRAINT reportressource_ibfk_1 FOREIGN KEY ( owner_id ) REFERENCES users ( id ),
 ADD CONSTRAINT reportressource_ibfk_2 FOREIGN KEY ( ressource_id ) REFERENCES ressources ( id );

--
-- Contraintes pour la table ressource 
--
ALTER TABLE ressources 
 ADD CONSTRAINT ressource_ibfk_1 FOREIGN KEY ( userAccept ) REFERENCES categories ( userAccept ),
 ADD CONSTRAINT ressource_ibfk_2 FOREIGN KEY ( relationship_type_id ) REFERENCES relationshiptypes ( id ),
 ADD CONSTRAINT ressource_ibfk_3 FOREIGN KEY ( ressource_type_id ) REFERENCES ressourcetypes ( id ),
 ADD CONSTRAINT ressource_ibfk_4 FOREIGN KEY ( visibility_type_id ) REFERENCES visibilitytypes ( id );

--
-- Contraintes pour la table ressourcecomment 
--
ALTER TABLE ressourcecomments 
 ADD CONSTRAINT ressourcecomment_ibfk_1 FOREIGN KEY ( comment_id ) REFERENCES comments ( id ),
 ADD CONSTRAINT ressourcecomment_ibfk_2 FOREIGN KEY ( ressource_id ) REFERENCES ressources ( id );

--
-- Contraintes pour la table rolepermission 
--
ALTER TABLE rolepermissions 
 ADD CONSTRAINT rolepermission_ibfk_1 FOREIGN KEY ( permission_id ) REFERENCES permissions ( id ),
 ADD CONSTRAINT rolepermission_ibfk_2 FOREIGN KEY ( role_id ) REFERENCES roles ( id );

--
-- Contraintes pour la table sharetouser 
--
ALTER TABLE sharetousers 
 ADD CONSTRAINT sharetouser_ibfk_1 FOREIGN KEY ( user_id ) REFERENCES users ( id ),
 ADD CONSTRAINT sharetouser_ibfk_2 FOREIGN KEY ( ressource_id ) REFERENCES ressources ( id );

--
-- Contraintes pour la table user 
--
ALTER TABLE users 
 ADD CONSTRAINT user_ibfk_1 FOREIGN KEY ( role_id ) REFERENCES roles ( id );

 
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
