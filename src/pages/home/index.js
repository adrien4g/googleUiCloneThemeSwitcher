import React from 'react'
import Switch from 'react-switch'
import { useSelector, useDispatch } from 'react-redux'

//Style
import { Container } from './style'

//Images
import googleLogo from '../../images/google.svg'
import { AiOutlineSearch as SearchSvg } from 'react-icons/ai'
import { FaKeyboard as KeyboardSvg } from 'react-icons/fa'
import { FaMicrophone as MicrophoneSvg } from 'react-icons/fa'
import { CgMenuGridR as MenuSvg } from 'react-icons/cg'
import monkey from '../../images/monkey.jpg'

const Home = () => {

  const selectedTheme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  const toggleTheme = () => {
    dispatch({ type: 'changeTheme', theme: selectedTheme === 'light' ? 'dark' : 'light' })
  }

  return (
    <Container>
      <header>
        <span id='switch'>
          <Switch
            id='switch'
            onChange={() => toggleTheme()}
            checked={selectedTheme === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={12}
            width={35}
            handleDiameter={20}
            onColor='#333'
            offColor='#dbdbdb'
            offHandleColor='#808080'
          />
        </span>
        <span>
          <a href='/' class='hidden'>Gmail</a>
          <a href='/'>Images</a>
          <MenuSvg />
          <img src={monkey} alt='profile' />
        </span>
      </header>

      <img src={googleLogo} alt='logo' id='logo' />

      <div id='input'>
        <div class='icons'>
          <SearchSvg class='svg' />
        </div>
        <input></input>
        <div class='icons'>
          <KeyboardSvg class='svg' />
          <MicrophoneSvg class='svg' />
        </div>
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
        <div class='hidden'>

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