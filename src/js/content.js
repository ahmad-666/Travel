import anime from 'animejs/lib/anime.es';
let header = document.querySelector('#header');
let title = document.querySelector('#title');
let text = document.querySelector('#text');
let button = document.querySelector('#content button');
let offset = parseInt(Math.min(window.innerWidth,window.innerHeight)/15) ; //amount of top animation(based on screen size) 
let getStyle = (el,prop) => window.getComputedStyle(el,null).getPropertyValue(prop) ;
function animation(){
    const tl = anime.timeline({
        direction: 'normal',
        loop: 1
    });
    tl.add({
        targets: '#content' ,
        duration: 1500 ,
        easing: 'easeOutCubic' ,
        width: '65%'
    },0) ;
    tl.add({
        targets: '.pic .behind',
        duration: 1000,
        easing: 'easeInOutQuint' ,
        width: '100%'
    },750);
    tl.add({
        targets: '.pic .top',
        duration: 1000,
        easing: 'easeInOutQuint' ,
        width: '100%',
        boxShadow: {
            value: '0 0 20px 1px rgb(90,90,90)' ,
            delay : 1000 
        }   
    },1400);
    tl.add({
        targets: '#content > *:not(.pic)' ,
        duration: 1000,
        delay: anime.stagger(150),
        easing: 'linear' ,
        opacity: 1 ,  
        top: (el,i,t) =>{
            return [`${parseInt(getStyle(el,'top'))+offset}px`,getStyle(el,'top')] ;
        }
    },1700);
    tl.add({
        targets: '.icons > *' ,
        duration: 750,
        delay: anime.stagger(100),
        easing: 'linear' ,
        opacity: 1 ,  
        top: (el,i,t) =>{        
            return [`${parseInt(getStyle(el,'top'))+offset}px`,getStyle(el,'top')] ;
        }
    },2200);
}
export default animation ;
