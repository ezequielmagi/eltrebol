import { useState } from "react"

import  { alumnos }  from '../assets/alumnos';

const ListComponent = ( props ) => {

    const alumnosAdm = alumnos.filter( alumno => alumno.course1 === `${props.curso}` )

    const [ openTab , setOpenTab ] = useState( false )

    const openCloseList = () =>{
        setOpenTab(!openTab)
    }
    
  return (
    <article id='alumnosAdm'>
        
          <article id='alumnosAdmList'>
            <header> { openTab ? <p>Listado alumnos de {props.titulo}:</p> : <p>Listado alumnos de {props.titulo}:</p> } <span id='openCloseBtn' onClick={openCloseList}> { openTab ? '-' : '+' } </span> </header>
            <ol className={ openTab ? 'open' : 'hide'  }>
              {
                alumnosAdm.map( alumno => {
                  return <li key={alumno.password} >{ alumno.lastname }, { alumno.firstname } <p>User: {alumno.username} </p> <p>Pass: {alumno.password}</p> </li> 
                } )
              }
            </ol>
          </article>
        </article>
  )
}

export default ListComponent