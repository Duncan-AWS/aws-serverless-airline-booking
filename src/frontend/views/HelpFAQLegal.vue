<template>
  <q-page class="container">
    <div class="wrapper">
      <div class="heading">
        <div class="q-display-1 search__headline" data-test="search-headline">
          Help
        </div>
      </div>
    </div>
    <div class="search__options q-pa-sm">
      <q-field
        class="home-icons search__options--input search__arrival"
        icon="not_listed_location"
        icon-color="primary"
        :label-width="8"
      >
      </q-field>
  
    </div>
    
    <div class="search__options q-pa-sm">
      
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">How Does Auto Pay work?</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>
      </q-card>

    </div>

  </q-page>
</template>

<script>
// @ts-nocheck



export default {
  /**
   *
   * Help view displays options for searching a flight given a departure, arrival and a date.
   */
  name: "HelpFAQLegal"
  
};
</script>

<style lang="stylus" scoped>
@import '~variables'

.search__options--input
  padding 0.3rem 1.5rem
  max-width 30rem
  margin auto
</style>
