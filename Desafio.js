/**
 * Taller: Desafío Momento 1 - Simulación de Inicio de Sesión
 * Autor: Asistente Gemini (con enfoque en estudiante de segundo semestre)
 * Descripción: Implementación de la lógica de un proceso de inicio de sesión
 * con un máximo de 3 intentos, utilizando estructuras de control y encapsulación.
 */

// 1. Configuración (Variables quemadas/hardcodeadas con const)
// Las variables 'const' (constantes) se usan para valores que NO cambiarán.
[cite_start]// Esto cumple el requisito de "quemar" las credenciales correctas. [cite: 1, 9]
const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "12345";
const MAX_INTENTOS = 3;

[cite_start]// 5. Encapsulación (Toda la lógica dentro de una función) [cite: 30, 31]
// Usamos una función (function declaration) para contener todo el proceso.
// Esto ayuda a organizar el código y a evitar que las variables se mezclen con el exterior.
function validarAcceso() {
    // Variable para llevar la cuenta de cuántos intentos se han realizado.
    // Se usa 'let' porque su valor SÍ cambiará (se incrementará).
    let intentosActuales = 0;
    
    // Variable booleana para saber si el usuario logró iniciar sesión.
    // Es útil para saber qué mensaje mostrar después de que el ciclo termine.
    let accesoConcedido = false;

    [cite_start]// 3. Lógica de Intentos (Uso de un ciclo 'while') [cite: 18, 19]
    // El ciclo se repite MIENTRAS la condición sea verdadera.
    // La condición es: (Intentos actuales < 3) Y (Acceso aún NO ha sido concedido).
    // Si una de las dos condiciones se vuelve falsa, el ciclo se detiene.
    while (intentosActuales < MAX_INTENTOS && !accesoConcedido) {
        
        [cite_start]// 2. Captura de Datos (Uso de la función prompt()) [cite: 15, 16, 17]
        // prompt() es una función del navegador que abre un cuadro de diálogo para que el usuario ingrese datos.
        // El resultado se guarda en variables temporales (let).
        const usuarioIngresado = prompt(`Intento ${intentosActuales + 1} de ${MAX_INTENTOS}. Ingresa tu usuario:`);
        const contrasenaIngresada = prompt(`Intento ${intentosActuales + 1} de ${MAX_INTENTOS}. Ingresa tu contraseña:`);

        [cite_start]// 4. Validación (Lógica de Condicionales) [cite: 21, 22]
        // Se usa el operador de igualdad estricta (===) para comparar tanto el valor como el tipo.
        // Este 'if' verifica si AMBAS credenciales son correctas.
        if (usuarioIngresado === USUARIO_CORRECTO && contrasenaIngresada === CONTRASENA_CORRECTA) {
            
            [cite_start]// Credenciales Correctas [cite: 23]
            console.log("✅ ¡Bienvenido al sistema!"); [cite_start]// Mensaje de bienvenida [cite: 24]
            accesoConcedido = true; // Cambiamos el estado para cumplir la condición de salida del ciclo.
            // break; // Opcional: 'break' termina el ciclo inmediatamente.
                     // En este caso, al cambiar 'accesoConcedido' a 'true', el ciclo termina en la siguiente verificación.

        } else {
            
            [cite_start]// Credenciales Incorrectas [cite: 25]
            intentosActuales++; // Se incrementa el contador.

            // Solo mostramos el mensaje de "Datos incorrectos" si aún quedan intentos.
            if (intentosActuales < MAX_INTENTOS) {
                console.log(`❌ Datos incorrectos. Intento ${intentosActuales + 1} de ${MAX_INTENTOS}.`);
            }
        }
    } // Fin del ciclo 'while'

    [cite_start]// Lógica post-ciclo: Manejo del Bloqueo [cite: 26, 27]
    // Si el ciclo terminó Y 'accesoConcedido' es falso (lo que significa que se agotaron los intentos).
    if (!accesoConcedido) {
        [cite_start]// Se agotan los 3 intentos y se muestra el mensaje de bloqueo. [cite: 28]
        console.log("🔒 Usuario bloqueado. Ha superado el número de intentos.");
    }
}

[cite_start]// 5. Llamada a la Función (Para que el programa se ejecute) [cite: 32]
// ¡Sin esta línea, el código dentro de la función nunca se ejecutaría!
validarAcceso();

[cite_start]// Criterios de Logro [cite: 33]
// * Se ejecuta sin errores.
// * Pide usuario/contraseña (prompt).
// * Valida correctamente (===).
// * Gestiona 3 intentos (while y intentosActuales).
// * Muestra mensaje de bienvenida O bloqueo (if/else y !accesoConcedido).
// * Código en una función (validarAcceso).