<template>
  <section>
    <NavbarTop />
    <NavbarMain />
    <HeroImage />
    <ItineraryDescription
      id="itineraryDescription" />
    <Banner />
    <Itinerary id="itinerary" class="pxmob-4" />
    <HotelsAndPrices id="accommodationsAndPrices"/>
    <ContactUs id="contactUs" />
    <WhyCompany class="pxmob-4" />
    <Questions />
    <Footer />
    <NavbarResponsive />
  </section>
</template>

<script>
import NavbarTop from "@/components/navBar/NavbarTop.vue";
import NavbarMain from "@/components/navBar/NavbarMain.vue";
import NavbarResponsive from "@/components/navBar/NavbarResponsive.vue";
import HeroImage from "@/components/HeroImage.vue";
import ItineraryDescription from "@/components/Description.vue";
import Banner from "@/components/Banner.vue";
import Itinerary from "@/components/Itinerary.vue";
import HotelsAndPrices from "@/components/HotelsAndPrices.vue";
import ContactUs from "@/components/ContactUs.vue";
import WhyCompany from "@/components/WhyCompany.vue";
import Questions from "@/components/Questions.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "WebItinerary",
  components: {
    NavbarTop,
    NavbarMain,
    NavbarResponsive,
    HeroImage,
    ItineraryDescription,
    Banner,
    Itinerary,
    HotelsAndPrices,
    ContactUs,
    WhyCompany,
    Questions,
    Footer,
  },
};
</script>
