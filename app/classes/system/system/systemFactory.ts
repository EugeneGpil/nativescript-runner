import SystemInterface from '~/classes/system/system/SystemInterface'
import System from '~/classes/system/system/implementations/System'

const system: SystemInterface = new System()

export default function systemFactory(): SystemInterface {
  return system
}