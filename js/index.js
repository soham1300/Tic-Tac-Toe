var pos=[0,1,0,1,0,1,1,0,1];
flag=true
var currentVal
gameDiv=document.querySelector(".container")
playerNameDiv=document.querySelector(".PlayerNamePage")
p1Score=0
p2Score=0
count=0

document.querySelector(".game1").addEventListener('click',function(e)
{
    if (pos[e.target.id]==0 || pos[e.target.id]==1)
    {
        
        currentVal=getFlag(flag);
        e.target.innerText=currentVal;
        pos[e.target.id]=currentVal;
        flag=!flag;
        count++;
        findWinner();
    }
    else if (pos[e.target.id]=="X" || pos[e.target.id]=="O")
    {
        alert("Not Allowed");
    }
    else if(pos=[null])
    {
        alert("Game over. Please start new game.")
    }
    
})
function getFlag(flag)
{
    //if(flag)
    //{
    //    return "X"
    //}
    //else
    //{
    //    return "O"
    //}
    return flag?"X":"O";
}
function findWinner()
{
    const winpro=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    for(var i=0;i<=7;i++)
    {
        const [a,b,c]=winpro[i];
        if(pos[a]==pos[b]&&pos[b]==pos[c])
        {
            //flag?alert("Winner "+player2):alert("Winner "+player1);
            score();
            document.getElementById(a).style.backgroundColor="green";
            document.getElementById(b).style.backgroundColor="green";
            document.getElementById(c).style.backgroundColor="green";
            break;
        }
    }
    //if ((pos[0]==pos[1] && pos[1]==pos[2]) || (pos[3]==pos[4] && pos[4]==pos[5]) || (pos[6]==pos[7] && pos[7]==pos[8]))
    //{
    //    flag?alert("Winner "+player2):alert("Winner "+player1)
    //    score()
    //}
    //else if ((pos[0]==pos[3] && pos[3]==pos[6]) || (pos[1]==pos[4] && pos[4]==pos[7]) || (pos[2]==pos[5] && pos[5]==pos[8]))
    //{
    //    flag?alert("Winner "+player2):alert("Winner "+player1)
    //    score()
    //}
    //else if ((pos[0]==pos[4] && pos[4]==pos[8]) || (pos[2]==pos[4] && pos[4]==pos[6]))
    //{
    //    flag?alert("Winner "+player2):alert("Winner "+player1)
    //    score()
    //}
    if(count==9)
    {
        alert("Draw")
    }
    
}
function startGame()
{
    player1=document.querySelector("#p1").value
    player2=document.querySelector("#p2").value   
    if (player1=="" || player2=="")
    {
        alert("Please enter player name.");
    }
    else
    {
        gameDiv.style.display="block";
        playerNameDiv.style.display="none";
        document.querySelector("#player1").innerText=player1+" (X)";
        document.querySelector("#player2").innerText=player2+" (O)";
    }
}
function score()
{
    if(flag)
    {
        p2Score++;
    }
    else
    {
        p1Score++;
    }
    document.querySelector("#p1Score").innerText=p1Score
    document.querySelector("#p2Score").innerText=p2Score
    pos=[null]
}
function resetGame()
{
    var reset=confirm("Are you sure you want to reset game.");
    if(reset)
    {
        location.reload();
    }
}
function newGame()
{
    //console.log("run")
    var clearGame=document.querySelectorAll(".game table td");
    for(i=0;i<clearGame.length;i++)
    {
        clearGame[i].innerText="";
        clearGame[i].style.backgroundColor="black";
    }
    flag=true;
    pos=[0,1,0,1,0,1,1,0,1];
    count=0
}
