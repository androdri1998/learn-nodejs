const number = 1000;
const getNumberFormated = ({ numberToFormat, locale = 'pt-BR', currency = 'BRL' }) => {
    const numberFormated = new Intl.NumberFormat(locale, { 
        style: 'currency', 
        currency 
    }).format(numberToFormat);

    return numberFormated;
}

console.log(getNumberFormated({ numberToFormat: number }));
console.log(getNumberFormated({ numberToFormat: number, locale: 'ja-JP', currency: 'JPY' }));
console.log(getNumberFormated({ numberToFormat: number, locale: 'pt-BR', currency: 'EUR' }));
console.log(getNumberFormated({ numberToFormat: number, locale: 'en-US', currency: 'USD' }));