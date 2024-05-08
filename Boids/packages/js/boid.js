


class Boid {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = p5.Vector.random2D();
        this.acceleration = createVector();
    }


    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    
    


    show() {
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}