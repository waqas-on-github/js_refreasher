let show_qoute =document.querySelector(".quote-display")
let text_area =document.querySelector("#quoteInput")


// for removing text here after few seconds of page load  
setTimeout(()=>{
   text_area.innerHTML=""
} ,1000) 


async function Get_reandom_qoute(){
   
    const  data = await fetch("https://api.quotable.io/random")
    let content = await data.json()
    content.content.split('').forEach(element => {
         let ch_span =document.createElement("span")
         ch_span.innerText=element
         show_qoute.appendChild(ch_span)
      });
      
      }
Get_reandom_qoute()
    
text_area.addEventListener("input",() => {
   let array_value =text_area.value.split('')
   let elements =document.querySelectorAll("span")
   elements.forEach((elem,index) => {
    let character=array_value[index]
    console.log(elem.innerHTML,index,character)
     
    if (character == null) {
        elem.classList.remove('correct')
        elem.classList.remove('incorrect')
      } else if (character === elem.innerText) {
        elem.classList.add('correct')
        elem.classList.remove('incorrect')
      } else {
        elem.classList.remove('correct')
        elem.classList.add('incorrect')
      }
   });


})