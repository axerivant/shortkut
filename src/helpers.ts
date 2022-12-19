import { onlyInSecond } from './utils'

export const parseShortcutPattern = (pattern: string): Array<string> => {
	// valid keys
	const specialKeys = ['control', 'meta', 'shift', 'alt', 'meta']
	const latinCharKeys = 'abcdefghijklmnopqrstuvwxyz'.split('')
	const symbolCharKeys = '\'/.,;[]-=_+{}:"<>?'.split('')
	const validKeys = [...specialKeys, ...latinCharKeys, ...symbolCharKeys]

	// parsed keys
	const formattedPattern = pattern.replace(' ', '').toLowerCase()
	const parsedKeys = formattedPattern.split('+')

	// throw error if invalid keys are found
	if (!onlyInSecond(parsedKeys, validKeys)) {
		throw new Error('Invalid key.')
	}

	return parsedKeys
}
