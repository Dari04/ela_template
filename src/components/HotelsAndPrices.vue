<template>
<section class="is-relative">
  <img class="effectTop" src="https://ela-template.vercel.app/img/cloudEffect/effect-top.png">
  <div class="has-fixed-background" 
    style="background-image:url('https://encounterlatinamerica.com/wp-content/uploads/2022/06/background.png');">
    <div class="container py-5 pxmob-4">
      <h2 class="has-text-centered my-6 has-text-white title-margin">Hotels and Prices</h2>
        <div class="pricing-table">
          <div class="columns" v-animate-onscroll="{down: 'animated fadeIn' }">
            <HotelsAndPricesBox />
            <HotelsAndPricesBox2 />
            <HotelsAndPricesBox3 />
          </div>
        </div>
    </div>
  </div>
  <img class="effectBottom" src="https://ela-template.vercel.app/img/cloudEffect/effect-bottom.png">
</section>
</template>

<script>
import HotelsAndPricesBox from "@/components/hotelsAndPrices/HotelsAndPricesBox";
import HotelsAndPricesBox2 from "@/components/hotelsAndPrices/HotelsAndPricesBox2";
import HotelsAndPricesBox3 from "@/components/hotelsAndPrices/HotelsAndPricesBox3";

export default {
  name: "HotelsAndPrices",
  components: {
    HotelsAndPricesBox,
    HotelsAndPricesBox2,
    HotelsAndPricesBox3,
  },
};
</script>
