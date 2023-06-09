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
    'Administracion de Pymes',
    'Diseño Grafico Publicitario',
    'Diseño Tecnico Industrial',
    'Marketing Digital'
  ]

  const adm = 'adm'
  const dgp = 'dgp'
  const dti = 'dti'
  const mkt = 'mkt'

  return (
    <main>
      <h1>Listado El Trebol</h1>
    
      <ListComponent curso={adm} titulo={titulos[0]} />
      <ListComponent curso={dgp} titulo={titulos[1]} />
      <ListComponent curso={dti} titulo={titulos[2]} />
      <ListComponent curso={mkt} titulo={titulos[3]} />
      
    </main>
  );
}

export default App;
