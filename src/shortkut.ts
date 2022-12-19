import { areSetsEqual } from './utils'
import { parseShortcutPattern } from './helpers'

const shorkut = (shortcutPattern: string, callback: Function) => {
	// parse shortcut pattern
	const parsedShortcutPattern = parseShortcutPattern(shortcutPattern)
	// key sets
	const definedKeys = new Set(parsedShortcutPattern)
	const pressedKeys = new Set()
	// add event for every keydown on node
	window.addEventListener('keydown', (ev: KeyboardEvent) => {
		const key = ev.key
		// add currently pressed key to pressed keys set
		pressedKeys.add(key)
		// if defined keys and pressed keys are equal
		if (areSetsEqual(pressedKeys, definedKeys)) {
			// execute callback
			callback()
		}
	})

	// remove key from pressed keys set when key up
	window.addEventListener('keyup', (ev: KeyboardEvent) => {
		const key = ev.key
		pressedKeys.delete(key)
	})
}

export default shorkut
