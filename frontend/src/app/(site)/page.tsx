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



const data = [
  {id: '1', image: '/assets/Promo_jeep.jpeg'},
  {id: '2', image: '/assets/Promo_PCX.jpeg'},

]

export default function Home() {
  const [vehicles, setVehicles] = useState<vehicleType[] | undefined>()
  const {toast} = useToast()

  useEffect( ()=>{
    const requestData = async() => {
      const {response} = await api<vehicleType[]>('GET', `/vehicles`)

      if (response){
        setVehicles(response)
      }else{
        toast({
          title: 'Os veículos não foram encontrados'
        })
      }
    }
    requestData()
  }, [toast])
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
        <div className={style.wrapper}>
        {vehicles?.map((vehicle: vehicleType, index: number) => (
          <Card vehicle={vehicle} key={index}/>
        ))}
        </div>
        <Footer/>
      </div>
    </>
  )
}
