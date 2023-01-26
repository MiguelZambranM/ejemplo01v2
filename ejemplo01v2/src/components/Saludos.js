import React from 'react'
//El componente Saludos, recibe como parametro el nombre de la persona. El saludo debe nombrar a esa persona

export default function Saludos(props) {
  return (
    <div>Hola {props.nombre} {props.apellido}, bienvenido a la Pucese</div>
  )
}