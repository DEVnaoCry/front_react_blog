import { GithubLogo, Envelope, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

function Footer() {

  const { usuario } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if (usuario.token !== '') {
    footerComponent = (
      <div className="flex justify-center bg-orange-600 text-white shadow-md">
        <div className="container flex flex-col items-center py-8">
          <Link to='/home'> <p className='self-center text-xl font-semibold mb-4'>Um diário para desenvolvedores tristes. 😭 | ® &copy; {data}</p></Link>
          <ul className="flex flex-wrap items-center mb-3 text-sm font-medium">
            <li>
              <Link to='/postagens' className="hover:underline px-4 py-2">Postagens</Link>
            </li>
            <li>
              <Link to='/temas' className="hover:underline px-4 py-2">Temas</Link>
            </li>
            <li>
              <Link to='/perfil' className="hover:underline px-4 py-2">Perfil</Link>
            </li>
          </ul>
          <p className='text-xl mb-3'>Entre em contato</p>
          <div className='flex gap-4'>
            <a href='https://www.linkedin.com/in/falecomsanti/' target='_blank' className="text-white hover:text-gray-300">
              <LinkedinLogo size={37} weight='light' />
            </a>
            <a href='mailto:work.frodrigues@gmail.com' target='_blank' className="text-white hover:text-gray-300">
              <Envelope size={37} weight='light' />
            </a>
            <a href='https://github.com/DEVnaoCry' target='_blank' className="text-white hover:text-gray-300">
              <GithubLogo size={37} weight='light' />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer