<template>
  <div>
    <div>
      <h2>Search and add to polygon</h2>
      <GmapAutocomplete
        @place_changed='setPlace'
      />
      <button
        @click='addMarker'
      >
        Add
      </button>
    </div>
    <br>
    <GmapMap
      :center='center'
      :zoom='5'
      style='width:100%;  height: 500px;'
    >
     <gmap-polygon :paths="paths"
     :options="polygonOptions"
     >
      </gmap-polygon>
       <gmap-polygon :paths="polygon2"
     :options="polygonOptions2"
     >
      </gmap-polygon>
      <!-- <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      /> -->
    </GmapMap>

    <!-- <GmapPolygon
    :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
    ></GmapPolygon>	 -->
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 24.886, lng: -80.19 },
      polygonOptions: {
        strokeColor: 'red'
      },
         polygonOptions2: {
        strokeColor: 'yellow'
      },
      paths: [
        [
          { lat: 18.774, lng: -80.19 },
    { lat: 18.466, lng: -65.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 34.321, lng: -24.757 }
        ]
      ],
        polygon2: [
        [
          { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -61.757 }
        ]
      ],
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>