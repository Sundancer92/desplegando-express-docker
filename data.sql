CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),

CREATE TABLE tareas(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre varchar (255) NOT NULL,
    descripcion varchar (255) NOT NULL DEFAULT
    fecha_creacion timestamp with time zone NOT NULL DEFAULT
    );
)

