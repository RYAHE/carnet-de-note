<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="/">Accueil</nuxt-link>
                <nuxt-link to="/login">Connexion</nuxt-link>
                <nuxt-link to="/register">S'inscrire</nuxt-link>
                <nuxt-link to="/new-note">Nouvelle Note</nuxt-link>
                <nuxt-link to="/my-notes">Mes Notes</nuxt-link>
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
    gap: 1rem;
}

nav a {
    text-decoration: none;
    color: #333;
}

nav a:hover {
    color: #007bff;
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
