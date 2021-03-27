<template>
  <q-page>
    <!-- content -->
    <q-img src="https://cdn.quasar.dev/img/mountains.jpg" height="400px" />
    <div class="position-relative">
      <q-avatar size="150px" style="position: absolute; left: 5px; bottom: 190px">
        <img class="fit" src="https://cdn.quasar.dev/img/mountains.jpg" />
      </q-avatar>
      <div class="q-gutter-sm" style="position: absolute; right: 5px; bottom: 260px">
        <q-btn push label="Ganti Sampul" color="grey" icon="camera_enhance"/>
      </div>
    </div>
    
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
