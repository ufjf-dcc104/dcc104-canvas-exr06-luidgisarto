function Sprite() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.tipo = 0;
    this.tamanho = 16;
    this.posicao = 0;
    this.images = null;
}

Sprite.prototype.mover = function (map, dt) {
    this.gx = Math.floor(this.x / map.tamanho);
    this.gy = Math.floor(this.y / map.tamanho);

    if (this.vx > 0 && map.celulas[this.gy][this.gx + 1] == 1) {
        this.x += Math.min((this.gx + 1) * map.tamanho - (this.x + this.tamanho / 2), this.vx * dt);
    } else if (this.vx < 0 && map.celulas[this.gy][this.gx - 1] == 1) {
        this.x += Math.max((this.gx) * map.tamanho - (this.x - this.tamanho / 2), this.vx * dt);
    }
    else {
        this.x = this.x + this.vx * dt;
    }
    if (this.vy > 0 && map.celulas[this.gy + 1][this.gx] == 1) {
        this.y += Math.min((this.gy + 1) * map.tamanho - (this.y + this.tamanho / 2), this.vy * dt);
    } else if (this.vy < 0 && map.celulas[this.gy - 1][this.gx] == 1) {
        this.y += Math.max((this.gy) * map.tamanho - (this.y - this.tamanho / 2), this.vy * dt);
    }
    else {
        this.y = this.y + this.vy * dt;
    }
    // this.frame += this.poses[this.pose].v * dt;
    // if (this.frame > this.poses[this.pose].frames - 1) {
    //     this.frame = 0;
    // }
}