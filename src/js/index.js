
import anime from 'animejs/lib/anime.es.js';
import Cursor from './cursor';
import * as fun from './func'


const matches = document.querySelector(".main_container");
const pointer = document.querySelector(".pointer");
const dim={
    w:window. innerWidth,
    h:window. innerHeight
}


let cr = new Cursor(document);


  const render = () => {
    pointer.style.transform = `translate(${cr.mouse.x}px, ${cr.mouse.y}px)`;
    matches.style.transform= ` perspective(1000px) 
    rotateY(${
        fun.interpolate(0,dim.w,-10,10, cr.mouse.x)
    }deg) 
 
    rotateX(${
        fun.interpolate(0,dim.h,-10,10, cr.mouse.y)
    }deg)`;
    requestAnimationFrame(render);

}

requestAnimationFrame(render);


