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

import {android as androidApp} from '@nativescript/core/application';
import {device} from '@nativescript/core/platform';

declare var android: any;

export default Vue.extend({
  computed: {
    message(): String {
      return "Blank {N}-Vue app"
    },
  },

  mounted(): void {
    if (androidApp && device.sdkVersion >= '21') {
      const View = android.view.View;
      const window = androidApp.startActivity.getWindow();
      const decorView = window.getDecorView();
      decorView.setSystemUiVisibility(
          View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
          View.SYSTEM_UI_FLAG_FULLSCREEN |
          View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
      );
    }
  },
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
