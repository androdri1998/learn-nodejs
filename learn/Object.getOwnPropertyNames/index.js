const smartphoneArray = [
    ["type", "smartphone"],
    ["launch", "2018"],
    ["name", "unknown"],
    ["ram", "3GB"],
    ["rom", "128GB"],
];

console.log(Object.getOwnPropertyNames(smartphoneArray));
// Output: 
// [ '0', '1', '2', '3', '4', 'length' ]

const createClosure = ({ words = [] }) => {
    const findAll = () => {
        return words;
    }

    const findWordsBySearch = ({ search = '' }) => {
        return words.filter(word => word.includes(search));
    }

    return {
        findAll,
        findWordsBySearch,
    }
}

const words = [];

const findWordsService = createClosure({ words });

console.log(Object.getOwnPropertyNames(findWordsService));
// Output:
// [ 'findAll', 'findWordsBySearch' ]