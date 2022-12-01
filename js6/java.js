var tut = prompt('enter input');
var count = tut.length;
do {
    if (count <= 10) {
        var page = 1;
    } else if (count <= 20) {
        var page = 2;
    }
    alert('total characters' + count + 'total pages' + page);
}
while (tut < 12);