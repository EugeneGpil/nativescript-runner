import ScreenInterface from '~/classes/system/screen/ScreenInterface'

export default interface SystemInterface {
  goFullScreen(): void

  getScreen(): ScreenInterface
}