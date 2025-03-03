interface Data{
    id: number;
    nombre: string;
    idPadre: number;
};
  
  const data: Data[] = [
    { id: 1, nombre: "Mascotas", idPadre: 0 },
    { id: 2, nombre: "Gato", idPadre: 1 },
    { id: 3, nombre: "Perro", idPadre: 1 },
    { id: 4, nombre: "Plantas", idPadre: 0 },
    { id: 5, nombre: "Árbol", idPadre: 4 },
    { id: 6, nombre: "Flores", idPadre: 3 },
    { id: 7, nombre: "Micu", idPadre: 2 },
    { id: 8, nombre: "Sasy", idPadre: 2 },
    { id: 9, nombre: "Fido", idPadre: 3 },
    { id: 10, nombre: "Bobby", idPadre: 3 },
    { id: 11, nombre: "Roble", idPadre: 5 },
  ];

// Función para construir la estructura jerárquica
function buildStringTree(data: Data[], parentId = 0, depth = 0): string {
    const children = data.filter((item) => item.idPadre === parentId);
    let output = "";

    for (const child of children) {
      output += "  ".repeat(depth) + child.nombre + "\n" + buildStringTree(data, child.id, depth + 1);
    }
    return output;
}

// Función para agregar un nuevo registro
function addData(nombre: string, idPadre: number): void {
    const newId = data.length + 1;
    data.push({ id: newId, nombre, idPadre });
}


//Funcion para ejecturar la tarea 1
function task1(): void {
    addData("Hijo de gato", 2);
    addData("Hijo de fido", 9);
    console.log(buildStringTree(data));
}

//Funcion para ejecturar la tarea 2
function task2(): void {
    const dataFixed = [...data];
    dataFixed[5].idPadre = 4;
    console.log(buildStringTree(dataFixed));
}

//Funcion para ejecturar la tarea 3
function task3(): void {
    console.log(buildStringTree(data));
}

/*** Tareas (descomentar la linea para probar la tarea) ***/

//task1();
//task2();
//task3();