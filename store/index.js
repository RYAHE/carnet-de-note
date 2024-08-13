export const state = () => ({
    user: null,
    notes: []
});

export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    addNote(state, note) {
        state.notes.push(note);
    },
    setNotes(state, notes) {
        state.notes = notes;
    }
};

export const actions = {
    login({ commit }, user) {
        // Simuler la connexion
        commit('setUser', user);
    },
    register({ commit }, user) {
        // Simuler l'inscription
        commit('setUser', user);
    },
    addNote({ commit }, note) {
        commit('addNote', note);
    },
    fetchNotes({ commit }) {
        // Simuler la récupération des notes
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        commit('setNotes', notes);
    }
};
