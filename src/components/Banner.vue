<template>
<div class="hero ImgFullEffectToBottom" style="background-image:url('https://itp-saas-api-dev.s3.us-east-2.amazonaws.com/thumbnails/BO/BO-SRE/1600X900/bolivia-1756155_1920_thumbnail_1600X900.jpeg')">
	<img v-animate-onscroll="{down: 'animated zoomInUp'}" src="https://itp-saas-api-dev.s3.us-east-2.amazonaws.com/tenancy/assets/not_found/balloons-logo.png">
	<img v-animate-onscroll="{down: 'animated zoomInUp'}" class="responsibleTravel" src="https://itp-saas-api-dev.s3.us-east-2.amazonaws.com/tenancy/assets/not_found/responsible_travel.png">
	<img class="effectCloud" src="https://itp-saas-api-dev.s3.us-east-2.amazonaws.com/tenancy/assets/BO/BO-SRE/effect-top-bottom.png">
</div>
</template>

<script>

export default {
  name: 'Banner'
}
</script>