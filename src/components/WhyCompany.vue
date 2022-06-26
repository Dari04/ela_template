<template>
		<div class="container py-5">
			<WhyCompanyText />
			<WhyCompanyReasons v-animate-onscroll="{down: 'animated fadeInUp' }"/>
		</div>
</template>

<script>

import WhyCompanyText from '@/components/whyCompany/WhyCompanyText.vue'
import WhyCompanyReasons from '@/components/whyCompany/WhyCompanyReasons.vue'

export default {
	name: 'WhyCompany',
	components: {
	WhyCompanyText,
    WhyCompanyReasons
  }
}
</script>
