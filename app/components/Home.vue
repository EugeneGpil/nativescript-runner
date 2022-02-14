<template>
  <Page actionBarHidden="true">
    <AbsoluteLayout class="field">
      <Label class="info" @loaded="startTheRocket">
        <Span class="fas" text.decode="&#xf135; "/>
      </Label>
    </AbsoluteLayout>
  </Page>
</template>

<script lang="ts">
import ArgsInterface from '~/classes/main/args/args/ArgsInterface'
import ArgsObjectInterface from '~/classes/main/args/argsObject/ArgsObjectInterface'

import Vue from "nativescript-vue"
import {android as androidApp} from '@nativescript/core/application'
import {device} from '@nativescript/core/platform'

declare var android: any;

export default Vue.extend({
  mounted(): void {
    if (androidApp && device.sdkVersion >= '21') {
      const View = android.view.View
      const window = androidApp.startActivity.getWindow()
      const decorView = window.getDecorView()
      decorView.setSystemUiVisibility(
          View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
          View.SYSTEM_UI_FLAG_FULLSCREEN |
          View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
      )
    }
  },

  methods: {
    startTheRocket(args: ArgsInterface) {
      const rocket: ArgsObjectInterface = args.object
      rocket.top = 30;
      rocket.left = 0;
      setInterval(() => {
        rocket.left = rocket.left + 1
      }, 100)
    }
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
  background-color: black;
  width: 25;
  position: absolute;
}

.field {
  background-color: yellow;
  position: relative;
}
</style>
