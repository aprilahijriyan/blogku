<template>
  <q-img class="fit" src="https://cdn.quasar.dev/img/mountains.jpg" style="z-index: 0; position: absolute; left: 0px; top: 0px; opacity: 0.8; ">
    <div class="absolute-bottom text-subtitle1">
      <div :class="'text-bold text-capitalize ' + ($q.platform.is.desktop ? 'ellipsis' : '')" :style="'font-size: ' + ($q.platform.is.mobile ? '16px' : '22px')">Membuat REST API dengan zemfrog framework</div>
      <p>By <span class="text-weight-bold">Aprila Hijriyan - 5 min ago</span></p>
    </div>
  </q-img>
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
