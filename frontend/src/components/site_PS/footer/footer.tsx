'use client'

import style from "./style.module.css"
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";



export default function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.footer_content}>
                <div className={style.contacts}>
                    <h2>A melhor empresa de veículos do mercado!</h2>
                    <p>Compre aqui o veículo dos seus sonhos!</p>
                    <div className={style.social_media}>
                        <a href="https://www.instagram.com/davy_a.b/" target="_blank" className={style.social_link} id = 'Instagram'>
                            <AiOutlineInstagram className={style.icons} />
                        </a>
                        <a href="https://www.facebook.com/davi.dealmeidabrito.7?locale=pt_BR" target="_blank" className={style.social_link} id = 'Facebook'>
                            <AiOutlineFacebook className={style.icons} />
                        </a>
                        <a href="https://www.linkedin.com/in/davy-brito/" target="_blank" className={style.social_link} id = 'Linkedin'>
                            <AiOutlineLinkedin className={style.icons} />
                        </a>
                    </div>
                </div>

                <ul className={style.list}>
                    <li>
                        <h3>Nossa empresa</h3>
                    </li>
                    <li>
                        <a href="#" className={style.sobre_link}>
                            Brito's Car
                        </a>
                    </li>
                </ul>

                <ul className={style.list}>
                    <li>
                        <h3>Parcerias</h3>
                    </li>
                    <li>
                        <a href="https://www.honda.com.br/" target="_blank" className={style.sobre_link}>Honda</a>
                    </li>
                    <li>
                        <a href="https://ufes.br/" target="_blank" className={style.sobre_link}>UFES</a>
                    </li>
                    <li>
                        <a href="https://www.adapti.info/" target="_blank" className={style.sobre_link}>Adapti</a>
                    </li>
                </ul>
            </div>
            <div className={style.copyright}>
                2025, Feito com prog1 por Davy Brito
            </div>
        </footer>
    )
}