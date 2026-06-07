setInterval(() => {
    const btn = document.querySelector('.main-btn');
    if (btn) {
        for (let i = 0; i < 20; i++) {
            btn.click();
        }
    }
}, 20);
