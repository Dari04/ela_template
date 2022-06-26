<template>
<div class="hero is-fullheight effectContactUs has-background" style="background-image:url('https://itp-saas-api-dev.s3.us-east-2.amazonaws.com/thumbnails/BO/BO-UYU/1600X900/Uyuni%2034956294780_8d81512c98_k_thumbnail_1600X900.jpeg')">
	<div class="hero-body">
		<div class="container textHeroImage has-text-right">
			<h1 class="title has-text-white" v-animate-onscroll="{down: 'animated fadeInUp' }">IS EVERYTHING JUST<br> THE WAY YOU WANT IT?</h1>
			<ContactUsButton />
		</div>
	</div>
</div>
</template>

<script>


import ContactUsButton from '@/components/contactUs/ContactUsButton.vue'

export default {
  name: 'ContactUs',
  components: {
  ContactUsButton
  }
}
</script>