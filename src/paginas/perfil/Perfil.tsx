import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginLogo from '../../assets/perfil.gif';
import { AuthContext } from '../../context/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import './Perfil.css';

function Perfil() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Você precisa estar logado', 'erro');
      navigate("/login");
    }
  }, [usuario.token]);

  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white perfil-background' src={loginLogo} alt="Capa do Perfil" />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10 perfil-foto' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-gradient-to-r from-blue-800 to-cyan-800 text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>e-mail: {usuario.usuario}</p>
      </div>
    </div>
  );
}

export default Perfil;