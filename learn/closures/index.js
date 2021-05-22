const createClosure = ({ words = [] }) => {
    const findAll = () => {
        return words;
    }

    const findWordsBySearch = ({ search = '' }) => {
        return words.filter(word => word.includes(search));
    } 

    const findWordsByLength = ({ length }) => {
        return words.filter(word => word.length === length);
    } 

    const findWordsByFirstLetter = ({ letter }) => {
        return words.filter(word => word[0] === letter);
    } 

    return {
        findAll,
        findWordsBySearch,
        findWordsByLength,
        findWordsByFirstLetter
    }
}

const words = ['ball', 'hard disk', 'smartphone', 'joystick', 'headphone', 'box'];

const findWordsService = createClosure({ words });

console.log(findWordsService.findAll());
// Output:
// [ 'ball', 'hard disk', 'smartphone', 'joystick', 'headphone', 'box' ]
console.log(findWordsService.findWordsBySearch({ search: 'pho' }));
// Output:
// [ 'smartphone', 'headphone' ]
console.log(findWordsService.findWordsByLength({ length: 4 }));
// Output:
// [ 'ball' ]
console.log(findWordsService.findWordsByFirstLetter({ letter: 'h' }));
// Output:
// [ 'hard disk', 'headphone' ]