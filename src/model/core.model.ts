import { Squad } from "../entities/core.entities"
import { multiplierModel, positionModel } from "./base.model"

export interface CreateCountryInterface {
    src_img: string
    name: string
    color: string
}

export interface CreateSquadInterface {
    country: number
    count: number
    name: string
    src_img: string
    experence: multiplierModel
}

export type CreateConstructionType = {
    country: number
    name: string
    src_img: string
    defeneMultiplier: multiplierModel
    position: positionModel
}

export type CreateProductionType = {
    country: number
    town: number
    name: string
    src_img: string
    defeneMultiplier: multiplierModel
    position: positionModel
    multiplier: multiplierModel
}

const Sq = new Squad({ count: 1, country: 1, experence: 1, name: 'zxc', src_img: 'zxc' })