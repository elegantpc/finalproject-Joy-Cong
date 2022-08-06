const firstName= document.getElementById('firstName')
const secondName = document.getElementById('secondName')
const lastName=document.getElementById('lastName')
const date=document.getElementById('date')
const wLocation=document.getElementById('location')



const firstLetter1=document.getElementById('firstLetter1')
const firstLetter2=document.getElementById('firstLetter2')
const name1= document.getElementById('name1')
const name2=document.getElementById('name2')
const lastName1=document.getElementById('lastName1')
const date1=document.getElementById('date1')
const WLocation1=document.getElementById('location1')

//adding the first initial
 function firstInit(){
   const firstValue=firstName.value
   firstLetter1.innerText= `${firstValue.charAt(0)} & `  
 
}
firstName.addEventListener('keyup', firstInit)

 //adding the second initial
 function secondInit(){
    const secondValue=secondName.value
    firstLetter2.innerHTML= secondValue.charAt(0)
    
}

secondName.addEventListener('keyup', secondInit)

//display first names
 function nameOfGroom(){
    const firstValue=firstName.value
    name1.innerHTML=`${firstValue} & `
}

firstName.addEventListener('keyup', nameOfGroom)

function nameOfBride(){
    const secondValue=secondName.value
    name2.innerHTML=secondValue
}

secondName.addEventListener('keyup', nameOfBride)


//display last name
function surName(){
    const surnameValue=lastName.value
    lastName1.innerHTML=surnameValue

}

lastName.addEventListener('keyup', surName)



function dateOfWedding(){
    
    const dateValue = date.value
   date1.innerHTML=dateValue
   
   
}
date.addEventListener('keyup', dateOfWedding)

function locationOfWedding(){
    
    const locationValue = wLocation.value
    location1.innerHTML=locationValue
   
   
}
wLocation.addEventListener('keyup', locationOfWedding)

//change of font and background

const artistStyle = document.getElementById('artist')
const vintageStyle = document.getElementById('vintage')
const starStyle = document.getElementById('star')
const para= document.getElementsByTagName('p')
const spans= document.getElementsByTagName('span')


// vintage change of font

function changeOfFont1(){

   for(let i=0; i<para.length; i++){
       para[i].setAttribute("class", "changeOfFont1")
       spans[i].setAttribute("class", "changeOfFont1")
   }
 }

vintageStyle.addEventListener('click', changeOfFont1)

function changeOfFont2(){

    for(let i=0; i<para.length; i++){
   
           para[i].className="changeOfFont2"
           spans[i].className="changeOfFont2"
        }
    }
   
   
   starStyle.addEventListener('click', changeOfFont2)
   
   
   function changeOfFont3(){
   
        for(let i=0; i<para.length; i++){
            para[i].className="changeOfFont3"
            spans[i].className="changeOfFont3"
        }
    }
   
    artistStyle.addEventListener('click', changeOfFont3)

// change of background
const listItems = document.getElementsByTagName('li')
const displayArea=document.getElementsByClassName('display')

let arr = ['images/pawel-czerwinski-NJdfP9AlPjc-unsplash.jpg','images/annie-spratt-X4l3CjcDvic-unsplash.jpg','images/evelina-friman-hw_sKmjb0ns-unsplash.jpg']

    
for(let i=0; i<listItems.length;i++){
    listItems[i].setAttribute('index', i)
    }     


function changeOfBackground(){ 
    const card=document.querySelector('img')
    let index = this.getAttribute('index')
    console.log(index)
    let srcName= arr[index]
    console.log(srcName)
    card.src=srcName   
}

    for(let i=0; i<listItems.length;i++){
    listItems[i].addEventListener('click', changeOfBackground)
}




 
