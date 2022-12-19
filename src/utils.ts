export const areSetsEqual = (a: Set<any>, b: Set<any>) =>
	a.size === b.size && [...a].every((value) => b.has(value))

export const onlyInSecond = (arr1: Array<any>, arr2: Array<any>) => {
	// Check if all elements in arr1 are also in arr2
	return arr1.every((elem) => arr2.includes(elem))
}
