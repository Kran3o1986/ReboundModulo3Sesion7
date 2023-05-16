console.log("🟢 Connected!");

const textoHtml = document.querySelector("#textoHtml");
const btn = document.querySelector("#btn");

let texto =
  "“lorem ipsum dolor sit amet, consectetur adipiscing elit. pellentesque in efficitur nulla. sed porttitor eros at sodales mattis. nulla a sapien ut lectus molestie fringilla eu ut tortor. fusce vestibulum ullamcorper odio sed ultrices. vivamus quam dui, ullamcorper vel massa nec, laoreet vehicula lacus. etiam efficitur sollicitudin massa sit amet vulputate. ut non enim nec augue interdum consectetur. vivamus et dui tincidunt, tempus nibh ut, lobortis lorem. nullam nec sem eget nulla varius fringilla. curabitur tincidunt dolor et velit tempor ullamcorper. phasellus at erat id est lacinia imperdiet et sed tortor. aenean at eros lacinia, dapibus dolor in, vehicula mi. suspendisse finibus sem metus, at consectetur est sagittis at. nam malesuada dictum finibus. nulla condimentum quam lorem, ac interdum felis rhoncus quis. suspendisse fringilla, orci sed malesuada dictum, massa elit volutpat justo, at vehicula ligula erat id velit. morbi a iaculis ligula. aliquam quis ex vitae sapien ullamcorper tempor. suspendisse nisi ex, gravida vel nibh et, molestie vulputate metus. nam imperdiet magna ut congue iaculis. nam vehicula sagittis nisi, efficitur consectetur erat dignissim eu. vestibulum vitae magna ante. praesent at pellentesque metus, in volutpat massa. duis odio erat, pulvinar non nibh eget, euismod suscipit urna. nulla semper convallis hendrerit. phasellus luctus, ligula ac semper laoreet, ligula lacus pretium mauris, eget accumsan enim ligula a augue. vivamus sollicitudin dapibus vulputate. sed vitae orci ac neque pretium semper sed at mi. morbi egestas pellentesque lacus quis pretium.”";

textoHtml.innerHTML = texto;

//REPLACES

const reemplazar = (palabra, valorNuevo, color, cantidadEsperada) => {
  let contador = 0;
  let regex = new RegExp(`\\b${palabra}\\b`, "gi");

  texto = texto.replaceAll(regex, function (match) {
    if (match) {
      contador++;
      return `<b style="color: #${color};">${valorNuevo}</b>`;
    }
  });

  contador ||= contador == cantidadEsperada;

  if (!contador) {
    return;
  } else {
    console.log(`%c${palabra}: ${contador}`, `color: #${color}`);
    textoHtml.innerHTML = texto;
  }
};

const reemplazarPalabras = () => {
  reemplazar("sed", "UNO", "FF5500", 6);
  reemplazar("vehicula", "DOS", "FF99B2", 4);
  reemplazar("vivamus", "TRES", "FF99F5", 3);
  reemplazar("nam", "CUATRO", "BB99FF", 3);
  reemplazar("eros", "CINCO", "99C5FE", 2);
  reemplazar("vestibulum", "SEIS", "00CEFF", 2);
  reemplazar("quam", "SIETE", "01FFFE", 2);
  reemplazar("sollicitudin", "OCHO", "00FF9F", 2);
  reemplazar("finibus", "NUEVE", "B6FF01", 2);
  reemplazar("dictum", "DIEZ", "FFFF00", 2);
  reemplazar("morbi", "ONCE", "FFB600", 2);
};

btn.addEventListener("click", () => {
  reemplazarPalabras();
});