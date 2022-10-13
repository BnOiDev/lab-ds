import  './styles/global.css';
import { Text } from './components/Text';

export function App() {
 
  return (
    <div className="container">
      <h1 className='font-bold text-2xl text-violet-500'>Hello Word</h1>

      <button className="bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300">
        Enviar
      </button>
   </div>
  )
}

