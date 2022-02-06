import ApplicationInterface from "~/classes/application/ApplicationInterface";
import * as app from "@nativescript/core/application";

export default class Application implements ApplicationInterface {
  private static _instance: ApplicationInterface | undefined;

  private constructor() {
    //...
  }

  public static get instance(): ApplicationInterface {
    if (this._instance) {
      return this._instance
    }
    this._instance = new Application()
    return this._instance
  }

  hideStatusbar(): void {
    app.android.startActivity
      .getWindow()
      .addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN)
  }
}