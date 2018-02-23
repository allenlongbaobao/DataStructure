'use strict'
function quickSort (items) {
	let length = items.length
	if (length <= 0) {
		return items
	} else {
		let left = []
		let right = []
		let privat = items.splice(length/2, 1)[0]
		for(let i = 0; i < items.length; i++) {
			if (items[i] <= privat) {
				left.push(items[i])
			} else {
				right.push(items[i])
			}
		}
		return quickSort(left).concat([privat], quickSort(right))
	}
}

function getRandomArr (len) {
	let arr = []
	while(len > 0) {
		arr.push(Math.round(Math.random() * 100))
		len--
	}
	return arr
}

let items = getRandomArr(100000)
let result = quickSort(items)

console.log('排序前', items)
console.log('排序后', result)