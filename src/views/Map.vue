<template>
  <!--this is the main div for the data page-->
  <div class="data">
    <!--start of navigation drawer - set drawer to null below in data {} -->
    <!-- pass app and fixed - app will keep the nav drawer with scroll -->
    <v-tour name="myTour" :steps="steps"></v-tour>
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      style='z-index:2001'
    >
      <v-row class = "text-center mt-10">
        <v-col>
          <h3 class="v-step-0 brown--text text--darken-2">
            Wild Horse and Burro
          </h3>
          <h3 class="brown--text text--darken-2">Herd Locations</h3>
        </v-col>
      </v-row>

          <!-- style='z-index:2001' -->
      <!-- set if loading true - will dissapear on all geojsons load -->
      
      <span v-if="loading" class="text-h4">Loading...</span>
      <!-- checkbox for herd areas layer toggle - defaults true in data() script -->  
      <v-row>
        <div class="text-center ml-4">
        <v-dialog
          v-model="dialog"
          width="650"
          eager
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="v-step-1 mt-3 ml-6"
              color="brown darken-2"
              dark
              v-bind="attrs"  
              v-on="on"
              block
            >
              <v-icon class="mr-4">
                mdi-information
              </v-icon>
              Information
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="white--text brown darken-2 mb-4">
              What are Herd Areas and Herd Management Areas?
            </v-card-title>

            <v-card-text class="text subtitle-1">
              In 1971, when Congress passed the Wild Free-Roaming Horses and Burros Act, 
              these animals were found roaming across 53.8 million acres of public land, 
              known as Herd Areas, of which 42.4 million acres were under the BLM’s jurisdiction. 
              Today, the BLM manages wild horses in subsets of these Herd Areas, known as 
              Herd Management Areas (HMAs), that comprise 31.6 million acres. 
            </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-row>
      <v-row class=" ml-5 mt-8">
        <v-checkbox
          v-model="show1"
          color="brown lighten-2"
          class="text"
        >
          <template v-slot:label>
            <div class="text-subtitle-1">
              Herd Area
            </div>
          </template>
        </v-checkbox>
      </v-row>
      <!-- allows color change for herd areas -->
      <v-row>
        <v-btn
          class="ml-12"
          @click="chooseColor = !chooseColor">
            Choose Color
        </v-btn>
        <v-color-picker
          v-if="chooseColor"
          v-model="fillColor1"
          dot-size="25"
          swatches-max-height="200"
          width="250"
          class="mt-5 ml-4"
        >
        </v-color-picker>
      </v-row>
      <!-- checkbox for Herd Management Areas - default true in data() script -->
      <v-checkbox
        v-model="show2"
        class="ml-5 mt-12"
        color="brown darken-2"
      >
        <template v-slot:label>
          <div class="v-step-2 text-subtitle-1 text-center">
            Herd Management Area
          </div>
        </template>
      </v-checkbox>
      <!-- allows color change for herd management areas -->
      <v-row>
        <v-btn
          class="v-step-3 ml-12 mt-3 mb-5"
          @click="chooseColor2 = !chooseColor2">
            Choose Color
        </v-btn>
        <v-color-picker
          v-if="chooseColor2"
          v-model="fillColor2"
          dot-size="25"
          width="250"
          class="mt-5 ml-4"
        >
        </v-color-picker>
      </v-row>
      <!-- checkbox for Adoption location points - defaults false in data() script -->
      <v-divider></v-divider>
      <v-row class = "text-center mt-3">
        <v-col>
          <h3 class="blue--text text--darken-3">
            Adoption
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <div class="text-center ml-4">
        <v-dialog
          v-model="dialog"
          width="650"
          eager
        >
          <template v-slot:activator="{ on, attrs1 }">
            <v-btn class="mt-3 ml-6"
              color="blue darken-2"
              dark
              v-bind="attrs1"  
              v-on="on"
              block
            >
              <v-icon class="mr-4">
                mdi-information
              </v-icon>
              Information
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="white--text blue darken-2 mb-4">
              Adoption and Sales
            </v-card-title>

            <v-card-text class="text subtitle-1">
              The BLM offers wild horses and burros for adoption 
              or purchase at events across the country throughout the year.
              With the phased resumption of normal operations in many states and 
              localities around the country, the BLM is working bureau-wide 
              with federal, state, and local public health authorities to closely 
              monitor the COVID-19 pandemic. The health, safety, and well-being of 
              the public, employees, volunteers, and partners is paramount as we begin 
              to restore normal operations. We are increasing public access to wild 
              horse and burro off-range adoption and sale facilities on a case-by-case 
              basis while examining and regularly monitoring each facility and service 
              provided to ensure we comply with current public health guidance.
            </v-card-text>
            <v-card-text class="text subtitle-1">
               Most facilities are open for business, subject to certain limitations 
              (e.g. modified hours, if by appointment, social distancing requirements, etc.) 
              which can be found on the individual facility pages. With public health in mind, 
              the following facilities remain closed at this time:  
            </v-card-text>
            <v-card-text class="text subtitle-1 text-bold">
              Facility in Canon City, CO is temporarily closed
              Facility in Elm Creek, NE is temporarily closed
              Details and updates on operations will continue to be posted here and on our social media channels.
            </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-row>
      <v-row>
        <v-col>
          <v-checkbox
            color="blue darken-3"
            class="v-step-4 ml-5"
            v-model="show3"
            :label="'Adoption Locations'"
          >
          </v-checkbox>
        </v-col>
      </v-row>
      <!-- home button to recenter map -->
      <v-row class="ml-10">
        <v-btn @click="recenterMap()" class="v-step-5">
          <span class="mdi mdi-home" />
          Reset View
        </v-btn>  
      </v-row>
    <!-- end of navigation drawer -->
    </v-navigation-drawer>
    <!-- begin app header props app and height -->
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

      <!-- hamburger button to switch navigation drawer -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="v-step-6"></v-app-bar-nav-icon>

      <!-- <v-app-bar-title class="text-center justify-left py-5">
        Horse and Burro Program
      </v-app-bar-title> -->

      <v-spacer></v-spacer>

      <!-- set up app header links to pages -->
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

    <!-- everything under app bar and outside of nav drawer -->
    <v-main>
      <v-card elevation-10>
        <v-container fluid>
          <!-- SET MAP -->
          <l-map ref="myMap"
            :zoom="zoom"
            :center="center"
            style="height: 720px"
          >
            <!-- sourcing -->
            <l-tile-layer
              :url="url"
              :attribution="attribution"
            />
            <l-control-scale position="topright" :imperial="true" :metric="false"></l-control-scale>
            <!-- vue-leaflet herd areas geojson container -->
            <l-geo-json
              v-if="show1"
              :geojson="geojson_HA"
              :options="options"
              :options-style="styleFunction_ha"
            />
            <!-- vue-leaflet herd management area geojson container -->
            <l-geo-json
              v-if="show2"
              :geojson="geojson_HMA"
              :options="options2"
              :options-style="styleFunction_hma"
            >
            </l-geo-json>
            <!-- vue-leaflet adoption locations container -->
            <l-geo-json
              v-if="show3"
              :geojson="geojson_adoption"
              :options="markerOptions"
            >
            </l-geo-json>
          </l-map>
        </v-container>
      </v-card>
    </v-main>
  </div>
</template>

// **********   SCRIPT START  ***********
<script>

// import { latLng } from "leaflet";
// import {L} from 'leaflet'
import { LMap, LTileLayer, LGeoJson, LControlScale} from "vue2-leaflet";
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';


// fix to icons not displaying on leaflet map in Map.vue
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('/src/assets/horseshoe_icon.png'),
  iconUrl: require('/src/assets/horseshoe_icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  shadowSize: [20,20],
  iconSize: [40,40]
});

export default {
  name: "Example",
  // components used
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LControlScale
    // LMarker
  },
  data() {
    return {
      drawer: null,
      loading: false,
      map: true,
      show1: true,
      show2: true,
      show3: true,
      enableTooltip: true,
      zoom: 5.6,
      center: [39, -105],
      geojson_HA: null,
      geojson_HMA: null,
      geojson_adoption: null,
      fillColor1: "#BCAAA4FF",
      fillColor2: "#5D4037FF",
      chooseColor: false,
      chooseColor2: false,
      url: 'https://api.mapbox.com/styles/v1/rlaird2/ckwo8jew23mns14lrzvnnxh63/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmxhaXJkMiIsImEiOiJja2JmN2x6aWIwc3VmMzVvNDl5Mzk1ejNuIn0.rrNaMaCy39_ntp7qPvp0dQ',
      attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions>CARTO</a>',
      steps: [
        {
          target: '.v-step-0',  // We're using document.querySelector() under the hood
          header: {
            title: 'Explore Map Features',
          },
          content: `In this <strong>Guided Tour </strong>!`
        },
        {
          target: '.v-step-1',
          content: 'Click information button to learn more about map layers'
        },
        {
          target: '.v-step-2',
          header: {
            title: '<strong> Toggle Layers <strong>'
          },
          content: 'Click checkbox to turn layers on/off. Click Herd Area or Herd Management area on map to display estimated Horses and Burros'
        },
        {
          target: '.v-step-3',
          header: {
            title: 'Change Color',
          },
          content: 'Click here to change the color and opacity of areas!'
        },
        {
          target: '.v-step-4',
          header: {
            title: 'Adoptions',
          },
          content: 'Toggle Layer here. Hover over icons on map to display Adoption Location information'
        },
        {
          target: '.v-step-5',
          header: {
            title: 'Reset',
          },
          content: 'Click here to return to orginal view'
        },
        {
          target: '.v-step-6',
          header: {
            title: 'Toggle Legend',
          },
          content: 'Click here to close legend and expand the map!'
        }

        // {
        //   target: '[data-v-step="2"]',
        //   content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
        //   params: {
        //     placement: 'top' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
        //   }
        // }
      ]
    };
  },
  computed: {
    // herd areas options
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction1
      };
    },
    // herd management area options
    options2() {
      return {
        onEachFeature: this.onEachFeatureFunction2
      }
    },
    // adoption location options
    markerOptions() {
      return {
        onEachFeature: this.onEachMarkerFunction,
      };
    },
    // herd area stylefunction
    styleFunction_ha() {
      const fillColor1 = this.fillColor1; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 1,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor1,
          fillOpacity: 1
        };
      };
    },
    // herd management area stylefunction
    styleFunction_hma() {
      const fillColor2 = this.fillColor2; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 1,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor2,
          fillOpacity: 1
        };
      };
    },
    onEachFeatureFunction1() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindPopup(
          "<div>Name: " +
            feature.properties.HA_NAME +
            "</div><div>Estimated Horses: " +
            feature.properties.EST_HORSE_POP +
            "</div><div> Estimated Burros: " +
            feature.properties.EST_BURRO_POP +
          "</div>",
          { permanent: false, sticky: true }
        );
      };
    },
    onEachFeatureFunction2() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindPopup(
          "<div>Name: " +
            feature.properties.HMA_NAME +
            "</div><div>Estimated Horses: " +
            feature.properties.EST_HORSE_POP +
            "</div><div> Estimated Burros: " +
            feature.properties.EST_BURRO_POP +
          "</div>",
          { permanent: false, sticky: true }
        );
      }
    },
    onEachMarkerFunction() {
      return (feature, layer) => {
        // layer.on('click', function() {
        //   this.map = this.$refs.myMap.mapObject
        //   this.map.fitBounds(layer.getBounds())
        // })
        layer.bindTooltip(
            "<div>City: " +
            feature.properties.city +
            "</div><div>Address: " +
            feature.properties.address +
            "</div><div> Description: " +
            feature.properties.description +
          "</div>",
          { permanent: false, sticky: true }
        );
      };
    },
  },
  async created() {
    this.loading = true;
    const response_HA = await fetch("https://raw.githack.com/RyLaird/vue-wild-horse-and-burro-program/master/src/assets/whb_ha_pop_poly.geojson")
    const data_HA = await response_HA.json();
    this.geojson_HA = data_HA;

    const response_HMA = await fetch("https://raw.githack.com/RyLaird/vue-wild-horse-and-burro-program/master/src/assets/whb_hma_pop_poly.geojson")
    const data_HMA = await response_HMA.json();
    this.geojson_HMA = data_HMA;

    const response_adoption = await fetch("https://raw.githack.com/RyLaird/vue-wild-horse-and-burro-program/master/src/assets/adoption_locations.geojson")
    const data_adoption = await response_adoption.json();
    this.geojson_adoption = data_adoption;

    this.loading = false;
  },
  methods: {
    recenterMap() {
      this.$refs.myMap.mapObject.flyTo([39, -105], 6)
    }
  },
  mounted: function () {
    this.$tours['myTour'].start()
  }
};

</script>

<style>

</style>
