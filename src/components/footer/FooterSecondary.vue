<template>
  <div class="footerSecondaryBg">
    <b-navbar class="footerSecondary container">
        <template #start>
            <b-navbar-item href="tel:1-512-298-5285" class="p-0">
            Encounter Latin America: 
                <strong class="ml-2">US: +1 512-298-5285</strong>            
            </b-navbar-item>
            <b-navbar-item href="javascript:void(0)" class="px-1">|</b-navbar-item>
            <b-navbar-item href="tel:44-203-239-0003" class="p-0">
                <strong>UK: +44 203 239-0003</strong> 
            </b-navbar-item>
            <b-navbar-item href="javascript:void(0)" class="px-1">|</b-navbar-item>
            <b-navbar-item href="mailto:experience@encounterlatinamerica.com" class="px-0">
                 <strong>experience@encounterlatinamerica.com</strong>
            </b-navbar-item>
        </template>
        <template #end>
            <b-navbar-item href="https://www.facebook.com/EncounterLatinAmerica">
                <b-icon icon="facebook"></b-icon> 
            </b-navbar-item>
            <b-navbar-item href="https://www.instagram.com/encounterlatinamerica/">
                <b-icon icon="instagram"></b-icon> 
            </b-navbar-item>
            <b-navbar-item href="https://www.youtube.com/c/EncounterLatinAmerica">
                <b-icon icon="youtube"></b-icon> 
            </b-navbar-item>
        </template>
    </b-navbar>
  </div>
</template>


<script>
  export default {
    name: 'FooterSecondary'
  }
</script>