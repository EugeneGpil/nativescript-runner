<template>
  <Page actionBarHidden="true">
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
import * as app from '@nativescript/core/application'

export default Vue.extend({
  computed: {
    message(): String {
      return "Blank {N}-Vue app"
    },
  },

  mounted(): void {
    const application = app.android
    const activity = application.startActivity
    const win = activity.getWindow()
    win.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN)
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
