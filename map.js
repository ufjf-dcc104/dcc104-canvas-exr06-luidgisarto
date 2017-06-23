function Map(linhas, colunas) {
    this.tamanho = 32;
    this.minas = [];
    this.tesouros = [];
    this.celulas = [];

    for (var i = 0; i < linhas; i++) {
        this.celulas[i] = [];
        for (var j = 0; j < colunas; j++) {
            this.celulas[i][j] = new Sprite();
        }
    }
}

Map.prototype.desenhar = function (ctx) {
    for (var i = 0; i < this.celulas.length; i++) {
        for (var j = 0; j < this.celulas[i].length; j++) {
            var celula = this.celulas[i][j];
            ctx.fillStyle = "gray";
            ctx.fillRect(j * this.tamanho, i * this.tamanho, this.tamanho, this.tamanho);
            ctx.strokeRect(j * this.tamanho, i * this.tamanho, this.tamanho, this.tamanho);
            switch (celula.tipo) {
                case 1:
                    ctx.fillStyle = "green";
                    ctx.beginPath();
                    var radius = this.tamanho / 4;  //raio do circulo = diametro/2
                    var anguloInicial = 0;     //inicia o arco na posição 0 graus (direita)
                    var anguloFinal = Math.PI * 2; //termina o arco na posição 360 graus (volta completa)
                    ctx.arc(celula.x, celula.y, radius, anguloInicial, anguloFinal, true);
                    ctx.closePath();
                    ctx.stroke(); //desenha a borda
                    ctx.fill();   //preenche
                    break;
                case 2:
                    ctx.fillStyle = "black";
                    ctx.beginPath();
                    var radius = this.tamanho / 4;  //raio do circulo = diametro/2
                    var anguloInicial = 0;     //inicia o arco na posição 0 graus (direita)
                    var anguloFinal = Math.PI * 2; //termina o arco na posição 360 graus (volta completa)
                    ctx.arc(celula.x, celula.y, radius, anguloInicial, anguloFinal, true);
                    ctx.closePath();
                    ctx.stroke(); //desenha a borda
                    ctx.fill();   //preenche
                    break;
            }
        }
    }
    // for (var i = 0; i < this.minas.length; i++) {
    //     this.minas[i].desenhar(ctx);
    // }

    // for (var j = 0; j < this.tesouros.length; j++) {
    //     this.tesouros[j].desenhar(ctx);
    // }
}

Map.prototype.mapearCelulas = function (celulas) {
    for (var i = 0; i < celulas.length; i++) {
        for (var j = 0; j < celulas[i].length; j++) {

            var celulaMap = celulas[i][j];
            var celula = this.celulas[i][j];

            switch (celulaMap) {
                case 0:
                    var bloco = new Sprite();
                    bloco.images = images;
                    bloco.tipo = 0;
                    bloco.x = (i + 0.5) * this.tamanho;
                    bloco.y = (j + 0.5) * this.tamanho;
                    this.celulas[i][j] = bloco;
                    break;
                case 1:
                    var tesouro = new Sprite();
                    tesouro.images = this.images;
                    tesouro.tipo = 1;
                    tesouro.y = (i + 0.5) * this.tamanho;
                    tesouro.x = (j + 0.5) * this.tamanho;
                    this.celulas[i][j] = tesouro;
                    // this.tesouros.push(tesouro);
                    break;
                case 2:
                    mina = new Sprite();
                    mina.images = this.images;
                    mina.tipo = 2;
                    mina.y = (i + 0.5) * this.tamanho;
                    mina.x = (j + 0.5) * this.tamanho;
                    this.celulas[i][j] = mina;
                    // this.minas.push(mina);
                    break;
            }
        }
    }
}

Map.prototype.mover = function (dt) {
    for (var j = 0; j < this.tesouros.length; j++) {
        this.tesouros[j].mover(this, dt);
    }

    for (var i = 0; i < this.minas.length; i++) {
        this.minas[i].mover(this, dt);
    }
};

Map.prototype.gerarMapaAleatorio = function () {

    var minas = 0;
    var tesouros = 0;

    for (var i = 0; i < this.celulas.length; i++) {
        for (var j = 0; j < this.celulas[i].length; j++) {

            var obj = new Sprite();
            obj.images = this.images;
            obj.tipo = Math.round(Math.random() * 3);
            obj.y = (i + 0.5) * this.tamanho;
            obj.x = (j + 0.5) * this.tamanho;

            // if(obj.tipo === 1){
            //     tesouros++;
            // }
            // else if(obj.tipo === 2){
            //     minas++;
            // }

            // if(tesouros > 19  && obj.tipo === 1){
            //     obj.tipo = 0;
            // }
            
            // else if(minas > 15 && obj.tipo === 2){
            //     obj.tipo = 0;
            // }
            
            // var posicaoLinha = Math.floor(Math.random()*this.celulas.length);
            // var posicaoColuna = Math.floor(Math.random())

            this.celulas[i][j] = obj;
        }
    }
}
