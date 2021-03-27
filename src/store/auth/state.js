import {LocalStorage} from 'quasar'

export default function () {
  return {
    accessToken: LocalStorage.getItem('auth.token') || null,
    user: JSON.parse(LocalStorage.getItem('auth.user') || '{}')
  }
}
