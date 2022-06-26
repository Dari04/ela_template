<template>
  <div class="container py-5 has-background-white">
    <h2 class="has-text-centered mb-3 mt-5">Itinerary</h2>
    <h5 class="has-text-centered mb-6 is-flex is-justify-content-center is-align-content-center">
      <figure class="image is-32x32 mr-3">
        <img src="https://ela-template.vercel.app/img/pin-ela.png">
      </figure>Sorprendente Bolivia</h5>

    <div class="itineraryDays is-relative">
      <div class="columns is-desktop itineraryCol">
        <ItineraryDay />
        <ItineraryDay />
        <ItineraryDay />
      </div>
    </div>
  </div>
</template>

<script>
import ItineraryDay from "@/components/itinerary/ItineraryDay.vue";

export default {
  name: "Itinerary",
  components: {
    ItineraryDay,
  },
};
</script>
