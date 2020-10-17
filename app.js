const myWebStack = ['JavaScript', 'HTML', 'CSS', 'somtimes PHP', 'sometimes Python', 'sometimes SaSS'];

// the DOM element I'm going to set my results too. I want to display the results of the forEach method
// in HTML.
const firstMapElm = document.getElementById('first-foreach');

// executing the forEach method and setting the results to a variable called executingForEachOverItems
const t = myWebStack.forEach(function(item, index, array) {
	return item;
});

console.log(t);

// adding the results of the map method over my array to HTML
firstMapElm.innerHTML= JSON.stringify(t)