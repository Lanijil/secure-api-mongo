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
   ```bash
   MONGO_URI=mongodb://localhost:27017/myappdb
   PORT=5000
   JWT_SECRET=unsecretsecure
   ```
   A lancer dans le terminal
   ```bash
   npm install
   npm run dev
   ```

3. **Utilisation via le Frontend** :
   - `/index.html` → Inscription d’un nouvel utilisateur
   - `/login.html` → Connexion (JWT reçu)
   - `/dashboard.html` → Accès protégé avec le token

4. **Stockage en base** :
   - Utilisateurs enregistrés dans **MongoDB (myappdb.users)**

## ✅ 4. Choix des technologies
| Techno | Pourquoi ? |
|--------|------------|
| **MongoDB** | Base NoSQL flexible, simple à utiliser pour les projets web |
| **Mongoose** | Simplifie les opérations CRUD avec MongoDB |
| **Express.js** | Léger et rapide pour créer des APIs REST |
| **bcryptjs** | Pour sécuriser les mots de passe |
| **jsonwebtoken (JWT)** | Pour une authentification sans session côté serveur |
| **Docker** | Simplifie le déploiement de MongoDB & Mongo Express |
| **HTML/JS** | Frontend minimaliste, simple à intégrer à Express |

## ✅ 5. Fonctionnalités principales
- 🔐 Register (hashage des passwords)
- 🔑 Login (retourne un token JWT)
- 🛡️ Vérification du token pour accéder au dashboard (front)
- 💾 Stockage des utilisateurs dans MongoDB

## ✅ 6. Améliorations potentielles
- ✅ Système de **refresh token** (sécurité renforcée)
- ✅ Middleware de **protection des routes API (auth middleware)**
- ✅ Interface Frontend **plus poussée (React/Vue/Svelte)**
- ✅ Ajout d’un **système de rôles (admin/user)**
- ✅ Déploiement complet via **Docker Compose (API + Frontend + DB + Mongo Express)**
- ✅ Intégration de **tests unitaires (Jest / Supertest)**