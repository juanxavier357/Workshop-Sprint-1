# Workshop-Sprint-1

# Make It Real - Character Card
This is a solution to the Workshop Sprint 1 project of the Make It Real course.

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Vercel](#vercel)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

**The challenge**
  El objetivo de ese tealle es poner en práctica lo que has aprendido en el programa. Los temas que se cubrirán son: Scrum, Git, HTML y CSS, JavaScript y React.

  La misión consta de dos partes: primero deberás construir un proyecto en React y después deberás responder una serie de preguntas. En el reporte de la misión deberás agregar el link al repositorio del proyecto y las respuestas a las preguntas.
  
  1. Proyecto
Construir una aplicación web la cual consta de tres páginas:

Home
Product Detail
About
La aplicación debe tener un menú que le permita al usuario navegar entre estas páginas Home, About, el Product Detail se navega por medio del card correspondiente al producto.

Requerimientos
Usar Flexbox CSS.
El código del proyecto debe estar en un repositorio público de tu autoría.
Bonus: Implementar tu CSS con BEM o módulos de CSS.
Home Page
Esta página tendrá la responsabilidad de listar una serie de productos que debes obtener consumiendo la api de Fake Store API.

Para mostrar estos productos debes crear un componente llamada ProductCard el cual tendrá como propiedades id, title, image las cuales tienen que estar renderizadas. Este componente tiene la particularidad de permitir ir al detalle del producto en otra página (http://localhost:5173/detail/:id) en la cual se debe renderizar toda la información del producto en detalle de forma visualmente agradable.

{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
Además el componente ProductCard solo debe permitir ir a la página de detalle siempre y cuando un tiempo random configurado de forma aleatoria no se haya vencido. El tiempo restante debe mostrarse en pantalla como una cuenta regresiva para actualizarse cada segundo.

Ejemplos:

ProductCard-1: Tiene un tiempo máximo para ir al detalle de 1 min, cuando el tiempo finalice este Card no debe permitir realizar una navegación.
ProductCard-2: Tiene un tiempo máximo para ir al detalle de 3 min, cuando el tiempo finalice este Card no debe permitir realizar una navegación.
ProductCard-3: Tiene un tiempo máximo para ir al detalle de 1 min, cuando el tiempo finalice este Card no debe permitir realizar una navegación.

Product detail Page
Renderizar la información del producto y permitir navegar a la página de inicio o la del perfil.

About Page
Debes mostrar en esta pantalla tu información personal:

Nombre
Descripción
Imagen
Lista de 3 cosas que hayas aprendido en este programa
Correo
Link a tu github
2. Preguntas
¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
Explicar la diferencia entre git merge y git rebase.
¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
¿Qué es el Virtual DOM?
Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

**Screenshot**

  ![Home Top](https://github.com/juanxavier357/Workshop-Sprint-1/blob/master/images/Home-Top.JPG)
  
  ![Home Bottom](https://github.com/juanxavier357/Workshop-Sprint-1/blob/master/images/Home-Bottom.JPG)
  
  ![Disable Button](https://github.com/juanxavier357/Workshop-Sprint-1/blob/master/images/Disabled-Button.JPG)
  
  ![Detail No Click](https://github.com/juanxavier357/Workshop-Sprint-1/blob/master/images/Detail-NoClick.JPG)
  
  ![Detail Click](https://github.com/juanxavier357/Workshop-Sprint-1/blob/master/images/Detail-Click.JPG)
  
  ![About](https://github.com/juanxavier357/Workshop-Sprint-1/blob/master/images/About.JPG)
  

## Vercel

**Vercel**
  

  
## My process

**Built with**
* Visual Studio Code
* Semantic HTML5 markup
* Notation BEM
* SASS
* JSX
* Vite
* Props
* Props-Types
* Hooks: useState, useEffetc, useNavigate, useNavigation
* API Fetch
* React Router

**What I learned**
* A poner en práctica los conocimientos adquiridos en el Curso de Preparación de Make It Real.
* A crear componentes de React con los Props-Types y React Router en su version 6 y 6.4 para implementarlos de forma correcta y
  tener un código mejor estructurado que evite fallos de su uso a otros programadores.

**Continued development**
  Seguiré revisando la documentación de Props-Types y React Router para poder implementarlos en los componentes de mis proyectos.

**Useful resources**
  Git, GitHub, API Fake Store API: https://fakestoreapi.com/products

## Author
  Website - www.agenciawebmovil.com/
  GitHub - @juanxavier357

## Acknowledgments
  Agradezco a mis mentores Cristian Moreno y Juan Lorza por sus enseñanzas y revisiones de este trabajo.


