<template>
 <section class="is-relative">
  <img class="effectTop" src="https://ela-template.vercel.app/img/cloudEffect/effect-top.png">
  <div class="has-fixed-background pb-6" 
    style="background-image:url('https://encounterlatinamerica.com/wp-content/uploads/2022/06/background.png');">
    <div class="container has-text-centered py-5 pxmob-4">
      <h2 class="has-text-centered my-6 has-text-white title-margin" v-animate-onscroll="{down: 'animated fadeInUp' }">SOME QUESTIONS?</h2>
      <div>
        <div class="AvatarImg" v-animate-onscroll="{down: 'animated fadeInUp' }">
          <div class="AgentProfileImg" alt="Travel agent profile" style="background-image:url('https://encounterlatinamerica.com/wp-content/uploads/2020/12/Signature-Lydia.jpg;">
          </div>
        </div>
      </div>
      <div>
        <h4 class="has-text-weight-bold has-text-warning mt-3 mb-4" v-animate-onscroll="{down: 'animated fadeInUp' }">Lydia Vereschildt</h4>
        <a class="questionsMail has-text-white" href="mailto:agent@encounterlatinamerica.com" v-animate-onscroll="{down: 'animated fadeInUp' }">agent@encounterlatinamerica.com</a>
        <p class="mt-3 has-text-white" v-animate-onscroll="{down: 'animated fadeInUp' }">Do you want have questions about the itinerary? 
          <br>Please send us a <a class="has-text-warning" href="mailto:agent@encounterlatinamerica.com" v-animate-onscroll="{down: 'animated fadeInUp' }"><i>Message</i></a>.</p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  export default {
    name: 'Questions'
  }
</script>