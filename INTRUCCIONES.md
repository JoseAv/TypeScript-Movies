# Pasos a Seguir Clinte:

- psql -U {nombre Usuario}
- \l => Ver la lista de base de datos
- CREATE DATABASE nodepg;
- psql -U postgres -d postgres
- \c nodepg -> Entrar base de datos 

### Descripcion para entrar al server correcto
+ psql : llamada al cliente
+ -U postgres: Nombre de Usuario
+ -d postgres: Nombre al servidor que quieres conectarte


### Informacion

+ \d Ve las tablas Creadas
+ \d users: Mira los campos dentro de la tabla

### Pasos POOL
- import POOL Y POOLCONFIG
- interface extend POOLCONFIG
- new POOL 
- Probar Coneccion