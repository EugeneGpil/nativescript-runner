<template>
  <Page actionBarHidden="true">
    <!--    <AbsoluteLayout class="field" @loaded="getSizes">-->
    <AbsoluteLayout class="field">
      <Label class="info" @loaded="startTheRocket">
        <Span class="fas" text.decode="&#xf135; "/>
      </Label>
    </AbsoluteLayout>
  </Page>
</template>

<script lang="ts">

import Vue from "nativescript-vue"
import {android as androidApp} from '@nativescript/core/application'
import {device} from '@nativescript/core/platform'
import SubjectLoadedDataInterface from '~/classes/subjects/subjectLoaded/subjectLoadedData/SubjectLoadedDataInterface'
import PlayerInterface from '~/classes/subjects/player/player/PlayerInterface'
import PlayerFactory from '~/classes/subjects/player/player/PlayerFactory'
import PlayerToInitDataInterface from '~/classes/subjects/player/playerToInitData/PlayerToInitDataInterface'
import DomInterface from '~/classes/nativescript/dom/dom/DomInterface'

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
    startTheRocket(args: SubjectLoadedDataInterface): void {
      const player: PlayerInterface = PlayerFactory(
          {top: 50, left: 50} as PlayerToInitDataInterface,
          args.object as DomInterface
      )
      setInterval(() => {
        player.goToRight(1)
      }, 33)
    },

    // getSizes(args: ArgsInterface): void {
    //   const field: ArgsObjectInterface = args.object
    //   console.log(field.getActualSize())
    //   console.log(field.width)
    // }
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
