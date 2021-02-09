function onOpen() {
  var menusX = SpreadsheetApp.getUi();
  menusX.createMenu('Nuevo Menú') // este es el título del menú
      .addItem('Ejecutar 0', 'myFunction')
      .addSeparator()
      
      .addItem('Ejecutar 1', 'funcionUno')
      //.addSeparator() //estos son separadores
      
      .addItem('Ejecutar 2', 'funcionDos')
      //.addSeparator()
      
      .addItem('Ejecutar 3', 'funcionDos')
      .addSeparator()
      
      .addSubMenu(menusX.createMenu('alertas')
          .addItem('Alerta 1', 'funcionCuatro')
          .addItem('Alerta 2', 'funcionCinco')
          )
          
      .addToUi();
}

// aquí empiezan las funciones que se van a ejecutar
function myFunction() {
  Browser.msgBox("Funcion cero");
}

function funcionUno(){
Browser.msgBox("Soy la función uno")
}


function funcionDos(){
Browser.msgBox("Soy la funcion dos")

}

function funcionTres(){
Browser.msgBox("Soy la funcion tres")
}


function funcionCuatro() {
  SpreadsheetApp.getUi()
     .alert('Hola soy la alerta 1');
}

function funcionCinco() {
  SpreadsheetApp.getUi()
     .alert('Hola soy la alerta 2');
}