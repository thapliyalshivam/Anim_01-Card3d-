



    
class Cursor{
    update(e){
       this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        // console.log (mouse);
        }
    
constructor(el){
 this.mouse = {x: 0, y: 0};
this.pressed=false
el.addEventListener('mousemove', ev => this.update(ev));
}

 
}

export default Cursor;