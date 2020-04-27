<template>

	<div class="container">

		<div class="row offset-2">
			<div class="col-8">
				<h1 class="display-4 text-center">Registration Page</h1>
				<v-form
				lazy-validation
				>
				<v-text-field
				v-model="email"
				prepend-icon="mdi-account-circle"
				:counter="10"
				label="Email"
				required
				></v-text-field>

				<v-text-field
				v-model="password"
				:counter="8"
				label="Password"
				:type="showPassowrd ? 'text' :  'password' "
		        prepend-icon="mdi-lock"
		        :append-icon="showPassowrd ? 'mdi-eye' : 'mdi-eye-off' "
		        @click:append="showPassowrd = ! showPassowrd"
				required
				></v-text-field>

			  <div class="my-2">
		        <v-btn @click="register" class="cyan text-center">Register</v-btn>
		      </div>
			<div class="error" v-html="error"  />

		</v-form>
	</div>
</div>
</div>



	<!-- <div>
		<h1>Register</h1>
		<center>
			<input type="email" placeholder="Email" v-model="email"> <br>
			<input type="password" placeholder="Password" v-model="password"> <br>
			<button @click="register">Register</button>
			<div class="error" v-html="error"  />
		</center>
	</div> -->
</template>


<script>
	import AuthenticationService from '@/services/AuthenticationService'
	export default {
		data() {
			return {
				email: '',
				password: '',
				error: null,
				showPassowrd: false,
				info: []
			}
		},
		methods: {
			async register() {
				try {
					const response = await AuthenticationService.register({
						email: this.email,
						password: this.password
					})
					this.$store.dispatch('setToken',response.data.token)
					this.$store.dispatch('setUser',response.data.token)
					this.$router.push({
						name: 'login'
					})
				} catch(error) {
					this.error = error.response.data.error
				}
				
				
			},
			async getData() {
				const response = await AuthenticationService.get()
			}
		}
	}
</script>


<style scoped>
.error {
	color: red;
}
</style>