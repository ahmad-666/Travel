//load babel/polyfill----------------------------
import '@babel/polyfill';
//load css files---------------------------------
import '../style/init.css' ;
import '../style/preload.css' ;
import '../style/content.css' ;
import '../style/responsive.css' ;
//load js files(async)------------------------------
const scripts = {
    preload : import('./preload') ,
    content: import('./content')
}
async function loadScript(name){
    let script = await scripts[name] ;
}
loadScript('preload') ;
loadScript('content') ;