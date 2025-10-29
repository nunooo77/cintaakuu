// Hearts trail animation
document.addEventListener('mousemove', function(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    document.body.appendChild(heart);

    // Remove the heart after animation
    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// Form handling is done inline in page3.html and page4.html
