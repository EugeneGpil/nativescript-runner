import SystemInterface from '~/classes/system/system/SystemInterface'
import System from '~/classes/system/system/implementations/System'

export default function systemFactory(): SystemInterface {
  return new System()
}