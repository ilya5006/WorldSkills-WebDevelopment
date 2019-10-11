let pumbaa = new Player('player', 'pumbaa', 100, 100, 60, 60, 10);

let leftAndRightArrowTracking = (event) =>
{
    switch (event.key)
    {
        case 'ArrowRight':
            document.removeEventListener('keydown', leftAndRightArrowTracking);
            pumbaa.moveRight().then(() => document.addEventListener('keydown', leftAndRightArrowTracking));
            break;
        
        case 'ArrowLeft':
            document.removeEventListener('keydown', leftAndRightArrowTracking);
            pumbaa.moveLeft().then(() => document.addEventListener('keydown', leftAndRightArrowTracking));
            break;
    }
}

document.addEventListener('keydown', leftAndRightArrowTracking);