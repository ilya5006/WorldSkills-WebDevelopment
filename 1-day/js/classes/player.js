class Player
{
    constructor(id, chracter, width, height, left, bottom)
    {
        this.element = document.querySelector('#' + id);

        this.element.left = left;
        this.element.bottom = bottom;
        this.element.width = width;
        this.element.height = height;

        this.chracter = chracter;
    }

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
        this.element.style.bottom = bottom + 'px';
    }
}
