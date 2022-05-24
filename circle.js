class Circle{
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getCreatCircle() {
    let ctx = document.getElementById('canvas').getContext('2d');
    ctx.beginPath();
    ctx.arc(this.x, this.y,this.radius, 0 , 2*Math.PI);
    ctx.fillStyle = this.getRandomColor();
    ctx.fill();
    }

    getRandomWeightHeight(){
        this.radius = Math.floor(Math.random()*80)
        this.x = Math.random()*window.innerWidth;
        this.y = Math.random()*window.innerHeight;
    }
    getRandomHex() {
        return Math.floor(Math.random() *225);
    }
    getRandomColor() {
        let red = this.getRandomHex();
        let blue = this.getRandomHex();
        let green = this.getRandomHex();
        return `rgba(${red},${blue},${green})`;
    }
}