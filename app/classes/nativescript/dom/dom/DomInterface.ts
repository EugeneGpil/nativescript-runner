import onPanCallbackType from '~/classes/nativescript/dom/pan/onPanCallbackType'

export default interface DomInterface {
  top: number
  left: number
  width: number
  height: number
  backgroundImage: string
  backgroundPosition: string
  backgroundRepeat: string
  backgroundSize: string

  on(en: number, callback: onPanCallbackType): void
}