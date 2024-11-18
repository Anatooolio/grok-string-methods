//Напишите функцию stringLength, которая принимает на вход строку и возвращает ее длину.
function stringLength(str) {
  return str.length;
}

// Напишите функцию toUpperCase, которая принимает на вход строку и возвращает ее в верхнем регистре.
function toUpperCase(str) {
  return str.toUpperCase();
}

//Напишите функцию trimWhitespace, которая принимает на вход строку и удаляет символы пробела из начала и конца строки.
function trimWhitespace(str) {
  return str.trim();
}

//Напишите функцию findFirst, которая принимает два аргумента, строку и символ, и возвращает позицию первого
// вхождения символа в строке.
function findFirst(str, symbol) {
  return str.indexOf(symbol);
}

//Напишите функцию replaceAll, которая принимает три аргумента: строку, целевую подстроку и заменяющую подстроку,
// и возвращает строку со всеми вхождениями целевой подстроки, замененной заменяющей подстрокой.

function replaceAll(str, target, replace) {
  return str.replaceAll(target, replace);
}

// Напишите функцию extractSubstr, которая принимает три аргумента: строку, начальный индекс и конечный индекс, и
// возвращает подстроку между двумя индексами.

function extractSubstr(str, start, end) {
  return str.slice(start, end);
}

//Напишите функцию extractDomain, которая принимает на вход строку адреса электронной почты и возвращает доменное имя.

function extractDomain(str) {
  let inGav = str.indexOf('@');
  return str.slice(inGav + 1);
}

//Напишите функцию nthCharacter, которая принимает два аргумента, строку и индекс, и возвращает символ с этим индексом в строке.

function nthCharacter(str, index) {
  if (index > str.length) {
    return '';
  }
  return str[index];
}

//Напишите функцию splitWords, которая принимает на вход строку и возвращает массив слов.

function splitWords(str) {
  return str.split(' ');
}

//Напишите функцию reverseString, которая принимает на вход строку и возвращает строку с символами в обратном порядке.

function reverseString(str) {
  return str.split('').reverse().join('');
}

//Напишите функцию containsSubstring, которая принимает два аргумента, строку и подстроку, и возвращает true,
// если строка содержит подстроку, и false в противном случае.

function containsSubstring(str, subStr) {
  return str.includes(subStr);
}

//Напишите функцию countOccurrences, которая принимает два аргумента, строку и символ, и возвращает количество
// вхождений символа в строку.

function countOccurrences(str, symbol) {
  let value = 0;
  var string = str.split('');
  string.forEach((element) => {
    if (element.includes(symbol)) {
      value += 1;
    }
  });
  return value;
}

//Напишите функцию padWithZeros, которая принимает два аргумента, строку и целевую длину, и возвращает строку,
// заполненную нулями в начале, пока она не достигнет целевой длины.

function padWithZeros(str, targetLength) {
  return str.padStart(targetLength, '0')
}

//Напишите функцию truncateAndAppend, которая принимает два аргумента, строку и максимальную длину, и возвращает строку,
// усеченную до указанной длины с добавлением многоточия ("..."), если исходная строка длиннее указанной длины.

function truncateAndAppend(str, maxLength) {
  if (str.length > maxLength)
  {
    return str.substring(0, maxLength) + '...';
  }
  return str 
}
console.log(truncateAndAppend('Привет, мир!', 5));

//Напишите функцию capitalizeWords, которая принимает на вход строку и возвращает строку с заглавной первой буквой каждого слова.

function capitalizeWords(str) {}

module.exports = {
  stringLength,
  toUpperCase,
  trimWhitespace,
  findFirst,
  replaceAll,
  extractSubstr,
  extractDomain,
  nthCharacter,
  splitWords,
  reverseString,
  containsSubstring,
  countOccurrences,
  padWithZeros,
  truncateAndAppend,
  capitalizeWords,
};
