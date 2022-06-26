<template>
    <div class="column">
      <div class="media-aside-text" v-animate-onscroll="{down: 'animated fadeIn' }">
          <div class="media-image">
            <ItineraryDayImage />
          </div>
          <div class="media-body">
            <ItineraryDayContent />
            <ItineraryDaySidebar />
          </div>
      </div>
    </div>
</template>

<script>

import ItineraryDayImage from '@/components/itinerary/ItineraryDayImage.vue'
import ItineraryDayContent from '@/components/itinerary/ItineraryDayContent.vue'
import ItineraryDaySidebar from '@/components/itinerary/ItineraryDaySidebar.vue'

export default {
   name: 'Itinerary',
   components: {
    ItineraryDayImage,
    ItineraryDayContent,
    ItineraryDaySidebar,
   },
}
</script>