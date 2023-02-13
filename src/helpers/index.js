export function yearDifference(year) {
  return new Date().getFullYear() - year;
}

export function calculateCoverage(type) {
  let increase;

  switch (type) {
    case "Todo riesgo":
      increase = 1.5;
      break;
    case "Todo riesgo con franquicia 150":
      increase = 1.25;
      break;
    case "odo riesgo con franquicia 300":
      increase = 1.2;
      break;
    case "Daños a terceros":
      increase = 1.15;
      break;
    case "Daños a terceros, lunas y ruedas":
      increase = 1.1;
      break;
    case "Responsabilidad civil":
      increase = 1.05;
      break;
    default:
      break;
  }
  return increase;
}

export function calcularCoverageTime(time) {
  let increase;

  switch (time) {
    case "1":
      increase = 1.5;
      break;
    case "2":
      increase = 1.3;
      break;
    case "3":
      increase = 1.2;
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
  let timeCoverage;

  switch (time) {
    case "3":
      timeCoverage = 1.1;
      break;
    case "2":
      timeCoverage = 1.07;
      break;
    case "1":
      timeCoverage = 1.05;
      break;
    default:
      break;
  }
  return timeCoverage;
}

