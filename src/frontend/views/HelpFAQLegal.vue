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
     <p>How does Auto Pay work?</p>
     <p>This is a paragraph of text explaining how the system works</p>
    </div>
    
    <div class="search__options q-pa-sm">
      <q-field
        class="home-icons search__options--input search__arrival"
        icon="not_listed_location"
        icon-color="primary"
        :label-width="8"
      >
      </q-field>
     <p>Do I need to enter the shop?</p>
     <p>This is a paragraph of text explaining how the system works</p>
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
