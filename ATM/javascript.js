do {
    let customers = ['jousha', 'samuel', 'joseph', 'ahmed'];
    let accountbalance = [800000, 300000, 500000, 1200000];

    var go = prompt('insert character');
    var result = customers.indexOf(go);
    if (result != -1) {
        alert(' ' + customers[result] + ' ' + accountbalance[result]);
    } else {
        alert('try again')

    }
} while (result == -1);
let customers = ['jousha', 'samuel', 'joseph', 'ahmed'];
let accountbalance = [800000, 300000, 500000, 1200000];
let customerpin = [6189, 5555, 6666, 7777];
var k;

for (k = 0; k < customers.length; k++) {
    let pass = prompt('transfer to ' + customers[k]);
    // let hit = k
    // document.write(k + "<\n>");
    let see = parseInt(prompt('how much to transfer'));
    if (accountbalance[pay] > see) {
        let eye = accountbalance[pay] - see;
        accountbalance[pay] = eye;
        alert('transfer sucessful ' + 'new balance ' + eye);
    } else {
        alert('insufficient fund');
    }

}
var count;
document.write("starting loop" + "<br />");
for (count = 0; count < 10; count++) {
    document.write("current count: " + count);
    document.write("<br />");
}
document.write("loop stopped");
// let customers = ['jousha', 'samuel', 'joseph', 'ahmed'];
customers[customers.length] = "james";
document.write('fff' + customers);