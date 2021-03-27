<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-dark">
        <q-toolbar-title>
          Blog Ku
        </q-toolbar-title>

        <q-btn to="/login" outline label="Masuk" class="q-mr-md"/>
        <q-btn to="/register" color="primary" label="Daftar" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {  },
  data () {
    return {
    }
  }
}
</script>
