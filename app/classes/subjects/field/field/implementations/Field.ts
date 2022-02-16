import systemFactory from '~/classes/system/system/systemFactory'
import DomInterface from '~/classes/nativescript/dom/dom/DomInterface'
import SystemInterface from '~/classes/system/system/SystemInterface'
import ScreenInterface from '~/classes/system/screen/ScreenInterface'

export default class Field {
  private dom: DomInterface
  private screen: ScreenInterface
  private system: SystemInterface

  constructor(dom: DomInterface) {
    this.dom = dom
    this.system = systemFactory()
    this.screen = this.system.getScreen()
    this.dom.top = this.screen.getModeratedTop(0)
    this.dom.left = this.screen.getModeratedLeft(0)
    this.dom.width = this.screen.getModeratedLeft(2000)
    this.dom.height = this.screen.getModeratedTop(1000)
    this.dom.backgroundImage = '~/assets/test.jpg'
    this.dom.backgroundPosition = 'center'
    this.dom.backgroundRepeat = 'no-repeat'
    this.dom.backgroundSize = 'cover'
  }
}