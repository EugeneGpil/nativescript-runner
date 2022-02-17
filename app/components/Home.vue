<template>
  <Page actionBarHidden="true">
    <AbsoluteLayout>
      <Label @loaded="initField"></Label>
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
import fieldFactory from '~/classes/subjects/field/field/fieldFactory'
import FieldInterface from '~/classes/subjects/field/field/FieldInterface'

export default Vue.extend({
  data() {
    return {
      system: null as unknown as SystemInterface,
      player: null as unknown as PlayerInterface,
      field: null as unknown as FieldInterface,
    }
  },

  methods: {
    startTheRocket(args: SubjectLoadedDataInterface): void {
      this.player = playerFactory(
          {top: 100, left: 50} as PlayerToInitDataInterface,
          args.object as DomInterface
      )
      setInterval(() => {
        this.player.goToRight(2)
      }, 33)
    },

    initField(args: SubjectLoadedDataInterface): void {
      this.field = fieldFactory(args.object as DomInterface);
    },
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
</style>
