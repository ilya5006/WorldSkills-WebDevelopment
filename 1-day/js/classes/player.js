class Player
{
    /**
     * RU
     * Конструктор, который создаёт персонажа
     * @constructor
     * @param {string} id - Id div'а персонажа в HTML
     * @param {string} chracter - Создаваемый персонаж (Тимон или Пумба)
     * @param {number} width - Ширина персонажа
     * @param {number} height - Высота персонажа
     * @param {number} left - Значение left у персонажа (left - css-свойство)
     * @param {number} bottom - Значение bottom у персонажа (bottom - css-свойство)
     * @param {number} speed - Скорость, с которой будет передвигаться персонаж
     * @param {number} jumpForce - Сила, которую будет прилагать персонаж для прыжка
     */
    constructor(id, chracter, width, height, left, bottom, speed, jumpForce)
    {
        this.element = document.querySelector('#' + id);

        this.left = left;
        this.bottom = bottom;
        this.width = width;
        this.height = height;

        this.chracter = chracter;
        this.speed = speed;
        this.jumpForce = jumpForce;

        if (this.chracter = 'pumbaa')
        {
            this.element.style.backgroundImage = 'url("./media/pumbaa/lion_king_PNG49.png")';
        }

        if (this.chracter = 'timon')
        {
            this.element.style.backgroundImage = 'url("./media/timon/Lucky_Shoot_1452244953.png")';
        }
        
        this.element.style.backgroundSize = '100% 100%';
        this.element.style.position = 'absolute';
    }

    // getters and setters
    get width()
    {
        return parseInt(this.element.style.width);
    }

    set width(value)
    {
        this.element.style.width = value + 'px';
    }

    get height()
    {
        return parseInt(this.element.style.height);
    }

    set height(value)
    {
        this.element.style.height = value + 'px';
    }
    
    get left()
    {
        return parseInt(this.element.style.left);
    }

    set left(value)
    {
        this.element.style.left = value + 'px';
    }

    get bottom()
    {
        return parseInt(this.element.style.bottom);
    }

    set bottom(value)
    {
        this.element.style.bottom = value + 'px';
    }

    // methods

    /**
     * EN
     * Moves player left depending on speed
     * @return {promise} - call resolve() when player is at the end of the path
     */
    moveLeft()
    {
        
        let path = this.left - (this.speed * 10);
        let pathPerMillisecond = this.speed;

        this.element.style.transform = 'scale(-1, 1)';

        return new Promise((resolve, reject) =>
        {
            let interval = setInterval(() =>
            {
                if (this.left <= path)
                {
                    this.left = path;
                    clearInterval(interval);
                    resolve();
                }
    
                this.left -= pathPerMillisecond;
            }, 10);
        });
    }

    /**
     * EN
     * Moves player right depending on speed
     * @return {promise} - call resolve() when player is at the end of the path
     */
    moveRight()
    {
        let path = this.left + (this.speed * 10);
        let pathPerMillisecond = this.speed;

        this.element.style.transform = 'scale(1, 1)';

        return new Promise((resolve, reject) =>
        {
            let interval = setInterval(() =>
            {
                if (this.left >= path)
                {
                    this.left = path;
                    clearInterval(interval);
                    resolve();
                }
    
                this.left += pathPerMillisecond;
            }, 10);
        });
    }

    /**
     * EN
     * Player jump
     * @return {promise} - call resolve() when player is at the surface
     */
    jump()
    {
        
        let thePointOfFall = this.bottom;
        let path = this.bottom + this.jumpForce;
        let pathPerMillisecond = path / 10;

        return new Promise((resolve, reject) =>
        {
            let interval = setInterval(() =>
            {
                if (this.bottom >= path)
                {
                    clearInterval(interval);
                    this._fall(thePointOfFall).then(() => { this.bottom = thePointOfFall; resolve(); });
                }

                this.bottom += pathPerMillisecond;
            }, 10);
        });
    }

    /**
     * EN
     * Player fall
     * Private function
     * @return {promise} - call resolve() when player is at the surface
     */
    _fall(thePointOfFall)
    {
        
        let gravitation = 1.8;
        return new Promise((resolve, reject) =>
        {
            let interval = setInterval(() =>
            {
                if (this.bottom <= thePointOfFall)
                {
                    this.bottom = thePointOfFall;
                    clearInterval(interval);
                    resolve();
                }

                this.bottom -= gravitation++;
            }, 10);
        });
    }
}
