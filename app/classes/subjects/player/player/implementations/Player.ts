import PlayerToInitDataInterface from '~/classes/subjects/player/playerToInitData/PlayerToInitDataInterface'
import DomInterface from '~/classes/nativescript/dom/dom/DomInterface'
import PlayerInterface from '~/classes/subjects/player/player/PlayerInterface'
import PlayerCornersInterface from '~/classes/subjects/player/playerCorners/PlayerCornersInterface'
import CoordinatesInterface from '~/classes/essential/coordinates/CoordinatesInterface'

export default class Player implements PlayerInterface {
  private static readonly _HEIGHT = 10
  private static readonly _WIDTH = 10

  private _dom: DomInterface

  constructor(data: PlayerToInitDataInterface, dom: DomInterface) {
    this._dom = dom
    this._goTo(data.top, data.left)
  }

  private _goTo(top: number, left: number): void {
    this._setTop(top)
    this._dom.left = left
  }

  private _setTop(top: number): void {
    this._dom.top = top - Player._HEIGHT
  }

  private _getTop(): number {
    return this._dom.top + Player._HEIGHT
  }

  public getCorners(): PlayerCornersInterface {
    return {
      topLeft: {
        top: this._getTop() - Player._HEIGHT,
        left: this._dom.left,
      } as CoordinatesInterface,
      bottomLeft: {
        top: this._getTop(),
        left: this._dom.left,
      } as CoordinatesInterface,
      topRight: {
        top: this._getTop() - Player._HEIGHT,
        left: this._dom.left + Player._WIDTH,
      } as CoordinatesInterface,
      bottomRight: {
        top: this._getTop(),
        left: this._dom.left + Player._WIDTH,
      } as CoordinatesInterface,
    } as PlayerCornersInterface
  }

  public goToRight(distance: number): void {
    this._dom.left = this._dom.left + distance
  }
}