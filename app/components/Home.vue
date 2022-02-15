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
import SubjectLoadedDataInterface from '~/classes/subjects/subjectLoaded/subjectLoadedData/SubjectLoadedDataInterface'
import PlayerInterface from '~/classes/subjects/player/player/PlayerInterface'
import playerFactory from '~/classes/subjects/player/player/playerFactory'
import PlayerToInitDataInterface from '~/classes/subjects/player/playerToInitData/PlayerToInitDataInterface'
import DomInterface from '~/classes/nativescript/dom/dom/DomInterface'
import systemFactory from "~/classes/system/system/systemFactory"
import SystemInterface from "~/classes/system/system/SystemInterface"

declare var android: any;

export default Vue.extend({
  data() {
    return {
      system: null as unknown as SystemInterface,
      player: null as unknown as PlayerInterface,
    }
  },

  methods: {
    startTheRocket(args: SubjectLoadedDataInterface): void {
      this.player = playerFactory(
          {top: 360, left: 50} as PlayerToInitDataInterface,
          args.object as DomInterface
      )
      setInterval(() => {
        this.player.goToRight(1)
      }, 33)
    },

    // getSizes(args: ArgsInterface): void {
    //   const field: ArgsObjectInterface = args.object
    //   console.log(field.getActualSize())
    //   console.log(field.width)
    // }
  },

  mounted(): void {
    this.system = systemFactory()
    this.system.goFullScreen()
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
  background-color: black;
  width: 25;
  position: absolute;
}

.field {
  background-color: yellow;
  position: relative;
}
</style>
