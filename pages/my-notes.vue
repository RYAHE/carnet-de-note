<template>
    <div>
        <h1>Mes Notes</h1>
        <ul>
            <li v-for="note in notes" :key="note.id">
                <h2>{{ note.title }}</h2>
                <p>{{ note.content }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        notes() {
            return this.$store.state.notes;
        }
    },
    async created() {
        await this.$store.dispatch('fetchNotes');
    }
};
</script>
