class Matrix
{
    constructor()
    {
        this.matrix = [ [] , [] , [] , [] , [] , [] , [] , [] ];
        this.square1 = [
            [1, 2, 3, 4],
            [2, 'a', 4, 5],
            [3, 4, 5, 6],
            [4, 5, 6, 7],
        ]
        this.square2 = [
            [5, 6, 7, 8],
            [6, 7, 8, 1],
            [7, 8, 'b', 2],
            [8, 1, 2, 3],
        ]
        this.square3 = [
            [5, 6, 7, 8],
            [6, 7, 8, 1],
            [7, 'c', 1, 2],
            [8, 1, 2, 3],
        ]
        this.square4 = [
            [1, 2, 3, 4],
            [2, 3, 4, 5],
            [3, 4, 5, 6],
            [4, 5, 'd', 7],
        ];
        this.pool = [ this.square1 , this.square2 , this.square3 , this.square4 ];
        this.to8x8();
    }

    clear4x4()
    {
        for(let i = 0; i < 4 ; i++)
        {
            this.square1[i].splice(0 , 4);
            this.square2[i].splice(0 , 4);
            this.square3[i].splice(0 , 4);
            this.square4[i].splice(0 , 4);
        }
    }

    clear8x8()
    {
        for(let i = 0; i < 8 ; i++)
        {
            this.matrix[i].splice(0 , 8);
        }
    }

    to8x8()
    {
        this.clear8x8();
        var pool1 = [ this.square1 , this.square2 ];
        var pool2 = [ this.square3 , this.square4 ];
        for(let i = 0; i < 2; i++)
        {
            pool1[i].forEach((array , index)=>
                array.forEach((element)=>
                    this.matrix[index].push(element)));
            pool2[i].forEach((array , index)=>
                array.forEach((element)=>
                    this.matrix[index + 4].push(element)));
        }
    }

    to4x4()
    {
        this.clear4x4();
        for(let i = 0; i < 8; i++)
        {
            for(let j = 0; j < 8; j++)
            {
                if( i < 4 )
                {
                    if( j < 4 ) this.square1[i].push( this.matrix[i][j] );
                    else    this.square2[i].push( this.matrix[i][j] );   
                }
                else
                {
                    if( j < 4 ) this.square3[i - 4].push( this.matrix[i][j] );       
                    else    this.square4[i - 4].push( this.matrix[i][j] );  
                }
            }
        }
    }

    turn()
    {
        console.log('Turn.');
        this.to4x4();
        let arr = [];
        arr = this.square1;
        this.square1 = this.square2;
        this.square2 = arr;
        arr = this.square3;
        this.square3 = this.square4;
        this.square4 = arr;
        this.to8x8();
    }

    print8x8()
    {
        for(let i = 0; i < 8; i++)
        {
            console.log( `${this.matrix[i][0]} ${this.matrix[i][1]} ${this.matrix[i][2]} ${this.matrix[i][3]} ${this.matrix[i][4]} ${this.matrix[i][5]} ${this.matrix[i][6]} ${this.matrix[i][7]} ` );
        }
        console.log('---------------')
    }

    print4x4()
    {
        for(let j = 0; j < 4; j++)
        {
            console.log(`-------${j + 1}-------`)
            for(let i = 0; i < 4; i++)
            {
                console.log( `${this.pool[j][i][0]} ${this.pool[j][i][1]} ${this.pool[j][i][2]} ${this.pool[j][i][3]} ` );
            }
        }
        console.log('---------------')
    }

    toAscii()
    {
        console.log('To Ascii.')
        for(let i = 0; i < 8; i++)
        {
            for(let j = 0; j < 8; j++)
            {
                this.matrix[i][j] = typeof this.matrix[i][j] == 'number' ? 
                JSON.stringify(this.matrix[i][j]).charCodeAt(0) : this.matrix[i][j].charCodeAt(0);
            }
        }
        this.to4x4();
    }

    compare2String()
    {
        var string1 = String(this.matrix[0][0]) + this.matrix[1][1] + this.matrix[2][2] + this.matrix[3][3] + this.matrix[4][4];
        var string2 = String(this.matrix[7][0]) + this.matrix[6][1] + this.matrix[5][2] + this.matrix[4][3] + this.matrix[3][4];
        console.log(` First  string - ${string1} \n Second string - ${string2}`);
        if( string1 == string2) console.log('this strings equal');
        else console.log('different strings');                  
    }

    saddlePoints()
    {
        console.log('saddlePoints: ');
        var points = [ new Map() , new Map() , new Map() , new Map() ];
        for(let i = 0; i < 4; i++)
        {
            let min , max , column;
            for ( let j = 0; j < 4; j++)
            {
                min = Math.min.apply(null, this.pool[i][j]);
                column = this.pool[i][j].indexOf(min);
                switch(j)
                {
                    case 0:
                        max = Math.max( min , this.pool[i][1][column] , this.pool[i][2][column] , this.pool[i][3][column] );
                        break;
                    case 1:
                        max = Math.max( min , this.pool[i][0][column] , this.pool[i][2][column] , this.pool[i][3][column] );
                        break;
                    case 2:
                        max = Math.max( min , this.pool[i][0][column] , this.pool[i][1][column] , this.pool[i][3][column] );
                        break;
                    case 3:
                        max = Math.max( min , this.pool[i][0][column] , this.pool[i][1][column] , this.pool[i][2][column] );
                        break;
                }
                if(max == min) points[i].set( `Matrix: ${i + 1} , row: ${j + 1} , column: ${column + 1} , element: ` , min );
            }
        }
        return points.forEach((matrix)=> matrix.forEach( (value , index)=> console.log(index + value)));
    }

    sumNext()
    {
        console.log('Sum of two elements.');
        for(let i = 0; i < 4; i++)
        {
            this.pool[i].forEach((row , index)=>
            {
                var max = 0 , number;
                for(let j = 0; j < 3; j++)
                {
                    if(row[j] + row[j + 1] > max) 
                    {
                        max = row[j] + row[j + 1];
                        number = j;
                    };
                }
                console.log(`Matrix: ${i + 1} , row: ${index + 1} , column: ${number + 1} , element: ${row[number]}`);
            });
        }
    }

    sortirovka()
    {
        console.log('Sortirovka.')
        var Sort = (array) => array.sort((a, b) => a - b);
        this.matrix[0].splice(1 , 6 , ...Sort(this.matrix[0].slice(1 , 7)));  
        this.matrix[1].splice(2 , 4 , ...Sort(this.matrix[1].slice(2 , 6))); 
        this.matrix[2].splice(3 , 1 , ...Sort(this.matrix[2].slice(3 , 5))); 
        this.matrix[5].splice(3 , 1 , ...Sort(this.matrix[5].slice(3 , 5))); 
        this.matrix[6].splice(2 , 4 , ...Sort(this.matrix[6].slice(2 , 6))); 
        this.matrix[7].splice(1 , 6 , ...Sort(this.matrix[7].slice(1 , 7))); 
    }

    swapForSpiral()
    {
        console.log('Swap for spiral output.')
        var arr = [];
        var Swap = (a , b)=> 
        {
            arr = this.matrix[a];
            this.matrix[a] = this.matrix[b];
            this.matrix[b] = arr;
        };
        Swap(0 , 7);
        Swap(1 , 6);
        Swap(2 , 5);
        Swap(3 , 4);
    }
}

var matrix = new Matrix();
matrix.compare2String();
matrix.print8x8();
matrix.toAscii();
matrix.print8x8();
matrix.turn();
matrix.print8x8();
matrix.print4x4();
matrix.saddlePoints();
matrix.sumNext();
matrix.sortirovka();
matrix.print8x8();
matrix.swapForSpiral();
matrix.print8x8();
