const {
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
} = require('../index.js');

let testString;

beforeEach(() => {
  testString = 'Привет, мир!';
});

test('stringLength возвращает правильную длину строки', () => {
  expect(stringLength(testString)).toBe(12);
  expect(stringLength('')).toBe(0);
});

test('toUpperCase возвращает строку в верхнем регистре', () => {
  expect(toUpperCase(testString)).toBe('ПРИВЕТ, МИР!');
  expect(toUpperCase('12345')).toBe('12345');
});

test('trimWhitespace удаляет пробелы в начале и конце строки', () => {
  expect(trimWhitespace(`  ${testString}  `)).toBe(testString);
  expect(trimWhitespace('  \t\n\r  ')).toBe('');
});

test('findFirst возвращает позицию первого вхождения символа', () => {
  expect(findFirst(testString, 'в')).toBe(3);
  expect(findFirst(testString, 'z')).toBe(-1);
});

test('replaceAll заменяет все вхождения', () => {
  expect(replaceAll(testString, 'и', 'И')).toBe('ПрИвет, мИр!');
  expect(replaceAll(testString, 'z', 'Z')).toBe(testString);
});

test('extractSubstr извлекает подстроку между начальным и конечным индексами', () => {
  expect(extractSubstr(testString, 0, 6)).toBe('Привет');
  expect(extractSubstr(testString, 8, 11)).toBe('мир');
});

test('extractDomain возвращает домен адреса электронной почты', () => {
  expect(extractDomain('user@example.com')).toBe('example.com');
  expect(extractDomain('john.doe@domain.co.uk')).toBe('domain.co.uk');
});

test('nthCharacter возвращает символ по заданному индексу', () => {
  expect(nthCharacter(testString, 4)).toBe('е');
  expect(nthCharacter(testString, 20)).toBe('');
});

test('splitWords разбивает строку на массив слов', () => {
  expect(splitWords(testString)).toEqual(['Привет,', 'мир!']);
  expect(splitWords('The quick brown fox')).toEqual([
    'The',
    'quick',
    'brown',
    'fox',
  ]);
});

test('reverseString разворачивает строку', () => {
  expect(reverseString(testString)).toBe('!рим ,тевирП');
  expect(reverseString('abcde')).toBe('edcba');
});

test('containsSubstring проверяет, содержит ли строка подстроку', () => {
  expect(containsSubstring(testString, 'мир')).toBe(true);
  expect(containsSubstring(testString, 'Earth')).toBe(false);
});

test('countOccurrences подсчитывает количество вхождений символа в строку', () => {
  expect(countOccurrences(testString, 'и')).toBe(2);
  expect(countOccurrences(testString, 'z')).toBe(0);
});

test('padWithZeros заполняет строку нулями для достижения заданной длины', () => {
  expect(padWithZeros('123', 5)).toBe('00123');
  expect(padWithZeros('12345', 3)).toBe('12345');
});

test('truncateAndAppend обрезает строку и добавляет многоточие', () => {
  expect(truncateAndAppend(testString, 10)).toBe('Привет, ми...');
  expect(truncateAndAppend(testString, 20)).toBe(testString);
});

test('capitalizeWords выводит первую букву каждого слова в строке заглавными буквами', () => {
  expect(capitalizeWords('привет, мир!')).toBe('Привет, Мир!');
  expect(capitalizeWords('the quick brown fox')).toBe('The Quick Brown Fox');
});
