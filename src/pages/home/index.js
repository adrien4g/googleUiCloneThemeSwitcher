import React from 'react'

//Style
import { Container } from './style'

//Images
import googleLogo from '../../images/google.svg'
import { AiOutlineSearch as SearchSvg } from 'react-icons/ai'
import { FaKeyboard as KeyboardSvg } from 'react-icons/fa'
import { FaMicrophone as MicrophoneSvg } from 'react-icons/fa'
import {CgMenuGridR as MenuSvg} from 'react-icons/cg'
import monkey from '../../images/monkey.jpg'
 
const Home = () => {
  return (
    <Container>
      <header>
        <a href='/'>Gmail</a>
        <a href='/'>Images</a>
        <MenuSvg />
        <img src={monkey} alt='profile' />
      </header>

      <img src={googleLogo} alt='logo' id='logo'/>

      <div id='input'>
        <SearchSvg class='svg' />
        <input></input>
        <KeyboardSvg class='svg' />
        <MicrophoneSvg class='svg' />
      </div>

      <div id='buttons'>
        <button>Pesquisa Google</button>
        <button>Estou com sorte</button>
      </div>

      <p>Disponibilizado pelo Google em:
          <a href='/'> Português</a>
      </p>
      <footer>
        <div>
          <p>Brasil</p>
        </div>
        <div>

          <span>
            <a href='/'>Publicidade</a>
            <a href='/'>Negócios</a>
            <a href='/'>Sobre</a>
            <a href='/'>Como funciona a Pesquisa</a>
          </span>

          <span>
            <a href='/'>Privacidade</a>
            <a href='/'>Termos</a>
            <a href='/'>Configurações</a>
          </span>

        </div>
      </footer>

    </Container>
  )

}

export default Home