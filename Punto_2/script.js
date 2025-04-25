const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');
    
    // Variables para dibujar
    let dibujando = false;
    let xAnterior = 0;
    let yAnterior = 0;
    
    // Configurar el lápiz
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
   
    
    // Eventos para dibujar
    canvas.addEventListener('mousedown', (e) => {
        dibujando = true;
        xAnterior = e.offsetX;
        yAnterior = e.offsetY;
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!dibujando) return;
        
        ctx.beginPath();
        ctx.moveTo(xAnterior, yAnterior);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        
        xAnterior = e.offsetX;
        yAnterior = e.offsetY;
    });
    
    canvas.addEventListener('mouseup', () => dibujando = false);
    canvas.addEventListener('mouseout', () => dibujando = false);