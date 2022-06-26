<template>
  <div>
       <NavbarContent />
       <NavbarContent class="animated fadeInDown is-hidden" v-class-on-scroll="{ class: 'fixedScroll', offset: 0 }"/>
  </div>
</template>

<script>
import ClassOnScroll from 'vue-class-on-scroll'
import NavbarContent from './NavbarContent.vue'

export default {
  name: "NavbarMain",
  components: {
    NavbarContent,
  },
  directives: {
  'class-on-scroll': ClassOnScroll,
  },
};


</script>
