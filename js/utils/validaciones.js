// js/utils/validaciones.js

/**
 * Valida si un email tiene formato válido.
 * @param {string} email
 * @returns {boolean}
 */
export function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim().toLowerCase());
}

/**
 * Valida si una contraseña cumple con requisitos mínimos:
 * al menos 6 caracteres, incluye letra y número.
 * @param {string} password
 * @returns {boolean}
 */
export function validarContrasena(password) {
  if (password.length < 6) return false;
  const tieneLetra = /[a-zA-Z]/.test(password);
  const tieneNumero = /\d/.test(password);
  return tieneLetra && tieneNumero;
}

/**
 * Valida que un texto no esté vacío ni solo espacios.
 * @param {string} texto
 * @returns {boolean}
 */
export function validarNoVacio(texto) {
  return texto.trim().length > 0;
}

/**
 * Valida si un número es positivo y entero.
 * @param {number} num
 * @returns {boolean}
 */
export function validarNumeroEnteroPositivo(num) {
  return Number.isInteger(num) && num > 0;
}

/**
 * Valida si una URL es válida.
 * @param {string} url
 * @returns {boolean}
 */
export function validarURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Valida que un campo cumpla longitud mínima y máxima.
 * @param {string} texto
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export function validarLongitud(texto, min = 0, max = Infinity) {
  const len = texto.trim().length;
  return len >= min && len <= max;
}
