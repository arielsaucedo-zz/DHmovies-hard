let theaters = require("../data/theaters.json");

let listadoSucursales = theaters.map(function (sucursales) {
return "Nombre:" + " " + sucursales.name + "<br/> " + "Direccion:" + " " + sucursales.address + "<br>" + "Descripcion" + " " + sucursales.description + "<br/>" + "<br/>"
})

let contentSucursales = `Nuestras Salas
<br/>
<br/>
Total de salas: ${theaters.length}
<br/>
<br/>
Listado de salas
<br/>
<br/>
${listadoSucursales.join(" ")}
`

module.exports = contentSucursales;