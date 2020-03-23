let art = document.querySelectorAll(".art");
let length = art.length;
// console.log(length);

let btn = document.querySelector('.button');

function makeButton() {
    if(length % 2 === 0) {
        btn.classList.add('even');
    } else {
        btn.classList.add('odd');
    }
}
makeButton();