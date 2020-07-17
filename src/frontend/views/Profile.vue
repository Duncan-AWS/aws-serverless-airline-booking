<template>
  <div class="row">
    <div class="col-12 wrapper">
      <div class="heading">
        <div
          class="text-primary q-display-1 loyalty__heading--name"
          data-test="loyalty-name"
        >
          {{ fullName }}
        </div>
      </div>
      <amplify-sign-out class="Form--signout"></amplify-sign-out>
    </div>
  </div>
</template>

<script>
// @ts-nocheck
import { mapState, mapGetters } from "vuex";
import { AmplifyEventBus } from "aws-amplify-vue";

/**
 *
 * Profile view displays a current Loyalty progress and points, and allow customers to set preferences.
 */
export default {
  name: "Profile",
  /**
   * @param {object} user - Current authenticated user from Profile module
   * @param {boolean} isAuthenticated - Getter from Profile module
   * @param {Loyalty} loyalty - Loyalty data from Loyalty module
   */
  computed: {
    ...mapState({
      user: state => state.profile.user,
      loyalty: state => state.loyalty.loyalty
    }),
    ...mapGetters({
      isAuthenticated: "profile/isAuthenticated",
      firstName: "profile/firstName",
      lastName: "profile/lastName"
    }),
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  
  async mounted() {
    /** Amplify clears out cookies and any storage that can map to users
     * However it is on us to clear out our own store and redirect to Auth
     * If customer decides to sign out we redirect it to home, and subsequentially to authentication
     */
    AmplifyEventBus.$on("authState", info => {
      if (info === "signedOut") {
        this.$store
          .dispatch("profile/getSession")
          .catch(
            this.$router.push({ name: "auth", query: { redirectTo: "home" } })
          );
      }
    });

    // authentication guards prevent authenticated users to view Profile
    // however, the component doesn't stop from rendering asynchronously
    // this guarantees we attempt talking to Loyalty service
    // if our authentication guards && profile module have an user in place
    try {
      if (this.isAuthenticated) {
        await this.$store.dispatch("loyalty/fetchLoyalty");
      }
    } catch (error) {
      console.error(error);
      this.$q.notify(
        `Error while fetching Loyalty - Check browser console messages`
      );
    }
  }
};
</script>

<style lang="stylus">
/**
 * Amplify authenticatior HOC as of now doesnot provide overriding mechanisms for UI
 * we use CSS Root variables along with an authentication-form injected class for consistent experience
 */
@import '~variables'

a
  text-decoration none
  color black

.loyalty__heading
  &--tier
    margin $between-content-margin

.loyalty__progress
  &--points > *
    margin $between-content-margin

  &--next-tier > *
    margin $between-content-margin

.profile__preferences-option
  &:hover
    cursor pointer

:root
  // Not a safe way to override as this can change at build
  // https://github.com/aws-amplify/amplify-js/issues/2471
  --amazonOrange $secondary !important
  --color-primary $primary !important

.authenticator__form
  @media only screen and (min-device-width: 700px)
    margin auto
    padding 15vmin

  > *
    font-family 'Raleway', 'Open Sans', sans-serif

  @media only screen and (min-device-width: 300px) and (max-device-width: 700px)
    > div
      min-width 80vw
      padding 10vmin
</style>
