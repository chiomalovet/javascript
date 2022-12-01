alert('Welcome to my online system');
var pass = prompt('password');
if (pass == 6125) {
    alert('welcome online')
    var name = prompt('input name');
    var cgpa = prompt('CGPA');
    if (cgpa >= 4.5) {
        alert(name + ' ' + 'has ' + 'first class');
    } else if (cgpa >= 3.5) {
        alert(name + ' ' + 'has ' + 'second class upper');

    } else if (cgpa >= 2.5) {
        alert(name + ' ' + 'has ' + 'second class lower');
    } else {
        alert(name + '' + 'has ' + 'Third class');
    }

} else {
    alert('wrong password');
    alert('signout');
}