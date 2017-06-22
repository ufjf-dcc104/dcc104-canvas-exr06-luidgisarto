function Map(linhas, colunas) {
    this.tamanho = 32;
    this.minas = [];
    this.tesouros = [];
    this.celulas = [];

    for (var i = 0; i < linhas; i++) {
        this.celulas[i] = [];
        for (var j = 0; j < colunas; j++) {
            this.celulas[i][j] = 0;
        }
    }
}

Map.prototype.desenhar = function (ctx) {
    for (var i = 0; i < this.celulas.length; i++) {
        for (var j = 0; j < this.celulas[0].length; j++) {
            if (this.celulas[i][j] == 0) {
                ctx.fillStyle = "gray";
                ctx.fillRect(j * this.tamanho, i * this.tamanho, this.tamanho, this.tamanho);
                ctx.fillStyle = "black";
                ctx.strokeRect(j * this.tamanho, i * this.tamanho, this.tamanho, this.tamanho);
            }
        }
    }
    for (var i = 0; i < this.minas.length; i++) {
        this.minas[i].desenhar(ctx);
    }

    for (var j = 0; j < this.tesouros.length; j++) {
        this.tesouros[j].desenhar(ctx);
    }
}

Map.prototype.mapearCelulas = function (celulas) {
    for (var i = 0; i < celulas.length; i++) {
        for (var j = 0; j < celulas[i].length; j++) {

            var celulaMap = celula[i][j];
            var celula = this.celulas[i][j];

            switch (celulaMap) {
                case 1:
                    celula = 1;
                    tesouro = new Sprite();
                    tesouro.images = this.images;
                    tesouro.y = (i + 0.5) * this.tamanho;
                    tesouro.x = (j + 0.5) * this.tamanho;
                    this.tesouros.push(tesouro);
                    break;
                case 2:
                    celula = 2;
                    mina = new Sprite();
                    mina.images = this.images;
                    mina.y = (i + 0.5) * this.tamanho;
                    mina.x = (j + 0.5) * this.tamanho;
                    this.minas.push(mina);
                    break;
                default:
                    celula = 0;
            }
        }
    }
}

Map.prototype.mover = function (dt) {
    for (var i = 0; i < this.minas.length; i++) {
        this.minas[i].mover(this, dt);
    }

    for (var j = 0; j < this.tesouros.length; j++) {
        this.tesouros[j].mover(this, dt);
    }
};