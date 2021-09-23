# app-login

- DEMO online de la aplicación:
  https://app-login-frontend.herokuapp.com

- Usuarios de prueba:

  - prueba1@test.com / 123456789
  - prueba2@test.com / 123456789

  - prueba3@test.com / 123456789

  

- La app consiste en una aplicación realizada con React, Redux, React-Router, React-MaterialUI y Bootstrap
- Consisten en 2 vistas:  Una vista de login para acceder y en una de la Home. Esta última indica cuanto tiempo lleva con la sesión activa.
- Para poder entrar a la Home, sólo se puede acceder con alguno de los usuarios indicados arriba
- El backend es un servidor montado en Heroku con mongoDB, en donde se encuentran guardados los usuarios



####  Vista de Login:

- El login es una ventana bien simple, que necesita de un email y contraseña

- Si los datos no cumplen los requisitos antes de ser enviados, se mostrará un error en los campos
- Si los datos no son correctos al ser enviados, el servidor responderá con un error.
- Al presionar en Log in, visualmente aparece un *loader* en el botón
- Si se accede con un usuario correctamente, se guarda el token en localStorage y la fecha de inicio de sesión, además de guardar en la store de Redux los datos de que está autorizado el usuario
- Cada vez que se carga la página, se verifica si tenemos algún token en el localStorage. Si es que si, se consulta con el servidor si es correcto (y no ha sido modificado por el usuario). Si es que correcto, nos enviará a la vista de Home directamente, sin hacer login.
- Si el token del localStorage no es correcto o ha expirado, nos enviará al login
- Cualquier ruta que pongamos en la página, sólo nos enviará al login o a la Home, si estamos logueados

####  Vista de Home:

- La ventana de home muestra el tiempo que llevamos con la sesión iniciada y un botón para desconectarnos de la sesión
- El tiempo del contador se actualiza cada segundo. 
- El contador obtiene la fecha desde el localStorage en milisegundos y obtiene la diferencia con la fecha actual. Con eso, se obtiene la diferencia y se calcula los días/horas/minutos/segundos para mostrar
- El botón de Logout, elimina los datos de la store de redux y del localstorage

#### Instalación

- Clonar el repositorio en un ordenador
- Entrar en la ruta `app-login\src` e instalar las dependencias con `npm install`
- Una vez instalada las dependencias, se debe ejecutar en la misma carpeta: npm start
- La app dentro de la ruta `constants/api.js` ya tiene configurada las rutas del servidor, por lo que localmente obtiene los mismos datos que la DEMO online

