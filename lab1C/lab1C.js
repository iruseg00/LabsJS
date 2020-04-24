
class Tabulation
{
    constructor(begin , end , step)
    {
        this.begin = begin;
        this.end = end;
        this.step = step;
    }
    calculation()
    {
        this.result = new Map();
        for(let i = this.begin ; i < this.end; i += this.step)
        {
            this.result.set(i.toFixed(4) , ((1/Math.tan(4 * i).toFixed(2)) - Math.cos(7 * i).toFixed(2)).toFixed(4))
        }
        if ( !this.result.has(this.end) ) 
            this.result.set( this.end.toFixed(4) , ((1/Math.tan(4 * this.end).toFixed(2)) - Math.cos(7 * this.end).toFixed(2)).toFixed(4)) 
        return console.log(this.result)
    }
}

var tab = new Tabulation(-0.3 , 0.7 , 3.14/9);
tab.calculation();

