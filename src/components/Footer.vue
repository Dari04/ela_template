<template>
  <section>
    <FooterMain />
    <FooterSecondary />
  </section>
</template>


<script>
import FooterMain from '@/components/footer/FooterMain.vue'
import FooterSecondary from '@/components/footer/FooterSecondary.vue'
  export default {
    name: 'Footer',
    components: {
      FooterMain,
      FooterSecondary
    }
  }
</script>