// Desafío Momento 1 - Sistema de Inicio de Sesión
// Estudiante de segundo semestre

// Aquí defino las credenciales correctas que van a servir para validar
const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "12345";

// Esta es la función principal que va a manejar todo el proceso de login
function validarAcceso() {
    // Variable para contar los intentos del usuario
    let intentos = 0;
    // Esta variable me ayuda a saber si el usuario ingresó bien o no
    let accesoPermitido = false;
    
    // Ciclo while para dar máximo 3 intentos
    while (intentos < 3) {
        // Pedimos los datos al usuario con prompt
        let usuarioIngresado = prompt("Ingrese su usuario:");
        let contrasenaIngresada = prompt("Ingrese su contraseña:");
        
        // Sumo 1 al contador de intentos
        intentos++;
        
        // Aquí valido si los datos son correctos
        if (usuarioIngresado === USUARIO_CORRECTO && contrasenaIngresada === CONTRASENA_CORRECTA) {
            // Si todo está bien, muestro mensaje de bienvenida
            console.log("¡Bienvenido al sistema!");
            accesoPermitido = true;
            // Salgo del ciclo porque ya ingresó correctamente
            break;
        } else {
            // Si los datos son incorrectos
            if (intentos < 3) {
                // Todavía quedan intentos, entonces le aviso cuántos lleva
                console.log("Datos incorrectos. Intento " + intentos + " de 3.");
            }
        }
    }
    
    // Si se acabaron los 3 intentos y no logró entrar, bloqueo el acceso
    if (!accesoPermitido) {
        console.log("Usuario bloqueado. Ha superado el número de intentos.");
    }
}

// Llamo la función para que se ejecute el programa
validarAcceso();