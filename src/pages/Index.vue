<template>
  <q-page>
    <q-carousel
      animated
      swipeable
      :padding="true"
      v-model="slide"
      control-type="unelevated"
      control-color="primary"
      arrows
      infinite
    >
      <q-carousel-slide v-for="i in 5" :key="i" :name="i">
        <artikel-terbaru />
      </q-carousel-slide>
    </q-carousel>
    <div class="q-pa-md">
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
          <q-list class="q-mt-md q-gutter-sm">
              <artikel v-for="(item, idx) in articles" :key="idx" />
              <div class="flex justify-center">
                <q-pagination
                v-model="current"
                :max="5"
                direction-links
                push
                color="teal"
              />
              </div>
          </q-list>
          <div class="lt-md q-mb-lg"></div>
        </div>
        <div class="gt-sm">
          <div class="q-mr-sm"></div>
        </div>
        <div class="col-md-4 gt-sm q-gutter-md">
          <q-card>
            <q-card-section>
              <div class="flex justify-between">
                <div class="text-h5">Populer</div>
                <a href="#" class="text-bold no-underline text-blue text-capitalize" @click.prevent="onClick">Lihat semua</a>
              </div>
            </q-card-section>
            <q-list separator bordered>
              <artikel v-for="i in 5" :key="i" :isPopuler="true"/>
            </q-list>
          </q-card>
          <q-card>
            <q-card-section>
              <div class="flex justify-between">
                <div class="text-h5">Tags</div>
                <a href="#" class="text-bold no-underline text-blue text-capitalize" @click.prevent="onClick">Lihat semua</a>
              </div>
            </q-card-section>
            <q-separator inset />
            <div class="flex justify-center text-capitalize q-pa-sm">
              <q-chip v-for="i in ($q.platform.is.desktop ? 8 : 3)" :key="i" clickable @click="onClick" text-color="white" color="primary" icon="label">
                tag
              </q-chip>
            </div>
          </q-card>
          <q-card>
            <q-card-section>
              <div class="text-h5">
                Contact
              </div>
            </q-card-section>
            <q-card-section>
              <q-input outlined v-model="text" label="Subject" />
              <q-input
                v-model="text"
                type="textarea"
              />
            </q-card-section>
          </q-card>
          <div class="row q-gutter-sm">
            <q-input outlined v-model="text" label="Masukan email kamu..." class="col">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
              <template v-slot:append v-if="text">
                <q-icon name="close" @click="text = ''" class="cursor-pointer" />
              </template>
            </q-input>
            <q-btn color="red" label="Subscribe"/>
          </div>
        </div>
      </div>
    </div>
    <div class="column bg-dark text-white text-bold">
      <div class="flex items-center justify-center q-mt-md q-gutter-md">
        <q-btn round color="primary" icon="lab la-github" />
        <q-btn round color="primary" icon="lab la-facebook-f" />
        <q-btn round color="primary" icon="lab la-linkedin-in" />
      </div>
      <div class="flex items-center justify-center q-mt-md">
        <p>Copyright (c) Aprila Hijriyan. All right reserved</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import Artikel from 'src/components/Artikel.vue'
import ArtikelTerbaru from 'src/components/ArtikelTerbaru.vue'
export default {
  components: { Artikel, ArtikelTerbaru },
  name: 'PageIndex',
  data() {
    return {
      slide: 1,
      text: "",
      scrollTarget: void 0,
      articles: [...Array(5)],
      error_occured: false,
      counter: 0,
      current: 1
    }
  },
  methods: {
    onClick() {
      console.log("chip clicked")
    }
  }
}
</script>
