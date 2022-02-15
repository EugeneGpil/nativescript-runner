import PlayerToInitDataInterface from '~/classes/subjects/player/playerToInitData/PlayerToInitDataInterface'
import DomInterface from '~/classes/nativescript/dom/dom/DomInterface'
import PlayerInterface from '~/classes/subjects/player/player/PlayerInterface'
import Player from '~/classes/subjects/player/player/implementations/Player'

export default function (initData: PlayerToInitDataInterface, dom: DomInterface): PlayerInterface {
  return new Player(initData, dom)
}