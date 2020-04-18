<template>
  <v-card
  flat
  height="80px"
  tile
  >
  <v-toolbar dense dark>  
    <v-toolbar-title dark >Music Tracker</v-toolbar-title>

   
      <router-link to="/" tag="span">
      <v-tab dark>
        Home
      </v-tab>
    </router-link>


   <!--  <v-tab>Tab 1</v-tab>
   <v-tab>Tab 2</v-tab>
   <v-tab>Tab 3</v-tab> -->


    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <router-link to="register" tag="span">

      <v-btn dark v-if="! $store.state.isUserLoggedIn">
        SignUp
      </v-btn>

    </router-link>


   <!--    <v-btn icon>
     <v-icon>mdi-dots-vertical</v-icon>
   </v-btn> -->
 </v-toolbar>
</v-card>
</template>


<script>
  export default {

  }
</script>


<style>
a {  text-decoration: none;}
</style>