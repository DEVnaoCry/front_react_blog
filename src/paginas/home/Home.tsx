import homeLogo from '../../assets/home.gif'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import ListaPostagens from '../../components/postagens/listaPostagem/ListaPostagens';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="bg-blue-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Olá Dev!</h2>
            <p className='text-xl'>O que quer dizer?</p>
            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <Link to='/postagens' className='hover:underline'><button className='rounded hover:bg-gray-200 bg-white text-indigo-800 py-2 px-5'>Ver postagens</button></Link>
            </div>
          </div>
          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;