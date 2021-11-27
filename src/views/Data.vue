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
    <v-main>
    <v-container>
      <data-intro></data-intro>
      <div>
        <!-- <h3>Hello</h3> -->
        <v-card class="mt-5 mb-8">
          <v-card-text>
            <v-container>
              <v-row class="mb-5">
                <v-col>
                  <br>
                  <h2 class="text-center mt-2 mb-3">Myth</h2>
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
                </v-col>
                <v-col>
                  <h1 class="text-center font-weight-bold">
                    Population Increase
                  </h1>
                  <bar-chart></bar-chart>
                </v-col>
              </v-row>
              <v-row class="mt-5">
                <div>
                </div>
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
                <v-col cols="12" md="7">
                  <h1 class="text-center font-weight-bold mb-10">
                    86,189 Horses and Burros by State
                  </h1>
                  <tree-chart></tree-chart>
                </v-col>
                <v-col cols="12" md="5">
                  <div>
                    <p>
                      As required under the Wild Free-Roaming Horses and Burros Act of 1971, 
                      the BLM conducts an annual population inventory to estimate the number of 
                      wild horses and burros roaming BLM-managed lands in the West.
                    </p>
                    <p>
                      To promote 
                      healthy conditions on the range, the BLM determines what it calls the Appropriate 
                      Management Level (AML), which is the number of wild horses and burros that 
                      can thrive in balance with other public land resources and uses. Wild horses 
                      and burros that exceed AML (which is 26,785) are to be removed from the range, 
                      in accordance with the 1971 law, as amended. The current estimated on-range wild 
                      horse and burro population (as of March 1, 2021) is 86,189 animals. 
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
      <div>
        <h3>Hello</h3>
        <v-card class="mt-5 mb-8">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="5">
                  <div>
                    <h1 class="text-center font-weight-bold mb-10">
                      86,189
                    </h1>
                    <p>
                      The BLM offers wild horses and burros that 
                      were removed from the range for adoption into 
                      private care. Since 1971, the BLM has adopted out 
                      more than 250,000 wild horses and burros nationwide. 
                      Potential adopters can attend an off-site adoption event, 
                      visit a BLM adoption center, or participate in an Internet
                      Adoption event. For general questions on adopting a wild 
                      horse or burro, visit the Frequently Asked Questions page.
                    </p>
                  </div>
                </v-col>
                <v-col cols="12" md="7">
                  <sankey></sankey>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
      <div>
        <h3>Hello</h3>
        <v-card class="mt-5 mb-8">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="7">
                  <line-chart></line-chart>
                </v-col>
                <v-col cols="12" md="5">
                  <div>
                    <h1 class="text-center font-weight-bold mb-10">
                      86,189
                    </h1>
                    <p>
                      The BLM offers wild horses and burros that 
                      were removed from the range for adoption into 
                      private care. Since 1971, the BLM has adopted out 
                      more than 250,000 wild horses and burros nationwide. 
                      Potential adopters can attend an off-site adoption event, 
                      visit a BLM adoption center, or participate in an Internet
                      Adoption event. For general questions on adopting a wild 
                      horse or burro, visit the Frequently Asked Questions page.
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

