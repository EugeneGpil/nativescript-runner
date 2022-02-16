import CoordinatesInterface from '~/classes/essential/coordinates/CoordinatesInterface'

export default interface ScreenInterface {
  getModeratedCoordinates(coordinates: CoordinatesInterface): CoordinatesInterface
  getModeratedLeft(left: number): number
  getModeratedTop(top: number): number
}
