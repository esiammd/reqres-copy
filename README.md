<div align="center">
  <h1>REQRES COPY</h1>
  <span>Simulación de algunas rutas de la api reqres.in</span>
</div>

<p align="center">
  <a href="#-tecnologías">Tecnologías</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-api-de-referencia">API de referencia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cómo-ejecutar-el-proyecto">Cómo ejecutar el proyecto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cómo-testear">Cómo testear</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-observaciones">Observaciones</a>
</p>


## 🚀 Technologías

Este proyecto ha sido desarollado con las siguientes tecnologías:

-   [NestJS](https://nestjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Docker Compose](https://docs.docker.com/compose/)
-   [Swagger](https://swagger.io/)

## ☁ API de referencia

-   [Reqres](https://reqres.in)


## 🤔 Cómo ejecutar el proyecto

1. Clonar el repositorio: `git@github.com:esiammd/reqres-copy.git`

2. Acceder a la carpeta del proyecto en tu terminal: `cd reqres-copy`

3. Instalar las dependencias del proyecto: `yarn`

4. Inicializar docker y ejecutar el comando: `docker compose up -d`

5. Ejecutar la versión de desarrollo del proyecto: `yarn start:dev`


## 🤔 Cómo testear

1. Via Swagger: http://localhost:3333/docs

2. Via Insomnia: archivo en .github/reqres-copy-api


## 📝 Observaciones

1. La base de datos levantada via docker compose está hecha en MySQL.

2. Posibles datos iniciales:

    ```
     INSERT INTO user
      (id, first_name, last_name, email, avatar)
     VALUES
      (1, 'George', 'Bluth', 'george.bluth@reqres.in', 'https://reqres.in/img/faces/1-image.jpg'),
      (2, 'Janet', 'weaver', 'janet.weaver@reqres.in', 'https://reqres.in/img/faces/2-image.jpg'),
      (3, 'Emma', 'Wong', 'emma.wong@reqres.in', 'https://reqres.in/img/faces/3-image.jpg'),
      (4, 'Eve', 'Holt', 'eve.holt@reqres.in', 'https://reqres.in/img/faces/4-image.jpg'),
      (5, 'Charles', 'Morris', 'charles.morris@reqres.in', 'https://reqres.in/img/faces/5-image.jpg'),
      (6, 'Tracey', 'Ramos', 'tracey.ramos@reqres.in', 'https://reqres.in/img/faces/6-image.jpg'),
      (7, 'Michael', 'Lawson', 'michael.lawson@reqres.in', 'https://reqres.in/img/faces/7-image.jpg'),
      (8, 'Lindsay', 'Ferguson', 'lindsay.ferguson@reqres.in', 'https://reqres.in/img/faces/8-image.jpg'),
      (9, 'Tobias', 'Funke', 'tobias.funke@reqres.in', 'https://reqres.in/img/faces/9-image.jpg'),
      (10, 'Byron', 'Fields', 'byron.fields@reqres.in', 'https://reqres.in/img/faces/10-image.jpg'),
      (11, 'George', 'Edwards', 'george.edwards@reqres.in', 'https://reqres.in/img/faces/11-image.jpg'),
      (12, 'Rachel', 'Howell', 'rachel.howell@reqres.in', 'https://reqres.in/img/faces/12-image.jpg');
     ```


