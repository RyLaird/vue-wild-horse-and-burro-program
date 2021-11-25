<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="blue darken-2"
      dark
      shrink-on-scroll
      prominent
      src="https://images.unsplash.com/photo-1505494823402-3a4dd55f30cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(3,147,230,.7), rgba(1,73,115,.7)"
        ></v-img>
      </template>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-app-bar-title class="text-center justify-left py-5">
        Horse and Burro Program
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs 
        align-with-title
        icons-and-text
        grow
        >
          <v-tab to="/">
            <v-icon>mdi-home</v-icon>
            Home
          </v-tab>
          <v-tab to="/data">
            <v-icon>mdi-chart-line</v-icon>
            Program Data
          </v-tab>
          <v-tab to="/map">
            <v-icon>mdi-map</v-icon>
            Web Map
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="800"
    >
      <v-container style="height: 1000px;">
        <v-card>
          <v-carousel
            @change="btnChange = !btnChange"
            delimiter-icon="mdi-horseshoe"
          >
            <v-carousel-item
              :src="require('../assets/c1.png' )"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
            <v-carousel-item
              :src="require('../assets/c2.png' )"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <v-card-text>
            <v-row justify="center">
              <v-btn v-if="btnChange" class="black mx-4 white--text" height="50px" width="200px">
                View Web Map
              </v-btn>
              <v-btn v-if="!btnChange" class="black mx-4 white--text" height="50px" width="200px">
                View Program Data
              </v-btn>
            </v-row>
          </v-card-text>
          <!-- <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Author</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-switch
                  v-model="cycle"
                  label="Cycle Slides"
                  inset
                ></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list> -->
        </v-card>
      </v-container>
      <center>
        <v-footer class="foot" style="background-color: #1976D2 !important;" padless>
          <v-card
            style="width:100% !important"
            flat
            tile
            class="blue darken-2 white--text text-center"
          >
            <v-card-text>
              <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text
              class="white--text pt-0"
              style="width:100% !important"
            >This is a project using public data and does not reflect the views of the Bureau of Land Management Wild Horse Program</v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} —
              <strong>Wild Horse and Burro Program</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </center>
    </v-sheet>
  </v-card>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
    },
    data() {
      return {
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
        btnChange: false
      }
    }
  }
</script>
