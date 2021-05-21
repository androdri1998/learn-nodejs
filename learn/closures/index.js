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
console.log(findWordsService.findWordsBySearch({ search: 'pho' }));
console.log(findWordsService.findWordsByLength({ length: 4 }));
console.log(findWordsService.findWordsByFirstLetter({ letter: 'h' }));