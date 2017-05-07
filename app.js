$(document).ready(function() {

    function TransformArray(element) {
        return element.first.toLowerCase();
        return element.last.toLowerCase();
    }

    $.getJSON("https://immense-gorge-15710.herokuapp.com/experts", function(data) {

        var data = data;
        console.log("So what's the difference between forEach & .map ?");
        console.log("--------------")

        data.forEach(function(value, index, array) {
            console.log("forEach: using value: " + value.first);
            console.log("forEach: using array[index]: " + array[index].first);
        })

        console.log('------------');
        console.log('Using forEach, array[index] returns the same out put as value.');
        console.log('------------');

        data.map(function(value, index, array) {
            console.log(".map: using value: " + value.first)
            console.log(".map: array[index]: " + array[index].first);
        })

        console.log('------------');
        console.log('Using .map, array[index] returns the same out put as value.');
        console.log('------------');
        console.log("Why bother having a .map and a forEach? Why not just have one or the other? ");
        console.log("As you can see that both the forEach and .map both take in three arguments and do exactly the same thing. So there really isn't a need for both, right? Ah not necessarily...")
        console.log('------------');
        console.log(data.forEach(TransformArray));
        console.log("The undefined you are seeing above occurs because we are trying to run the TransformArray function on the data in the forEach.");
        console.log("Why doesn't this work? It doesn't work because the forEach method is simple and only spits back what you put in. The callback function inside the forEach method is designed to only spit back the data you put in it.")
        console.log(data.map(TransformArray));
        console.log("The data you are seeing is when you run the TransfromArray function inside the .map parameters. It works because the callback function inside the .map parameters is designed for the data being passed in it to be mutuble.");

    });
});
