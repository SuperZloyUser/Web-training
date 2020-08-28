"use strict";

// Добавление элементов добавления и удаления пунктов списка
// ----------------------------------------------------------------------------
let custom_col_prot = document.createElement('div');
custom_col_prot.className = 'col-md-4';
// Кнопка добавления
let add_to_start_button = document.createElement('button');
add_to_start_button.type = 'submit';
add_to_start_button.id = 'add_item_button_start';
add_to_start_button.className = 'btn btn-default';
add_to_start_button.innerHTML = "<span style='color: darkred' onclick='gen_next_li_item(true)'>Добавить пункт в начало</span>";

let add_to_end_button = document.createElement('button');
add_to_end_button.type = 'submit';
add_to_end_button.id = 'add_item_button_end';
add_to_end_button.className = 'btn btn-default';
add_to_end_button.innerHTML = "<span style='color: darkred' onclick='gen_next_li_item(false)'>Добавить пункт в конец</span>";

// Поле ввода добавляемого слова
let text_field = document.createElement('input');
text_field.type = 'text';
text_field.id = 'text_for_adding_item';
// Проверка доступа
let checkBox = document.createElement("input");
checkBox.type = 'checkBox';
checkBox.id = 'access_checker';
// checkBox.checked = true;
// console.log(checkBox.outerHTML);

// Добваление в документ
let custom_container = document.createElement('div');
custom_container.className = 'col-md-3';
custom_container.innerHTML = '<span class="regular_text">Название пункта: </span>' + text_field.outerHTML + '<span class="regular_text">Доступ: </span>' + checkBox.outerHTML + add_to_start_button.outerHTML + add_to_end_button.outerHTML;
document.getElementById('zxc').appendChild(custom_container);
// ----------------------------------------------------------------------------
// Выбор пункта
let num_input = document.createElement('div');
num_input.className = 'form-group';
num_input.id = 'num_for_deleting_item';
num_input.innerHTML = '<label for="sel1" class="regular_text">Выберите удаляемый элемент:</label>' + '<select class="form-control" id="sel1">';

// Кнопка, удаляющая элементы
let del_button = document.createElement('button');
del_button.type = 'submit';
del_button.id = 'del_item_button';
del_button.className = 'btn btn-default';
del_button.innerHTML = "<span style=\'color: darkred;\' onclick='delete_li_item_by_num()'>Удалить элемент списка</span>";

// Работа с сеткой
let custom_col = custom_col_prot.cloneNode(false);
custom_col.appendChild(num_input);

let custom_col_2 = custom_col_prot.cloneNode(false);
custom_col_2.className = "col-md-offset-1 col-md-2";
custom_col_2.appendChild(del_button);

let custom_row = document.createElement('div');
custom_row.className = 'row';
custom_row.appendChild(custom_col);
custom_row.appendChild(custom_col_2);
// ----------------------------------------------------------------------------
// Добавление конструкции в документ

let temp = document.createElement('div');
temp.className = 'col-md-1';
document.getElementById('zxc').appendChild(temp);
document.getElementById('zxc').appendChild(custom_row);


// Добавление пунктов списка
function gen_next_li_item(flag)
{
    let text_field = document.getElementById('text_for_adding_item').value;
    if (document.getElementById('access_checker').checked === true &&
    text_field !== '')
    {
        let temp_item = document.createElement("li");
        temp_item.innerHTML = '<span class="sample_text">' + text_field + '</span>';
        if (flag === true)
            document.getElementById('list').insertBefore(temp_item, document.getElementById('list').children[0]);
        else
            document.getElementById('list').appendChild(temp_item)
        fill_numbers()
        return true;
    }
    else
    {
        return false;
    }
}

// ----------------------------------------------------------------------------
// Первичное заполнение списка
window.onload = fill_numbers;

// Удаление пунктов списка
function delete_li_item_by_num()
{
    let del_name = document.getElementById('sel1');

    let result_list = document.getElementById('list');

    for (let i = 0; i < result_list.children.length; i++)
    {
        if (del_name.value === i.toString())
            result_list.children[i].remove();
    }

    document.getElementById('id_for_add_list').replaceChild(result_list, document.getElementById('list'));
    fill_numbers();
}

// Функция, заполняющая 'form-group'
function fill_numbers()
{
    let li_list = document.getElementById('list');
    document.getElementById('sel1').remove();

    let new_sel = document.createElement('select');
    new_sel.style.width = '75%';
    new_sel.className = 'form-control'
    new_sel.id = 'sel1';

    for (let i = 0; i < li_list.children.length; i++)
    {
        let temp_op = document.createElement('option');
        temp_op.value = i.toString();
        temp_op.innerHTML = get_string_from_inner(li_list.children[i].innerHTML);
        new_sel.innerHTML += temp_op.outerHTML;
    }

    document.getElementById('num_for_deleting_item').innerHTML += new_sel.outerHTML;
}

// Функция, достающая строку из 'innerHTML'(отбрасывает оболочный тег)
function get_string_from_inner(string)
{
    let flag = 0;
    let result = '';

    for (let i = 0; i < string.length; i++)
    {
        if (i !== 0 && string[i] === '<')
            break;

        if (flag === 0 && string[i] === '>')
        {
            flag++;
            continue;
        }

        if (flag > 0)
        {
            result += string[i];
        }
    }

    return result;
}

//----------------------------------------------------------------------------------------

console.log(document.forms[0].elements);

function ValidMail()
{
    let re = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('email').value;
    return re.test(myMail);
}

function MailCheckAlert()
{
    let result = ValidMail();
    if (!result)
        alert('Адрес электронной почты введен неправильно!');
    return result;
}

function DataStruct(email, pass)
{
    this.email = email;
    if (pass)
    {
        this.pass = pass;
    }
    else
        {
        this.pass = '---'
    }
}

DataStruct.prototype.genOutput = function ()
{
    return 'Email: ' + this.email + '\nPassword: ' + this.pass;
}

function DataCollector(flag)
{
    if (flag)
    {

        console.log(new DataStruct(document.forms[0].elements[0].value, document.forms[0].elements[1].value).genOutput());
    }
}

let submitCountFlag = 0;

function UpdateSubmitButton() {
    submitCountFlag = 0;
    if (ValidMail(document.forms[0].elements[0].value))
        submitCountFlag++;
    if (document.forms[0].elements[1].value !== '')
        submitCountFlag++;

    if (submitCountFlag === 2) document.forms[0].elements[3].innerHTML = '<img src="pics/mini.jpg" alt="Image error!">';
    else
        document.forms[0].elements[3].innerHTML = 'Submit(' + submitCountFlag + '/2)';
}
