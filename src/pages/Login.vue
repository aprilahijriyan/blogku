<template>
  <q-page padding class="window-height window-width row justify-center items-center bg-teal-4">
    <!-- content -->
    <div class="q-gutter-md" style="width: 350px;">
      <div class="column q-gutter-md q-pa-md shadow-10 bg-white" style="border-radius: 5px">
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
        <div class="flex justify-end">
          <a href="#">Lupa Password?</a>
        </div>
        <q-btn push color="green-4" text-color="white" label="LOGIN" />
      </div>
      <div class="flex justify-center q-gutter-y-md shadow-3 bg-white" style="border-radius: 2px">
        <p>Baru di blogku ? <a href="#">Buat akun</a></p>
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
