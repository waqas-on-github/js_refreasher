
let show_text =document.querySelector(".quote-display")
let input_text =document.querySelector("#quoteInput")


// for removing text here after few seconds of page load  
setTimeout(()=>{
   input_text.innerHTML=""
} ,1000) 


async function Get_reandom_qoute(){
   
    const  data = await fetch("https://api.quotable.io/random")
    let content = await data.json()
    content.content.split('').forEach(element => {
         let ch_span =document.createElement("span")
         ch_span.innerText=element
         show_text.appendChild(ch_span)
      });
      
      }
Get_reandom_qoute()
    
input_text.addEventListener("input",() => {

   let input_text_value =input_text.value.split('')
   let elements =document.querySelectorAll("span")

   elements.forEach((elem,index) => {
    let character=input_text_value[index]
    
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