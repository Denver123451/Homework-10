function addArr() {
    let resoultArr = [];
    while (true) {
       let word = prompt("введите слово")
        if(word) {
            resoultArr.push(`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);
        }
            else {break};
    }
        return resoultArr.sort((first, second) => {
            return first.length - second.length
        });
};

console.log(addArr())