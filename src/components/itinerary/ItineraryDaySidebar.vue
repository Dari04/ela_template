<template>
	<div>
		<b-button size="is-medium" class="is-primary mt-4 button-iconright is-relative" @click="open = true">
			DETAILS
		</b-button>
		<b-sidebar class="sideBarBox" :fullheight="fullheight" :fullwidth="fullwidth" :overlay="overlay" :right="right" v-model="open">
			<div class="columns is-desktop">
        <div class="column p-0">
          <div class="map" style="background-image:url('https://i.ibb.co/vDgJxKz/map.jpg')">
           </div>
        </div>
        <div class="column p-0 sideBarInfo">
          <div class="sidebarTopBar">
              <a class="has-text-black" href="javascript:void(0)" @click="open = false"><b-icon icon="close-thick" size="is-medium mr-1"></b-icon></a>
          </div>
          <ItineraryDaySidebarInfo />
          <ItineraryDaySidebarInfo />
          <ItineraryDaySidebarInfo />
          <ItineraryDaySidebarInfo />
          <ContactUsButton class="sideBarContactUs" />
        </div>
      </div>
		</b-sidebar>
	</div>
</template>

<script>

import ItineraryDaySidebarInfo from '@/components/itinerary/sidebar/ItineraryDaySidebarInfo.vue'
import ContactUsButton from '@/components/contactUs/ContactUsButton.vue'

export default {
   name: 'ItineraryDayContent',
   components: {
    ItineraryDaySidebarInfo,
    ContactUsButton
   },
  data() {
    return {
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: true,
      right: true,
    };
  }
}
</script>

<style>
  .map{
    height: 530px;
    background-size: cover;
    width: 100%;
    background-position-x: center;
    background-position-y: 40%;
  }
@media screen and (min-width: 1024px){
  .map{
      height: 102%;
      background-size: cover;
      position: fixed;
      width: 52%;
  }
}
@media screen and (max-width: 768px){
  .map {
      height: 270px;
  }
}
</style>