function total_resistance(array) {

    let result_resistance = 0;

    for (let i = 0; i < array.length; i++)
    {
        if (typeof array[i] != "number")
        {
            console.log("Неверные входные данные!")
            return
        }
        result_resistance += 1 / array[i];
    }

    console.log("Общее сопротивление(задание 5): " + 1 / result_resistance)
}

function abs_composition(array) {

    let result_composition = 1;

    for (let i = 0; i < array.length; i++)
    {
        if (typeof array[i] != "number")
        {
            console.log("Неверные входные данные!")
            return
        }
        result_composition *= Math.abs(array[i]);
    }

    console.log("Произведение модулей(задание 12): " + result_composition)

}

function amount_of_even(array) {

    let result_amount = 0;

    for (let i = 0; i < array.length; i++)
    {
        if (typeof array[i] != "number") {
            console.log("Неверные входные данные!")
            return
        }

        if (array[i] % 2 === 0)
        {
            if (typeof array[i] != "number")
            {
                console.log("Неверные входные данные!")
                return
            }
            result_amount += array[i];
        }
    }

    console.log("Сумма чётных элементов(задание 21): " + result_amount)

}

let array = [5, 4, 3, 2, 1]

total_resistance(array);
abs_composition(array);
amount_of_even(array);

