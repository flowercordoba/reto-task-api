# DOCUMENTACION: https://documenter.getpostman.com/view/18560802/2s9YymHjrw

# link apiRes desplegada = https://api-server-task.onrender.com
# INSTRUCCION
 1.  npm install
 2.  .env.template completar los elementos requeridos
 3.  npm run dev 

 # Tecnologia 


1. **.circleci**: Contiene configuraciones relacionadas con CircleCI, para integración y entrega continuas (CI/CD).

2. **src**: Directorio principal del código fuente que incluye:

   - **data**: Maneja los datos de la aplicación, divididos en:
     - **config**: Configuraciones, probablemente de la base de datos o servicios externos.
     - **models**: Modelos de datos utilizados en la aplicación.

   - **domain**: Contiene la lógica de negocio de la aplicación, con:
     - **dtos** (Data Transfer Objects): Define cómo se transfieren los datos en la aplicación. Subdividido en `auth`, `paginate`, `task`, `user`.
     - **entities**: Entidades de la aplicación, que representan los objetos del dominio de negocio.

   - **feature**: Organización por características o módulos de la aplicación, como:
     - **auth**: Autenticación, con controladores y rutas.
     - **github**: Módulo relacionado con GitHub, detalles no especificados.
     - **notificacion**: Módulo de notificaciones, con controladores, interfaces, modelo, rutas y validadores.
     - **task**: Manejo de tareas, similar en estructura al módulo de notificaciones.
     - **user**: Gestión de usuarios, con controladores, interfaces, modelos y rutas.

   - **shared**: Contiene componentes compartidos en toda la aplicación como decoradores, interfaces, middlewares, servicios, utilidades y validadores.
 proyecto está bien organizado, separando claramente las responsabilidades de cada parte del código y facilitando el mantenimiento y la expansión futuros. Además, el uso de directorios como `dtos`, `entities`, `controllers`, `models` y `routes` indica un patrón de diseño y arquitectura coherente,  basado en principios de clean architecture o similar. La presencia del directorio `.circleci` implica la implementación de prácticas de CI/CD.