<template>
  <q-page class="container">
    <div class="wrapper">
      <div class="heading">
        <div class="q-display-1 search__headline" data-test="search-headline">
          Vehicles
        </div>
      </div>
    </div>

    <vehicle-card/>


    <div class="search__options q-pa-sm">
      
      <q-field
        class="home-icons search__options--input search__arrival"
        icon="drive_eta"
        icon-color="primary"
        :label-width="8"
      >
        <q-input
          class="search__arrival"
          v-model="vrn"
          stack-label="Enter your vehicle registration number"
        >
         
        </q-input>
      </q-field>
     
    </div>
    <div class="wrapper">
      <q-btn
        @click="addVehicle"
        class="cta__button"
        color="secondary"
        label="Add Vehicle"

      >
        <q-icon
          class="cta__button--direction"
          name="keyboard_arrow_right"
          size="2.6rem"
        />
      </q-btn>
    </div>
  </q-page>
</template>

<script>
// @ts-nocheck

import { required, minLength } from "vuelidate/lib/validators";
import VehicleCard from "../components/VehicleCard";


export default {
  /**
   *
   * Search view displays options for searching a flight given a departure, arrival and a date.
   */
  name: "Vehicles",
  components: {
    VehicleCard
  },
  
  data() {
    return {
      /**
       * @param {object} vrn - Vehicle Registration Number chosen by the customer
       */
      vrn: ""
    };
  },
  mounted() {
    /** authentication guards prevent authenticated users to view Bookings
     * however, the component doesn't stop from rendering asynchronously
     * this guarantees we attempt talking to Booking service
     * if our authentication guards && profile module have an user in place
     */
    if (this.isAuthenticated) {
      this.loadVehicles();
    }
  },
  methods: {
    /**
     * search method collects form data, create queryStrings, and redirects to Search Results view
     */
    async loadVehicles() {
      try {
        await this.$store.dispatch(
          "vehicles/fetchVehicle",
          this.paginationToken
        );
      } catch (error) {
        console.error(error);
        this.$q.notify(
          `Error while fetching Vehicle - Check browser console messages`
        );
      }
    },
    
    
    addVehicle() {
      this.$router.push({
        name: "searchResults",
        query: {
          date: date.formatDate(this.departureDate, "YYYY-MM-DD"),
          departure: this.departureCity,
          arrival: this.arrivalCity
        }
      });
    }



  },
  /**
   * @param {Vehicle} vehicles - Bookings state from Bookings module
   * @param {boolean} isAuthenticated - Getter from Profile module
   */
  computed: {
    ...mapState({
      vehicles: state => state.vehicles.vehicles,
      paginationToken: state => state.vehicles.paginationToken
    }),
    ...mapGetters("profile", ["isAuthenticated"])
  }

};
</script>

<style lang="stylus" scoped>
@import '~variables'

.search__options--input
  padding 0.3rem 1.5rem
  max-width 30rem
  margin auto
</style>
