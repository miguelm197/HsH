
//alertifyjs.com/

$(document).ready(function () {
    $(".nav").load("./navbar.html ");
    $(".modalLog").load("./modalLogin.html ");

    cargarProductos();


    var TXT_URL = "./cosas/bd_productos.js";
    $.ajax
    (
    	{
        	url : TXT_URL,
			dataType: "text",
			success : function (data) 
			{
                alert(data);
			}
		}
	);

});





var carritoAbierto = false;

function abrirCarrito() {
    if (carritoAbierto) {
        $(".cerrarCarrito").animate({ top: "5px" }, 150, function () {
            $(".contenedorGral").animate({ width: "100%" }, 150);
            $(".carrito").animate({ left: "100%" }, 150);
            $(".cerrarCarrito").animate({ left: "-55px" }, 150);
        });

        carritoAbierto = false;
    } else {
        var altura = $(window).height() - 160;

        $(".carrito").animate({ left: "80%" }, 150);
        $(".contenedorGral").animate({ width: "80%" }, 150);
        $(".cerrarCarrito").animate({ left: "-20px" }, 150, function () {
            $(".cerrarCarrito").animate({ top: altura }, 150);
        });
        carritoAbierto = true;
    }
}


function node() {

    var readline = require('readline');
    var rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('comando> ');
    rl.prompt();
    rl.on('line', function (line) {
        //    console.log('ejecute funcion')
        if (line == "init") {
            console.log('... Iniciando máquina ...')
        } else if (line == 'hola') {
            console.log("maquina dice: hola humano")
        } else if (line == 'adios') {
            console.log("maquina dice: adios humano")
        } else if (line == 'comandos') {
            console.log("-init\n-hola\n-adios\n-comandos\n-exit")
        } else if (line == 'exit') {
            rl.close();
        } else
            console.log("Comando incorrecto...")

        rl.prompt();
    }).on('close', function () {
        process.exit(0);
    });
}



function logIn(tipo) {
    if (tipo == "1") {
        $(".registro").css("display", "none");
        $(".login").css("display", "block");
        $(".titulo-login").text("Entrar");
    } else if (tipo == "2") {
        $(".registro").css("display", "block");
        $(".login").css("display", "none");
        $(".titulo-login").text("Registro");
    }
}







