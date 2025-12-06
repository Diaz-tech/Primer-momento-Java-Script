const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "12345";
const MAX_INTENTOS = 3;


function validarAcceso() {
 
    let intentosActuales = 0;    
    let accesoConcedido = false;
    
    while (intentosActuales < MAX_INTENTOS && !accesoConcedido) {
        const usuarioIngresado = prompt("Intento " + (intentosActuales + 1) + " de " + MAX_INTENTOS + ". Ingresa tu usuario:");
        const contrasenaIngresada = prompt("Intento " + (intentosActuales + 1) + " de " + MAX_INTENTOS + ". Ingresa tu contraseña:");
        
        if (usuarioIngresado === USUARIO_CORRECTO && contrasenaIngresada === CONTRASENA_CORRECTA) {           
            console.log("¡Bienvenido al sistema!");
            accesoConcedido = true; 

        } else {           
            intentosActuales++; 

/*  Solo muestro el mensaje si todavía quedan intentos
 */
            if (intentosActuales < MAX_INTENTOS) {
                console.log("Datos incorrectos. Intento " + (intentosActuales + 1) + " de " + MAX_INTENTOS + ".");
            }
        }
    } 
/*     Interrupcion del ciclo por ingreso de info erronea  */    

if (!accesoConcedido) {       
        console.log("Usuario bloqueado. Ha superado el número de intentos.");
    }
}

validarAcceso();