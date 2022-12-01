var x = 1
do {
    alert('Welcome to our online system');
    var v = prompt('please input action' + '\n1.Vote' + '\n2.Signout');
    if (v == 1) {
        var age = prompt('select your age');
        if (age < 18) {
            alert('You are too young to vote');
        } else {
            var can = prompt('select candidate' + '\n1.Emperor' + '\n2.La_long');

            alert('Thank you for voting');
        }
    } else {
        alert('signout')
    }
    x++;
} while (x > 100);