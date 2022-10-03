// const book = {
//     title: "EGO IS THE ENEMY",
//     author : "Bob Marley",
//     publisher: {
//         name: "Penguin"
//     }
// }
// const {name:publisherName = "self published"} = book.publisher

// console.log(publisherName)


const item = ["Banana", 10,30,90]


const [thing,small,medium,large] = item

console.log(`A ${thing} costs ${small}, ${medium} and ${large}`)