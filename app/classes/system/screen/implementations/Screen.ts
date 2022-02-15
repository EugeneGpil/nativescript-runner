import CoordinatesInterface from '~/classes/essential/coordinates/CoordinatesInterface'

export default class Screen {
  private height: number
  private width: number

  public constructor(height: number, width: number) {
    this.height = height
    this.width = width
  }

  public getModeratedCoordinates(coordinates: CoordinatesInterface): CoordinatesInterface {
    return {top: 0, left: 0} as CoordinatesInterface
  }
}