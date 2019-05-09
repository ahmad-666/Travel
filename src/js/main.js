//load babel/polyfill----------------------------
import '@babel/polyfill';
//load css files---------------------------------
import '../style/init.css' ;
import '../style/preload.css' ;
//load js files(async)------------------------------
const scripts = {
    preload : import('./preload') 
}
async function loadScript(name){
    let script = await scripts[name] ;
}
loadScript('preload') ;