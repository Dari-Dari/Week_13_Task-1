//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);
//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = new Date().getFullYear();
console.log(currentYear);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = new Date().getMonth();
console.log(currentMonth);
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = new Date().getDate();
console.log(currentDay);
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(new Date().getFullYear(), 10, 28);
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate() + 10);
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
const dayDiff = Math.floor((futureDate - currentDate) / (1000 * 60 * 60 * 24));
console.log(dayDiff);
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 5);
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
const dayDiffTwo = Math.ceil((futureDate - pastDate) / (1000 * 60 * 60 * 24));
console.log(dayDiffTwo);
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000));
console.log(nextWeek);
//Задание 11
// Выведите в консоль день недели для nextWeek
const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const nextWeekDay = daysOfWeek[nextWeek.getDay()];
console.log(nextWeekDay);
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentYear + 5;
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const nextYear = currentYear + 1;
const futureDateInFutureYear = new Date(nextYear, 10, 28);
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
const yearDiff = futureYear - currentYear;
console.log(yearDiff);
//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date15 = new Date(Date.parse(strDate));
console.log(date15);
//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const date15ts = Date.parse(strDate);
console.log(date15ts);
//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = '2023/06/15';
const date17ts = Date.parse(wrongDate);

if (isNaN(date17ts)) {
    console.log('Неправильный формат даты');
} else {
    console.log('Правильный формат даты');
}
//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
    console.log(`${number} - положительное число`);
} else {
    console.log(`${number} - отрицательное число`);
}
//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 === 0) {
    console.log(`${number} - чётное число`);
} else {
    console.log(`${number} - нечётное число`);
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0) {
    console.log(`${number} - число, кратное 3`);
} else {
    console.log(`${number} - число, не кратное 3`);
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number >= 0 && number <= 9) {
    console.log(`${number} - число однозначное`);
} else {
    console.log(`${number} - число не однозначное`);
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number >= 10 && number <= 99) {
    console.log(`${number} - число двузначное`);
} else {
    console.log(`${number} - число не двузначное`);
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0 || number === 0) {
    console.log(`${number} - положительное число или равно 0`);
} else {
    console.log(`${number} - отрицательное число`);
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 === 0 || number % 7 === 0) {
    console.log(`${number} - является кратным  5 или 7`);
} else {
    console.log(`${number} - не является кратным  5 или 7`);
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0 || number === 0) {
    console.log(`${number} - отрицательное число или равно 0`);
} else {
    console.log(`${number} - положительное число и не равно 0`);
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number >= 100 && number <= 999 && number > 0) {
    console.log(`${number} - число трёхзначное и положительное`);
} else {
    console.log(`${number} - число не трёхназное или не положительное, или и то, и другое`);
}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
const today = 3;
let day;

switch (today) {
    case 1:
        day = 'Понедельник';
        break;
    case 2:
        day = 'Вторник';
        break;
    case 3:
        day = 'Среда';
        break;
    case 4:
        day = 'Четверг';
        break;
    case 5:
        day = 'Пятница';
        break;
    case 6:
        day = 'Суббота';
        break;
    case 7:
        day = 'Воскресенье';
        break;
    default:
        day = 'Неизвестный день недели';
}

console.log(day);

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'N':
        fullName = "Север";
        break;
    case 'S':
        fullName = "Юг";
        break;
        case 'E':
            fullName = "Восток";
            break;
        case 'W':
            fullName = "Запад";
        break;
        default:
            fullName = "Некорректное направление";
        break;
}
console.log(fullName);
