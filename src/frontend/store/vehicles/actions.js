import Vehicle from "../../shared/models/VehicleClass";

// @ts-ignore
import { Loading } from "quasar";


import { API, graphqlOperation } from "aws-amplify";
// import {
//   processVehicle as processVehicleMutation,
//   getVehicleByStatus
// } from "./graphql";

/**
 *
 * Vehicle [Vuex Module Action](https://vuex.vuejs.org/guide/actions.html) - fetchVehicle retrieves all bookings for current authenticated customer.
 *
 * It uses SET_BOOKINGS mutation to update Vehicle state with the latest bookings and flights associated with them.
 * @param {object} context - Vuex action context (context.commit, context.getters, context.state, context.dispatch)
 * @param {string} paginationToken - pagination token for loading additional bookings
 * @returns {promise} - Promise representing whether bookings from Vehicle service have been updated in the store
 * @see {@link SET_BOOKINGS} for more info on mutation
 * @example
 * // exerpt from src/views/Vehicles.vue
 * import { mapState, mapGetters } from "vuex";
 * ...
 * async mounted() {
 *    if (this.isAuthenticated) {
 *       await this.$store.dispatch("bookings/fetchVehicle");
 *    }
 * },
 * computed: {
 *    ...mapState({
 *        bookings: state => state.bookings.bookings
 *    }),
 *    ...mapGetters("profile", ["isAuthenticated"])
 * }
 */
export async function fetchVehicle(
  { commit, rootGetters },
  paginationToken = ""
) {
  console.group("store/bookings/actions/fetchVehicle");
  Loading.show({
    message: "Loading vehicles..."
  });

  var nextToken = paginationToken || null;

  try {
    const customerId = rootGetters["profile/userAttributes"].sub;
    // const bookingFilter = {
    //   customer: customerId,
    //   status: {
    //     eq: "CONFIRMED"
    //   },
    //   limit: 3,
    //   nextToken: nextToken
    // };

    console.log("Fetching vehicle data");
    
    const {
      // @ts-ignore
      data: {
        getVehicleByStatus: { items: vehicleData, nextToken: paginationToken }
      }
    } = await API.graphql(graphqlOperation(listVehicless));

    let vehicles = vehicleData.map(vehicle => new Vehicle(vehicle));

    console.log(vehicles);

    commit("SET_VEHICLES", vehicles);
    commit("SET_BOOKING_PAGINATION", paginationToken);

    Loading.hide();
    console.groupEnd();
  } catch (err) {
    Loading.hide();
    console.error(err);
    throw new Error(err);
  }
}

/**
 *
 * Vehicle [Vuex Module Action](https://vuex.vuejs.org/guide/actions.html) - createVehicle attempts payment charge via Payment service, and it effectively books a flight if payment is accepted.
 *
 * **NOTE**: It doesn't mutate the store
 * @param {object} context - Vuex action context (context.commit, context.getters, context.state, context.dispatch)
 * @param {object} obj - Object containing params required to create a booking
 * @param {object} obj.paymentToken - Stripe JS Payment token object
 * @param {Flight} obj.outboundFlight - Outbound Flight
 * @returns {promise} - Promise representing booking effectively made in the Vehicle service.
 * @example
 * // exerpt from src/views/FlightSelection.vue
 * methods: {
 *    async payment() {
 *        let options = {
 *           name: this.form.name,
 *           address_zip: this.form.postcode,
 *           address_country: this.form.country
 *        }
 *
 *        try {
 *            const { token, error } = await stripe.createToken(card, options);
 *            this.token.details = token;
 *            this.token.error = error;
 *
 *            if (this.token.error) throw this.token.error;
 *
 *            await this.$store.dispatch("bookings/createVehicle", {
 *              paymentToken: this.token,
 *              outboundFlight: this.selectedFlight
 *            });
 *        ...
 *        }
 */
export async function createVehicle(
  { rootState },
  { paymentToken, outboundFlight }
) {
  console.group("store/bookings/actions/createVehicle");
  try {
    const customerEmail = rootState.profile.user.attributes.email;

    

   
    
}
