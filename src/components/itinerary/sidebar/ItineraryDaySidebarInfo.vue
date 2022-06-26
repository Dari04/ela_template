<template>
<section class="has-background-white">
  <hr class="dividerEla">
  <ItineraryDaySidebarHero />
  <div class="sidebarDayDescription pt-3 pb-5 px-5">
    <div class="media-aside-text">
        <div class="media-body p-0 mt-0">
          <div class="media-body-content">
              <div class="is-flex mb-1">
                <h6 class="mr-4">Day 1</h6>
                <h6 class="media-date">
                <b-icon icon="calendar-blank-outline mr-2" size="is-small"></b-icon>
                <span>Sunday, May 15, 2022</span>
                </h6>
              </div>
            <h6 class="media-title">Arrive in Santa Cruz</h6>
            <h6 class="media-location">
            <b-icon icon="map-marker-outline mr-2" size="is-small"></b-icon>
            <span>Santa Cruz</span
            ></h6>
          </div>
        </div>
    </div>
    <article class="my-5">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </article>
  </div>
</section>
</template>
<script>
import ItineraryDaySidebarHero from '@/components/itinerary/sidebar/ItineraryDaySidebarHero'

export default {
   name: 'ItineraryDaySidebarInfo',
   components: {
     ItineraryDaySidebarHero
   }
}
</script>