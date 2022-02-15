import {android as androidApp} from '@nativescript/core/application'
import {device, Screen as NativescriptScreen} from '@nativescript/core/platform'
import Screen from '~/classes/system/screen/implementations/Screen'
import ScreenInterface from '~/classes/system/screen/ScreenInterface'

export default class System {
  private readonly screen: ScreenInterface

  public constructor() {
    console.warn('System init should be done only once all over the app!')
    this.screen = new Screen(
      NativescriptScreen.mainScreen.heightDIPs,
      NativescriptScreen.mainScreen.widthDIPs
    )
  }

  // noinspection JSUnusedGlobalSymbols
  public goFullScreen(): void {
    if (androidApp && device.sdkVersion >= '21') {
      const View = android.view.View
      const window = androidApp.startActivity.getWindow()
      const decorView = window.getDecorView()
      decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
        View.SYSTEM_UI_FLAG_FULLSCREEN |
        // @ts-ignore
        View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
      )
    }
  }

  // noinspection JSUnusedGlobalSymbols
  public getScreen(): ScreenInterface {
    return this.screen
  }
}