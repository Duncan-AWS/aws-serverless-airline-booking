<template>
  <q-page class="container">
    <div class="wrapper">
      <div class="heading">
        <div class="q-display-1 search__headline" data-test="search-headline">
          Get Started ...
        </div>
      </div>
    </div>

    <!-- <div class="row wrapper">
      <img src="../media/octank_logo.png" >
    </div> -->

    <div class="row wrapper">
      <q-field
        class="col home-icons search__options--input search__departure"
        icon="drive_eta"
        icon-color="primary"
        :label-width="8"
        >
          <q-btn
            @click="addVehicle"
            class="col cta__button"
            color="secondary"
            label="Add Vehicle"
          >
            <q-icon
              class="cta__button--direction"
              name="keyboard_arrow_right"
              size="2.6rem"
            />
          </q-btn>
      </q-field>
    </div>
    
    <div class="row wrapper">
      <q-field
        class="col home-icons search__options--input search__departure"
        icon="payment"
        icon-color="primary"
        :label-width="8"
        >
        <q-btn
          @click="addPayment"
          class="col cta__button"
          color="secondary"
          label="Add Payment"
          >
          <q-icon
            class="cta__button--direction"
            name="keyboard_arrow_right"
            size="2.6rem"
          />
        </q-btn>
      </q-field>
    </div>



    <!-- <div class="search__options q-pa-sm">
      <q-field
        class="home-icons search__options--input search__departure"
        icon="flight_takeoff"
        icon-color="primary"
        :label-width="8"
      >
        <q-input
          class="search__departure"
          v-model="departureCity"
          stack-label="Departure airport"
          data-test="search-departure"
        >
          <q-autocomplete
            class="search__departure--suggestion text-bold"
            :min-characters="3"
            :static-data="{ field: 'city', list: suggestionList }"
            :filter="fuzzySearchFilter"
            value-field="sublabel"
          />
        </q-input>
      </q-field>
    </div> -->
    
  </q-page>
</template>

<script>
// @ts-nocheck
import airports from "../store/catalog/airports.json";
import Fuse from "fuse.js";
import { date } from "quasar";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

/**
 * parse list of airports provided from Catalog module
 *
 * @return {object} - list of airports following auto-suggestion Quasar component contract
 */
const parseAirports = () => {
  return airports.map(country => {
    return {
      city: country.city,
      label: country.name,
      sublabel: country.code
    };
  });
};

/**
 * Validate given input against list of valid IATA airports
 * @param {string} value - Given airport input by customer
 * @param {object} vm - Vue scope so outer functions can access store/Vue data
 * @return {boolean} - Boolean whether given airport is a valid IATA airport from airport list
 */
const isAirport = (value, vm) => {
  // TODO: debounce or throttle this function in compliance with vuelidate
  return vm.suggestionList.some(airport => airport.sublabel === value);
};

export default {
  /**
   *
   * Search view displays options for searching a flight given a departure, arrival and a date.
   */
  name: "Search",
  mixins: [validationMixin],
  validations: {
    departureCity: {
      required,
      minLength: minLength(3),
      isAirport
    },
    arrivalCity: {
      required,
      minLength: minLength(3),
      isAirport
    }
  },
  data() {
    return {
      /**
       * @param {object} departureCity - Departure city chosen by the customer
       * @param {object} arrivalCity - Arrival city chosen by the customer
       * @param {object} departureDate - Departure date chosen by the customer
       * @param {object} suggestionList - Parsed list of airports offered as auto-suggestion
       */
      departureCity: "",
      arrivalCity: "",
      departureDate: new Date(),
      suggestionList: parseAirports()
    };
  },
  methods: {
    /**
     * search method collects form data, create queryStrings, and redirects to Search Results view
     */
      addVehicle() {
        this.$router.push({
          name: "vehicles",
        });
      },

      addPayment() {
        this.$router.push({
          name: "paymentcard",
        });
      }

      // search() {
      //   this.$router.push({
      //     name: "searchResults",
      //     query: {
      //       date: date.formatDate(this.departureDate, "YYYY-MM-DD"),
      //       departure: this.departureCity,
      //       arrival: this.arrivalCity
      //     }
      //   });
      // },
    /**
     * fuzzySearchFilter method uses Fuse library to easily find airports whether that is city, IATA, initials, etc.
     */
    // fuzzySearchFilter(terms, { field, list }) {
    //   const token = terms.toLowerCase();
    //   var options = {
    //     shouldSort: true,
    //     threshold: 0.3,
    //     location: 0,
    //     distance: 100,
    //     maxPatternLength: 10,
    //     minMatchCharLength: 3,
    //     keys: [field, "sublabel"]
    //   };
    //   let fuse = new Fuse(list, options);
    //   let result = fuse.search(token);
    //   return result;
    // }
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
