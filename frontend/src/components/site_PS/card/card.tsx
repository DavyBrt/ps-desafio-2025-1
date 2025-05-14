'use client'

import { useState } from 'react'
import { vehicleType } from '@/types/vehicle'
import style from './style.module.css'
import { buyVehicle } from '@/actions/vehicle'

interface vehicleProp {
  vehicle: vehicleType
}

export default function Card({ vehicle }: vehicleProp) {
  const [storage, setStorage] = useState(vehicle.storage)
  const [loading, setLoading] = useState(false)

  const handleBuy = async () => {
    if (storage <= 0 || loading) return

    setLoading(true)
    try {
      const res = await buyVehicle(String(vehicle.id))
      const data = JSON.parse(res)
      alert(res)

      if (data.storage !== undefined) {
        setStorage(data.storage)
      } else {
       alert(typeof data.error === 'string' ? data.error : JSON.stringify(data.error))
      }
    } catch {
      alert('Erro ao conectar com o servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={style.card}>
      <img src={vehicle.image} alt='Imagem do veículo' className={style.card_img} />
      <div className={style.card_body}>
        <h2 className={style.card_name}>{vehicle.name}</h2>
        <p className={style.card_content}><b>Marca:</b> {vehicle.mark}</p>
        <p className={style.card_content}><b>Ano:</b> {vehicle.year}</p>
        <p className={style.card_content}><b>Quantidade:</b> {storage}</p>
        <p className={style.card_content}><b>Preço:</b> R${vehicle.price}</p>
        <button
          onClick={handleBuy}
          disabled={storage <= 0 || loading}
          className={style.buy_button}
        >
          {storage === 0 ? 'Esgotado' : loading ? 'Comprando...' : 'Comprar'}
        </button>
      </div>
    </div>
  )
}