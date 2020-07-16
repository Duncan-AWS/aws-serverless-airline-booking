<template>
  <q-page class="container">
    <div class="wrapper">
      <div class="heading">
        <div class="q-display-1 search__headline" data-test="search-headline">
          Vehicles
        </div>
      </div>
    </div>
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
        label="Submit"

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



export default {
  /**
   *
   * Search view displays options for searching a flight given a departure, arrival and a date.
   */
  name: "Vehicles",
  
  data() {
    return {
      /**
       * @param {object} vrn - Vehicle Registration Number chosen by the customer
       */
      vrn: ""
    };
  },
  methods: {
    /**
     * search method collects form data, create queryStrings, and redirects to Search Results view
     */
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
