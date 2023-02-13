const brands = [
  { id: 1, marca: "AUDI" },
  { id: 2, marca: "BMW" },
  { id: 3, marca: "CHEVROLET" },
  { id: 4, marca: "CITROEN" },
  { id: 5, marca: "DACIA" },
  { id: 6, marca: "FORD" },
  { id: 7, marca: "HONDA" },
  { id: 8, marca: "HYUNDAI" }, 
  { id: 9, marca: "INFINITI" },
  { id: 10, marca: "JEEP" },
  { id: 11, marca: "KIA" },
  { id: 12, marca: "TESLA" },
]
export { brands };



const cars = [
  { id: 1, marca: "AUDI", modelo: "A5", origen: "Europeo" },
  { id: 2, marca: "AUDI", modelo: "A4", origen: "Europeo" },
  { id: 3, marca: "AUDI", modelo: "A3", origen: "Europeo" },

  { id: 4, marca: "BMW", modelo: "Serie 5", origen: "Europeo" },
  { id: 5, marca: "BMW", modelo: "Serie 6", origen: "Europeo" },
  { id: 6, marca: "BMW", modelo: "Serie 7", origen: "Europeo" },

  { id: 7, marca: "CITROEN", modelo: "C3", origen: "Europeo" },
  { id: 8, marca: "CITROEN", modelo: "C4", origen: "Europeo" },
  { id: 9, marca: "CITROEN", modelo: "Nemo", origen: "Europeo" },

  { id: 10, marca: "DACIA", modelo: "Sandero", origen: "Europeo" },
  { id: 11, marca: "DACIA", modelo: "Logan", origen: "Europeo" },
  { id: 12, marca: "DACIA", modelo: "Duster", origen: "Europeo" },

  { id: 14, marca: "FORD", modelo: "Fiesta", origen: "Americano" },
  { id: 15, marca: "FORD", modelo: "Focus", origen: "Americano" },
  { id: 16, marca: "FORD", modelo: "Fiesta", origen: "Americano" },

  { id: 17, marca: "CHEVROLET", modelo: "Aveo", origen: "Americano" },
  { id: 18, marca: "CHEVROLET", modelo: "Optra", origen: "Americano" },
  { id: 19, marca: "CHEVROLET", modelo: "Spark", origen: "Americano" },

  { id: 20, marca: "JEEP", modelo: "Grand Cherokee", origen: "Americano" },
  { id: 21, marca: "JEEP", modelo: "Renegade", origen: "Americano" },
  { id: 22, marca: "JEEP", modelo: "Wrangler", origen: "Americano" },

  { id: 23, marca: "TESLA", modelo: "Model X", origen: "Americano" },
  { id: 24, marca: "TESLA", modelo: "Model S", origen: "Americano" },

  { id: 25, marca: "HONDA", modelo: "Accord", origen: "Asiatico" },
  { id: 26, marca: "HONDA", modelo: "Civic", origen: "Asiatico" },
  { id: 27, marca: "HONDA", modelo: "Jazz", origen: "Asiatico" },

  { id: 28, marca: "HYUNDAI", modelo: "Accent", origen: "Asiatico" },
  { id: 29, marca: "HYUNDAI", modelo: "Santa Fe", origen: "Asiatico" },
  { id: 30, marca: "HYUNDAI", modelo: "Tucson", origen: "Asiatico" },

  { id: 31, marca: "INFINITI", modelo: "Q70", origen: "Asiatico" },
  { id: 32, marca: "INFINITI", modelo: "Q50", origen: "Asiatico" },
  { id: 33, marca: "INFINITI", modelo: "QX70", origen: "Asiatico" },

  { id: 34, marca: "KIA", modelo: "Sportage", origen: "Asiatico" },
  { id: 35, marca: "KIA", modelo: "Rio", origen: "Asiatico" },
  { id: 36, marca: "KIA", modelo: "cee'd", origen: "Asiatico" }

];

export { cars };

// =========================

const yearMax = new Date().getFullYear();
const years = Array.from(
    new Array(20),
    (valor, index) => yearMax - index
);
export { years }
// ==========================

const type = [
  {id: 1, mode: 'Todo riesgo'},
  {id: 2, mode: 'Todo riesgo con franquicia 150'},
  {id: 3, mode: 'Todo riesgo con franquicia 300'},
  {id: 4, mode: 'Daños a terceros'},
  {id: 5, mode: 'Daños a terceros, lunas y ruedas'},
  {id: 6, mode: 'Responsabilidad civil'},
]
export { type }

// ===========================

const timeContract = [
  {id:1, time: 1},
  {id:2, time: 2},
  {id:3, time: 3},
]
export { timeContract }