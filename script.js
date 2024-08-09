const gameboard = document.querySelector("#board");
//console.log(document.querySelector("#board"));
let currPlayer = 'x';

const Gameboard = (function ()
{
    let board = [
        ['e','e','e'],
        ['e','e','e'],
        ['e','e','e'],
    ];
    let x_win = false;
    let o_win = false;
    let player1 = "";
    let player2 = "";
    console.log(board);
    const process = function() {
        player1 = document.getElementById("player1").value;
        player2 = document.getElementById("player2").value;
        const node = document.querySelector(".prompt");
        if (node.parentNode) {
        node.parentNode.removeChild(node);
        }
        console.log(player1);
        if(!player1 && !player2)
        {
            player1 = "Player 1";
            player2 = "Player 2";
        }
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
                        game_result(true);
                    }
                    else if(o_win == true)
                    {
                        game_result(false);
                    }
                }

            })
            gameboard.appendChild(field);
        }
    }
    const clear = function()
    {
        const alert = document.querySelector(".alert_message");
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                const item = document.querySelector(`.board-item${3*i+j}`);
                console.log(`clear${3*i+j}`);
                item.textContent = "";
                board[i][j] = 'e';
                if(item.parentNode)
                {
                    item.parentNode.removeChild(item);
                }
            }
        }
        if(alert.parentNode)
        {
            alert.parentNode.removeChild(alert);
        }
        x_win = false;
        o_win = false;
        start();
    }
    const game_result = function(result)
    {
        const alert_box = document.querySelector("#alert");
        const alert_div = document.createElement("div");
        alert_div.classList.add("alert_message");
        if(result)
        {
            alert_div.textContent = `${player1} wins!`;
        }
        else
        {
            alert_div.textContent = `${player2} wins!`;
        }
        alert_box.appendChild(alert_div);
    }
    return { process, clear, game_result };
})();
function start()
{
    const player_prompt = document.querySelector("#player_prompt");
    const div = document.createElement("div");
    div.classList.add("prompt");
    div.innerHTML = "<form id=\"playerform\"> <label for=\"player1\">Player 1:</label><br> <input type=\"text\" id=\"player1\" name=\"player1\"><br> <label for=\"player2\">Player 2:</label><br> <input type=\"text\" id=\"player2\" name=\"player2\"><br> <button class=\"btn\" type=\"submit\">Submit</button> </form>";
    player_prompt.appendChild(div);
    const submit = (e) => {
        e.preventDefault()
        Gameboard.process();
    }
    playerform.onsubmit = submit;
}
start();
//let game = Gameboard();
//game.process();