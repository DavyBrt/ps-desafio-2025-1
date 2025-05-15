'use client'

import { useToast } from "@/components/use-toast"
import { api } from "@/services/api"
import { vehicleType } from "@/types/vehicle"
import { useEffect, useState } from "react"
import style from './style.module.css'
import Card from "@/components/site_PS/card/card"
import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { Swiper, SwiperSlide } from "swiper/react"
import Navbar from "@/components/site_PS/navbar/navbar"
import Footer from "@/components/site_PS/footer/footer"
import VehicleFilterByCategory from '@/components/site_PS/filter/Filtro'



const data = [
  {id: '1', image: '/assets/Promo_jeep.png'},
  {id: '2', image: '/assets/Promo_PCX.png'},

]

export default function Home() {
  const [vehicles, setVehicles] = useState<vehicleType[] | undefined>()
  const {toast} = useToast()
  const [filteredVehicles, setFilteredVehicles] = useState<vehicleType[] | undefined>()


  useEffect( ()=>{
    const requestData = async() => {
      const {response} = await api<vehicleType[]>('GET', `/vehicles`)

      if (response){
        setVehicles(response)
        setFilteredVehicles(response)
      }else{
        toast({
          title: 'Os veículos não foram encontrados'
        })
      }
    }
    requestData()
  }, [toast])

  const handleFilterChange = (categoryId: string) => {
  if (!categoryId) {
    setFilteredVehicles(vehicles)
  } else {
    const filtered = vehicles?.filter((v) => v.category_id === categoryId)
    setFilteredVehicles(filtered)
  }
}

  
  return (
    <>
      <div className={style.page}>
        <div className={style.css_wrapper}>
          <Navbar logo="/images/icon_brito.png"/>
        </div>
        <div className={style.container}>
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000 }}
          
          >
            {data.map( (item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt = 'Slider'
                  className={style.slide_item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div>
          <div className={style.filter_box}>
            <VehicleFilterByCategory onFilterChange={handleFilterChange} />
          </div>
          <div className={style.wrapper}>
            {filteredVehicles?.map((vehicle, index) => (
            <Card key={vehicle.id} vehicle={vehicle}  />
          ))}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}
