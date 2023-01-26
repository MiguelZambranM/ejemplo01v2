//import logo from './logo.svg';
import './App.css';
import Saludos from './components/Saludos'
import Ejercicio from './components/Ejercicio'
import Tareas from './components/Tareas'

function App() {
  return (
    <div className="App">
      <h1>Primero pasos con React</h1>
      <h2>Bienvenidos</h2>
      <Saludos nombre ="Miguel" apellido ="Zambrano" />
      <Saludos nombre ="Angel" apellido ="Morante" />
      <Ejercicio nombre= "Fidel" edad = "89" pasatiempo= "matar de hambre un pais"/>
      <Ejercicio nombre= "Ernestro" edad = "87" pasatiempo= "matar de hambre un pais con mi hermano mayor"/>
      <h3>Tareas</h3>
      <Tareas/>
    </div>
  );
}

export default App;
