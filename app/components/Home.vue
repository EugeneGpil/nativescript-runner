<template>
  <Page actionBarHidden="true" @doubletap="hideMenu">
    <GridLayout>
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; "/>
          <Span>{{ message }}</Span>
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue"
import application from '~/objects/application'

export default Vue.extend({
  computed: {
    message(): String {
      return "Blank {N}-Vue app"
    },
  },

  methods: {
    hideMenu() {
      //...
    },
  },

  mounted(): void {
    application.hideStatusbar()
  }
})
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
