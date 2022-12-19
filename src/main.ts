import listenToShortcut from './shortkut'

const MyLib = () => {
	console.log('my-lib')
}

listenToShortcut('control+meta+/', () => {
	alert('PRESSED')
})

export default MyLib
