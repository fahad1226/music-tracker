<template>
	<div class="white elevation-2">
		<v-toolbar flat dense class="cyan" dark>
			<v-toolbar-title> {{ title }} </v-toolbar-title>
			<v-btn @click="navigateTo({name: 'create'})" icon fab medium absolute right middle>
				<v-icon>add_box</v-icon>
			</v-btn>
		</v-toolbar>

		<div class="pl-4 pr-4 pt-2 pb-2">
			<slot>
				No slot content defined yet.
			</slot>
		</div>
	</div>
</template>


<script>
	export default  {
		props: ['title'],
		methods: {
			navigateTo(route) {
				this.$router.push(route)
			}
		}
	}
</script>


