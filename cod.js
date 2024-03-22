"use strict";

const sesionEvento = document.querySelector('.sesion2')

let n1 = 0;
let n11= 0;
let n2 = 'be5dbb';
let n3 = '214bac';
const lop1 = setInterval(()=>{
    if(n1 ==0 ) {
        n1++;
        sesionEvento.style.transition = '.9s';
        sesionEvento.style.boxShadow = `-4px 4px 10px #${n2}, 4px -4px 10px #${n3}`;
    }else if(n1==2) {
        n1--;
        n11=1;
        sesionEvento.style.boxShadow = `-4px 4px 10px #${n3}, 4px -4px 10px #${n2}`;
        sesionEvento.style.transition = '.9s';
        n2 = 'be5dbb';
        n3 = '214bac';
    }else if(n1==1) {
        if(n11==1) {
            n1=0;
            n11=0;
        }else {
            n1++;
        }
        sesionEvento.style.boxShadow = `0px 0px 10px #${n2}, 0px 0px 10px #${n3}`;
        sesionEvento.style.transition = '.9s';
        n2 = '214bac';
        n3 = 'be5dbb';
    }
    
},1000); 