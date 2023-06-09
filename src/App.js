import './App.css';
import  ListComponent  from './components/ListComponent.jsx'


// const alumnosAdm = alumnos.filter( alumno => alumno.course1 === 'adm' )
// const alumnosSec = alumnos.filter( alumno => alumno.course1 === 'sec' )
// const alumnosDti = alumnos.filter( alumno => alumno.course1 === 'dti' )
// const alumnosDgp = alumnos.filter( alumno => alumno.course1 === 'dgp' )
// const alumnosRbt = alumnos.filter( alumno => alumno.course1 === 'rbt' )
// const alumnosMkt = alumnos.filter( alumno => alumno.course1 === 'mkt' )




function App() {

  const titulos = [
    { tituloCurso: 'Administracion de Pymes', filtro: 'adm'},
    { tituloCurso: 'Diseño Grafico Publicitario', filtro: 'dgp'},
    { tituloCurso: 'Diseño Tecnico Industrial', filtro: 'dti'},
    { tituloCurso: 'Marketing Digital', filtro: 'mkt'},    
    { tituloCurso: 'Secretariado Ejecutivo', filtro: 'sec'},    
    { tituloCurso: 'Diagnostico y Mantenimiento de PC', filtro: 'dym'},    
  ]


  return (
    <main>
      <h1>Listado El Trebol</h1>

      {
        titulos.map( titulo => {
          return <ListComponent curso={titulo.filtro} titulo={titulo.tituloCurso} />
        } )
      }
      
    </main>
  );
}

export default App;
