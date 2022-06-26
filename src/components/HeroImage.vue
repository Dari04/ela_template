<template>
  <div class="hero is-fullheight has-background animated hinge zoomIn">
    <HeroImageCloudEffect />
    <div
      class="hero-background heroAnimation"
      style="
        background-image: url('https://encounterlatinamerica.com/wp-content/uploads/2022/06/background.png');
      "
    ></div>
    <div class="hero-body pt-0">
      <div class="container textHeroImage">
        <h3 class="subtitle has-text-white">
          <b-icon icon="calendar-blank-outline" size="is-medium"></b-icon>
          01-Jun-2022

          <b-icon icon="arrow-right" size="is-medium" class="mx-3"></b-icon>

          <b-icon icon="calendar-blank-outline" size="is-medium"></b-icon>
          17-Jun-2022

          <b-icon icon="map-marker-outline" size="is-medium" class="ml-5"></b-icon>
          Bolivia

          <b-icon icon="account" size="is-medium" class="ml-5"></b-icon>
          Paxs 01
        </h3>
        <h1 class="title max800 is-uppercase has-text-white">
          Sorprendente Bolivia
        </h1>
        <h3 class="subtitle2 has-text-white">
          <span class="mr-4">
          CATDMC
          </span>
          <span class="ml-4">
          I06-037
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImageCloudEffect from "@/components/heroImage/HeroImageCloudEffect.vue";

export default {
  name: "HeroImage",
  components: {
    HeroImageCloudEffect,
  },
  props: {
    itinerary: {
      type: [Array, Object],
      default: () => [],
    },
  },
  methods: {
    formatDate(date) {
      let formatted = "";
      if (date) {
        const d = new Date(date + " 00:00:00");
        const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
        const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
        const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
        formatted = `${da}-${mo}-${ye}`;
      }
      return formatted;
    },
  },
};
</script>
