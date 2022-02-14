import PlayerCornersInterface from '~/classes/subjects/player/playerCorners/PlayerCornersInterface'

export default interface PlayerInterface {
  getCorners(): PlayerCornersInterface

  goToRight(distance: number): void
}