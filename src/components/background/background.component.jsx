import React, { useEffect, useRef } from 'react'
import './background.component.css'

export default function BackgroundComponent() {
    const canvasRef = useRef(null);
    const heightScale = 0.4;
    const triSide = 20;
    const halfSide = triSide / 2;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        const render = () => {
            ctx.fillStyle = 'rgb(246,249,252)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 0;

            let hueStart = rnd(0, 0);
            const rowHeight = Math.floor(triSide * heightScale);
            const columns = Math.ceil(canvas.width / triSide) + 1;
            const rows = Math.ceil(canvas.height / rowHeight);

            for (let row = 0; row < rows; row++) {
                const hue = hueStart + row * 3;

                for (let col = 0; col < columns; col++) {
                    let x = col * triSide;
                    let y = row * rowHeight;
                    let clr;

                    if (row % 2 !== 0) {
                        x -= halfSide;
                    }

                    // upward pointing triangle
                    clr = `hsl(${hue}, 0%, ${rnd(90, 240)}%)`;
                    ctx.fillStyle = clr;
                    ctx.strokeStyle = clr;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + halfSide, y + rowHeight);
                    ctx.lineTo(x - halfSide, y + rowHeight);
                    ctx.closePath();
                    ctx.fill();

                    // downward pointing triangle
                    clr = `hsl(${hue}, 0%, ${rnd(90, 245)}%)`;
                    ctx.fillStyle = clr;
                    ctx.strokeStyle = clr;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + triSide, y);
                    ctx.lineTo(x + halfSide, y + rowHeight);
                    ctx.closePath();
                    ctx.fill();
                }
            }
        };

        render();

        document.body.addEventListener('dblclick', render);

        return () => {
            document.body.removeEventListener('dblclick', render);
        };
    }, [canvasRef]);

    return <canvas id='canvas-background' ref={canvasRef} />;
}