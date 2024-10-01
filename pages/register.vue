<template>
    <div>
        <h1>Créer un Compte</h1>
        <form @submit.prevent="inscrire">
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Mot de passe:</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit">S'inscrire</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const message = ref('')
const router = useRouter()

const inscrire = async () => {
    const { $supabase } = useNuxtApp()

    const { error, user } = await $supabase.auth.signUp({
        email: email.value,
        password: password.value
    })

    if (error) {
        if (error.message.includes('rate limit')) {
            message.value = 'Trop de tentatives. Veuillez réessayer plus tard.'
        } else {
            message.value = `Erreur: ${error.message}`
        }
    }

}
</script>