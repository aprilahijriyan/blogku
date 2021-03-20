<template>
  <q-page padding class="window-height window-width row justify-center items-center bg-teal-4">
    <!-- content -->
    <div class="q-gutter-md" style="width: 400px;">
      <div class="column q-gutter-md q-pa-md shadow-10 bg-white" style="border-radius: 5px">
        <div class="q-mx-md row">
          <div class="col-12 col-md q-mr-md q-mb-sm">
            <q-input type="text" v-model="text" label="First name">
              <template v-slot:prepend>
                <q-icon name="account_box" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md">
            <q-input type="text" v-model="text" label="Last name">
              <template v-slot:prepend>
                <q-icon name="account_box" />
              </template>
            </q-input>
          </div>
        </div>
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
        <q-btn push color="green-4" text-color="white" label="REGISTER" />
      </div>
      <div class="flex justify-center q-gutter-y-md shadow-3 bg-white" style="border-radius: 2px">
        <p>Sudah punya akun ? <a href="#">Login</a></p>
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
