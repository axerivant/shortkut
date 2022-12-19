import shortkut from './shortkut'

const MyLib = () => {
	console.log('my-lib')
}

shortkut('control+meta+/', () => {
	alert('PRESSED')
})

export default MyLib
