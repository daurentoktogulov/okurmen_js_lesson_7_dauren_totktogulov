// const obj = {
//     firstname: 'Dauren',
//     lastname: 'Toktogulov',
//     getFullName: function () {
//         console.log(`My firstname is ${this.firstname} and my
//         lastname is ${this.lastname}`);
//     },
//     age: 13,
// };

//  obj.getFullName();

//  function getFullName(firstname, lastname) {
//     console.log(`My firstname is ${firstname} and my
//     lastname is ${lastname}`);
//  }
// getFullName(12, 34)







                                                                                                                                                                   
// function renderStar (length) {
//     let star = '';
//     for(let i = 0; i < length; i++){
//         star += '*';
//     }
//     console.log(star);
// }


// const text = prompt('Hello world')

// renderStar(text.length);
// console.log(`*${text}*`);
// renderStar(text.length);

const randomBodyPart = ['нос', 'глаз', 'череп'];
const randomAbjectives = ['вонючая', 'унылая', 'дурацкая'];
const randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];



function getRandomWord(array) {
    const word = array [Math.floor(Math.random() * array.length)]

    return word;
}

const text = `у тебя ${getRandomWord
    (randomBodyPart)} словно ${getRandomWord
    (randomAbjectives)} ${getRandomWord(
        randomWords
        )}!!!` 

        console.log(text);


// const randomWord = getRandomWord(randomAbjectives);
// console.log(randomWord);



