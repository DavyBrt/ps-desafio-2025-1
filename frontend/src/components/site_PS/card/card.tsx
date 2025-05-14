'use client'

import { vehicleType } from '@/types/vehicle'
import style from './style.module.css'

interface vehicleProp {
    vehicle: vehicleType
}

export default function Card({vehicle}: vehicleProp){
    return(
        <div className={style.card}>
            <img src={vehicle.image} alt='Imagem do veiculo' className={style.card_img}/>
            <div className={style.card_body}>
                <h2 className={style.card_name}>{vehicle.name}</h2>
                <p className={style.card_content}><b>Marca:</b> {vehicle.mark}</p>
                <p className={style.card_content}><b>Ano:</b> {vehicle.year}</p>
                <p className={style.card_content}><b>Quantidade:</b> {vehicle.storage}</p>
                <p className={style.card_content}><b>Preço:</b> R${vehicle.price}</p>
            </div>
        </div>

    )
}