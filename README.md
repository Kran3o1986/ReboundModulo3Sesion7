# ReboundModulo3Sesion7

Rebound Módulo 3 Sesión 7

CUE: ACTUALIZACIONES A ECMASCRIPT
REBOUND EXERCISE: REEMPLÁZALO
Para resolver este ejercicio, anteriormente debe haber revisado la lectura y los videos del CUE:
Actualizaciones a EcmaScript.
EJERCICIO:
Utilizarás el método replaceAll(), para reemplazar las palabras que más se repiten en un texto de relleno. 
Dicho texto de relleno es el siguiente:
“lorem ipsum dolor sit amet, consectetur adipiscing elit. pellentesque in efficitur nulla. sed porttitor eros at 
sodales mattis. nulla a sapien ut lectus molestie fringilla eu ut tortor. fusce vestibulum ullamcorper odio 
sed ultrices. vivamus quam dui, ullamcorper vel massa nec, laoreet vehicula lacus. etiam efficitur 
sollicitudin massa sit amet vulputate. ut non enim nec augue interdum consectetur. vivamus et dui 
tincidunt, tempus nibh ut, lobortis lorem. nullam nec sem eget nulla varius fringilla. curabitur tincidunt dolor 
et velit tempor ullamcorper. phasellus at erat id est lacinia imperdiet et sed tortor. aenean at eros lacinia, 
dapibus dolor in, vehicula mi. suspendisse finibus sem metus, at consectetur est sagittis at. nam 
malesuada dictum finibus. nulla condimentum quam lorem, ac interdum felis rhoncus quis. suspendisse 
fringilla, orci sed malesuada dictum, massa elit volutpat justo, at vehicula ligula erat id velit. morbi a iaculis 
ligula. aliquam quis ex vitae sapien ullamcorper tempor. suspendisse nisi ex, gravida vel nibh et, molestie 
vulputate metus. nam imperdiet magna ut congue iaculis. nam vehicula sagittis nisi, efficitur consectetur 
erat dignissim eu. vestibulum vitae magna ante. praesent at pellentesque metus, in volutpat massa. duis 
odio erat, pulvinar non nibh eget, euismod suscipit urna. nulla semper convallis hendrerit. phasellus luctus, 
ligula ac semper laoreet, ligula lacus pretium mauris, eget accumsan enim ligula a augue. vivamus 
sollicitudin dapibus vulputate. sed vitae orci ac neque pretium semper sed at mi. morbi egestas 
pellentesque lacus quis pretium.”
Las palabras que más se repiten en este texto de relleno, son las que se muestran a continuación. Cada 
palabra tiene la cantidad de veces que se repite, y un color que la representa. Como referencia, se han
dejado los valores hex de cada color.
Haciendo uso de estos recursos, debes: primero, mostrar el texto de relleno en un HTML, y luego utilizar el 
método replaceAll(), para reemplazar estas 11 palabras que más se repiten en el texto (como 
recomendación, utiliza un RegEx). Cada palabra será reemplazada por un número. Por ejemplo: “sed”, la 
primera de estas palabras que se repiten será reemplazada por la palabra “UNO” en negritas; “vehicula” 
será reemplaza por “DOS”; y así sucesivamente, hasta que llegamos a la palabra “morbi”, con el valor 
“ONCE”, todas en negritas.
Cada vez que se repite una de estas palabras, debes contabilizarlo, y como sugerencia, tratar de incorporar 
contadores en la función que va a reemplazar los valores.
Continuando, debes evaluar si tu código logró reemplazar cada palabra de la cantidad de veces que 
aparece en el recuadro, al inicio de este ejercicio. Por ejemplo, si la palabra “sed” aparece 6 veces según 
el recuadro, entonces debes evaluar si en tu código se logró reemplazar la misma cantidad. ¿De qué forma 
lo harás?: utilizando el operador lógico de asignación OR ||=. 
Por ejemplo, debes realizar una evaluación como la siguiente:
1
2
3
sed = Veces que el codigo logra reemplazar la palabra "sed"
sed ||= (sed ==6)
Si el operador lógico de asignación OR genera el valor del lado izquierdo, significa que tu código 
efectivamente logra contar las palabras las veces que aparece registrada en el recuadro del inicio. Al hacer 
este tipo de evaluación a todas las variables que cuentan las cantidades de veces que se han reemplazado 
las distintas palabras, estarás listo para desarrollar la última parte del ejercicio.
Ésta consta de imprimir, mediante la consola, un mensaje que indica la palabra que fue reemplazada, y las 
cantidades de veces que tu código logró hacerlo. Además, para aprovechar los valores HEX que incluye el 
recuadro del inicio, deberás realizar impresiones en la consola con colores, específicamente en los que 
aparece asignado para cada palabra. Para aplicar dichos colores en un mensaje, debes anteponer el prefijo 
%c al mensaje que quieres mostrar, seguido por una propiedad CSS. 
Por ejemplo, siguiendo con el mismo ejemplo de la palabra “sed”:
1 console.log(`%csed: ${sed}`,'color: #FF5500')
Esto nos mostrará por consola el siguiente mensaje (considerando que el contador sed pasó las 
evaluaciones del operador ||=):
Al realizar este proceso para todas las palabras, el resultado final de todo tu código debe reflejar en la 
consola y en el HTML, lo siguiente:
Si tu código logra reemplazar cada palabra, tal como muestra la parte superior de la imagen, y puedes
contar esas veces que fueron reemplazadas, no deberías tener ningún problema en mostrar los mensajes 
en la consola. 
Esto sucederá si efectivamente logras desarrollar todas las evaluaciones de manera correcta.
