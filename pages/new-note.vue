<template>
    <div>
        <h1>Nouvelle Note</h1>
        <form @submit.prevent="addNote">
            <input v-model="title" type="text" placeholder="Titre" required />
            <textarea v-model="content" placeholder="Contenu" required></textarea>
            <button type="submit">Ajouter</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: ''
        };
    },
    methods: {
        addNote() {
            const note = { title: this.title, content: this.content, id: Date.now() };
            this.$store.dispatch('addNote', note);
            let notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
            this.$router.push('/my-notes');
        }
    }
};
</script>
