// src/index.ts

const isProduction: boolean = process.env.NODE_ENV === "production";

/**
 * Logs an error to console.error when `condition` is falsy,
 * but only in development mode. In production this is a no-op.
 * @param condition – if truthy, no logging occurs
 * @param message – the error message to log
 */
export default function error(condition: unknown, message: string): void {
	// don't do anything in production
	// wrapping in isProduction check for better DCE
	if (isProduction) {
		return;
	}

	// condition passed: do not log
	if (condition) {
		return;
	}

	// Condition not passed
	const text = `Error: ${message}`;

	// check console for IE9 support (console exists only when devtools open)
	if (typeof console !== "undefined") {
		console.error(text);
	}
}
