// "use strict";

Array.prototype.count_of_even = function ()
{
    let result = 0;
    for (let i = 0; i < this.length; i++)
        if (this[i] % 2 === 0) result++;

    return result;
}
let testNum = [1, 2, 4]
console.log("Тест функции \"count_of_even\" на списке [1, 2, 4]: " + testNum.count_of_even())

String.prototype.toInt = function ()
{
    let result = 0
    for (let i = 0; i < this.length; i++)
        if (this[i] in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) result = result * 10 + parseInt(this[i]);

    return result;
}
let testStr = "qwry12urh1ui2hr1i2hr1"
console.log("Тест функции \"toInt\" на строке \"qwry12urh1ui2hr1i2hr1\": " + testStr.toInt())

let exm1 = { a:1, b:2, c:3 };
console.log(exm1);
exm1.d = 321;
exm1["test"] = 123;
console.log(exm1);

function Location (country, city)
{
    if (city)
        this.city = city;
    else
        this.city = "Kras";
    if (country)
        this.country = country;
    else
        this.country = "Russia";
    // this.from_krasnoyarsk = function ()
    // {
    //     return this.city === 'Kras';
    // }
}

Location.prototype.from_krasnoyarsk = function ()
{
    return this.city === 'Kras';
}

Location.prototype.test_this = function ()
{
    console.log(this);
}

let exm2 = { "name": "Ivan", "Age": 9, "location": new Location("qwe", "zxc" ) }
console.log(exm2)
console.log(exm2.location.from_krasnoyarsk())

let exm3 = new Location()
console.log(exm3)
console.log(exm3.from_krasnoyarsk())

Location();
