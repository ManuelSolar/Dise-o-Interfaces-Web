function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

window.onload = function () {
    let contexto = cargaContextoCanvas('idcanvas');
    if (contexto) {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'cyan';
        ctx.fillRect(10, 10, 350, 350); 

    }
}

let b = 0;
let a = 350;

function step() {
    let contexto = cargaContextoCanvas('idcanvas');
    if (contexto) {
        // contexto.clearRect(0,0,1000,1000);
        contexto.fillStyle = 'blue';
        contexto.fillRect(b++, 0, 55, 55);
        contexto.fillStyle = 'blue';
        contexto.fillRect(0, b++, 55, 55);
        contexto.fillStyle = 'blue';
        contexto.fillRect(--a, 350, 55, 55);
        contexto.fillStyle = 'blue';
        contexto.fillRect(350, --a, 55, 55);
        

    }
    window.requestAnimationFrame(step);
};

window.requestAnimationFrame(step);

