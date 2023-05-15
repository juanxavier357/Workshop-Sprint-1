import './About.scss'

function About() {

  return (
    <>
      <h2>About</h2>
      <h3><strong>Información Personal</strong></h3>
      <div className="content">
        <div className="content__columna--primera">
          <ul>
            <li>Nombre: Juan Cabello</li> <br />
            <li>Descripción:
              <br /> Soy una persona de acción, me gusta el emprendimiento
              <br /> y estudiar programación. Soy profesor de Matemática
              <br /> y quiero crear aplicaciones web y móviles interacticas
              <br /> que ayuden aprender los cursos de matemáticas y ciencias.
              <br /> Sé que lo lograré porque cuento con las enseñanzas de
              <br /> expertos mentores de desarrollo y programación FullStack.
            </li> <br />
            <li>Sitio Web: <a href="https://agenciawebmovil.com">Agencia Web Móvil</a></li>
          </ul>
        </div>
        <div className="content__image">
            <img src="/foto.jpg" alt="Foto de perfil" width="200px" />
          </div>
        <div className="content__columna--segunda">
          <li>Lista de 3 cosas que hayas aprendido en este programa:</li>
          <ol>
            <li>He aprendido a desarrollar la paciencia. 
              <br /> Escribir código me ha ayudado a calmarme
              <br /> para poder solucionar los problemas que surgen
              </li> <br />
            <li>He aprendido a usar Git y GitHub, al comienzo
              <br /> me parecía muy difícil y complicado, pero gracias
              <br /> a la buena explicación de los mentores y las 
              <br /> prácticas me siento más confiado al usar Git
            </li> <br />
            <li>He aprendido a usar notación BEM, SASS, la API Fetch, 
              <br /> los métodos CRUD, los Hooks useState, useEffect, 
              <br /> useNavigate, useParams, useRef, Express, React
              <br /> Router y sobre todo he mejorado en JavaScript
            </li>
          </ol>
          <li>Correo: cabellosalirrosas@gmail.com</li>
          <li>GitHub: <a href="https://github.com/juanxavier357">juanxavier357</a></li>
        </div>
      </div>
    </>
  )
}

export default About