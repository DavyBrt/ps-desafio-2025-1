import { categoryType } from "./category"

export type vehicleType = {
    id: string
    name: string
    image: string
    mark: string
    year: number
    storage: number
    price: number
    category_id: string
    category: categoryType
    create_at: Date
    update_at: Date
}