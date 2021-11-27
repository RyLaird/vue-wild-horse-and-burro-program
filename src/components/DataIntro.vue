<template>
  <div>
    <v-row class="mt-5 text-center">
      <v-col>
        <h1 class="teal--text display-2 font-weight-bold mb-6">
          Program Data
        </h1>
        <p>
          The Bureau of Land Management manages, protects, and controls 
          wild horses and burros under the authority of the 1971 Wild 
          Free-Roaming Horses and Burros Act (as amended by Congress 
          in 1976, 1978, 1996, and 2004).  This law authorizes the BLM 
          to remove excess wild horses and burros from the range to sustain 
          the health and productivity of the public lands.  The BLM also 
          manages the nation’s public lands for multiple uses, in accordance 
          with the 1976 Federal Land Policy and Management Act.  The Bureau 
          manages wild horses and burros as part of this multiple-use mandate.
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center">
        <v-img
        src="../assets/pasture.jpg"
        max-width="1200px"
        >
        </v-img>
    </v-row>
    <v-row>
      <p class="text-caption">
        Photo by <a href="https://unsplash.com/@hollymandarich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Holly Mandarich</a> on <a href="https://unsplash.com/s/photos/horse-pasture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'DataIntro',

    data: ()=> ({

    })
  }
</script>
