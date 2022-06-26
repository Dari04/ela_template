<template>
  <div class="container navbarTopContainer is-fluid">
    <div class="columns navbarTop py-2">
        <div class="column navbarTopInfo">
            <p>
            <a href="tel:1-512-298-5285" target="_blank" class="p-0">
                <b-icon icon="phone" size="is-small"></b-icon> 
                US: +1 512-298-5285
            </a>
            <a href="javascript:void(0)" class="is-hidden-mobile">|</a>
            <a href="tel:44-203-239-0003" target="_blank">
                UK: +44 203 239-0003 
            </a>
            </p>
            <p>
            <a href="mailto:experience@encounterlatinamerica.com" target="_blank">
                 <b-icon icon="email" size="is-small" class="ml-3 navbarTopInfoMail"></b-icon> experience@encounterlatinamerica.com
            </a>
            </p>
        </div>
        <div class="column is-one-fifth navbarTopIcons has-text-right is-hidden-mobile">
            <a href="https://www.facebook.com/EncounterLatinAmerica" target="_blank">
                <b-icon icon="facebook"></b-icon> 
            </a>
            <a class="px-2" href="https://www.instagram.com/encounterlatinamerica/" target="_blank">
                <b-icon icon="instagram"></b-icon> 
            </a>
            <a href="https://www.youtube.com/c/EncounterLatinAmerica" target="_blank">
                <b-icon icon="youtube"></b-icon> 
            </a>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavbarTop'
}
</script>