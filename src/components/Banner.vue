<template>
<div class="hero ImgFullEffectToBottom" style="background-image:url('https://itp-saas-api-dev.s3.us-east-2.amazonaws.com/thumbnails/BO/BO-SRE/1600X900/bolivia-1756155_1920_thumbnail_1600X900.jpeg')">
	<img v-animate-onscroll="{down: 'animated zoomInUp'}" src="https://ela-template.vercel.app/img/balloons-logo.png">
	<img v-animate-onscroll="{down: 'animated zoomInUp'}" class="responsibleTravel" src="https://ela-template.vercel.app/img/responsible_travel.png">
	<img class="effectCloud" src="https://ela-template.vercel.app/img/cloudEffect/effect-top-bottom.png">
</div>
</template>

<script>

export default {
  name: 'Banner'
}
</script>