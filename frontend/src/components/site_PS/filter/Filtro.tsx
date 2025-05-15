'use client'

import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { categoryType } from '@/types/category'
import style from './style.module.css'

interface VehicleFilterProps {
  onFilterChange: (categoryId: string) => void
}

export default function VehicleFilter({ onFilterChange }: VehicleFilterProps) {
  const [categories, setCategories] = useState<categoryType[]>([])

  useEffect(() => {
    api<categoryType[]>('GET', '/categories').then(({ response }) => {
      if (response) setCategories(response)
    })
  }, [])

  return (
    <div className={style.container}>
      <select
        className={style.box_select}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">Todas as categorias</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  )
}