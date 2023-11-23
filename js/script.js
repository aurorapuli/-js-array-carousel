
// creiamo le costanti

const items = document.getElementsByClassName('items');

console.log(items);

let activeItem = 0;

// navigazione

const next = document.getElementById ('buttonnext');
const prev = document.getElementById ('buttonprev');


next.addEventListener ('click',

 function (){

    if (activeItem < items.length -1){

        // togliamo la classe block all'elemento corrente

        items [activeItem].classList.remove ('block');

        // aggiungiamo di uno l'indice da visualizzare

        activeItem++;
         console.log(activeItem);
        // aggiungiamo la classe bloch all'item successivo

        items [activeItem].classList.add ('block');


        if(activeItem === items.length -1){

            items [activeItem].classList.remove ('block');

            activeItem = 0;

            items [0].classList.add ('block');
            console.log(items [0]);
        }

    
    }
 }
);



prev.addEventListener ('click',

 function (){

    if (activeItem < items.length -1){

        // togliamo la classe block all'elemento corrente

        items [activeItem].classList.remove ('block');

        // aggiungiamo di uno l'indice da visualizzare

        activeItem--;
        console.log(activeItem);

        // aggiungiamo la classe bloch all'item successivo

        items [activeItem].classList.add ('block');


        if(activeItem === items [0]){

            items [activeItem].classList.remove ('block');
            console.log(activeItem);

            activeItem = 4;

            items [activeItem].classList.add ('block');
            
            console.log(activeItem);
        }

    
    }
 }
);



// next.addEventListener ('click',
//    function(){

  
//      for(let i = 0; i <= items.length -1; i++){
        

//         items [i].classList.remove ('block');
//             console.log(items [i]);

        

//         items [i++].classList.add ('block');
         
//         console.log(items [i]);

// }

// });