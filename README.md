# davidCalendar

davidCalendar es una API desarrollada con ExpressJS que se encarga de habilitar los permisos de uso y la creación de eventos con Google Maps usando el protocolo Oauth2 y PassportJS.

## Google API Setup

  - Crear un nuevo proyecto en la Consola de Desarrolladores de Google
  - Asignar y habilitar las siguientes APIs: Contacts API, Google Calendar API y Google+ APIs

## NodeJs Packages usados

 - body-parser -> Manejador de las variables del cuerpo HTTP para peticiones vía POST
 - cookies-session -> Creación de sesiones y cookies para ExpressJS
 - dotnev -> Librería para el manejo de variables de entorno
 - expressJS -> Framework web minimalista de NodeJs
 - moment -> MomentJS es una librería para el manejo de fechas
 - passport -> middleware de autenticación para NodeJS
 - passport-google-oauth20 -> estrategía de autenticación de passport para servicios de Google
 - pug -> motor de vista HTML
 - restler -> cliente HTTP

## Global Env

  - Renombra el archivo `.env.example` por `.env` y ingresa tus credenciales de Google

## Creditos
- [David E Lares S](https://twitter.com/@davidlares3)

## License

- [MIT](https://opensource.org/licenses/MIT)
