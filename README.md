# Desafio 13 Curso Backend

## Usando Objeto process

#### Se utilizo passport-local para la autentificacion y la password encriptada con bcrypt.

## Comenzamos:

### Ejecutar el proyecto:

Para ejecutar el proyecto, el mismo puede descargarse como .zip o git clone.

[Clic aqui para descargar repo formato zip](https://github.com/matsanchez/desafio13-backend/archive/refs/heads/main.zip)
Copiar y pegar en la terminal : git clone https://github.com/matsanchez/desafio13-backend.git

> Instalar las dependencias:

```
npm install
```

> Poner a escuchar MySql:

```
Usando XAMPP Control Panel o el que utilices, siempre y cuando quieras realizar pruebas de autentificacion y uso de websockets, para el resto de las funciones no hace falta.
```

> Modos de ejecucion Local:
>
> > Usando process

```
node .\src\app.js port (numero de puerto sin parentesis)
"Ej: node .\src\app.js port 8020"

node .\src\app.js (sin indicar numero de puerto por defecto se conecta al puerto:8080)
```

> > Usando Nodemon

```
npm run dev (modo developer) Nodemon --- por defecto usa puerto: 8080
```

```
Ingresas en el navegador http://localhost:8080 / o el puerto seleccionado.
```

> Creacion Base de Datos:

`En cuanto inicies sesion o te registres y pases las validaciones se crearan las bases de datos automaticamente:
users 
sessions 
websocket_mariadb 
ecommerce 
`

> Rutas indicadas para el desafio trabajando con child_process(fork)

```
http://localhost:8080/info (se visualiza informacion de procesos, sistema, etc.)

http://localhost:8080/api/randoms trabaja con fork creando por defecto 100.000.000 numeros random entre 1 y 1000 mas la cantidad de veces que salio cada numero.

O usando parametros de consulta (query)
Ej: http://localhost:8080/api/randoms?cant=20000  estaria creando 20000 numeros randoms.

```

```
Aclaracion: Se trabaja con variables de entorno, se sube el archivo .env solo a modo de ejercicio, el mismo nunca se deberia de subir a un repo por contener este mismo informacion sensible y confidencial.

En este caso, solo contiene informacion para dicho ejercicio, son datos de uso local(generalizados en todos)
```

Autor: Matias Sanchez
