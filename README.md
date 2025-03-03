# Listado de Tareas 🚀  

Este repositorio contiene la solución a la prueba tecnica con una serie de tareas según los requerimientos establecidos.  

## ⚙️ Requisitos
Este proyecto se realizó con Node.js en su versión 22.

## 📌 Instrucciones  
Instalar todas las dependencias
```bash
npm install
```
Correr el proyecto utilizando el siguiente comando:
```bash
npm start
```
Para probar las tareas, es necesario descomentar la función correspondiente en el código, en el archivo **index.ts**  

## 📝 Tareas  

### Tarea 1: Agregar un registro nuevo en la tabla  
Esta tarea permite agregar un nuevo registro a la tabla.  

**- Función para probar la tarea:**  
```js
task1();
```
### Tarea 2: Registro erróneo
No existe una forma directa de identificar si un registro no pertenece a una categoría específica. Sin embargo, por razonamiento, se puede determinar que "Flores" no pertenece a la categoría "Perro", sino a "Plantas". Por lo tanto, se debe cambiar el **idPadre** de "Flores" de 3 a 4.

**- Función para probar la tarea:**  
```js
task2();
```

### Tarea 3: Mostrar la estructura jerárquica de la tabla
Esta tarea ejecuta la función que muestra el output inicial con el arreglo de datos originales.

#### 📌 Nota: En el conjunto de datos iniciales, existe un registro erróneo.

**- Función para probar la tarea:**
```js
task3();
```
### Tarea 4: Alternativa para manejar la estructura o lógica de la tabla
Para gestionar la estructura de la tabla de manera diferente, se pueden emplear dos enfoques:

**Tipado detallado:** Se valida cada categoría y sus hijos, siempre que se tenga conocimiento previo de la estructura de la tabla.

**Enfoque dinámico con IA:** Se podría utilizar un servicio de inteligencia artificial que utilice razonamiento para analizar la data y determinar si algún registro no pertenece a la categoría correspondiente.

