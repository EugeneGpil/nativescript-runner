import CoordinatesInterface from '~/classes/essential/coordinates/CoordinatesInterface'

export default class Screen {
  private readonly height: number
  private readonly width: number

  private readonly UNIVERSAL_HEIGHT = 1000
  private readonly UNIVERSAL_WIDTH = 2000

  public constructor(height: number, width: number) {
    this.height = height
    this.width = width
  }

  public getModeratedCoordinates(coordinates: CoordinatesInterface): CoordinatesInterface {
    const top = this.getModeratedTop(coordinates.top)
    const left = this.getModeratedLeft(coordinates.left)
    return {top, left}
  }

  public getModeratedLeft(left: number): number {
    return left / this.UNIVERSAL_WIDTH * this.width
  }

  public getModeratedTop(top: number): number {
    return top / this.UNIVERSAL_HEIGHT * this.height
  }

  public getUniversalWidth(): number {
    return this.UNIVERSAL_WIDTH
  }

  public getUniversalHeight(): number {
    return this.UNIVERSAL_HEIGHT
  }
}