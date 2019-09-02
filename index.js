/**
 * Получить процентное распределение долей по их номинальным значениям с точностью до
 * указанного количества десятичных знаков
 * @param {Array<number|string>} shares Номинальные значения долей
 * @param {number} digits Количество десятичных знаков результатв
 * @return {Array<string>}
 */
const getPercents = (shares, digits) => {
    if (!Array.isArray(shares)) {
        throw new TypeError('Argument "shares" must be an array');
    }
    if (typeof digits !== 'number' || digits < 0 || digits !== Math.floor(digits)) {
        throw new TypeError('Argument "digits" must be not negative integer');
    }
    if (shares.length === 0) {
        return [];
    }
    const sum = shares.reduce((result, item) => {
        result += +item;
        return result;
    }, 0);
    const factor = 100/sum;
    return shares.map((item) => (factor*item).toFixed(digits));
};



console.log(`Задача 1: Долевое строительство
    Дан массив из N долей, представленных в виде N рациональных:
    [
    '1.5',
    '3',
    '6',
    '1.5'
    ]

    Задача
    Написать программу, представляющую эти доли в процентном выражении с точностью
    до трех знаков после запятой:

    [
    '12.500',
    '25.000',
    '50.000',
    '12.500'
    ]

Решение.`);

/**
 * Показать решение для указанного списка номинальных долей
 * @param {Array<number|string>} shares
 */
const showDecision = (shares) => {
    const displayed = 5;
    console.log(`
    Указаны номинальные доли: ${(displayed < shares.length ? shares.slice(0, displayed).join(', ') + ' ...' : shares.join('; '))} (всего долей: ${shares.length})
    `);
    for (let digits = 0; digits <= 3; digits += 1) {
        const percents = getPercents(shares, digits);
        console.log(`    Получены доли в процентах (${digits} зн.): ${percents.join('; ')}`);
    }
};

// Вариант 1
showDecision(['1.5', '3', '6', '1.5']);

// Вариант 2
showDecision(['1', '2', '3', '1.75', '0.35', '1.15', '1.5', '3', '6', 1.5]);

// Вариант 3
showDecision(['6', '1.5', '1', '2', '3', '1.5', '3', '6', '1.5',  '1.75', '1', '2', '3', '1.75', '0.35', '1.15', '1.5', '3', '0.35', 1.15]);
