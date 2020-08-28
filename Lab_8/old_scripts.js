// Слайдер картинок
var pic_number = 0;
document.getElementById('new_pic').addEventListener('click', function ()
{
    pic_number = (pic_number + 1) % 4;
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
