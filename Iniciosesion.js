// Desafío Momento 1 - Simulador de Inicio de Sesión
// Estudiante: [Tu nombre aquí]
// Fecha: [Fecha de hoy]

// Función principal que contiene toda la lógica de validación
function validarAcceso() {
    // 1. CONFIGURACIÓN - Datos quemados (hardcodeados)
    const USUARIO_CORRECTO = "admin";
    const CONTRASENA_CORRECTA = "1234";
    
    // Variables para controlar los intentos
    let intentos = 3;
    let accesoConcedido = false;
    
    // 2. CICLO DE INTENTOS - Usaremos while como se recomienda
    while (intentos > 0 && !accesoConcedido) {
        // 3. CAPTURA DE DATOS - Pedimos usuario y contraseña
        let usuarioIngresado = prompt("Ingrese su usuario:");
        let contrasenaIngresada = prompt("Ingrese su contraseña:");
        
        // 4. VALIDACIÓN - Comparamos con los datos correctos
        if (usuarioIngresado === USUARIO_CORRECTO && contrasenaIngresada === CONTRASENA_CORRECTA) {
            // Credenciales correctas
            console.log("¡Bienvenido al sistema!");
            accesoConcedido = true; // Esto hará que el ciclo termine
        } else {
            // Credenciales incorrectas
            intentos--; // Restamos un intento
            
            if (intentos > 0) {
                // Aún quedan intentos disponibles
                console.log("Datos incorrectos. Intento " + (3 - intentos) + " de 3.");
                console.log("Te quedan " + intentos + " intento(s) más.");
            } else {
                // Se agotaron todos los intentos
                console.log("Usuario bloqueado. Ha superado el número de intentos.");
            }
        }
    }
}

// 5. LLAMADA A LA FUNCIÓN - Ejecutamos el programa
validarAcceso();

// Comentario final: Este programa simula un sistema de login básico
// Cumple con todos los requisitos del desafío:
// √ Datos quemados con const
// √ Uso de prompt() para capturar datos
// √ Ciclo while para controlar intentos
// √ Validación con condicionales if-else
// √ Mensajes en consola según el resultado
// √ Todo encapsulado en una función