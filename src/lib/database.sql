CREATE DATABASE soii;

CREATE TABLE public.alumnos (id bigserial NOT NULL,codigo varchar NULL,nombre varchar NULL,apellido varchar NULL);

-- Column comments

COMMENT ON COLUMN public.alumnos.id IS 'Id del alumno';
COMMENT ON COLUMN public.alumnos.codigo IS 'Codigo del alumno';
COMMENT ON COLUMN public.alumnos.nombre IS 'Nombre del alumno';
COMMENT ON COLUMN public.alumnos.apellido IS 'Apellido del alumno';

ALTER TABLE public.alumnos ADD CONSTRAINT alumnos_pk PRIMARY KEY (id);

