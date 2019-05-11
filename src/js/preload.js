import anime from 'animejs/lib/anime.es';
import imgPath from '../assets/imgs/*.*' ;
import font from '../assets/fonts/modern.ttf' ;
import animation from './content';
const pathes = [] ;
for(let path in imgPath){pathes.push(imgPath[path].jpg) ;}
let queue = new createjs.LoadQueue(false);
const tl = anime.timeline({   
    direction: 'normal' ,
    loop: 1
}) ;
tl.add({
    targets: '.black' ,
    duration: 1500 ,
    easing: 'easeInQuad',
    scaleX: [0,1]
},0)
tl.add({
    targets: '.loader span' ,
    duration: 700 ,
    delay: anime.stagger(150) ,
    easing: 'easeOutCubic',
    opacity: 1 ,
    left: 0,
    scale: [0,1]
},1500);
setTimeout(()=>{
    pathes.forEach(path=>{
        queue.loadFile(path) ;
    })
    queue.loadFile(font) ;
},2600) ;
queue.on('complete',(e)=>{
    const imgContainer = document.querySelector('.img') ;
    let currIndex = 0 ;
    anime({
        targets: imgContainer ,
        easing: 'linear' ,
        opacity: [
            {value:1,duration:300},
            {value:0,duration:300},
        ] ,
        loop: true ,
        loopBegin: function(){
            imgContainer.style.backgroundImage = `url(${pathes[currIndex]})` ;
            currIndex = (currIndex+1 != pathes.length) ? (currIndex+1) : 0 ;
        }
    })
    let tl = anime.timeline({
        direction: 'normal',
        loop: 1 
    });
    tl.add({
        targets: '.img',
        easing: 'easeInQuad',
        width: '100%',
        duration: 1500 ,      
    },0);
    tl.add({
        targets: '.orange',
        easing: 'easeInOutCubic',
        scaleX: [0,1],
        duration: 1000 ,
        complete: ()=>{
            document.querySelector('.black').parentElement.removeChild(document.querySelector('.black')); 
            document.querySelector('.img').parentElement.removeChild(document.querySelector('.img')); 
        }
    },1500);
    tl.add({
        targets: '.loader span' ,
        duration: 700 ,
        delay: anime.stagger(150) ,
        easing: 'easeOutCubic',
        opacity: 0 ,
        left: [0,'-5em'],
        scale: [1,0],
    },2500);
    tl.add({
        targets: '.orange',
        easing: 'easeInOutCubic',
        scaleX: {
            value: [1,0] ,
            duration: 1000 ,
            delay:1
        },
        transformOrigin: {
            value: '100% 50% 0' ,
            duration: 1 ,
            delay: 0
        },
        complete: ()=>{
            document.querySelector('.orange').parentElement.removeChild(document.querySelector('.orange')); 
            document.querySelector('.loader').parentElement.removeChild(document.querySelector('.loader')); 
            document.querySelector('#preload').parentElement.removeChild(document.querySelector('#preload')); 
            document.querySelector('#wrapper').style.display = 'block' ;
            animation();
        }
    },3000) 
})


