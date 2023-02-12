const { checkSeatStatus, getRowNumbers, book, getSeat } = require("../homework");

// test parar chequear que existe la funcion checkSeatStatus
describe("checkSeatStatus", () => {
  it("CheckStatus es una funcion", () => {
    expect(typeof checkSeatStatus).toBe("function");
  });

  // test para verificar que la funcion checkSeatStatus retorna un error si el primer parametro que recibe no es un string
  it("checkSeatStatus debe retornar un error si el primer parametro que recibe no es un string", () => {
    expect(() => checkSeatStatus(4,2)).toThrow(
      new TypeError("Firts parameter is a not string")
    );
  });

  // test para verificar que la funcion checkSeatStatus retorna un error si el segundo parametro que recibe no es un numero
  it("checkSeatStatus debe retornar un error si el segundo parametro que recibe no es un numero", () => {
    expect(() => checkSeatStatus("B", "a")).toThrow(
      new TypeError("Second parameter is not a number")
    );
  });

  // test que para verificar que la funcion checkSeatStatus retorna true si el asiento definido por fila y columna está reservado
  it("la funcion checkSeatStatus retorna true si el asiento definido por fila y columna está reservado ", () => {
    expect(checkSeatStatus("A", 2)).toBe(true);
  });

  // test que para verificar que la funcion checkSeatStatus retorna false si el asiento definido por fila y columna NO está reservado
  it("la funcion checkSeatStatus retorna false si el asiento definido por fila y columna NO está reservado ", () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
  });

  // test que para verificar que la funcion checkSeatStatus retorna el error 'row is various letters' si la fila tiene varias letras
  it("la funcion checkSeatStatus retorna el error 'row is various letters' si la fila tiene varias letras",() => {expect(() => checkSeatStatus("AB", 2)).toThrow(new TypeError("row is various letters"))})
});

// test para verificar que la funcion getRowNumbers retorna el numero de fila correspondiente a la letra
describe("getRowNumbers", () => {
  it(" la funcion getRowNumbers debe retornar 0 si la letra es A", () => {
    expect(getRowNumbers("A")).toBe(0);
  });

  // test para verificar que la funcion getRowNumbers retorna el numero de fila correspondiente a la letra
  it(" la funcion getRowNumbers debe retornar 2 si la letra es C", () => {
    expect(getRowNumbers("C")).toBe(2);
  });
});

describe("book", () => {
    // test para verificar que la funcion book retorna "Seat in XX successfully booked" y reserva el asiento si el asiento está libre
  it("si el asiento está libre la funcion book debería retornar 'Seat in XX successfully booked' y reservar el asiento", () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
    expect(book("E", 3)).toBe("Seat in E3 successfully booked");
    expect(checkSeatStatus("E",3)).toBe(true);
  });

  // test para verificar que la funcion book retorna "Seat in XX is already booked" si el asiento NO está libre y no modifica el estado del asiento
  it("si el asiento NO está libre, la funcion book debería retornar 'Seat in XX is already booked'", () => {
    expect(checkSeatStatus("A", 1)).toBe(true);
    expect(book("A", 1)).toBe("Seat in A1 is already booked");
    expect(checkSeatStatus("A", 1)).toBe(true);
  });
});

describe("getSeat", () => {

    // test para verificar que la funcion getSeat retorna el error "las filas van de la A a la E" si la fila está fuera de las posibles
    it("si la fila está fuera de las posibles, se debe retornar el error 'las filas van de la A a la E'", () => {
        expect(() => checkSeatStatus("F",1)).toThrow(
            new TypeError("las filas van de la A a la E")
          );
    })

    // test para verificar que la funcion getSeat retorna el error "las columnas van del 1 al 4" si la columna está fuera de las posibles
    it("si la columna está fuera de las posibles, se debe retornar el error 'las columnas van del 1 al 4'", () => {
        expect(() => checkSeatStatus("A",7)).toThrow(
            new TypeError("las columnas van del 1 al 4")
          );

    })
 

})
