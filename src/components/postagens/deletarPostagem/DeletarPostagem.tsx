import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import { buscar, deletar } from '../../../services/Service'
import { AuthContext } from '../../../context/AuthContext'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarPostagem() {
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/postagens")
  }

  async function deletarPostagem() {
    try {
      await deletar(`/postagens/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Bye Bye... foi pro lixo!!', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar a Postagem', 'erro')
    }

    retornar()
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar postagem</h1>

      <p className='text-center font-semibold mb-4'>Já sei, Você flopou ou falou alguma besteira que se arrependeu. Você realmente tem certeza que deseja apagar?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-emerald-600 text-white font-bold text-2xl'>Postagem</header>
        <div className="p-4">
          <p className='text-xl h-full'>{postagem.titulo}</p>
          <p>{postagem.texto}</p>
        </div>
        <div className="flex">
          <button className='w-full text-slate-100 bg-emerald-400 hover:bg-emerald-600 flex items-center justify-center' onClick={deletarPostagem}>Sim</button>
          <button className='text-slate-100 bg-red-500 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
        </div>
      </div>
    </div>
  )
}

export default DeletarPostagem