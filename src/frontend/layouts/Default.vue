<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar class="text-center" color="primary">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="brand">Octank Fuel Payment</q-toolbar-title>
        <q-btn
          flat
          round
          dense
          size="lg"
          icon="home"
          :to="{ name: 'home' }"
        />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list no-border link inset-delimiter>
        <q-item :to="{ name: 'home' }" exact>
          <q-item-side icon="home" />
          <q-item-main label="Home" sublabel="Home" />
        </q-item>
        <q-item :to="{ name: 'profile' }" exact>
          <q-item-side icon="person" />
          <q-item-main label="Profile" sublabel="User Profile" />
        </q-item>
        <q-item :to="{ name: 'bookings' }" exact>
          <q-item-side icon="drive_eta" />
          <q-item-main label="My Vehicles" sublabel="Registration Number" />
        </q-item>
        <q-item :to="{ name: 'bookings' }" exact>
          <q-item-side icon="payment" />
          <q-item-main label="Payment Card" sublabel="Credit Card" />
        </q-item>
        <q-item :to="{ name: 'bookings' }" exact>
          <q-item-side icon="local_gas_station" />
          <q-item-main label="History" sublabel="Payment and Fuel History" />
        </q-item>
        <q-item :to="{ name: 'bookings' }" exact>
          <q-item-side icon="help_outline" />
          <q-item-main label="Help - FAQ - Legal" sublabel="Frequently Asked Questions" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <transition enter-active-class="animated fadeIn" appear>
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data() {
    return {
      leftDrawer: true,
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  }
};
</script>

<style></style>
