class Player
{
    constructor(id, chracter, width, height, left, bottom, speed)
    {
        this.element = document.querySelector('#' + id);

        this.left = left;
        this.bottom = bottom;
        this.width = width;
        this.height = height;

        this.chracter = chracter;
        this.speed = speed;

        if (this.chracter = 'pumbaa')
        {
            this.element.style.backgroundImage = 'url("./media/pumbaa/lion_king_PNG49.png")';
            this.element.style.backgroundSize = '100% 100%';
            this.element.style.position = 'absolute';
        }
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
    moveLeft()
    {
        let path = this.left - (this.speed * 10);
        let pathPerMillisecond = this.speed;

        let interval = setInterval(() =>
        {
            if (this.left <= path)
            {
                this.left = path;
                clearInterval(interval);
            }

            this.left -= pathPerMillisecond;
        }, 10);
    }

    moveRight()
    {
        let path = this.left + (this.speed * 10);
        let pathPerMillisecond = this.speed;

        let interval = setInterval(() =>
        {
            if (this.left >= path)
            {
                this.left = path;
                clearInterval(interval);
            }

            this.left += pathPerMillisecond;
        }, 10);
    }

}
