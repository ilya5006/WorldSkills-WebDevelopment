let pumbaa = new Player('player', 'pumbaa', 200, 100, 60, 60, 10);

document.addEventListener('keydown', (event) =>
{
    switch (event.key)
    {
        case 'ArrowRight':
            pumbaa.moveRight();
            break;
        
        case 'ArrowLeft':
            pumbaa.moveLeft();
            break;
    }
});