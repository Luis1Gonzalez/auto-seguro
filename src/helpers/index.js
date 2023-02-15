export function yearDifference(year) {
  return new Date().getFullYear() - year;
}

export function calculateCoverage(type) {
  let increase;

  switch (type) {
    case "Todo riesgo":
      increase = 1.2;
      break;
    case "Todo riesgo con franquicia 150":
      increase = 0.16;
      break;
    case "Todo riesgo con franquicia 300":
      increase = 0.12;
      break;
    case "Daños a terceros":
      increase = 0.10;
      break;
    case "Daños a terceros, lunas y ruedas":
      increase = 0.08;
      break;
    case "Responsabilidad civil":
      increase = 0.06;
      break;
    default:
      break;
  }
  return increase;
}

export function calculateOrigin(determinateOrigen) {
  let origin;

  switch (determinateOrigen) {
    case "Europeo":
      origin = 1.3;
      break;
    case "Americano":
      origin = 1.15;
      break;
    case "Asiatico":
      origin = 1.05;
      break;
    default:
      break;
  }
  return origin;
}

export function calculateTime(time) {
  let increase;

  switch (time) {
    case "1":
      increase = 1.20;
      break;
    case "2":
      increase = 1.1;
      break;
    case "3":
      increase = 0;
      break;
    default:
      break;
  }
  return increase;
}

export function calculateMinor(minor) {
  let minorIs;

  switch(minor) {
    case "Si":
    minorIs = 1.3;
    break;
    case "No":
    minorIs = 0.1;
    break;
    default:
      break;
  }
  return minorIs;  
}

export function formatCurrency(result){
  return result.toLocaleString("es-ES", {
      style:"currency",
      currency: "EUR",
  });
}