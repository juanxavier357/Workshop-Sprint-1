# Preguntas

## 1.	¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

En el marco de la metodología Scrum, que es una de las metodologías ágiles más populares para la gestión de proyectos de desarrollo de software, 
existen varias ceremonias clave para celebrar un sprint. Estas ceremonias ayudan a facilitar la colaboración y comunicación entre los miembros del
equipo y a garantizar un proceso de desarrollo iterativo y enfocado en la entrega de valor. A continuación, se detallan las principales ceremonias de Scrum:

### 1.1. Planificación del Sprint (Sprint Planning): 
    Es una reunión en la que el equipo de desarrollo, el Scrum Master y el Product Owner definen y acuerdan el objetivo del sprint y seleccionan las historias
    de usuario o elementos del backlog que serán abordados durante el sprint. También se establece un plan de acción para lograr los objetivos establecidos.

### 1.2. Reunión Diaria de Seguimiento (Daily Scrum): 
    Es una reunión diaria de corta duración (generalmente de 15 minutos) en la que los miembros del equipo se actualizan mutuamente sobre el
    progreso deltrabajo desde la última reunión diaria, comparten los obstáculos que han encontrado y planifican el trabajo para el próximo día. 
    El objetivo es sincronizar al equipo y mantener un enfoque compartido en los objetivos del sprint.

### 1.3. Revisión del Sprint (Sprint Review): 
    Al finalizar cada sprint, se lleva a cabo una reunión de revisión en la que el equipo muestra a los stakeholders y al Product Owner el trabajo completado 
    durante el sprint. Se revisan las historias de usuario o elementos del backlog implementados y se recibe retroalimentación por parte de los stakeholders. 
    El objetivo es obtener comentarios valiosos y asegurarse de que el trabajo realizado cumpla con las expectativas y necesidades del negocio.

### 1.4. Retrospectiva del Sprint (Sprint Retrospective): 
    Es una reunión en la que el equipo reflexiona sobre el sprint que acaba de terminar y analiza lo que funcionó bien, los problemas encontrados y
    las posibles mejoras para el próximo sprint. Se identifican acciones concretas para implementar mejoras y se discuten las lecciones aprendidas. 
    El objetivo es fomentar la mejora continua del equipo y del proceso de desarrollo.

  Estas ceremonias son fundamentales para el éxito de un sprint en Scrum, ya que brindan la oportunidad de realizar un seguimiento constante del trabajo, 
  obtener retroalimentación y realizar ajustes necesarios en el proceso de desarrollo.



## 2.	¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

Los wireframes son representaciones visuales básicas y esquemáticas de una interfaz de usuario, que se utilizan para mostrar la estructura y disposición 
de los elementos en una página web, aplicación móvil u otro tipo de sistema interactivo. Los wireframes suelen ser esquemas simples en blanco y negro, 
sin diseño visual detallado ni contenido real, enfocándose en la disposición y organización de los elementos.

Los wireframes permiten a los diseñadores y equipos de desarrollo visualizar y comunicar la arquitectura de la información, la jerarquía visual y las 
interacciones básicas de un producto antes de comenzar con el diseño visual completo. Son una herramienta útil para iterar rápidamente sobre ideas, 
probar la usabilidad y obtener retroalimentación temprana de los usuarios y partes interesadas.

  Existen varias herramientas disponibles para crear wireframes. Algunas de las más populares son:

### 2.1. Balsamiq: 
    Es una herramienta que ofrece una interfaz intuitiva y fácil de usar para crear wireframes. Proporciona una biblioteca de elementos
    de interfaz predefinidos y permite arrastrar y soltar componentes para diseñar rápidamente la estructura de una página.

### 2.2. Sketch: 
    Es una herramienta de diseño vectorial que también se utiliza ampliamente para crear wireframes. Ofrece una amplia gama de funciones
    y una interfaz flexible que permite a los diseñadores crear wireframes detallados y personalizados.

### 2.3. Adobe XD: 
    Es una herramienta de diseño y prototipado que ofrece una funcionalidad completa para crear wireframes interactivos. Permite diseñar 
    wireframes y realizar transiciones y animaciones básicas para simular la experiencia del usuario.

### 2.4. Axure RP: 
    Es una herramienta más avanzada que permite crear wireframes interactivos y prototipos de alta fidelidad. Ofrece una amplia gama de
    características para simular interacciones complejas y pruebas de usabilidad.

  Estas son solo algunas de las herramientas disponibles, y la elección de la herramienta dependerá de las necesidades y preferencias del equipo de diseño y desarrollo.



## 3.	Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

En JavaScript, `var`, `let` y `const` son palabras clave utilizadas para declarar variables. 
Cada una tiene diferencias en cuanto a su alcance y capacidad de reasignación. 
A continuación, se explica la diferencia entre estas tres declaraciones de variables:

### 3.1. `var`: 
    Es la forma tradicional de declarar variables en JavaScript. Las variables declaradas con `var` tienen un alcance de función o alcance global, 
    lo que significa que son accesibles dentro de la función donde se declaran o en todo el ámbito global si se declaran fuera de cualquier función. 
    Además, las variables `var` pueden ser reasignadas y redeclaradas en el mismo ámbito sin restricciones.

```javascript
function example() {
  var x = 10;
  if (true) {
    var x = 20; // Se reasigna la variable x
    console.log(x); // Imprime 20
  }
  console.log(x); // Imprime 20
}
```

### 3.2. `let`: 
    Es una forma más moderna de declarar variables introducida en ECMAScript 6 (ES6). Las variables declaradas con `let` tienen un alcance de bloque, 
    lo que significa que solo son accesibles dentro del bloque donde se declaran, ya sea un bloque de función, un bucle o una declaración condicional. 
    A diferencia de `var`, las variables `let` no pueden ser redeclaradas en el mismo ámbito, pero sí pueden ser reasignadas.

```javascript
function example() {
  let x = 10;
  if (true) {
    let x = 20; // Se crea una nueva variable x con alcance de bloque
    console.log(x); // Imprime 20
  }
  console.log(x); // Imprime 10
}
```

### 3.3. `const`: 
    Es otra forma introducida en ES6 para declarar variables, pero a diferencia de `var` y `let`, las variables declaradas con `const` son constantes, 
    lo que significa que no pueden ser reasignadas una vez que se les ha asignado un valor. 
    Además, al igual que `let`, las variables `const` tienen un alcance de bloque.

```javascript
function example() {
  const x = 10;
  if (true) {
    const x = 20; // Se crea una nueva constante x con alcance de bloque
    console.log(x); // Imprime 20
  }
  console.log(x); // Imprime 10
}
```

#### En resumen, se recomienda utilizar:
    `let` para variables que necesiten cambiar su valor a lo largo del código y
    `const` para variables que sean constantes y no necesiten ser reasignadas. 
    `var` todavía se utiliza en contextos donde se requiere compatibilidad con versiones antiguas de JavaScript o cuando se desea un alcance global.
    


## 4.	¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

  Para crear una nueva rama llamada "rama-1" en un repositorio de Git, se pueden utilizar los siguientes comandos:

### 4.1. Crear una nueva rama y cambiar a ella:
   ```bash
   git branch rama-1
   git checkout rama-1
   ```
   Este conjunto de comandos crea una nueva rama llamada "rama-1" y luego cambia a esa rama. 
   Es importante destacar que este método utiliza dos comandos separados.

### 4.2. Crear una nueva rama y cambiar a ella de manera simultánea:
   ```bash
   git checkout -b rama-1
   ```
   Este comando crea una nueva rama llamada "rama-1" y automáticamente cambia a esa rama. 
   Es una forma más concisa de lograr el mismo resultado que en el primer método.

### 4.3. Crear una nueva rama basada en una rama existente y cambiar a ella:
   ```bash
   git checkout -b rama-1 rama-existente
   ```
   Este comando crea una nueva rama llamada "rama-1" que se origina a partir de la rama 
   existente especificada (por ejemplo, "rama-existente") y luego cambia a la nueva rama.

  En cualquiera de los tres casos, tendrás una nueva rama llamada "rama-1" en el repositorio de Git y estarás trabajando en esa rama. 
  Recuerda que puedes reemplazar "rama-1" y "rama-existente" con los nombres que desees utilizar.



## 5.	Explicar la diferencia entre git merge y git rebase.

  Tanto `git merge` como `git rebase` son comandos en Git que se utilizan para combinar cambios de diferentes ramas en un repositorio. 
  Sin embargo, difieren en la forma en que realizan la fusión y pueden afectar el historial de commits. 
  
    A continuación, se explica la diferencia entre ambos:

### 5.1. `git merge`: 
    El comando `git merge` se utiliza para fusionar los cambios de una rama en otra. Al realizar un merge, se crea un nuevo commit de fusión que
    combina los cambios de ambas ramas. Este commit de fusión tiene dos padres: uno de la rama actual y otro de la rama que se está fusionando. 
    Como resultado, el historial de commits muestra claramente cuándo y dónde se realizó la fusión.

   ```bash
   git checkout rama-destino
   git merge rama-origen
   ```

   En el ejemplo anterior, los cambios de la rama-origen se fusionarán en la rama-destino y se creará un nuevo commit de fusión.

### 5.2. `git rebase`: 
    El comando `git rebase` se utiliza para cambiar la base de una rama. En lugar de fusionar los cambios en un nuevo commit de fusión, 
    `git rebase` reaplica los commits de la rama actual en la parte superior de otra rama. 
    Esto significa que los commits de la rama actual se aplican uno a uno en la rama de destino, como si se hubieran hecho directamente sobre ella. 
    El historial de commits se modifica, y los commits de la rama actual aparecen como si se hubieran realizado directamente después del último commit de la rama de destino.

   ```bash
   git checkout rama-actual
   git rebase rama-destino
   ```

   En el ejemplo anterior, los commits de la rama-actual se reaplicarán uno a uno en la parte superior de la rama-destino.

   La elección entre `git merge` y `git rebase` depende del flujo de trabajo y las preferencias del equipo. 
   
   #### Algunas consideraciones importantes son:

    - `git merge` conserva el historial de commits original, lo que facilita la comprensión de cuándo y cómo se realizaron las fusiones.
    - `git rebase` crea un historial lineal y limpio sin commits de fusión adicionales, lo que puede hacer que el historial de commits sea más fácil de seguir.
    - Sin embargo, `git rebase` puede causar conflictos más complejos que deben resolverse manualmente durante la reaplicación de los commits.

   En general, se recomienda utilizar `git merge` cuando se desea mantener un historial de commits más claro 
   y `git rebase` cuando se busca un historial de commits más lineal y limpio.
   
   

## 6.	¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

La principal diferencia entre un Pull Request (PR) y el comando `git pull` radica en su propósito y contexto de uso. 

  A continuación, se explican las diferencias entre ambos:

### 6.1. Pull Request (PR):
   Un Pull Request es una funcionalidad que proporcionan las plataformas de alojamiento de repositorios Git, como GitHub o GitLab. 
   Permite que los desarrolladores propongan los cambios realizados en una rama de su repositorio y soliciten que esos cambios 
   se fusionen en otra rama, generalmente en la rama principal del proyecto. Los PR son útiles cuando se trabaja en equipo y se 
   desea revisar y discutir los cambios antes de combinarlos en la rama objetivo.

   #### Los pasos típicos para trabajar con un PR son:
      - Crear una rama de desarrollo para realizar cambios.
      - Realizar los cambios necesarios en la rama de desarrollo.
      - Enviar un Pull Request, que incluye una descripción detallada de los cambios y los motivos para fusionarlos.
      - Los revisores o colaboradores del proyecto pueden revisar el código, realizar comentarios y discutir los cambios propuestos.
      - Si el PR es aprobado, los cambios se fusionan en la rama objetivo mediante la opción "Merge" o "Merge pull request".

### 6.2. `git pull`:
   El comando `git pull` se utiliza para fusionar los cambios remotos en una rama local. Básicamente, combina las actualizaciones 
   realizadas en el repositorio remoto con la rama actual en el repositorio local. 
   En otras palabras, `git pull` es una combinación de dos comandos de Git: `git fetch` y `git merge`.

   #### Cuando se ejecuta `git pull`, Git realiza las siguientes acciones:
      - Recupera los cambios remotos realizados en la rama remota especificada.
      - Fusiona los cambios remotos en la rama local actual.

   El comando `git pull` se utiliza normalmente para mantener actualizado el repositorio local con respecto al repositorio remoto. 
   No implica el envío de una solicitud de fusión o revisión como en el caso de un Pull Request.

   En resumen, el Pull Request (PR) es un mecanismo proporcionado por plataformas de alojamiento de repositorios para facilitar la revisión y fusión
   de cambios en un proyecto colaborativo. Por otro lado, `git pull` es un comando de Git para actualizar el repositorio local con los cambios remotos.
    
    

## 7.	¿Qué es el Virtual DOM?

El Virtual DOM (DOM virtual) es un concepto utilizado en bibliotecas y frameworks de JavaScript, como React, 
para mejorar el rendimiento y eficienciaen la manipulación y actualización de la interfaz de usuario (UI).

El DOM (Modelo de Objetos del Documento) es una representación de la estructura HTML de una página web. 
Cada elemento HTML se representa como un nodo en el árbol del DOM. 
Cuando se realizan cambios en la UI, el navegador actualiza el DOM y refleja los cambios en la pantalla.

El Virtual DOM es una abstracción ligera y eficiente del DOM real. 
Es una representación en memoria de la estructura de la interfaz de usuario y los elementos de la página web. 
A diferencia del DOM real, el Virtual DOM no está directamente vinculado al navegador ni a la pantalla.

Cuando se utiliza el Virtual DOM, los cambios en la UI se realizan primero en el Virtual DOM y luego se comparan con el estado anterior del Virtual DOM. 
Esta comparación permite identificar de manera eficiente los cambios reales que se deben realizar en el DOM real. 
Luego, solo los cambios necesarios se aplican al DOM real, minimizando la cantidad de manipulaciones y actualizaciones en la página.

El uso del Virtual DOM ofrece varias ventajas:

### 7.1. Eficiencia en actualizaciones: 
    Al reducir la cantidad de actualizaciones directas en el DOM real, se mejora el rendimiento y se minimiza el impacto en la interfaz de usuario.

### 7.2. Optimización de actualizaciones: 
    El Virtual DOM es capaz de realizar una comparación eficiente y precisa entre el estado actual y el estado anterior, 
    identificando solo los cambios necesarios y evitando actualizaciones innecesarias.

### 7.3. Facilidad de programación: 
    Al utilizar el Virtual DOM, los desarrolladores pueden trabajar con una interfaz de programación más sencilla
    y abstraerse de las complejidades de manipular directamente el DOM real.

  Es importante destacar que el uso del Virtual DOM es una técnica específica de ciertos frameworks y bibliotecas, 
  y no es una característica nativa del lenguaje JavaScript o del navegador.




## 8.	Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. 
  (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).
  
  Ver Solución

