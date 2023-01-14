while (true) {
    var num = parseInt(prompt("Ingresa un número del 1 al 10:"));
    if (num >= 1 && num <= 10) {
      alert("Número válido");
      break;
    } else {
      alert("Número inválido");
    }
  }