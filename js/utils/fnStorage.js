// js/utils/fnStorages.js

/**
 * Guarda un objeto o dato en localStorage bajo la clave especificada.
 * Convierte el valor a JSON para almacenamiento.
 * @param {string} clave - La clave para guardar el valor.
 * @param {any} valor - El dato a guardar (objeto, array, string, etc).
 */
export function guardarLocalStorage(clave, valor) {
  try {
    const datoJSON = JSON.stringify(valor);
    localStorage.setItem(clave, datoJSON);
  } catch (error) {
    console.error('Error guardando en localStorage:', error);
  }
}

/**
 * Obtiene un dato de localStorage y lo parsea a objeto.
 * Si no existe, retorna null.
 * @param {string} clave - La clave para obtener el valor.
 * @returns {any|null} - El dato parseado o null si no existe.
 */
export function obtenerLocalStorage(clave) {
  try {
    const datoJSON = localStorage.getItem(clave);
    return datoJSON ? JSON.parse(datoJSON) : null;
  } catch (error) {
    console.error('Error leyendo localStorage:', error);
    return null;
  }
}

/**
 * Elimina un dato de localStorage según la clave.
 * @param {string} clave - La clave a eliminar.
 */
export function eliminarLocalStorage(clave) {
  try {
    localStorage.removeItem(clave);
  } catch (error) {
    console.error('Error eliminando de localStorage:', error);
  }
}
