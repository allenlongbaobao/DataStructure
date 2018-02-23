function insertSort (items) {
	let last_sorted, first_unsorted
	last_sorted = 0
	first_unsorted = last_sorted + 1
	for(first_unsorted; first_unsorted<=items.length;first_unsorted++) {
		if(items[first_unsorted] < items[last_sorted]){
			let flag = first_unsorted
			let temp = items[first_unsorted]
			do {
				items[flag] = items[--flag]
			} while(temp < items[flag-1] && flag >=1)
			items[flag] = temp
		}
		last_sorted++
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

let items = getRandomArr(10)
console.log('排序前', items)
let result = insertSort(items)

console.log('排序后', result)