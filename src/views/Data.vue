<template>
  <div class="data">
    <v-app-bar
      color="#6A76AB"
      dense
      dark
      prominent
      height="50px"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
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
    <v-container>
      stuff goes here
    </v-container>
  </div>
</template>

<script>

</script>

