import { multiplier2, multiplier1, multiplier5, multiplier4, multiplier3 } from "../../data/base.data"
import { generateID } from "../function/generateNumber"
import { multiplierModel, positionModel } from "../model/base.model"
import { CreateConstructionType, CreateProductionType, CreateSquadInterface } from "../model/core.model"


export class Entity {
    constructor({ src_img, name }: { name: string, src_img: string }) {
        this.id = generateID()
        this.name = name
        this.src_img = src_img
        this.selected = false
    }
    id: number
    src_img: string
    name: string
    selected: boolean

    Select() {
        this.selected = !this.selected
    }
}

export class Construction extends Entity {
    constructor(payload: CreateConstructionType) {
        super(payload)
        this.defeneMultiplier = multiplier2
        this.is_destroy = false
        this.position = payload.position
        this.country = payload.country
    }
    defeneMultiplier: multiplierModel
    is_destroy: boolean
    position: positionModel
    country: number
}

export class Production extends Construction {
    constructor(payload: CreateProductionType) {
        super(payload)
        this.defeneMultiplier = multiplier1
        this.multiplier = payload.multiplier
        this.town = payload.town
    }
    multiplier: multiplierModel
    town: number
}

export class Squad extends Entity {
    constructor(payload: CreateSquadInterface) {
        super(payload)
        this.country = payload.country
        this.count = payload.count
    }

    GetNewNumbers(CountNewNumbers: number) {
        this.count += CountNewNumbers
    }

    GetNextMultiplier() {
        const swap = (multiplier: multiplierModel) => {
            this.multiplier = multiplier
        }
        this.multiplier == multiplier1 && swap(multiplier2)
        this.multiplier == multiplier2 && swap(multiplier3)
        this.multiplier == multiplier3 && swap(multiplier4)
        this.multiplier == multiplier4 && swap(multiplier5)
    }

    country: number
    count: number
    multiplier: multiplierModel
}

export class Country extends Entity {
    constructor(paylod) {
        super(paylod)
        this.color = paylod.color
        this.live = true
    }
    color: string
    live: boolean
    influence: number
    gold: number
    food: number
}

