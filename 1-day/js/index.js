let playerName = document.querySelector('#player_name');
let begin = document.querySelector('#begin');

begin.addEventListener('click', () =>
{
    if (playerName.value.trim().length == 0)
    {
        alert('Введите имя');
    }
});