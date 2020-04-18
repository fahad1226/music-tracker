<template>

	<div class="container">

		<div class="row offset-2">
			<div class="col-8">
				<h1 class="display-4 text-center">Login User</h1>
				<v-form
				lazy-validation
				>
				<v-text-field
				v-model="email"
				:counter="10"
				label="Email"
				required
				></v-text-field>

				<v-text-field
				v-model="password"
				:counter="8"
				label="Password"
				required
				></v-text-field>

			  <div class="my-2">
		        <v-btn @click="login" class="cyan text-center">Login</v-btn>
		      </div>
			<div class="error" v-html="error"  />

		</v-form>

	
	</div>
</div>
</div>
	
</template>

<script>
	import AuthenticationService from '@/services/AuthenticationService'
	export default {
		data() {
			return {
				email: '',
				password: '',
				error: null,
				users: []
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			async login() {
				try {
					const response = await AuthenticationService.login({
						email: this.email,
						password: this.password
					})
					this.$store.dispatch('setToken',response.data.token)
					this.$store.dispatch('setUser',response.data.user)
				} catch(error) {
					this.error = error.response.data.error
				}
			},

			async getData() {
				try {
					const response = await AuthenticationService.getData()
					this.users = response.data
				} catch(error) {
					this.errro = error.response.data.error
				}
			}
		}
	}
</script> 


<style scoped>
.error {
	color: red;
}
</style>