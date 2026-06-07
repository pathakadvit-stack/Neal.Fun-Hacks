(function drawPerfectCircle() {
    const canvas = document.querySelector('canvas');
    if (!canvas) return console.error("Canvas element not found. Make sure you are on the circle level.");

    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radius = Math.min(rect.width, rect.height) * 0.35; // Size of the circle
    const points = 200; // How smooth the circle is

    function fireMouseEvent(type, x, y) {
        const event = new MouseEvent(type, {
            clientX: x,
            clientY: y,
            bubbles: true,
            cancelable: true,
            buttons: 1
        });
        canvas.dispatchEvent(event);
    }

    // Move to the starting point of the circle
    const startX = centerX + radius;
    const startY = centerY;
    fireMouseEvent('mousedown', startX, startY);

    // Loop through 360 degrees to dispatch drag movements
    for (let i = 0; i <= points; i++) {
        const angle = (i / points) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        // Minor delay simulation so the game engine registers the drag steps smoothly
        setTimeout(() => {
            fireMouseEvent('mousemove', x, y);
            if (i === points) {
                fireMouseEvent('mouseup', x, y);
                console.log("Perfect circle generated successfully!");
            }
        }, i * 2);
    }
})();
