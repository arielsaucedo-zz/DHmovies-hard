let faqs = require("../data/faqs.json");

let listadoFaqs = "";

faqs.map(function(faqs) {
  listadoFaqs +=
    "Pregunta:" +
    " " +
    faqs.faq_title +
    "<br/> " +
    "Respuesta:" +
    " " +
    faqs.faq_answer +
    "<br/>" +
    "<br/>"; 
}) 

let contentFaqs = `Preguntas Frecuentes
    <br/>
    <br/>
    Total de preguntas ${faqs.length}
    <br/>
    <br/>
    Listado de Preguntas
    <br/>
    ${listadoFaqs}
    `

module.exports = contentFaqs;
