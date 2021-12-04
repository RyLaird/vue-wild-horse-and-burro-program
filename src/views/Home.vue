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
      <v-container style="height: 3000px;">
        <v-card class="mt-10">
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
              <v-btn v-if="btnChange" class="black mx-4 white--text" height="50px" width="200px" to="/map">
                View Web Map
              </v-btn>
              <v-btn v-if="!btnChange" class="black mx-4 white--text" height="50px" width="200px" to="/data">
                View Program Data
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card>
        <v-row class= "mt-8 mb-5">
          <v-col>
            <h1 class="text-center">About Wild Horses and Burros</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>  Wild horses and burros are defined by federal law as unbranded, unclaimed, 
              free-roaming horses or burros found on public lands in the United States.  
              Today, the Bureau of Land Management protects and manages wild horses and burros in 
              balance with other public resource values on 177 herd management areas across 26.9 million 
              acres of public lands. Most wild horses and burros living today are descendants of animals 
              that were released or escaped from Spanish explorers, ranchers, miners, the U.S. Cavalry and 
              Native Americans.  Wild horses and burros are diverse in their coloring, ranging from solid brown and black to colorful pintos and palominos.              </p>
          </v-col>
        </v-row>
        <v-row class="mb-5">
          <v-col>
            <h3>Wild burros average 11 hands high (44 inches) and weigh about 500 pounds.</h3>
            <v-img class="mt-13"
              src="../assets/burro_sil.png"
              max-width="300px"
            >
            </v-img>
          </v-col>
          <v-col>
            <v-card
              elevation="10"
            >
              <v-img class="mb-6"
                src="../assets/horse_burro.png">
              </v-img>
            </v-card>
          </v-col>
          <v-col>
            <h3>Most wild horses stand 13 to 15 hands high (52-60 inches) and weigh from 700 to 1,000 pounds.</h3>
            <v-img
              src="../assets/horse_sil.png"
              max-width="300px"
            >
            </v-img>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-8">
          <v-col>
            <h1 class="text-center">Program History</h1>
          </v-col>
        </v-row>
        <v-row class="mb-5">
          <v-col>
            <v-timeline>
              <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :color="year.color"
                small
              >
                <template v-slot:opposite>
                  <span
                    :class="`headline font-weight-bold ${year.color}--text`"
                    v-text="year.year"
                  ></span>
                </template>
                <div class="py-4">
                  <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                    {{year.header}}
                  </h2>
                  <div>
                    {{year.description}}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-container>
      <!-- <center>
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
      </center> -->
    </v-sheet>
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
        btnChange: false,
        years: [
          {
            color: 'blue',
            year: 'Early 1950s',
            header: 'Wild Horse Annie',
            description: 'During the 1950s, Velma B. Johnston, later known as "Wild Horse Annie," became aware of the ruthless and indiscriminate manner in which wild horses were being treated on western rangelands.  So-called "mustangers" played a major role in harvesting wild horses for commercial purposes during this time.',
          },
          {
            color: 'cyan',
            year: 'Late 1950s',
            header: 'Grassroots Campaign',
            description: 'Wild Horse Annie led a grassroots campaign, famously involving many school children.  Newspapers published articles about the exploitation of wild horses and burros.  As noted by the Associated Press on July 15, 1959: "Seldom has an issue touched such a responsive chord."'
          },
          {
            color: 'teal',
            year: '1959',
            header: 'Wild Horse Annie Act',
            description: "In January 1959, Nevada Rep. Walter Baring introduced a bill prohibiting the use of motorized vehicles to hunt wild horses and burros on public lands.  The Wild Horse Annie Act became Public Law 86-234 on Sept. 8, 1959, but it did not include Annie's recommendation that Congress initiate a program to protect, manage and control wild horses and burros."
          },
          {
            color: 'blue',
            year: 'Early 1970s',
            header: 'Mustangers',
            description: 'By 1971, the population of wild horses on public lands had declined significantly because of the encroachment of man and the impact of mustangers.'
          },
          {
            color: 'cyan',
            year: '1971',
            header: 'Wild Free-Roaming Horses and Burro Act',
            description: 'In response to public outcry, Congress unanimously passed the “Wild Free-Roaming Horses and Burros Act” (Public Law 92-195) to provide for the necessary management, protection and control of wild horses and burros on public lands.  President Richard M. Nixon signed the bill into law on December 15, 1971. '
          },
        ],
      }
    }
  }
</script>
