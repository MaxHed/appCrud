<template>
  <v-app>
    <v-icon icon="mdi:mdi-minus"></v-icon>
      <v-app-bar app >
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>My App</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
              <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
              
          </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app>
          
      </v-navigation-drawer>
      <v-main>
          <v-container fluid>
              <v-row>
                  <v-col cols="12">
                      <v-card>
                        <NuxtPage/>
                      </v-card>
                  </v-col>
              </v-row>
          </v-container>
      </v-main>
     
  </v-app>
</template>

<script>


export default {
    data() {
        return {
            drawer: null
        }
    },




}
</script>

<style>

</style>