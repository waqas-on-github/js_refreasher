
let show_text =document.querySelector(".quote-display")
let input_text =document.querySelector("#quoteInput")

// for removing text here after few seconds of page load  

setTimeout(()=>{
   input_text.innerHTML=""
} ,1000) 
// timer code 
let time=document.querySelector(".timer")
console.log(time.innerText)


setInterval(() => {
  time.innerText++
  console.log(time.innerText)
}, 1000);
// get data from api and show on page 

async function Get_reandom_qoute(){
   
    const  data = await fetch("https://api.quotable.io/random")
    let content = await data.json()
    content.content.split('').forEach(element => {
    let ch_span =document.createElement("span")
         ch_span.innerText=element
         show_text.appendChild(ch_span)
      })}

Get_reandom_qoute()

// oninput  event compare input word and do decisions 

input_text.addEventListener("input",() => {
   let correct=true  // when we input value will be true 
   

   let input_text_value =input_text.value.split('')
   let elements =document.querySelectorAll("span")

   elements.forEach((elem,index) => {
    let character=input_text_value[index]
    
    if (character == null) {
        
        elem.classList.remove('correct')
        elem.classList.remove('incorrect')
        correct=false     // if an word false mean all phara false 
      } 
      else if (character === elem.innerText) {
        elem.classList.add('correct')
        elem.classList.remove('incorrect')
        
      } else {
        elem.classList.remove('correct')
        elem.classList.add('incorrect')
        correct=false //if an word false mean all phara false 
      }
   }); 
   // all conditions checked there will must be all values be true so load another phara 
   
if(correct){load_qoute()}
                 
})
               
               
               
function load_qoute(){
   setTimeout(() => {
   Get_reandom_qoute()
   show_text.innerText=''
   input_text.value=""
   time.innerText=0
    }, 2000);

 }
