import systemFactory from '~/classes/system/system/systemFactory'
import DomInterface from '~/classes/nativescript/dom/dom/DomInterface'
import SystemInterface from '~/classes/system/system/SystemInterface'
import ScreenInterface from '~/classes/system/screen/ScreenInterface'
import {GestureTypes} from '@nativescript/core'
import PanGestureEventDataInterface
  from '~/classes/nativescript/dom/pan/panGestureEventData/PanGestureEventDataInterface'

export default class Field {
  private readonly dom: DomInterface
  private readonly screen: ScreenInterface
  private readonly system: SystemInterface
  private readonly SCALE: number = 2
  private topBeforeOnTap: number = 0
  private leftBeforeOnTap: number = 0

  constructor(dom: DomInterface) {
    this.dom = dom
    this.system = systemFactory()
    this.screen = this.system.getScreen()
    this.dom.width = this.screen.getModeratedLeft(this.screen.getUniversalWidth() * this.SCALE)
    this.dom.height = this.screen.getModeratedTop(this.screen.getUniversalHeight() * this.SCALE)
    this.dom.left = -this.dom.width / (this.SCALE * 2)
    this.dom.top = -this.dom.height / (this.SCALE * 2)
    this.dom.backgroundImage = '~/assets/test.jpg'
    this.dom.backgroundPosition = 'center'
    this.dom.backgroundRepeat = 'no-repeat'
    this.dom.backgroundSize = 'cover'

    dom.on(GestureTypes.pan, (args: PanGestureEventDataInterface) => {
      this.onTap(args)
    })
  }

  private onTap(args: PanGestureEventDataInterface): void {
    if (args.state === 1) {
      this.topBeforeOnTap = this.dom.top
      this.leftBeforeOnTap = this.dom.left
      return
    }

    const newTop = this.topBeforeOnTap + args.deltaY
    if (newTop >= -this.dom.height / this.SCALE && newTop <= 0) {
      this.dom.top = newTop
    }

    const newLeft = this.leftBeforeOnTap + args.deltaX
    if (newLeft >= -this.dom.width / this.SCALE && newLeft <= 0) {
      this.dom.left = newLeft
    }
  }
}