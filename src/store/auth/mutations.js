/*
export function someMutation (state) {
}
*/

import {LocalStorage} from 'quasar'

export function setToken(state, token) {
    state.accessToken = token
    LocalStorage.set('auth.token', token)
    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export function setUser(state, user) {
    state.user = user
    LocalStorage.set("auth.user", JSON.stringify(user))
}
