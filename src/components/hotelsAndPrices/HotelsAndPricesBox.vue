<template>
      <div
        class="column pricing-plan mb-6 pb-3 is-select">
         <div class="has-background-white px-2 py-3">
            <div class="plan-price">
              <div class="plan-header">COMFORT</div>
                <div class="plan-price-amount">$ 5,133<small>.12</small></div>
              <div class="plan-total">Total Price</div>
              <button class="button">
                <b-icon icon="check-circle" size="is-small" class="mr-1"></b-icon>
                Selected
              </button>
            </div>
            <div class="plan-items">
              <div class="plan-carousel p-0 m-0">
                <HotelsAndPricesCarousel />
              </div>
            </div>
            <div class="plan-items">
              <div class="plan-item">
                <p class="has-text-weight-bold">San José</p>
                Hotel San José
              </div>
              <div class="plan-item">
                <p class="has-text-weight-bold">Arenal</p>
                Hotel Arenal
              </div>
              <div class="plan-item">
                <p class="has-text-weight-bold">La Fortuna</p>
                Hotel La Fortuna
              </div>
              <div class="plan-item">
                <p class="has-text-weight-bold">La Fortuna - surroundings</p>
                Posada La Fortuna
              </div>
            </div>
          </div>
      </div>
</template>

<script>
import HotelsAndPricesCarousel from "@/components/hotelsAndPrices/HotelsAndPricesCarousel";

export default {
  name: "HotelsAndPricesBox",
  components: {
    HotelsAndPricesCarousel,
  },
};
</script>
