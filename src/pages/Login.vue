<template>
  <q-page padding class="window-height window-width row justify-center items-center">
    <!-- content -->
    <div class="q-pa-md">
      <div class="column q-gutter-md " style="max-width: 500px;">
        <q-input type="email" v-model="text" label="Email">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-input type="password" v-model="text" label="Password">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </div>
  </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      text: ""
    }
  }
}
</script>
