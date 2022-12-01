function get() {
    alert('welcome to loyalty bank');
}
get();
let customers = ['jousha', 'samuel', 'joseph', 'ahmed'];
let accountbalance = [800000, 300000, 500000, 1200000];
let customerpin = [6189, 5555, 6666, 7777];
while (true) {
    let pin = prompt('1. insert pin' + '\n2. add customer');
    if (pin == 1) {
        var t = parseInt(prompt('insert pin'));
        let pay = customerpin.indexOf(t);
        if (pay != -1) {
            alert('welcome online ' + customers[pay]);
            joy();
        }

    }
    if (pin == 2) {
        alert('welcome new customer');
        let u = prompt('insert your name');
        let e = customers.indexOf(u);
        if (e == -1) {
            customers.push(u);
        } else {
            alert('account already exist');
        }
        let q = parseInt(prompt('insert new password'));
        let p = customerpin.indexOf(q);

        if (p == -1) {
            customerpin.push(q);
        } else {
            alert('account already exist');
        }

        get();

    } else {
        alert('wrong pin');
    }


    function joy() {
        let go = prompt('1. balance' + ' ' + '\n2. withdrawal' + '\n3. transfer' + ' ' + '\n4. change pin' + '\n5.Exit');
        if (go == 1) {
            alert('your account balance is ' + accountbalance[pay]);

        }
        if (go == 5) {
            get();
        }
        if (go == 2) {
            let ho = parseInt(prompt('how much withdrawal'));
            if (accountbalance[pay] > ho) {
                let summ = accountbalance[pay] - ho;
                accountbalance[pay] = summ;
                alert('new balance ' + (accountbalance[pay]));
            } else {
                alert('insufficient balance');
            }
        }

        if (go == 3) {
            var i = "";
            for (k = 1; k < customers.length; k++) {
                var t = i += customers[k] + "<br>";
                var l = (prompt('transfer to ' + customers[k++]));

                let see = parseInt(prompt('how much to transfer'));
                if (accountbalance[pay] > see) {
                    let eye = accountbalance[pay] - see;
                    accountbalance[pay] = eye;
                    alert('transfer sucessful ' + 'new balance ' + eye);
                } else {
                    alert('insufficient fund');
                }

            }
            joy();
        }
        if (go == 4) {
            let x = parseInt(prompt('insert old pin'));
            if (x == customerpin[pay]) {
                var z = parseInt(promp('insert new pin'));
                var z = parseInt(prompt('confirm new pin'));
                customerpin[pay] = z;
                alert('sucessful');
            }
        }
        get();
    }

}