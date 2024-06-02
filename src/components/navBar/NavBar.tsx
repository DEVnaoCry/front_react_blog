import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import { HouseSimple, PlusSquare, List, SignOut, User, GameController } from '@phosphor-icons/react';
import './NavBar.css';

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta('Já tá indo? Poxa, fica mais três horinhas...🥹', 'sucesso');
    navigate('/login');
  }

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='navbar-container w-full bg-orange-600 text-blue flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Diário Dev.💭</Link>
          {/* Adicione mais itens do nav bar aqui, se necessário */}
          
          <div className='navbar-links flex gap-7'>


            <div className='nav-item gap-2'><HouseSimple size={18}></HouseSimple><Link to='/home' className='hover:underline'>Home</Link></div>

            <div className='nav-item gap-2'><List size={18}></List><Link to='/postagens' className=' hover:underline'>Postagens</Link></div>

            <div className='nav-item gap-2'><List size={18}></List><Link to='/temas' className=' hover:underline'>Temas</Link></div>

            <div className='nav-item gap-2'><PlusSquare size={18}></PlusSquare><Link to='/cadastroTema' className=' hover:underline'>Cadastrar tema</Link></div>

            <div className='nav-item gap-2'><User size={18}></User><Link to='/perfil' className=' hover:underline'>Perfil</Link></div>

            <div className='nav-item gap-2'><SignOut size={18}></SignOut><Link to='' onClick={logout} className=' hover:underline'>Sair</Link></div>

          </div>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;