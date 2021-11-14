<template>
  <!--this is the main div for the data page-->
  <div class="data">
    <!--start of navigation drawer - set drawer to null below in data {} -->
    <!-- pass app and fixed - app will keep the nav drawer with scroll -->
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
    >
      <!-- set if loading true - will dissapear on all geojsons load -->
      <span v-if="loading">Loading...</span>
      <!-- checkbox for herd areas layer toggle - defaults true in data() script -->
      <v-checkbox
        v-model="show1"
        :label="'Herd Areas'"
      >
      </v-checkbox>
      <!-- allows color change for herd areas -->
      <input
        v-model="fillColor1"
        type="color"
      >
      <!-- checkbox for Herd Management Areas - default true in data() script -->
      <v-checkbox
        v-model="show2"
        :label="'Herd Management Areas'"
      >
      </v-checkbox>
      <!-- allows color change for herd management areas -->
      <input
        v-model="fillColor2"
        type="color"
      >
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
          <l-map
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

<script>
// import { latLng } from "leaflet";
// import {L} from 'leaflet'
import { LMap, LTileLayer, LGeoJson} from "vue2-leaflet";
import 'leaflet/dist/leaflet.css'

export default {
  name: "Example",
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
      show1: true,
      show2: true,
      show3: false,
      enableTooltip: true,
      zoom: 6,
      center: [39, -109],
      geojson_HA: null,
      geojson_HMA: null,
      fillColor1: "#e4ce7f",
      fillColor2: "#91251d",
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions>CARTO</a>',
      // icon: L.icon({
      //   iconUrl: '<img src="https://img.icons8.com/ios-filled/50/000000/horses-sign.png"',
      //   iconSize: [32, 37],
      //   iconAnchor: [16, 37]
      // }),
    };
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction1
      };
    },
    options2() {
      return {
        onEachFeature: this.onEachFeatureFunction2
      }
    },
    markerOptions() {
      return {
        onEachFeature: this.onEachMarkerFunction,
        // pointToLayer: function (feature, latLng) {
        //   return L.circleMarker(latLng, {
        //     fillColor: '#FBC94D',
        //     weight: 1,
        //     radius: 8
        //   })
        // }
      };
    },
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
        layer.bindTooltip(
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
        layer.bindTooltip(
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
    }
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
