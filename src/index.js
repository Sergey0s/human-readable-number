module.exports = function toReadable(number) {

    const dg = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    const tn = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    const tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const stringNum = number.toString();

    let word = null;

    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number - (100 * hundreds)) / 10);
    let digit = stringNum.slice(2);

    if (stringNum.length === 1) {
        word = dg[number];
    }

    if (stringNum.length === 2 && number < 20) {
        word = tn[number]
    } else if (stringNum >= 20 && stringNum < 100) {
        digit = stringNum.slice(1);
        return parseInt(digit) === 0 ? word = tw[tens - 2] : word = tw[tens - 2] + ' ' + dg[digit]
    }

    if (stringNum.length === 3) {

        if (tens === 1) {
            word = dg[hundreds] + ' hundred ' + tn[stringNum.slice(1)]
        }

        if (parseInt(digit) === 0) {
            if (tens === 0) {
                word = dg[hundreds] + ' hundred'
            }

            if (tens > 1) {
                word = dg[hundreds] + ' hundred ' + tw[tens - 2]
            }
        } else {
            if (tens === 0) {
                word = dg[hundreds] + ' hundred ' + dg[digit]
            }

            if (tens > 1) {
                word = dg[hundreds] + ' hundred ' + tw[tens - 2] + ' ' + dg[digit]
            }
        }
    }
    return word
};
