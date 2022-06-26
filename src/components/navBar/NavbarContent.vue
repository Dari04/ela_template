<template>
  <b-navbar class="navbarMain">
      <template #brand>
        <b-navbar-item href="#itineraryDescription" class="navbarMainValue">Description
        </b-navbar-item>
        <b-navbar-item href="#itinerary" class="navbarMainValue">Itinerary
        </b-navbar-item>
        <b-navbar-item>
          <img
            class="navbarMainLogo animated fadeIn"
            src="/img/logo.png"
            alt="Encounter Latin America"
          />
        </b-navbar-item>
        <b-navbar-item href="#accommodationsAndPrices" class="navbarMainValue">Hotels & Prices
        </b-navbar-item>
        <b-navbar-item href="#contactUs" class="navbarMainValue">Contact Us
        </b-navbar-item>
      </template>
  </b-navbar>
</template>

<script>

export default {
  name: "NavbarContent",
};


</script>
