<template>
    <div>
        <h1>Connexion</h1>
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Mot de passe" required />
            <button type="submit">Se connecter</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login() {
            await this.$store.dispatch('login', { email: this.email, password: this.password });
            this.$router.push('/my-notes');
        }
    }
};
</script>
