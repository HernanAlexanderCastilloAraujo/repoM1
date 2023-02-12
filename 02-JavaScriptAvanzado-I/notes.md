```javascript

```

Exceptions en JS
manejo de excepciones en JS

```javascript
// esquema basico para manejo de excepciones
     try {
         //Código a ejecutar
         [break;]
      }

      catch ( e ) {
         // Código a ejecutar si ocurre una excepción (acá la agarramos)
         [break;]
      }
      // el finally es opcional
      [ finally {
         // Siempre se ejecuta este código, haya o no una excepción
      }]

```

el manejo de excepeciones sirve para detectar donde sucede un error, y aun así, seguir con el proceso.....
el catch impide que se rompa el codigo...

EJEMPLO
al no manejar la excepecion (cuando la pieza es defectuosa), las demás piezas no van a ser procesadas y solo se ejecuta hasta donde sucede el error como se muestra en el siguiente ejemplo
```javascript

const numPiezas = 10;
const probError = 0.2;

const comprobarSiEsDefectuosa = (probError) => Math.random() < probError;


for(let i = 0; i <= numPiezas; i++){
    const esDefectuosa = comprobarSiEsDefectuosa(probError);
        if (esDefectuosa) ` => pieza ${i} defectuosa`
    console.log(`pieza ${i} OK`)}

// pieza 0 OK
// pieza 1 OK
// pieza 2 defectuosa

```

Otro punto a recalcar es cuando no manejamos bien la excepcion y dejamos que el programa siga ejecutandose normalmente como se observa en el siguiente ejemplo
```javascript
const numPiezas = 10;
const probError = 0.2;

const comprobarSiEsDefectuosa = (probError) => Math.random() < probError;

for (let i = 0; i <= numPiezas; i++) {
  const esDefectuosa = comprobarSiEsDefectuosa(probError);
  try {
    if (esDefectuosa) throw `pieza ${i} defectuosa`;
  } catch (error) {
    console.log("hubo un problema: " + error);
  }
  console.log(`pieza ${i} OK`);
}

// pieza 0 OK
// hubo un problema: pieza 1 defectuosa
// pieza 1 OK
// hubo un problema: pieza 2 defectuosa
// pieza 2 OK
// pieza 3 OK
// pieza 4 OK
// pieza 5 OK
// pieza 6 OK
// hubo un problema: pieza 7 defectuosa
// pieza 7 OK
// pieza 8 OK
// pieza 9 OK
// pieza 10 OK    

// se observa que las piezas que tienen problemas pasan de inmediato como pieza "Ok" lo que no deberia suceder

```

el console.log del final debe ir dentro del try para que no le dé el OK a las pìezas defectuosas

```javascript
const numPiezas = 10;
const probError = 0.2;

const comprobarSiEsDefectuosa = (probError) => Math.random() < probError;

for (let i = 0; i <= numPiezas; i++) {
  const esDefectuosa = comprobarSiEsDefectuosa(probError);
  try {
    if (esDefectuosa) throw `pieza ${i} defectuosa`;
    console.log(`pieza ${i} OK`);
  } catch (error) {
    console.log("hubo un problema: " + error);
  }
}
// pieza 1 OK
// hubo un problema: pieza 2 defectuosa
// pieza 3 OK
// pieza 4 OK
// pieza 5 OK
// pieza 6 OK
// pieza 7 OK
// pieza 8 OK
// pieza 9 OK
// pieza 10 OK

// la pieza defectuosa no recibe el OK
```

como contar el número de defectosas y el número de Ok

```javascript
const numPiezas = 10;
const probError = 0.2;
let ok = 0;
let defectuosas = 0;
const comprobarSiEsDefectuosa = (probError) => Math.random() < probError;

for (let i = 1; i <= numPiezas; i++) {
  const esDefectuosa = comprobarSiEsDefectuosa(probError);
  try {
    if (esDefectuosa) throw `pieza ${i} defectuosa`;
    ok++
    console.log(`pieza ${i} OK`);
  } catch (error) {
    defectuosas++
    console.log("hubo un problema: " + error);
  }
}
console.log("piezas correctas: " + ok + " y piezas defectuosas: " + defectuosas);

// pieza 1 OK
// hubo un problema: pieza 2 defectuosa
// pieza 3 OK
// hubo un problema: pieza 4 defectuosa
// pieza 5 OK
// pieza 6 OK
// pieza 7 OK
// pieza 8 OK
// pieza 9 OK
// pieza 10 OK
// piezas correctas: 8 y piezas defectuosas: 2
```


el "finally" se ejecuta sin importar si la excepcion se ejecuta o no se ejecuta, por ejemplo para luego de cada ejecucion cerrar la conexion con la base de datos, ya que generalmente esta no debe estár abierta

```javascript
const numPiezas = 10;
const probError = 0.2;
let ok = 0;
let defectuosas = 0;
const comprobarSiEsDefectuosa = (probError) => Math.random() < probError;

for (let i = 1; i <= numPiezas; i++) {
  const esDefectuosa = comprobarSiEsDefectuosa(probError);
  try {
    if (esDefectuosa) throw ` => pieza ${i} defectuosa`;
    ok++
    console.log(`pieza ${i} OK`);
  } catch (error) {
    defectuosas++
    console.log("hubo un problema: " + error);
  }
  finally{
    console.log("pieza " + i + " procesada");
}
} 
console.log("piezas correctas: " + ok + " y piezas defectuosas: " + defectuosas);

// pieza 1 OK
// pieza 1 procesada
// hubo un problema:  => pieza 2 defectuosa
// pieza 2 procesada
// pieza 3 OK
// pieza 3 procesada
// pieza 4 OK
// pieza 4 procesada
// hubo un problema:  => pieza 5 defectuosa
// pieza 5 procesada
// pieza 6 OK
// pieza 6 procesada
// pieza 7 OK
// pieza 7 procesada
// pieza 8 OK
// pieza 8 procesada
// pieza 9 OK
// pieza 9 procesada
// pieza 10 OK
// pieza 10 procesada
// piezas correctas: 8 y piezas defectuosas: 2
```


si el trhow manda un objeto tipo error nos proporciona de información sobre el error como por ejemplo, la linea donde ocurre el error, tambien proporciona en donde fue llamado el error, ya que el throw no tiene que ser llamado necesariamente en el try, el try puede llamar una funcion que lance otra funcion que lance el throw, esta informacion nos la dá el objeto por ser tipo error

```javascript
const numPiezas = 10;
const probError = 0.2;
let ok = 0;
let defectuosas = 0;
const comprobarSiEsDefectuosa = (probError) => Math.random() < probError;

for (let i = 1; i <= numPiezas; i++) {
  const esDefectuosa = comprobarSiEsDefectuosa(probError);
  try {
    if (esDefectuosa) throw new Error (`=> pieza ${i} defectuosa`);
    ok++
    //console.log(`pieza ${i} OK`);
  } catch (error) {
    defectuosas++
    console.log("hubo un problema: " + error);
  }
//   finally{
//     console.log("pieza " + i + " procesada");
// }
} 
console.log("piezas correctas: " + ok + " y piezas defectuosas: " + defectuosas);

// hubo un problema: Error: => pieza 9 defectuosa
// piezas correctas: 9 y piezas defectuosas: 1

```


otra posibilidad es que haya varios tipos de errores, por ejemplo, continuando con el ejercicio anterior, la maquina puede fallar, entonces podemos extender del objeto tipo Error, y crear nuestros propios errores, se manejaran dos errores, uno de pieza defectuosa, y otro de daño de máquina, cabe recalcar que si se daña la máquina la ejecución debe para, por lo que el error se debe relanzar en el catch.. para saber que tipo de error llega al catch por parte del try, existe el métido "inctaceof"

```javascript
const numPiezas = 10;
const probError = 0.2;
let ok = 0;
let defectuosas = 0;
const comprobarSiEsDefectuosa = (probError) => Math.random() < probError;
const comprobarSiSeDañoMaquina = (probError) => Math.random() < probError;

// exndemos de la clase error, para crear nuestros propios errores

class ErrorMaquinaDefectuosa extends Error {}
class ErrorPiezaDefectuosa extends Error {}

for (let i = 1; i <= numPiezas; i++) {
  const esDefectuosa = comprobarSiEsDefectuosa(probError);
  const seDañoMaquina = comprobarSiSeDañoMaquina(probError);
  // se puede anidar try catchs, en este ejemplo se lo utiliza para cortar la ejecucion cuando se dañe la máquina
  try {
    try { // de este try el throw va hacia el catch interior, y de catch sale un posible trhow que va hacia el catch exterior 
      if (seDañoMaquina)
        throw new ErrorMaquinaDefectuosa("=> maquina defectuosa");
      if (esDefectuosa)
        throw new ErrorPiezaDefectuosa(`=> pieza ${i} defectuosa`);
      ok++;
      console.log(`pieza ${i} OK`);
    } catch (error) {
      if (error instanceof ErrorMaquinaDefectuosa) {
        console.log("se dañó la maquina en la pieza " + i + " " + error);
        throw error;
      } else if (error instanceof ErrorPiezaDefectuosa) {
        defectuosas++;
        console.log("hubo un problema " + error);
      }
    }
  } catch (error) {
    console.log(
      "se llegó hasta aquí, piezas correctas: " +
        ok +
        " y piezas defectuosas: " +
        defectuosas
    );
    break;
  }
}

// pieza 1 OK
// pieza 2 OK
// pieza 3 OK
// hubo un problema Error: => pieza 4 defectuosa
// pieza 5 OK
// hubo un problema Error: => pieza 6 defectuosa
// se dañó la maquina en la pieza 7 Error: => maquina defectuosa
// se llegó hasta aquí, piezas correctas: 4 y piezas defectuosas: 2
```


/******************************************************* */

Un aspecto importante de JS es que es single Threaded, lo que significa que ejecuta un proceso a la vez, además, es sincronico......

Syntax Parser: este se encarga de verificar que no haya errores de sintaxis, además arma el lexical enviroment....

```javascript
function hola(){
  var foo = "hola"

}
var bar  = "Chao"
```

el lexical enviroment se encarga de hacer la lista de variables y funnciones

Lexical enviroment del ejemplo anterior
-- var bar
-- function hola

se recalca que "var foo" no entra en el lexical enviroment  del contexto de ejecucion global

Cada se ejecuta una funcion se crea un nuevo contexto de ejecucion, por lo que tiene su propio lexical enviroment

Lexical enviroment de la funcion Hola
-- var foo


Hosting es la capacidad que tiene una variable o una funcion de "ir al inicio del contexto de ejecución", capacidad de reservar memoria.....

pila de ejecución se refiere a la  pila de contextos que se genera......


DIFERENCIAS ENTRE LET, CONST Y VAR:
 let tiene alcance de corchetes....
 const no puede ser modificado.....
 var tiene alcance de contexto de ejecución....
 let no hace hosting....
 var sí hace hosting....
  


diferencia entre igualdad por referencia e igualdad por valor

igualdad por rerencia: por ejemplo cuando se crea un objeto, no se guarda el objeto en sí al igualarlo a una variable, sino que se guarda la referencia.... la referencia es el espacio de memoria donde esté guardado....

si se modifica por referencia se está apuntando a un mismo objeto, no importa cuantas veces se modifique.


igualdad por valor, se crea una variable identica a la variable que se copia, pero tiene diferente espacio de memoria....



