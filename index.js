let score1 = document.getElementById("text-team1")
let score2 = document.getElementById("text-team2")
let score_1=0
let score_2=0
function score_1_1()
{

    score_1+=1
    score1.textContent = score_1
    document.getElementById("game_won_text").textContent="________"
}

function score_2_1()
{

    score_1+=2
        score1.textContent = score_1
        document.getElementById("game_won_text").textContent="________"
}


function score_3_1()
{

    score_1+=3
        score1.textContent = score_1
        document.getElementById("game_won_text").textContent="________"

}


function score_1_2()
{
    score_2+=1

        score2.textContent = score_2
        document.getElementById("game_won_text").textContent="________"

}


function score_2_2()
{
    score_2+=2
    

        score2.textContent = score_2
        document.getElementById("game_won_text").textContent="________"
}


function score_3_2()

{
    score_2+=3
        score2.textContent = score_2
        document.getElementById("game_won_text").textContent="________"
}

function gameover(){
    if(score_1>score_2)
    {
        console.log("won")
        document.getElementById("game_won_text").textContent="HOME WON"
    }

    else if(score_1<score_2)
    {
        
        console.log("won")
        document.getElementById("game_won_text").textContent="GUEST WON"
    }

    else
    {
        
        console.log("won")
        document.getElementById("game_won_text").textContent="TIE"
    }

    score_1=0
    score_2=0
    score1.textContent=score_1
    score2.textContent=score_2
}

