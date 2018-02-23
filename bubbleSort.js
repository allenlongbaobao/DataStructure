'use strict'

function bubbleSort (items) {
	let length, last_unsorted
	length = items.length
	last_unsorted = length - 1
	for(last_unsorted;last_unsorted>0;last_unsorted--) {
		for(let i=0;i<last_unsorted;i++) {
			if(items[i] > items[i+1]) {
				[items[i], items[i+1]] = [items[i+1], items[i]]
			}
		}
	}
	return items
}

function getRandomArr (len) {
	let arr = []
	while(len > 0) {
		arr.push(Math.round(Math.random() * 100))
		len--
	}
	return arr
}

let items = getRandomArr(10000)
console.log('排序前', items)
let result = bubbleSort(items)

console.log('排序后', result)