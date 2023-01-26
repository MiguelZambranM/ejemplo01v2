/*Diseñe el componente que muestre su nombre, edad y pasatiempo. A continuacion, muestrelo 2 veces en su app.
Modifique el componente para que los datos sean parametrizados*/

import React from 'react'

export default function Ejercicio(props) {
  return (
    <div>
        <p>Mi nombre es {props.nombre}</p>
        <p>Tengo {props.edad} años</p>
        <p>Mi pasa tiempo favorito es el {props.pasatiempo}</p>
    </div>
  )
}
