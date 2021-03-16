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
          <div class="flex q-mt-sm text-capitalize">
            <q-chip v-for="i in ($q.platform.is.desktop ? 8 : 3)" :key="i" clickable @click="onClick" text-color="white" color="primary" icon="label">
              tag
            </q-chip>
            <q-chip outline clickable @click="onClick" class="text-bold text-capitalize">lihat semua</q-chip>
          </div>
          <q-list class="scroll q-mt-md hide-scrollbar" ref="scrollTargetRef" style="max-height: 700px">
              <q-infinite-scroll ref="infScroll" @load="onLoadMenu" :offset="700" :scroll-target="scrollTarget">
                <artikel v-for="(item, idx) in articles" :key="idx" />
                <template v-slot:loading>
                  <div class="text-center q-my-md">
                    <q-spinner-dots color="primary" size="40px" />
                  </div>
                </template>
              </q-infinite-scroll>
              <q-banner v-if="error_occured" rounded dense class="bg-grey text-white text-bold text-capitalize">
                <template v-slot:avatar>
                  <q-icon name="error" color="red" />
                </template>
                <div style="font-size: 16px">Maaf kami tidak bisa mendapatkan artikel :(</div> 
                <template v-slot:action>
                  <q-btn flat color="white" label="Reload?" @click="reloadArticle" />
                </template>
              </q-banner>
            </q-list>
          <div class="lt-md q-mb-lg"></div>
        </div>
        <div class="gt-sm">
          <div class="q-mr-sm"></div>
        </div>
        <div class="col-md-4 gt-sm">
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
export default {
  components: { Artikel },
  name: 'PageIndex',
  data() {
    return {
      slide: 1,
      text: "",
      scrollTarget: void 0,
      articles: [],
      error_occured: false,
      counter: 0
    }
  },
  methods: {
    onClick() {
      console.log("chip clicked")
    },
    onLoadMenu (index, done) {
      this.error_occured = false
      if (index > 1) {
        setTimeout(() => {
          if (this.counter == 5) {
            this.error_occured = true
            done(true)
            return
          }
          this.articles.push({}, {}, {}, {}, {}, {}, {})
          done()
        }, 1000)
      }
      else {
        setTimeout(() => {
          done()
        }, 200)
      }
      this.counter += 1
    },
    reloadArticle() {
      this.$refs.infScroll.resume();
    }
  }
}
</script>
