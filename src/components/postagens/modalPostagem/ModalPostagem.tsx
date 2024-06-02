import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 bg-blue-900 hover:bg-white hover:text-blue-900'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;