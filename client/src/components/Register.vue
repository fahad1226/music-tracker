<template>
	<div>
		<center>
			<input type="text" placeholder="Name" v-model="name"> <br> 
			<input type="email" placeholder="Email" v-model="email"> <br>
			<input type="text" placeholder="address" v-model="address"> <br>
			<input type="password" placeholder="Password" v-model="password"> <br>
			<button @click="register">Register</button>
		</center>
	</div>
</template>


<script>
import AuthenticationService from '@/services/AuthenticationService'
	export default {
		data() {
			return {
				name: '',
				email: '',
				address: '',
				password: ''
			}
		},
		methods: {
			async register() {
				const response = await AuthenticationService.register({
					name: this.name,
					email: this.email,
					address: this.address,
					password: this.password
				})
				console.log(response.data);
			}
		}
	}
</script>