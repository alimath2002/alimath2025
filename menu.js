
function openmenue(){

document.getElementsByClassName('menulittle')[0].style.display="block";
document.getElementsByClassName('menulittle')[1].style.display="block";


}

function closemenue(){
    
    document.getElementsByClassName('menulittle')[0].style.display="none";
    document.getElementsByClassName('menulittle')[1].style.display="none";

}



function openspcmenu(ai){

    let array2= document.getElementsByClassName('aboutmenuall');

    for (let index = 0; index < array2.length; index++) {
        array2[index].style.display="none";
        
    }
    

let array= document.getElementsByClassName('aboutmenue'+ai);

for (let index = 0; index < array.length; index++) {
     array[index].style.display="block";
    
}


}


