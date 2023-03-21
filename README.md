## License

Nest is [MIT licensed](LICENSE).


# MARVEL's API

## Requerimiento
- Construir una REST API para consumir una API externa y desplegar los resultados

## Solución

- Se decidió construir una applicación en NestJS siguiendo una arquitectura limpia. Esto permite tener un código mantenible, escalable y más fácil de testear. Se eligió este framework debido a que tengo experiencia con él y ofrece ciertos detalles como validaciones, clientes http, fácil uso de variables de ambiente, controladores, injección de dependencia, etc que agilizan el desarrollo.

- La API de MARVEL se eligió para ser consumida, por la razón principal de que previamente ya la había consumido y estaba familiarizado con ella.

## Documentación

- La documentación de los endpoints se puede encontrar en:
- La herramienta utilizada fue Swagger 

## Problemas durante el desarrollo

- El reto más grande durante este ejercicio fue el tener un orden especifico en la jerarquía de los directorios para poder expresar la intención de estar desarrollando mediante una arquitectura limpia (infrastructure, application, domain) 

## Importante

- El Dockerfile NO es de mi creación debido a que no había Dockerizado una applicación de Nest, si de Node con Express, que es muy similar, sin embargo como parte de la investigación, decidí mantenerlo como muestra de aprendizaje.

## Ejecutar la aplicación

- Con Docker: docker-compose up -d

## Ideas no desarrolladas

- Pensé en implementar un mecanismo de autenticación para los usuarios, ya que la API de Marvel tiene un número limitado de peticiones, asi no cualquier persona podría utilizar la aplicación.
- Por esta misma razón había pensado en implementar una caché para poder almacenar requests recurrentes, y asi no gastar las peticiones limitadas y quizás poder tener un tiempo de respuesta menor en ciertos escenarios
