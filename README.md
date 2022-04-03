# Desplegando Express/Docker

## Secciones
- Descripción
- Pre-requisitos 📋
- Correr Proyecto

## Descripción:
App para el registro de tareas utilizando principalmente express, handlebars y psql:
##### Inicio
![imagen](https://user-images.githubusercontent.com/68036938/161407344-5b09c556-c250-4db1-900f-98067a4655c0.png)
##### Nueva Tarea
![imagen](https://user-images.githubusercontent.com/68036938/161407352-0ae7a598-39e5-4034-b0cc-6e569d09fbed.png)
##### Confirmación para eliminar la tarea
![imagen](https://user-images.githubusercontent.com/68036938/161407360-3aa54bae-3425-402f-8a7d-2b86c56b5fdb.png)

## Pre-requisitos 📋
- Docker
- DBeaver
- Editor de codigo (VS en mi caso)
- PSQL

## Correr Proyecto

- Clona o descarga éste repositorio y abrelo con tu editor de codigo.

![imagen](https://user-images.githubusercontent.com/68036938/161407796-c0417180-a904-4158-987e-7e8b0caf72bd.png)

- Crea una base de datos con el nombre de tu preferencia.
- Crea el archivo ".env" con las variables de entorno para ingresar a esa base de datos.

![imagen](https://user-images.githubusercontent.com/68036938/161408842-fca6be5e-d470-47b6-88af-ec25a1cbb64a.png)

- Abre la consola y corre:
- - npm install
- - node migrate.js - Para crear la tabla en la BD.
- - docker build . -t desplegando-express-docker

![imagen](https://user-images.githubusercontent.com/68036938/161409293-005d9a22-e487-4139-9550-b2fcd66c35cb.png)


- Iniciamos el servicio web (contenedor) a partir de la Imagen creada ejecutando en laterminal el siguiente comando docker 
- - run -d -p 4000:4000 desplegando-express-docker

![imagen](https://user-images.githubusercontent.com/68036938/161409418-21db0e8c-1140-462b-96dc-b752fd2acee6.png)


- Vamos a http://localhost:4000 para comprobar que se haya subido exitosamente. 
