console.log('hello')
let n=1;
const color=[['rgb(164, 33, 33)','rgba(255, 0, 0, 1)'],['rgba(255, 0, 200, 1)','rgba(156, 29, 137, 1)'],['rgba(41, 8, 255, 1)','rgba(50, 47, 133, 1)'],
['rgba(0, 234, 255, 1)','rgba(57, 118, 117, 1)'],['rgba(0, 255, 8, 1)','rgba(73, 127, 75, 1)'],
['rgba(255, 242, 0, 1)','rgba(136, 146, 30, 1)'],['rgba(240, 155, 20, 1)','rgba(157, 127, 37, 1)']

,['rgba(255, 255, 255, 1)','rgba(63, 57, 57, 1)'],['rgba(63, 57, 57, 1)','rgba(0, 0, 0, 1)']]

const prop=['outercircle','innercircle','tail','bottomborder']

setcolor(prop[0],color[6],true)
setcolor(prop[1],color[2],true)
setcolor(prop[2],color[8],true)

document.getElementById('backgr').style.background=color[2][0]
 createImage(n)

function setcolor(property,color,situation) {

    array=document.getElementsByClassName(property)

    for (let index = 0; index < array.length; index++) {
        array[index].style.background=`radial-gradient(circle, ${color[Number(situation)]},${color[Number(!situation)]})`
        
    }
    
}

function moveback() {
    n=n-1;
    createImage(n)
}
function moveahead() {
    n=n+1;
     createImage(n)
}

function  createImage(params) {

let x1=Math.floor(params/(64*8)); 

let x=Math.floor(params%(64*8)/64);    

let y=Math.floor((params%64)/8);    

let z=params%8
   
setcolor(prop[0],color[x],true)
setcolor(prop[1],color[y],true)
setcolor(prop[2],color[8-x1],true)
document.getElementById('backgr').style.background=color[z-1][0]


}

