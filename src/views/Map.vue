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
    <v-main>
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <span v-if="loading">Loading...</span>
        <label for="checkbox">Herd Areas    </label>
        <input
          id="checkbox"
          v-model="show"
          type="checkbox"
        >
        <!-- <label for="checkboxTooltip">Enable tooltip</label>
        <input
          id="checkboxTooltip"
          v-model="enableTooltip"
          type="checkbox"
        > -->
        <v-spacer></v-spacer>
        <input
          v-model="fillColor"
          type="color"
        >
        <!--  -->
      </v-navigation-drawer>
      <!-- <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar> -->
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
            v-if="show"
            :geojson="geojson"
            :options="options"
            :options-style="styleFunction"
          />
        <!-- <l-marker :lat-lng="marker" /> -->
        </l-map>
      </v-container>
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
      show: true,
      enableTooltip: true,
      zoom: 6,
      center: [39, -109],
      geojson: null,
      fillColor: "#e4ce7f",
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
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
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
    const response = await fetch("https://raw.githack.com/RyLaird/vue-wild-horse-and-burro-program/master/src/assets/whb_ha_pop_poly.geojson")
    const data = await response.json();
    this.geojson = data;
    this.loading = false;
  }
};


</script>

<style scoped>
/* .map { height: 800px } */
</style>
