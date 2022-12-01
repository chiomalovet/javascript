function newPopulation(v, y, d) {
    var v = prompt("world's population");
    var y = prompt("monthlyBirth");
    var d = 360;
    var x = v + y;
    var z = x * d;
    return z;

}



alert(" new world population is " + newPopulation());