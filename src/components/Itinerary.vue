<template>
  <div class="container py-5 has-background-white">
    <h2 class="has-text-centered mb-6 mt-5">Itinerary</h2>
    <div class="itineraryDays">
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
