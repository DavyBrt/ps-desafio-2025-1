'use client'
import { useEffect, useState } from 'react'
import style from './style.module.css'
import { vehicleType } from '@/types/vehicle'
import { getSession } from 'next-auth/react'
import { useToast } from '@/components/use-toast'
import { FaUser } from "react-icons/fa";

interface navBarProps {
    logo: string

}

export default function Navbar({logo}:navBarProps){
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const { toast } = useToast()

    useEffect(()=>{
        const requestDataSession = async () => {
            const sessionResponse = await getSession()

            if(sessionResponse){
                setIsAuth(!!sessionResponse.user)
            }else{
                toast({
                    title: 'Voce nao esta logado',
                })
            }
        }
        requestDataSession()
    }, [toast])
    return(
        <nav className={style.navbar}>
            <div className={style.navbar_nav}>
                <a href='http://localhost:3000/'>
                    <img className={style.logo} src={logo} alt="Logo site" />
                </a>

                <ul className={style.nav_links}>
                    <li className={style.nav_item}><a href="http://localhost:3000">Início</a>    
                    </li>
                    <li className={style.nav_item}>
                        <a href="https://dicionario.priberam.org/ve%C3%ADculo#google_vignette" target='_blank'>Veículos</a>
                        
                    </li>
                    <li className={style.nav_item}>
                        <a href="https://dicionario.priberam.org/categoria" target='_blank'>Categorias</a>
                    </li>
                    <li className={style.nav_item}>
                        <FaUser className={style.user_logo}/>
                        <a href="/admin" className={style.icon_button}>
                            {isAuth ? 'Logado' : 'Logar'}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}