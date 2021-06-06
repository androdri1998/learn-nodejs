const number = 1000;
const getNumberFormated = ({ numberToFormat, locale = 'pt-BR', currency = 'BRL' }) => {
    const numberFormated = new Intl.NumberFormat(locale, { 
        style: 'currency', 
        currency 
    }).format(numberToFormat);

    return numberFormated;
}

console.log(getNumberFormated({ numberToFormat: number }));
// Output:
// R$ 1.000,00
console.log(getNumberFormated({ numberToFormat: number, locale: 'ja-JP', currency: 'JPY' }));
// Output:
// ￥1,000
console.log(getNumberFormated({ numberToFormat: number, locale: 'pt-BR', currency: 'EUR' }));
// Output:
// € 1.000,00
console.log(getNumberFormated({ numberToFormat: number, locale: 'en-US', currency: 'USD' }));
// Output:
// $1,000.00