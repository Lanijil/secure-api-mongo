# 📦 Secure API - MongoDB + Express + Frontend

## ✅ 1. Description du projet
Ce projet est une **API REST sécurisée** avec :
- Une **base de données MongoDB** (via Docker)
- Un **serveur d’application Node.js/Express**
- Un **frontend simple HTML/JS** (inscription / connexion / dashboard)

Il permet de :
- Créer des utilisateurs avec **bcrypt (hashage des mots de passe)**
- Authentifier avec **JWT (token sécurisé)**
- Visualiser la base avec **Mongo Express**

## ✅ 2. Architecture des composants
| Composant | Rôle |
|-----------|------|
| **MongoDB (Docker)** | Stockage des utilisateurs |
| **Express (Node.js)** | API REST : register / login |
| **Mongoose** | ORM pour manipuler la base MongoDB |
| **Frontend (HTML/JS)** | Interface simple d’inscription / connexion |
| **JWT** | Authentification des utilisateurs |
| **Docker Compose** | Orchestration MongoDB (+ Mongo Express si besoin) |

## ✅ 3. Fonctionnement global
1. **Démarrage MongoDB via Docker** :
   ```bash
   docker compose up -d
   ```

2. **Lancement du serveur API et création du fichier .env** :
   À placer à la racine du projet :
   ```bash
   MONGO_URI=mongodb://localhost:27017/myappdb
   PORT=5000
   JWT_SECRET=unsecretsecure
   ```
   Puis lancer :
   ```bash
   npm install
   npm run dev
   ```

## ✅ 4. Utilisation via le Frontend
Les fichiers front-end (HTML/JS/CSS) sont dans un dossier séparé (`frontend/`). Il suffit d’ouvrir les fichiers dans le navigateur :
| Fichier | Fonction |
|---------|----------|
| `index.html` | Inscription d’un utilisateur (POST `/api/register`) |
| `login.html` | Connexion et stockage du token JWT (POST `/api/login`) |
| `dashboard.html` | Dashboard sécurisé (GET `/api/me`) avec vérification du token |

➡️ Le token est stocké dans le navigateur via `localStorage`, puis utilisé automatiquement pour les requêtes vers les routes protégées.

## ✅ 5. Fonctionnalités principales
- 🔐 Inscription sécurisée (hashage du mot de passe avec bcryptjs)
- 🔑 Connexion avec retour d’un token JWT
- 🔒 Accès protégé au tableau de bord via vérification du token (`Authorization: Bearer ...`)
- 💾 Stockage des utilisateurs dans MongoDB
- 🧪 Tests API manuels via Postman ou l’interface front-end

## ✅ 6. Choix des technologies
| Techno | Pourquoi ? |
|--------|------------|
| **MongoDB** | Base NoSQL flexible, simple à utiliser pour les projets web |
| **Mongoose** | Simplifie les opérations CRUD avec MongoDB |
| **Express.js** | Léger et rapide pour créer des APIs REST |
| **bcryptjs** | Pour sécuriser les mots de passe |
| **jsonwebtoken (JWT)** | Pour une authentification sans session côté serveur |
| **Docker** | Simplifie le déploiement de MongoDB & Mongo Express |
| **HTML/JS** | Frontend minimaliste, simple à intégrer à Express |

## ✅ 7. Améliorations potentielles
- ✅ Système de **refresh token** (sécurité renforcée)
- ✅ Middleware de **protection des routes API (auth middleware)**
- ✅ Interface Frontend **plus poussée (React/Vue/Svelte)**
- ✅ Ajout d’un **système de rôles (admin/user)**
- ✅ Déploiement complet via **Docker Compose (API + Frontend + DB + Mongo Express)**
- ✅ Intégration de **tests unitaires (Jest / Supertest)**