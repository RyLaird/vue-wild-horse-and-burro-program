<template>
  <div class="data">
    <v-app-bar
      color="#6A76AB"
      dense
      dark
      prominent
      height="50px"
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(3,147,230,.7), rgba(1,73,115,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <!-- <v-app-bar-title class="text-center justify-left py-5">
        Horse and Burro Program
      </v-app-bar-title> -->

      <v-spacer></v-spacer>


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
    <v-main>
    <v-container>
      <data-intro></data-intro>
      <div>
        <!-- <h3>Hello</h3> -->
        <v-card class="mt-5 mb-8">
          <v-card-text>
            <v-container>
              <v-row class="mb-5">
                <v-col cols='12' md="8">
                  <h1 class="text-center font-weight-bold">
                    Population Increase since 1971
                  </h1>
                  <bar-chart></bar-chart>
                </v-col>
                <v-col cols='12' md="4">
                  <h2 class="text-center mt-10 mb-3">Myth</h2>
                  <v-alert
                  color="red"
                  type="error"
                  text
                  outlined
                  >
                    The BLM is managing wild horse herds to extinction.
                  </v-alert>
                  <h2 class="text-center mb-3">Truth</h2>
                  <v-alert
                  type="success"
                  elevation="3"
                  prominent
                  text
                  outlined
                  >
                  The BLM is seeking to achieve the Appropriate Management Level of 26,690 wild horses and burros on Western public rangelands
                  </v-alert>
                </v-col>
              </v-row>
              <v-row class="mt-5">
                <p class='text-subtitle-1 mt-8'>
                  The 2021 on-range population of wild horses and burros 
                  (approximately 86,189) is nearly three and a half times greater than 
                  the number found roaming in 1971 (about 25,300). The BLM is 
                  seeking to achieve the Appropriate Management Level of 26,690 
                  wild horses and burros on Western public rangelands, or about 
                  68,000 fewer than the current West-wide on-range population. 
                  The BLM monitors the genetic diversity of each herd through 
                  collection of hair samples during gather operations. Under an 
                  assistance agreement, researchers at Texas A&M University analyze 
                  the samples and reports recommendations to the BLM for specific herds.
                  </p>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
      <div>
        <v-card class="mt-5 mb-8">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="5">
                  <v-row class='mt-5 mb-8'>
                    <v-img
                      src="../assets/Nevada.png"
                      max-width="200px"
                    >
                    </v-img>
                    <v-img
                      src='../assets/California.png'
                      max-width="200px"
                    >
                    </v-img>
                    <v-img
                      src='../assets/Wyoming.png'
                      max-width="200px"
                    >
                    </v-img>
                  </v-row>
                  <h3 class='text-center font-weight-bold mb-5'>
                    Top 3 States with Highest Population
                  </h3>
                  <p class='text subtitle-1'>
                    As required under the Wild Free-Roaming Horses and Burros Act of 1971, 
                    the BLM conducts an annual population inventory to estimate the number of 
                    wild horses and burros roaming BLM-managed lands in the West.
                  </p>
                  <p class='text subtitle-1'>
                    To promote 
                    healthy conditions on the range, the BLM determines what it calls the Appropriate 
                    Management Level (AML), which is the number of wild horses and burros that 
                    can thrive in balance with other public land resources and uses. Wild horses 
                    and burros that exceed AML (which is 26,785) are to be removed from the range, 
                    in accordance with the 1971 law, as amended. The current estimated on-range wild 
                    horse and burro population (as of March 1, 2021) is 86,189 animals. 
                  </p>
                </v-col>
                <v-col cols="12" md="7">
                  <br>
                  <br>
                  <h1 class="text-center font-weight-bold mb-10">
                    Population of 86,189 by State in 2021
                  </h1>
                  <tree-chart></tree-chart>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
      <div>
        <v-card class="mt-5 mb-8">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <h1 class='text-center mb-5'>
                    Where did Horses and Burros end up between 2020-2021?
                  </h1>
                  <sankey></sankey>
                </v-col>
              <v-row>
                <v-col>
                    <h2 class="text-center teal--text text--darken-3">
                      Off-Range
                    </h2>
                    <h4 class="text-center mb-2">
                      Includes Pastures, Public Pastures and Corrals
                    </h4>
                    <p class='text subtitle-1'>
                      All off-range (unadopted or unsold) wild horses and burros, 
                      like those roaming Western public rangelands, are protected 
                      by the BLM under the 1971 Wild Free-Roaming Horses and Burros Act, 
                      as amended. These off-range horses and burros are fed and cared for 
                      in either off-range corrals or pastures at a cost of nearly $50 million a year.
                    </p>
                    <h2 class='text-center mb-2 light-blue--text text--lighten-3'>
                      Removed
                    </h2>
                    <p class="text subtitle-1">
                      Wild horses and burros have virtually no natural predators and their herd sizes 
                      can double about every four years. As a result, the BLM removes thousands of animals 
                      from the range each year as part of its efforts to control herd sizes. 
                    </p>
                </v-col>
                <v-col>
                    <h2 class='text-center mb-2 purple--text text--lighten-2'>
                      Sold to Good Homes
                    </h2>
                    <p class="text subtitle-1">
                      About 8,400 wild horses and burros immediately became eligible for sale under the 
                      December 2004 sale-authority law (the so-called "Burns Amendment"), which directs 
                      the BLM to sell "without limitation" to any willing buyers animals that are either 
                      more than 10 years old or have been passed over for adoption at least three times. 
                      Since 2005, the BLM has sold more than 5,900 horses and burros. 
                    </p>
                    <h2 class='text-center mb-2 light-green--text text--lighten-2'>
                      Adopted
                    </h2>
                    <p class="text subtitle-1">
                      The BLM offers wild horses and burros that were removed from the range for adoption 
                      into private care. Since 1971, the BLM has adopted out more than 250,000 wild horses 
                      and burros nationwide.
                    </p>
                </v-col>
              </v-row>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
      <div>
        <v-card class="mt-5 mb-8">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <h1 class='text-center mb-5'>
                    Horses and Burros Adopted since 2012
                  </h1>
                  <line-chart></line-chart>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div>
                    <h2 class="text-center font-weight-bold mb-2 mt-10">
                      Adoption
                    </h2>
                    <p class="text subtitle-1">
                      The BLM offers wild horses and burros that 
                      were removed from the range for adoption into 
                      private care. Since 1971, the BLM has adopted out 
                      more than 250,000 wild horses and burros nationwide. 
                      Potential adopters can attend an off-site adoption event, 
                      visit a BLM adoption center, or participate in an Internet
                      Adoption event.
                    </p>
                    <h2 class='text-center font-weight-bold mb-2'>
                      Sales
                    </h2>
                    <p class="text subtitle-1">
                      About 8,400 wild horses and burros immediately became eligible for 
                      sale under the December 2004 sale-authority law (the so-called 
                      "Burns Amendment"), which directs the BLM to sell "without limitation" 
                      to any willing buyers animals that are either more than 10 years old or 
                      have been passed over for adoption at least three times. Since 2005, the 
                      BLM has sold more than 5,900 horses and burros. 
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </v-main>
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
  </div>
</template>

<script>
  import DataIntro from '../components/DataIntro'
  import TreeChart from '../components/TreeChart'
  import LineChart from '../components/LineChart.vue'
  import Sankey from '../components/Sankey.vue'
  import BarChart from '../components/BarChart.vue'

  export default {
    name: 'Data',

    components: {
      DataIntro,
      TreeChart,
      LineChart,
      Sankey,
      BarChart    },
  }

</script>

