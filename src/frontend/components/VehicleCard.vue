<template>
  <div class="row flight">
    <q-card class="flight__card" :id="details.vrn">
      <div class="col-10">
        <q-list highlight>
          <q-list-header>
            <div class="row uppercase text-bold">
              <div class="col-7">Vehicle</div>
              
            </div>
            <div class="row text-primary flight__direction">
              <div class="col flight__left-details">
                <q-icon class="flight__icon" name="drive_eta" />
                
                <div class="q-caption capitalize text-secondary text-bold">
                  <!-- {{ details.departureAirportName }} -->
                  Colour, Make, Model
                </div>
              </div>
              
              <div class="col flight__left-details">
                
                <div class="q-headline flight__arrival uppercase">
                <!-- &pound; 47.89 -->
                  {{ details.vrn }}
                  
                </div>
                <div class="q-caption capitalize text-secondary text-bold">
                   <!-- 21.06 Litres -->
                  {{ details.colour }} , {{ details.make }} , {{ details.model }}
                </div>
              </div>
            </div>
            
            
          </q-list-header>
        </q-list>
      </div>
    </q-card>
  </div>
</template>

<script>
import Vehicle from "../shared/models/VehicleClass";
export default {
  /**
   *
   * Flight Card component represents a Flight
   * 
   * @example
   * 
   * // mocked vehicle data
   * const vehicle = new Vehicle({
   *    "id":       "173ec46b-0e12-45fe-9ba1-511abde3d318",
   *    "customer": "3fe22b2c-2b52-4a75-9db7-6cfc36a0cfcd"
   *    "vrn":      "FV59 DSE",
   *    "make":     "BMW",
   *    "model":     "520",
   *    "colour":   "Grey"
   * })
   * 
   * <vehicle-card :details="vehicle"/>
   * 
}
   * 
   */
  name: "VehicleCard",
  props: {
    /**
     * @param {Vehicle} details - Sets Vehicle details from vehicle object
     * 
     */
    details: { type: Vehicle, required: true }
  }
};
</script>

<style lang="stylus" scoped>
@import '~variables'

.flight
  margin 1.3rem 1rem

.flight__card
  min-width 18rem
  max-width 32rem
  margin auto
  width 100%
  border-radius 0.93rem

.flight__icon
  font-size $item-icon-size

.flight__arrival
  margin-left 0.3rem

.flight__separator
  background-color $secondary
  margin 0.4rem
  width 100%

.flight__icon-caption
  font-size 1.5rem

.flight__price
  font-size 1.3rem

.q-list
  border none
</style>
