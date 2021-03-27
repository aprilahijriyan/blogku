<template>
  <q-item clickable v-ripple @click="onArticleClick">
    <div class="row">
      <div :class="'col-md-' + (isPopuler ? 5 : 4)">
        <q-item-section thumbnail>
          <img style="border-radius: 8px" class="fit" src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>
      </div>
      <div class="col">
        <div class="lt-md"><div class="q-mt-sm"></div></div>
        <div class="flex justify-between q-mb-sm">
          <q-item-section>
            <q-item-label :class="'text-bold text-capitalize ' + ($q.platform.is.desktop ? 'ellipsis' : '')" :style="'font-size: ' + (isPopuler ? '16px' : '22px')">Membuat REST API dengan zemfrog framework!</q-item-label>
          </q-item-section>
        </div>
        <q-item-label caption :lines="isPopuler ? 2 : 4" :style="isPopuler ? '': 'font-size: 16px'">
          <div class="row">
            <p>By <span class="text-weight-bold">Aprila Hijriyan - 5 min ago</span></p>
          </div>
          <div class="text-bold">
            -- I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
          -- I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
          -- I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
          -- I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
          -- I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
          -- I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
          -- I'll be in your neighborhood doing errands this
          weekend. Do you want to grab brunch?
          </div>
        </q-item-label>
        <div class="flex q-mt-sm">
          <q-chip class="text-bold text-capitalize" clickable @click="onClick" :size="isPopuler? 'sm': 'md'">tag</q-chip>
        </div>
      </div>
    </div>
  </q-item>
  
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props: {
    isPopuler: Boolean
  },
  methods: {
    onArticleClick() {
      console.log("article clicked")
    },
    onClick() {
      console.log("chip clicked")
    }
  }
}
</script>
