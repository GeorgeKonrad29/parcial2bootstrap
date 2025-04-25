

const canvases = [
    { id: "Punto1", color: "#FF5733" },
    { id: "Punto2", color: "#33FF57" },
    { id: "Punto3", color: "#3357FF" },
    { id: "Punto4", color: "#F033FF" }
];

function drawHorizontalTriangleGrid(ctx, width, height, triangleSize, color) {
    const triangleHeight = triangleSize/1.7; // Altura = 5px
    ctx.strokeStyle = "#CCCCCC"; // Color NEGRO para mejor visibilidad
    ctx.lineWidth = 1.5; // Un poco más grueso para que se vea

    const rows = Math.ceil(height / (triangleHeight * 2)) + 1;
    const cols = Math.ceil(width / triangleSize) + 1;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * triangleSize;
            const y = row * triangleHeight * 2;

            if (col % 2 === 0) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, y + triangleHeight * 2);
                ctx.lineTo(x + triangleSize, y + triangleHeight);
                ctx.closePath();
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.moveTo(x, y + triangleHeight);
                ctx.lineTo(x + triangleSize, y);
                ctx.lineTo(x + triangleSize, y + triangleHeight * 2);
                ctx.closePath();
                ctx.stroke();
            }
        }
    }
}

// Asegurarse de que el canvas tenga un tamaño definido
canvases.forEach(canvasData => {
    const canvas = document.getElementById(canvasData.id);
    canvas.width = 800; // Ancho fijo
    canvas.height = 800; // Alto fijo
    const ctx = canvas.getContext("2d");
    drawHorizontalTriangleGrid(ctx, canvas.width, canvas.height, 80, "#000000");
});

// Eliminé las funciones duplicadas y las variables de canvas que no se usaban

const canvas1 = document.getElementById("Punto1");
const lienzo = canvas1.getContext("2d");

// Configuración del estilo
lienzo.strokeStyle = "black";
lienzo.lineWidth = 2; // Grosor de las líneas
lienzo.fillStyle = "orange"; // Color de relleno

// Inicia el path de la figura
lienzo.beginPath();

// Dibuja todas las líneas en un solo path
lienzo.moveTo(80, 235); // Punto inicial
lienzo.lineTo(80, 611);
lienzo.lineTo(400, 800);
lienzo.lineTo(720, 611);
lienzo.lineTo(720, 423);
lienzo.lineTo(560, 141);
lienzo.lineTo(400, 47);
lienzo.lineTo(80, 235); // Vuelve al inicio para cerrar la figura

// Rellena la figura y dibuja el borde
lienzo.fill(); // Aplica el relleno naranja
lienzo.stroke(); // Dibuja el borde negro
lienzo.closePath();

// Opcional: Dibuja las líneas internas (si las quieres mantener)
lienzo.beginPath();
lienzo.moveTo(80, 235);
lienzo.lineTo(240, 329);
lienzo.lineTo(560, 141);
lienzo.stroke();

lienzo.beginPath();
lienzo.moveTo(240, 329);
lienzo.lineTo(240, 517);
lienzo.lineTo(400, 423);
lienzo.lineTo(560, 517);
lienzo.lineTo(720, 423);
lienzo.stroke();

lienzo.beginPath();
lienzo.moveTo(400, 423);
lienzo.lineTo(400, 235);
lienzo.lineTo(560, 517);
lienzo.stroke();

lienzo.beginPath();
lienzo.moveTo(400, 611);
lienzo.lineTo(240, 517);
lienzo.lineTo(400, 423);
lienzo.stroke();

lienzo.beginPath();
lienzo.moveTo(400, 611);
lienzo.lineTo(720, 423);
lienzo.stroke();



const canvas2 = document.getElementById("Punto2");
const lienzo2 = canvas2.getContext("2d");

// 1. Primero: Rellenar la figura principal de verde
lienzo2.beginPath();
lienzo2.moveTo(80, 235);
lienzo2.lineTo(80, 611);
lienzo2.lineTo(400, 800);
lienzo2.lineTo(720, 611);
lienzo2.lineTo(720, 235);
lienzo2.lineTo(400, 47);
lienzo2.closePath();
lienzo2.fillStyle = "#00FF00"; // Verde brillante
lienzo2.fill();

// 2. Después: Dibujar todas las líneas negras (tu código original)
lienzo2.strokeStyle = "black";
lienzo2.lineWidth = 2;

// Línea 1
lienzo2.beginPath();
lienzo2.moveTo(80, 235);
lienzo2.lineTo(80, 611);
lienzo2.stroke();

// Línea 2
lienzo2.beginPath();
lienzo2.moveTo(400, 47);
lienzo2.lineTo(80, 235);
lienzo2.stroke();

// Línea 3
lienzo2.beginPath();
lienzo2.moveTo(720, 235);
lienzo2.lineTo(400, 47);
lienzo2.stroke();

// Línea 4
lienzo2.beginPath();
lienzo2.moveTo(80, 611);
lienzo2.lineTo(400, 800);
lienzo2.stroke();

// Línea 5
lienzo2.beginPath();
lienzo2.moveTo(80, 235);
lienzo2.lineTo(240, 329);
lienzo2.stroke();

// Línea 6
lienzo2.beginPath();
lienzo2.moveTo(240, 329);
lienzo2.lineTo(400, 235);
lienzo2.stroke();

// Línea 7
lienzo2.beginPath();
lienzo2.moveTo(240, 329);
lienzo2.lineTo(240, 517);
lienzo2.stroke();

// Línea 8
lienzo2.beginPath();
lienzo2.moveTo(400, 423);
lienzo2.lineTo(400, 235);
lienzo2.stroke();

// Línea 9
lienzo2.beginPath();
lienzo2.moveTo(400, 423);
lienzo2.lineTo(240, 517);
lienzo2.stroke();

// Línea 10
lienzo2.beginPath();
lienzo2.moveTo(400, 611);
lienzo2.lineTo(240, 517);
lienzo2.stroke();

// Línea 11
lienzo2.beginPath();
lienzo2.moveTo(400, 611);
lienzo2.lineTo(560, 517);
lienzo2.stroke();

// Línea 12
lienzo2.beginPath();
lienzo2.moveTo(400, 423);
lienzo2.lineTo(560, 517);
lienzo2.stroke();

// Línea 13
lienzo2.beginPath();
lienzo2.moveTo(400, 611);
lienzo2.lineTo(400, 800);
lienzo2.stroke();

// Línea 14
lienzo2.beginPath();
lienzo2.moveTo(720, 611);
lienzo2.lineTo(400, 800);
lienzo2.stroke();

// Línea 15
lienzo2.beginPath();
lienzo2.moveTo(720, 611);
lienzo2.lineTo(720, 235);
lienzo2.stroke();

// Línea 16
lienzo2.beginPath();
lienzo2.moveTo(560, 517);
lienzo2.lineTo(560, 329);
lienzo2.stroke();

// Línea 17
lienzo2.beginPath();
lienzo2.moveTo(560, 329);
lienzo2.lineTo(720, 235);
lienzo2.stroke();

// Línea 18
lienzo2.beginPath();
lienzo2.moveTo(560, 329);
lienzo2.lineTo(400, 235);
lienzo2.stroke();


const canvas3 = document.getElementById("Punto3");
const lienzo3 = canvas3.getContext("2d");

// 1. Primero: Rellenar la figura principal de azul
lienzo3.beginPath();
lienzo3.moveTo(80, 235);
lienzo3.lineTo(80, 611);
lienzo3.lineTo(400, 800);
lienzo3.lineTo(720, 611);
lienzo3.lineTo(720, 423);
lienzo3.lineTo(560, 141);
lienzo3.lineTo(400, 47);
lienzo3.lineTo(80, 235); // Cierra el path
lienzo3.fillStyle = "#0000FF"; // Azul puro
lienzo3.fill();

// 2. Después: Dibujar todas las líneas negras (tu código original)
lienzo3.strokeStyle = "black";
lienzo3.lineWidth = 2;

// Línea 1
lienzo3.beginPath();
lienzo3.moveTo(80, 235);
lienzo3.lineTo(80, 611);
lienzo3.stroke();

// Línea 2
lienzo3.beginPath();
lienzo3.moveTo(400, 47);
lienzo3.lineTo(80, 235);
lienzo3.stroke();

// Línea 3
lienzo3.beginPath();
lienzo3.moveTo(560, 141);
lienzo3.lineTo(400, 47);
lienzo3.stroke();

// Línea 4
lienzo3.beginPath();
lienzo3.moveTo(80, 611);
lienzo3.lineTo(400, 800);
lienzo3.stroke();

// Línea 5
lienzo3.beginPath();
lienzo3.moveTo(400, 423);
lienzo3.lineTo(240, 517);
lienzo3.stroke();

// Línea 6
lienzo3.beginPath();
lienzo3.moveTo(400, 611);
lienzo3.lineTo(240, 517);
lienzo3.stroke();

// Línea 7
lienzo3.beginPath();
lienzo3.moveTo(400, 611);
lienzo3.lineTo(720, 423);
lienzo3.stroke();

// Línea 8
lienzo3.beginPath();
lienzo3.moveTo(400, 423);
lienzo3.lineTo(560, 517);
lienzo3.stroke();

// Línea 9
lienzo3.beginPath();
lienzo3.moveTo(400, 611);
lienzo3.lineTo(400, 800);
lienzo3.stroke();

// Línea 10
lienzo3.beginPath();
lienzo3.moveTo(720, 611);
lienzo3.lineTo(400, 800);
lienzo3.stroke();

// Línea 11
lienzo3.beginPath();
lienzo3.moveTo(720, 611);
lienzo3.lineTo(720, 423);
lienzo3.stroke();

// Línea 12
lienzo3.beginPath();
lienzo3.moveTo(720, 423);
lienzo3.lineTo(560, 141);
lienzo3.stroke();

// Línea 13
lienzo3.beginPath();
lienzo3.moveTo(560, 517);
lienzo3.lineTo(400, 235);
lienzo3.stroke();

// Línea 14
lienzo3.beginPath();
lienzo3.moveTo(80, 235);
lienzo3.lineTo(240, 517);
lienzo3.stroke();

// Línea 15
lienzo3.beginPath();
lienzo3.moveTo(560, 141);
lienzo3.lineTo(400, 235);
lienzo3.stroke();

// Línea 16
lienzo3.beginPath();
lienzo3.moveTo(240, 141);
lienzo3.lineTo(400, 235);
lienzo3.stroke();

// Línea 17
lienzo3.beginPath();
lienzo3.moveTo(240, 141);
lienzo3.lineTo(400, 423);
lienzo3.stroke();


const canvas4 = document.getElementById("Punto4");
const lienzo4 = canvas4.getContext("2d");

// ===== 1. RELLENO PÚRPURA (contorno exacto) =====
lienzo4.beginPath();
lienzo4.moveTo(80, 235);    // Inicio (esquina superior izquierda)
lienzo4.lineTo(400, 47);    // Pico superior
lienzo4.lineTo(560, 141);   // Diagonal derecha-arriba
lienzo4.lineTo(560, 329);   // Esquina media derecha
lienzo4.lineTo(720, 423);   // Esquina media derecha
lienzo4.lineTo(720, 611);   // Esquina inferior derecha
lienzo4.lineTo(400, 800);   // Pico inferior
lienzo4.lineTo(80, 611);    // Esquina inferior izquierda
lienzo4.closePath();
lienzo4.fillStyle = "#800080"; // Púrpura
lienzo4.fill();

// ===== 2. TUS 18 LÍNEAS NEGRAS ORIGINALES =====
lienzo4.strokeStyle = "black";
lienzo4.lineWidth = 2;

// Línea 1
lienzo4.beginPath();
lienzo4.moveTo(80, 235);
lienzo4.lineTo(80, 611);
lienzo4.stroke();

// Línea 2
lienzo4.beginPath();
lienzo4.moveTo(400, 47);
lienzo4.lineTo(80, 235);
lienzo4.stroke();

// Línea 3
lienzo4.beginPath();
lienzo4.moveTo(560, 141);
lienzo4.lineTo(400, 47);
lienzo4.stroke();

// Línea 4
lienzo4.beginPath();
lienzo4.moveTo(80, 611);
lienzo4.lineTo(400, 800);
lienzo4.stroke();

// Línea 5
lienzo4.beginPath();
lienzo4.moveTo(720, 611);
lienzo4.lineTo(400, 800);
lienzo4.stroke();

// Línea 6
lienzo4.beginPath();
lienzo4.moveTo(720, 611);
lienzo4.lineTo(720, 423);
lienzo4.stroke();

// Línea 7
lienzo4.beginPath();
lienzo4.moveTo(400, 423);
lienzo4.lineTo(400, 235);
lienzo4.stroke();

// Línea 8
lienzo4.beginPath();
lienzo4.moveTo(80, 235);
lienzo4.lineTo(400, 800);
lienzo4.stroke();

// Línea 9
lienzo4.beginPath();
lienzo4.moveTo(560, 141);
lienzo4.lineTo(560, 329);
lienzo4.stroke();

// Línea 10
lienzo4.beginPath();
lienzo4.moveTo(560, 141);
lienzo4.lineTo(400, 235);
lienzo4.stroke();

// Línea 11
lienzo4.beginPath();
lienzo4.moveTo(240, 141);
lienzo4.lineTo(400, 235);
lienzo4.stroke();

// Línea 12
lienzo4.beginPath();
lienzo4.moveTo(240, 141);
lienzo4.lineTo(400, 423);
lienzo4.stroke();

// Línea 13
lienzo4.beginPath();
lienzo4.moveTo(560, 329);
lienzo4.lineTo(240, 517);
lienzo4.stroke();

// Línea 14
lienzo4.beginPath();
lienzo4.moveTo(560, 517);
lienzo4.lineTo(720, 423);
lienzo4.stroke();

// Línea 15
lienzo4.beginPath();
lienzo4.moveTo(560, 329);
lienzo4.lineTo(720, 423);
lienzo4.stroke();

// Línea 16
lienzo4.beginPath();
lienzo4.moveTo(560, 517);
lienzo4.lineTo(400, 800);
lienzo4.stroke();

// Línea 17
lienzo4.beginPath();
lienzo4.moveTo(560, 517);
lienzo4.lineTo(240, 517);
lienzo4.stroke();