'use strict'
function selectSort (items) {
	for(let i=items.length-1;i>0;i--) {
		let max = Max(items, 0, i)
		swap(items,max,i)
	}
	return items
}

function Max (items, first, last) {
	let max = first
	for(let i=first+1;i<=last;i++){
		if(items[i] > items[max]) {
			max = i
		}
	}
	return max
}

function swap(items, max, target) {
	[items[max], items[target]] = [items[target], items[max]]
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
console.log('排序前', items)
let result = selectSort(items)

console.log('排序后', result)