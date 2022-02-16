import FieldInterface from '~/classes/subjects/field/field/FieldInterface'
import DomInterface from '~/classes/nativescript/dom/dom/DomInterface'
import Field from '~/classes/subjects/field/field/implementations/Field'

export default function fieldFactory(dom: DomInterface): FieldInterface {
  return new Field(dom)
}