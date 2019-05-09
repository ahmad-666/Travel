import anime from 'animejs/lib/anime.es';
import imgPath from '../assets/imgs/loader*.*' ;
const pathes = [] ;
for(let path in imgPath){pathes.push(imgPath[path].jpg) ;}
let queue = new createjs.LoadQueue(false);
queue.loadFile(pathes[0]) ;
queue.loadFile(pathes[1]) ;
queue.loadFile(pathes[2]) ;
queue.loadFile(pathes[3]) ;
queue.loadFile(pathes[4]) ;
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
    delay: anime.stagger(100) ,
    easing: 'easeOutCubic',
    opacity: 1 ,
    left: 0,
    scale: [0,1],
    complete: function(){
        let tl = anime.timeline({
            direction: 'normal',
            loop: 1 
        });
        tl.add({
            targets: '.img',
            easing: 'easeInQuad',
            width: '100%',
            duration: 1000
        },0);
    }
},1500);
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
    
})


