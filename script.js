const gameboard = document.querySelector("#board");
//console.log(document.querySelector("#board"));
let currPlayer = 'x';

function Gameboard()
{
    let board = [
        ['e','e','e'],
        ['e','e','e'],
        ['e','e','e'],
    ];
    let x_win = false;
    let o_win = false;
    console.log(board);
    const process = function() {
    for(let i = 0;i<9;i++)
    {
        const field = document.createElement("div");
        field.classList.add(`board-item${i}`);
        field.addEventListener("click", function() { 
            let a = i/3;
            let b = i%3;
            console.log(a);
            console.log(b);
            if(board[Math.floor(a)][b] === 'e')
            {
                board[Math.floor(a)][b] = currPlayer;
                field.textContent = currPlayer;
                if(currPlayer == 'x')
                {
                    currPlayer = 'o';
                }
                else
                {
                    currPlayer = 'x';
                }
                console.log(board);
                for(let j=0;j<3;j++)
                    {
                        if((board[j][0] == 'x' && board[j][1] == 'x' && board[j][2] == 'x') || (board[0][j] == 'x' && board[1][j] == 'x' && board[2][j] == 'x'))
                        {
                            x_win = true;
                            break;
                        }
                        else if((board[j][0] == 'o' && board[j][1] == 'o' && board[j][2] == 'o') || (board[0][j] == 'o' && board[1][j] == 'o' && board[2][j] == 'o'))
                        {
                            o_win = true;
                            break;
                        }
                        else
                        {
                            continue;
                        }
                    }
                if(board[0][0] == 'x' && board[1][1] == 'x' && board[2][2] == 'x')
                {
                    x_win = true;
                }
                else if(board[0][0] == 'o' && board[1][1] == 'o' && board[2][2] == 'o')
                {
                    o_win = true;
                }
                if(x_win == true)
                {
                    clear();
                }
                else if(o_win == true)
                {
                    clear();
                }
            }

        })
        gameboard.appendChild(field);
    }
    }
    const clear = function()
    {
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                const item = document.querySelector(`.board-item${3*i+j}`);
                console.log(`clear${3*i+j}`);
                item.textContent = "";
                board[i][j] = 'e';
                x_win = false;
                o_win = false;
            }
        }
    }
    return { process, clear };
}
function start()
{
    const player_prompt = document.querySelector("#player_prompt");
    const div = document.createElement("div");
    div.classList.add("prompt");
    div.innerHTML = "<form class=\"player-form\"> <label for=\"player1\">Author:</label><br> <input type=\"text\" id=\"player1\" name=\"player1\"><br> <label for=\"player2\">Title:</label><br> <input type=\"text\" id=\"player2\" name=\"player2\"><br> <button class=\"btn\" type=\"submit\">Submit</button> </form>";
    player_prompt.appendChild(div);
}
start();
let game = Gameboard();
game.process();