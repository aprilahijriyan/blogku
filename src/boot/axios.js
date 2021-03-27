import Vue from 'vue'
import axios from 'axios'

const api = axios.create(
    {
        baseURL: "http://127.0.0.1:5000"
    }
)
export default ({ store, Vue }) => {
    Vue.prototype.$axios = api
    store.$axios = api
}
