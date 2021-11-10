<template>
  <div class="data">
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
    >
      <!-- <span v-if="loading">Loading...</span>
      <label for="checkbox">Herd Areas    </label>
      <input
        id="checkbox"
        v-model="show"
        type="checkbox"
      > -->
      <span v-if="loading">Loading...</span>
      <v-checkbox
        v-model="show1"
        :label="'Herd Areas'"
      >
      </v-checkbox>
      <input
        v-model="fillColor1"
        type="color"
      >
      <!--  -->
      <v-checkbox
        v-model="show2"
        :label="'Herd Management Areas'"
      >
      </v-checkbox>
      <input
        v-model="fillColor2"
        type="color"
      >
    </v-navigation-drawer>
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

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

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

      <!-- <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar> -->
    <v-main>
      <v-card elevation-10>
        <v-container fluid>
          <l-map
            :zoom="zoom"
            :center="center"
            style="height: 800px"
          > 
            <l-tile-layer
              :url="url"
              :attribution="attribution"
            />
            <l-geo-json
              v-if="show1"
              :geojson="geojson_HA"
              :options="options"
              :options-style="styleFunction_ha"
            />
            <l-geo-json
            v-if="show2"
            :geojson="geojson_HMA"
            :options="options"
            :options-style="styleFunction_hma"
            >
            </l-geo-json>
          <!-- <l-marker :lat-lng="marker" /> -->
          </l-map>
        </v-container>
      </v-card>
    </v-main>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LGeoJson} from "vue2-leaflet";

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
      marker: latLng(-109 -1.219482)
    };
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
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
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>Name: " +
            feature.properties.HA_NAME +
            "</div><div>Estimated Horses: " +
            feature.properties.EST_HORSE_POP +
            "</div<div> Estimated Burros: " +
            feature.properties.EST_BURRO_POP +
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
    this.loading = false;
  }
};


</script>

<style scoped>

</style>
