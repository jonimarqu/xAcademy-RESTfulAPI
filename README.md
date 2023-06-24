# xAcademy-RESTfulAPI

Ejercicio de entrega de NodeJs.

Se requiere una API REST que permita manejar librerías y los libros asociados a cada una de
las librerías. Utilizar Node.Js Express, Sequelize y Passport como la infraestructura para crear
el servicio. Usar SQLlite como motor de base de datos.


Pasos del desarrollo.

Creo proyecto con npm. Creo dependencias con express, jsonwebtoken, passport, passport-jwt, sequelize y sqlite3. Tambien creo dependencia de desarrollo con nodemon. Creo script 'start' para iniciar y 'start:dev' para iniciar en ambiente de desarrollo.

Agrego /app.js

ORM: SEQUELIZE

Agrego /config/db-config.js

Con require, importo de la libreria 'sequelize' la clase { Sequalize } que es el punto de entrada para usar el ORM.
Creo la instancia sequelize de la clase Sequelize y le paso un objeto con los datos de la Base de Datos.
Creo la funcion asincronica initializeDB que inicializa y sincroniza la DB.
Exporto la intancia sequelize y la funcion initializeDB.

ARQUITECTURA

Creo las carpetas en las que voy a organizar el codigo, para que sea escalable y sencillo de leer y mantener:

/Controllers/ -> Manejan la finalidad de cada solicitud.

/Middleware/ -> Funciones intermediarias que se ejecutan entre la request y la response, y pueden procesar o modificar la request antes de que llegue al controller.

/Models/ -> Modelo de los datos.

/Providers/ -> Como acceder a los modelos.

/Routes/ -> Se direcciona la logica de cada solicitud segun su ruta.

/Services/ -> El control de lo que se hace (logica de negocio).

Creo en cada carpeta el archivo index.js donde se condensa todo lo que se exporta de cada modulo.

En app.js:

Importo la funcion express de la libreria express y la funcion initializaDB de la configuracion de la DB.
Creo una aplicacion de express llamando a la funcion express.
Defino el puerto que voy a utilizar para el desarrollo.
Con el metodo 'listen' de mi aplicacion, abro un nodo. Le paso el puerto y un callback a una funcion asincrona que llama a la funcion initializeDB y me dice por consola que el nodo esta escuchando conexiones.

Creo el middleware logging.js para loggear la ruta y el metodo de cada requese y lo exporto. Lo importo en el index y lo exporto. Lo importo en app.js y con el metodo 'use' de mi aplicacion, le digo que utilice ese middleware en cada request.

Creo los modelos con sus atributos e incluyo un deleted para el borrado logico. Relaciono los modelos Book y Library. Exporto los tres modelos y en el index los importo y exporto.

Usando la clase Router de express, creo las estructuras de ruta para los modelos y las exporto. Las importo al index y exporto. En mi aplicacion traigo esas rutas y con el metodo 'use', las aplico.

Creo la estructura de controllers de Book y Library, y los exporto. Los importo en index y exporto. Importo y utilizo estas estructuras en sus rutas.

