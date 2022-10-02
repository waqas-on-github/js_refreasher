// tasks to do 
// on click "a" play audio of "id :
// code for piano 
let piano =document.querySelector(".piano")
let aud=document.querySelector(".aud")

function getattr(p){  // scraping attribute from dom and save in array
        let arr=[]
    for (let i=0;i<=p.children.length -1 ;i++){
          let x=p.children[i].innerHTML
          arr.push(x)
    }
    return arr;

}

function get_aud_attr(au) {   // scraping attribute from dom and save in array
     let arr=[]
     for (let i =0 ;i <= au.children.length -1 ;i++ ){
        let x=au.children[i].id
        arr.push(x)
     }
     return arr
} 
let elementarray=getattr(piano)  // getting array of elements dinamically    
let playaudio=get_aud_attr(aud)  // getting array of audo elements 


 // when key clicked paino will be played 
document.addEventListener("click" ,(e) => {

 if(playaudio.indexOf(e.target.innerHTML)!==-1){   // finding is target is in array of elements 
    let elm=document.getElementById(`${e.target.innerHTML}`)   // searching 
    elm.currentTime=0;
    elm.play()
    e.target.classList.add("play")
    elm.addEventListener("ended" ,()=>{
        e.target.classList.remove("play")
    })       
    }
   
    
})

document.addEventListener("keypress" ,(e)=>{
         console.log((e.key).toUpperCase())
  let element=document.getElementById(`${e.key.toUpperCase()}`)
     element.currentTime=0;
     element.play()
     let target=document.querySelector(`[data-note=${e.key.toUpperCase()}]`)
     console.log(target)
      target.classList.add("play")
      element.addEventListener("ended",() => {
        target.classList.remove("play")
      })
})
                                                                                                                                                                                                                 