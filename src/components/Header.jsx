import React from 'react'
import './Header.css'
import { useState } from 'react'
import imglogo from '../assets/logo.png'
import cad from '../pages/cadastroelogin'

export const Header = () => {
  return (
        
       <header>
           <a href=""> <img src={imglogo} alt=""  /></a>
            <ul className='menu'>
                <li >
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Quem somos</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
            </ul>

            <aside>
              <a href="" className='Cadastro'>CADASTRAR</a>
              <a href="" className='Login'>LOGIN</a>
            </aside>
            </header>
    

  )
}
