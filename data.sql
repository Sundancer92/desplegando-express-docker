CREATE DATABASE desafio-docker;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE tareas(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre varchar (255) NOT NULL,
    descripcion varchar (255) NOT NULL,
    fecha_creacion timestamp
    );

