import ScreenInterface from '~/classes/system/screen/ScreenInterface'
import systemFactory from '~/classes/system/system/systemFactory'

const system = systemFactory()

export default function screenFactory(): ScreenInterface {
  return system.getScreen()
}