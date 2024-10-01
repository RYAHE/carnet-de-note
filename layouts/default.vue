<template>
  <div>
    <header>
      <nav>
        <!-- Liens de gauche -->
        <div class="nav-left">
          <nuxt-link to="/">Accueil</nuxt-link>
          <nuxt-link to="/new-note">Nouvelle Note</nuxt-link>
          <nuxt-link to="/my-notes">Mes Notes</nuxt-link>
        </div>

        <!-- Liens de droite -->
        <div class="nav-right">
          <nuxt-link to="/login">Connexion</nuxt-link>
          <nuxt-link to="/register">S'inscrire</nuxt-link>
        </div>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer>
      <p>&copy; 2024 Mon Carnet de Notes</p>
    </footer>
  </div>
</template>

<style>
header {
  background-color: #f0f0f0;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: space-between; /* Sépare les liens à gauche et à droite */
  align-items: center; /* Centre verticalement les liens */
}

nav a {
  text-decoration: none;
  color: #333;
}

nav a:hover {
  color: #007bff;
}

/* Styles pour les groupes de liens */
.nav-left,
.nav-right {
  display: flex;
  gap: 1rem; /* Espace entre les liens */
}

main {
  padding: 2rem;
}

footer {
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}
</style>
