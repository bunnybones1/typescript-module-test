import { Object3D } from "three"

export const example = (name: string) => {
    const obj = new Object3D()
    obj.name = name
    return obj
}