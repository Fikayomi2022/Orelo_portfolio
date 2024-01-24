let animated = document.querySelector(".animated");

let speech = ["I am a product designer", "I am a VCS professional"];

const change_animated = elem => {
    let content = elem.innerText;
    let listed_cont = content.split("");
    listed_cont.pop();
    content = listed_cont.join("");
    elem.innerText =  content;
    console.log(listed_cont);
    
}
const add_animated = textContent => {
    let content = textContent;
    let listed_cont = content.split("");
    content = listed_cont.join("");
    length_content = content.length;
    timer = 0
    setInterval(()=>{
        add_animated(textContent)
        let letter = content.charAt(length_content - (length_content - timer));
        animated.innerText +=  letter;
        timer++;
        console.log(letter);
        if(length_content > 10){
            clearInterval(1)
        }
    },1000,textContent); 
}
// console.log(animated);
// let timer = animated.innerText.length;
// for(chr of speech[0]){
//     console.log(chr);
// }
// setInterval(()=>{console.log(timer++)}, 1000)
// const gradual = ()=>{
//     for(let char of animated.innerText){
//         setInterval(change_animated , 10000, animated);
//     }
// }

// gradual();
// let length = animated.innerText.length
// while(length > 1){
//     length--;
    
// }
setInterval(()=>{
        change_animated(animated);
        if(animated.innerText.length < 1){
            clearInterval(1);
            add_animated(speech[0]);

        }
        
    },100)
    // setInterval(()=>{
    //         add_animated(animated);
    //         // if(animated.innerText.length < 1){
    //         //     clearInterval(1);
    //         // }
            
    // },100)


// change_animated(animated);
console.log(animated);