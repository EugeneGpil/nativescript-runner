import {android as androidApp} from '@nativescript/core/application'
import {device} from '@nativescript/core/platform'

export default class System {
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
}