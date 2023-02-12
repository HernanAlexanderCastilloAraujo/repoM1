const layout = [
  [
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

checkSeatStatus = function (row, column) {
  if (typeof row !== "string") {
    throw new TypeError("Firts parameter is a not string");
  }
  if (row.length > 1) {
    throw new TypeError("row is various letters");
  }
  if (typeof column !== "number") {
    throw new TypeError("Second parameter is not a number");
  }
  let seat = getRowNumbers(row);
  return getSeat(seat, column).booked;
};

function getRowNumbers(row) {
  let result = row.charCodeAt(0) - 65;
  return result;
}

function book(row, column) {
  let status = checkSeatStatus(row, column);
  let seat = getRowNumbers(row);
  if (status) {
    return `Seat in ${row}${column} is already booked`;
  } else {
    getSeat(seat, column).booked = true;
    return `Seat in ${row}${column} successfully booked`;
  }
}

function getSeat(seat, column) {
  if (seat < 0 || seat > layout.length - 1) {
    throw new TypeError("las filas van de la A a la E");
  } else if (column < 1 || column > layout.length) {
    throw new TypeError("las columnas van del 1 al 4");
  }
  let position = layout[seat][column - 1];
  return position;
}

function information() {
  let asientosTotales = 0;
  let asientosReservados = 0;
  for (let i = 0; i < layout.length; i++) {
    for (let j = 0; j < layout[i].length; j++) {
      asientosTotales++;
    }
  }
  for (let i = 0; i < layout.length; i++) {
    for (let j = 0; j < layout[i].length; j++) {
      if (layout[i][j].booked) {
        asientosReservados++;
      }
    }
  }
  let asientosDisponibles = asientosTotales - asientosReservados;
  let cantidadTipo = {
    VIP: 0,
    NORMAL: 0,
    ECONOMIC: 0,
  };
  for (let i = 0; i < layout.length; i++) {
    for (let j = 0; j < layout[i].length; j++) {
      if (layout[i][j].type === "VIP") {
        cantidadTipo.VIP++;
      }
      if (layout[i][j].type === "NORMAL") {
        cantidadTipo.NORMAL++;
      }
      if (layout[i][j].type === "ECONOMIC") {
        cantidadTipo.ECONOMIC++;
      }
    }
  }
  let recaudacion = 0;
  for (key in cantidadTipo) {
    if (key === "VIP") {
      recaudacion = recaudacion + cantidadTipo[key] * 600;
    } else if (key === "NORMAL") {
      recaudacion = recaudacion + cantidadTipo[key] * 450;
    } else if (key === "ECONOMIC") {
      recaudacion = recaudacion + cantidadTipo[key] * 300;
    }
  }
  let data = {
    asientosTotales: asientosTotales,
    asientosReservados: asientosReservados,
    asientosDisponibles: asientosDisponibles,
    recaudacion: recaudacion,
  };

  return data;
}
console.log(information());
module.exports = { checkSeatStatus, getRowNumbers, book, getSeat };
