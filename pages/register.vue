<template>
    <div>
        <h1>S'inscrire</h1>
        <form @submit.prevent="register">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Mot de passe" required />
            <button type="submit">S'inscrire</button>
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
        async register() {
            await this.$store.dispatch('register', { email: this.email, password: this.password });
            this.$router.push('/login');
        }
    }
};
</script>
