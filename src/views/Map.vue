<template>
  <!--this is the main div for the data page-->
  <div class="data">
    <!--start of navigation drawer - set drawer to null below in data {} -->
    <!-- pass app and fixed - app will keep the nav drawer with scroll -->
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      style='z-index:2001'
    >

          <!-- style='z-index:2001' -->
      <!-- set if loading true - will dissapear on all geojsons load -->
      
      <span v-if="loading" class="text-h4">Loading...</span>
      <!-- checkbox for herd areas layer toggle - defaults true in data() script -->
      <v-row>
        <div class="text-center mt-3 ml-4">
        <v-dialog
          v-model="dialog"
          width="650"
          eager
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mt-3 ml-6"
              color="teal darken-3"
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
            <v-card-title class="white--text teal darken-3 mb-4">
              What are Herd Areas and Herd Management Areas?
            </v-card-title>

            <v-card-text class="text subtitle-1">
              In 1971, when Congress passed the Wild Free-Roaming Horses and Burros Act, 
              these animals were found roaming across 53.8 million acres of public land, 
              known as Herd Areas, of which 42.4 million acres were under the BLM’s jurisdiction. 
              Today, the BLM manages wild horses in subsets of these Herd Areas, known as 
              Herd Management Areas (HMAs), that comprise 31.6 million acres. 
            </v-card-text>

            <!-- <v-divider></v-divider> -->

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
          color="teal darken-3"
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
        color="teal darken-3"
      >
        <template v-slot:label>
          <div class="text-subtitle-1 text-center">
            Herd Management Area
          </div>
        </template>
      </v-checkbox>
      <!-- allows color change for herd management areas -->
      <v-row>
        <v-btn
          class="ml-12 mt-3"
          @click="chooseColor2 = !chooseColor2">
            Choose Color
        </v-btn>
        <v-color-picker
          v-if="chooseColor2"
          v-model="fillColor2"
          dot-size="25"
          swatches-max-height="200"
          width="250"
          class="mt-5 ml-4"
        >
        </v-color-picker>
      </v-row>
      <!-- checkbox for Adoption location points - defaults false in data() script -->
      <v-checkbox
        v-model="show3"
        :label="'Adoption Locations'"
      >
      </v-checkbox>
      <v-spacer>
      <v-spacer></v-spacer>
      </v-spacer>
      <!-- home button to recenter map -->
      <v-btn @click="recenterMap()">
        <span class="mdi mdi-home" />
      </v-btn>  
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
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- <v-app-bar-title class="text-center justify-left py-5">
        Horse and Burro Program
      </v-app-bar-title> -->

      <v-spacer></v-spacer>

      <!-- ***** BUTTONS CURRENTLY NOT SET ****** -->
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <!-- ******** BUTTONS CURRENTLY NOT SET ******* -->

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
import { LMap, LTileLayer, LGeoJson} from "vue2-leaflet";
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';


// fix to icons not displaying on leaflet map in Map.vue
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('/src/assets/horse.png'),
  iconUrl: require('/src/assets/horse.png'),
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
      zoom: 6,
      center: [39, -109],
      geojson_HA: null,
      geojson_HMA: null,
      geojson_adoption: null,
      fillColor1: "#e4ce7f",
      fillColor2: "#91251d",
      chooseColor: false,
      chooseColor2: false,
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions>CARTO</a>',
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
  }
};

</script>

<style>

</style>
