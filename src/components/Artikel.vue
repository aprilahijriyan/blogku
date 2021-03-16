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
        <q-item-section>
          <q-item-label class="text-bold text-capitalize" :style="'font-size: ' + (isPopuler ? '16px' : '22px')">Title goes here</q-item-label>
        </q-item-section>
        <q-item-label caption :lines="isPopuler ? 3 : 6" :style="isPopuler ? '': 'font-size: 16px'">
          <span class="text-weight-bold">Janet</span>
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
