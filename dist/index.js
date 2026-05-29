/** @license Apache-2.0 */

/* eslint-disable id-length */

'use strict';

/**
* The maximum base 10 exponent for a subnormal single-precision floating-point number.
*
* @module @stdlib/constants-float32-max-base10-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT32_MAX_BASE10_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float32-max-base10-exponent-subnormal' );
* // returns -38
*/


// MAIN //

/**
* The maximum base 10 exponent for a subnormal single-precision floating-point number.
*
* ```text
* 2^-126 ≈ 1.17549435e-38 => -38
* ```
*
* @constant
* @type {integer32}
* @default -38
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MAX_BASE10_EXPONENT_SUBNORMAL = -38|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT32_MAX_BASE10_EXPONENT_SUBNORMAL;
