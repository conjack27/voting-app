import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        question: 'What is the value of x?',
        answers: [{ id: 1, text: '3', votes: 0 }, { id: 2, text: '4.2', votes: 0 }]
    },
    getters: {
        question: state => state.question,
        answers: state => state.answers
    },
    mutations: {
        setQuestion: (state, payload) => (
            state.question = payload
        ),
        submitAnswer: function (state, payload) {
            state.answers.find(answer => answer.id === payload.id).votes++
        },
        resetAll: (state) => (
            state.question = '',
            state.answers = []
        )
    },
    actions: {
    }
})