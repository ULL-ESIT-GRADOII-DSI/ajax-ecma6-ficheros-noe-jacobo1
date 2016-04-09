// See http://en.wikipedia.org/wiki/Comma-separated_values
(() => {
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

const resultTemplate = `
<div class="contenido">
      <table class="center" id="result">
          <% _.each(rows, (row) => { %>
          <tr class="<%=row.type%>">
              <% _.each(row.items, (name) =>{ %>
              <td><%= name %></td>
              <% }); %>
          </tr>
          <% }); %>
      </table>
  </p>
</div>
`;

/* Volcar la tabla con el resultado en el HTML */
const fillTable = (data) => { 
  $("#finaltable").html(_.template(resultTemplate, { rows: data.rows })); 
};

/* Volcar en la textarea de entrada 
 * #original el contenido del fichero fileName */
const dump = (fileName) => {
  XXXXXXXXXXXXXXX XXXXXXXX XXXXXX X
      XXXXXXXXXXXXXXXXXXXXXXXXX
  XXX
};
 
const handleFileSelect = (evt) => {
  evt.stopPropagation();
  evt.preventDefault();

 XXX XXXXX X XXXXXXXXXXXXXXXXX 

  XXX XXXXXX X XXX XXXXXXXXXXXXX
  XXXXXXXXXXXXX X XXX XX X
  
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  XX
  XXXXXXXXXXXXXXXXXXXXXXXXXXX
}

/* Drag and drop: el fichero arrastrado se vuelca en la textarea de entrada */
const handleDragFileSelect = (evt) => {
  evt.stopPropagation();
  evt.preventDefault();

  XXX XXXXX X XXXXXXXXXXXXXXXXXXXXXXX XX XXXXXXXX XXXXXXX

  XXX XXXXXX X XXX XXXXXXXXXXXXX
  XXXXXXXXXXXXX X XXX XX X
  
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    XXXXXXXXXXXXXXXXXXXXXXXXXXX X XXXXXXXX
  XX
  XXXXXXXXXXXXXXXXXXXXXXXXXXX
}

const handleDragOver = (evt) => {
  evt.stopPropagation();
  evt.preventDefault();
  evt.target.style.background = "yellow";
}

$(document).ready(() => {
    let original = document.getElementById("original");  
    if (window.localStorage && localStorage.original) {
      original.value = localStorage.original;
    }

    /* Request AJAX para que se calcule la tabla */
    XXXXXXXXXXXXXXXXXX XX XX X
        XX XXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXX X XXXXXXXXXXXXXXX
        XXXXXXXXXXXXX 
          X XXXXXX XXXXXXXXXXXXXX XX 
          XXXXXXXXXX
          XXXXXX
        XX
   XXX
   /* botones para rellenar el textarea */
   XXXXXXXXXXXXXXXXXXXXXXXXX XXXXX XX X
     XXXXXXXXXXX XX XX X XXXXXXXXXXXXXXXXXXXXXXXXXXX XXX
   XXX

    // Setup the drag and drop listeners.
    //var dropZone = document.getElementsByClassName('drop_zone')[0];
    let dropZone = $('.drop_zone')[0];
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleDragFileSelect, false);
    let inputFile = $('.inputfile')[0];
    inputFile.addEventListener('change', handleFileSelect, false);
 });
})();
