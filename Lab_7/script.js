function str_to_int(str)
{
    let result = 0;

    for (let i = 0; i < str.length; i++)
    {
        if (str[i] === '.') break;
        if (str[i] in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) result = result * 10 + parseInt(str[i]);
    }

    return result;
}

function moveBlock()
{
    let x;
    if ( event.clientX + 115 < document.body.clientWidth)
        x = (event.clientX / document.body.clientWidth) * 100;
    else
        x = document.getElementById('test').style.paddingLeft

    let y = event.clientY * 0.003;

    document.getElementById('test').style.paddingTop = y + "%";
    document.getElementById('test').style.paddingLeft = x + "%";
}

document.body.addEventListener("mousemove", moveBlock, false);


// Delay
var delay = 0
function sleep(custom_delay) {
    custom_delay *= 1000;

    if (custom_delay)
    {
        custom_delay += new Date().getTime();
        while (new Date() < custom_delay){}
    }
    else
    {
        let ms = new Date().getTime() + delay;
        while (new Date() < ms){}
    }
}


// Вывод клавиш
function key_translator()
{
    console.log(event.key)
}


// Слайдер картинок
let pic_number = 0;
document.getElementById('new_pic').addEventListener('click', function ()
{
    pic_number = (pic_number + 1) % 4;
    console.log(pic_number)
    document.getElementById('new_pic').src = 'pics/' + pic_number + '.jpg'
});


// Удаление ввода
document.getElementById('email').addEventListener('blur', function ()
{
    let temp = this.value;
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    console.log(temp)

    if (re.test(temp) === false)
    {
        alert('Email введён неверно!');
        this.value = ""
    }

})

// Кликер
// Загрузка
