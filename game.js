var canvas;
var ctx;
var map;
var pc;
var dt;
var images;
var anterior = 0;
var frame = 0;

function inicializar() {
    canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = 800;
    canvas.height = 800;
    ctx = canvas.getContext("2d");
    images = new ImageLoader();
    map = new Map(20, 20);
    map.images = images;
    map.gerarMapaAleatorio();
    // map.mapearCelulas([
    //     [2, 1, 1, 1, 2],
    //     [2, 0, 0, 1, 2],
    //     [2, 0, 1, 1, 2],
    //     [2, 1, 1, 1, 2],
    // ]);
    pc = new Sprite();
    pc.x = 60;
    pc.y = 60;
    pc.images = images;
    requestAnimationFrame(passo);
}

function passo(t) {
    dt = t - anterior / 1000;
    requestAnimationFrame(passo);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // pc.mover(map, dt);
    map.mover(dt);
    map.desenhar(ctx);
    // pc.desenhar(ctx);
    anterior = t;
}

function habilitarControles() {
    addEventListener('keydown', function (e) {
        switch (e.keyCode) {
            case 37:
                pc.vx = -100;
                e.preventDefault();
                break;
            case 38:
                pc.vy = -100;
                e.preventDefault();
                break;
            case 39:
                pc.vx = 100;
                e.preventDefault();
                break;
            case 40:
                pc.vy = 100;
                e.preventDefault();
                break;
            default:

        }
    });
    addEventListener('keyup', function (e) {
        switch (e.keyCode) {
            case 37:
            case 39:
                pc.vx = 0;
                break;
            case 38:
            case 40:
                pc.vy = 0;
                break;
            default:

        }
    });
}