function contoword() {
    var number = document.getElementById("num").value;
    var err = document.getElementById("num");
    if (number == "") {
        document.getElementById("res").innerHTML = "You did not enter any number.";        
    }
    else if (number>=0 && number<=999) {
        let rem;
        let sum = 0;
        while (number!=0) {
            rem = number%10;
            sum = sum*10+rem;
            number = Math.floor(number/10);
        }
        let new_num = sum;
        let l = new_num.toString().length;
        var myArray = [];
        for (let i = 0; i < l; i++) {
            new_n = new_num%10;
            new_num = Math.floor(new_num/10);
            switch (new_n) {
                case 0:
                    res = 'Zero';
                    break;
                case 1:
                    res = 'One';
                    break;
                case 2:
                    res = 'Two';
                    break;
                case 3:
                    res = 'Three';
                    break;
                case 4:
                    res = 'Four';
                    break;
                case 5:
                    res = 'Five';
                    break;
                case 6:
                    res = 'Six';
                    break;
                case 7:
                    res = 'Seven';
                    break;
                case 8:
                    res = 'Eight';
                    break;
                case 9:
                    res = 'Nine';
                    break;
                default:
                    break;
            }
            myArray.push(res);
        }
        document.getElementById("res").innerHTML = myArray.join(" ");
    }
    else{
        document.getElementById("res").innerHTML = "Enter a number between 0 and 999";
    }
}