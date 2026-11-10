# Subsicivae

Estudio del Grado en Derecho en los ratos libres. App web instalable (PWA), pensada para estudiantes de la UNED.

*Horae subsicivae*: las horas sobrantes, las que se aprovechan de más para el estudio.

Desarrollada por Hadrianus Muratellensis. Contacto: adrigranov@proton.me

Proyecto independiente, no vinculado a la UNED ni a sus editoriales.

Hadrianus Muratellensis me fecit · CC BY-NC-SA 4.0

## Archivos

- `index.html`: la app.
- `sw.js`, `manifest.webmanifest` e iconos: para instalarla y usarla sin conexión.
- `asignaturas.json`: catálogo. Lista las asignaturas disponibles.
- `asig-*.json`: un archivo por asignatura, con sus preguntas.

## Añadir una asignatura

1. Sube el archivo `asig-nombre.json` de la asignatura al repositorio.
2. Abre `asignaturas.json`, pulsa el lápiz y añade una entrada nueva:

```
{"id":"nombre","name":"Nombre de la asignatura","descripcion":"Texto corto","file":"asig-nombre.json","version":1,"preguntas":100}
```

3. Guarda. En uno o dos minutos aparece en «Añadir asignaturas» dentro de la app.

Para actualizar una asignatura, sustituye su archivo y sube el número de `version` en `asignaturas.json`. Los usuarios verán el botón «Actualizar».

## Formato de una asignatura

```
{"name":"Nombre","temas":{"1":"Título del tema 1"},
 "exams":[{"name":"Convocatoria","pen":0.1,
   "qs":[["Pregunta",["Opción A","Opción B","Opción C"],1,"Nota opcional","Tema 1"]]}]}
```

El número tras las opciones es la posición de la correcta (0 = A, 1 = B, 2 = C).
