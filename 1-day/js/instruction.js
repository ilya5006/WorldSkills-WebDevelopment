let pumbaa = new Player('player', 'pumbaa', 100, 100, 60, 60, 10, 150);

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

let topArrowTracking = (event) =>
{
    switch (event.key)
    {
        case 'ArrowUp':
            document.removeEventListener('keydown', topArrowTracking);
            pumbaa.jump().then(() => document.addEventListener('keydown', topArrowTracking));
            break;
    }
}

document.addEventListener('keydown', leftAndRightArrowTracking);
document.addEventListener('keydown', topArrowTracking);