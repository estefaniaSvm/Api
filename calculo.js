//Función que calcula los decimales que debe entregar el número PI
exports.calculo_pi = (num) => {
  const tam = num / 2;
  const decimales = rand(tam, num);
  const pi = Math.PI.toString();
  const index = pi.indexOf(".");
  return pi.substr(0, index + 1) + pi.substr(index + 1, decimales);
};

//Función que calcula el número aleatorio en un rango establecido.
const rand = (min, max) => {
  return Math.round(Math.random() * (max, min) + min);
};
