// @ts-nocheck
/**
 *
 * Booking [Vuex Module Mutation](https://vuex.vuejs.org/guide/mutations.html) - SET_BOOKINGS mutates Booking state with an array of Bookings as payload.
 * @param {object} state - Vuex Booking Module State
 * @param {Booking[]} vehicles - Array of Bookings as payload
 * @see {@link fetchBooking} for more info on action that calls SET_BOOKINGS
 */
export const SET_VEHICLES = (state, vehicles) => {
  if (state.vehicles.length === 0) {
    state.vehicles = vehicles;
  } else {
    // flatten array of vehicles and remove possible duplicates due to network issues
    let newBookings = [...vehicles, state.vehicles].flat(5);
    state.vehicles = [...new Set(newBookings)];
  }
};

export const SET_BOOKING_PAGINATION = (state, paginationToken) => {
  state.paginationToken = paginationToken;
};
