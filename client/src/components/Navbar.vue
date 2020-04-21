<template>
  <v-card
  flat
  height="80px"
  tile
  >
  <v-toolbar dense dark>  
    <v-toolbar-title dark >Music Tracker</v-toolbar-title>


    <router-link to="songs" tag="span">
      <v-tab dark>
        Browse
    </v-tab>
    </router-link>




   <!--  <v-tab>Tab 1</v-tab>
   <v-tab>Tab 2</v-tab>
   <v-tab>Tab 3</v-tab> -->


   <v-spacer></v-spacer>

   <v-btn icon>
    <v-icon>mdi-heart</v-icon>
  </v-btn>


<router-link to="login" tag="span">
    <v-btn dark v-if="! $store.state.isUserLoggedIn">
      Login
  </v-btn>
</router-link>


<router-link to="register" tag="span">
    <v-btn dark v-if="! $store.state.isUserLoggedIn">
      SignUp
  </v-btn>
</router-link>

<v-btn dark @click="logout" v-if="$store.state.isUserLoggedIn">
    Logout
</v-btn>

   <!--    <v-btn icon>
     <v-icon>mdi-dots-vertical</v-icon>
 </v-btn> -->
</v-toolbar>
</v-card>
</template>


<script>

  export default {

    methods: {
        logout() {
            this.$store.dispatch('setToken',null)
            this.$store.dispatch('setUser',null)
            this.$router.push({
                name: 'home'
            })
        }
    }

}

</script>


<style>
a {  text-decoration: none;}
</style>