//Componente que muestra las actividades(tareas) diarias de una persona 
import React,{useState} from 'react'
import { datos } from "./datos";

export default function Tarea() {const [listadoTar, setlistadoTareas] = useState(datos);
  console.log("Listado de tareas");
  //console.log(listadoTareas);
  
  
  const eliminarHandler = (item) =>{
  console.log("dato a eliminar", item);
  const nuevaLista = listadoTar.filter(taraes => {return taraes.titulo !== item.titulo});
  console.log("Nueva lista: ",nuevaLista);
  setlistadoTareas(nuevaLista);
  }
    return (
      <div>
        <div className='container'>
          <div className='row mt-4'>
            {
              listadoTar.map((item, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <div className="card mt-4">
                      <div className="card header">
                        <h3>{item.titulo}</h3>
                        </div>
                      <div className="card-body">
                        <p><strong>{item.nombre}</strong></p> 
                        <p>{item.descripcion}</p>
                      </div>
                      <div className='card-footer'>
                        <mark>{item.prioridad}</mark>
                        <p> <button className="btn btn-primary" onClick={()=> eliminarHandler(item)}>Eliminar</button></p>
                        
                        </div>
 
                    </div>
                  </div>
                );  
              })
            }
          </div>
        </div>
      </div>
    );
}
