<template>
  <q-page>
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
    <div class="q-pa-md q-gutter-md">
      <div class="row flex justify-between">
        <div class="col-md">
          <div class="row q-gutter-sm">
            <q-input outlined v-model="text" label="Cari apa?" class="col">
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
              <template v-slot:append v-if="text">
                <q-icon name="close" @click="text = ''" class="cursor-pointer" />
              </template>
            </q-input>
            <q-btn icon="filter_list"/>
          </div>
          <div class="flex q-gutter-sm q-mt-sm text-capitalize">
            <q-chip v-for="i in ($q.platform.is.desktop ? 8 : 3)" :key="i" clickable @click="onClick" text-color="white" color="primary" icon="label">
              tag
            </q-chip>
            <q-chip outline clickable @click="onClick" class="text-bold text-capitalize">lihat semua</q-chip>
          </div>
          <q-list separator bordered class="q-mt-md">
              <artikel v-for="i in 5" :key="i" />
            </q-list>
          <div class="lt-md q-mb-lg"></div>
        </div>
        <div class="gt-sm">
          <div class="q-mr-sm"></div>
        </div>
        <div class="col-md-4">
          <q-card>
            <q-card-section>
              <div class="flex justify-between">
                <div class="text-h5">Populer</div>
                <a href="#" class="text-bold no-underline text-blue" @click.prevent="onClick">Lihat semua</a>
              </div>
            </q-card-section>
            <q-list separator bordered >
              <artikel v-for="i in 5" :key="i" :isPopuler="true"/>
            </q-list>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Artikel from 'src/components/Artikel.vue'
export default {
  components: { Artikel },
  name: 'PageIndex',
  data() {
    return {
      slide: 1,
      text: ""
    }
  },
  methods: {
    onClick() {
      console.log("chip clicked")
    }
  }
}
</script>
