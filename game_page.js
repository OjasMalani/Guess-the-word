player1name= localStorage.getItem("player1 name");
player2name= localStorage.getItem("player2 name");

p1score= 0;
p2score= 0;

document.getElementById("p1name").innerHTML= player1name+":";
document.getElementById("p2name").innerHTML= player2name+":";

document.getElementById("p1score").innerHTML= p1score;
document.getElementById("p2score").innerHTML= p2score;

document.getElementById("player_ques").innerHTML="Question turn:"+player1name;
document.getElementById("player_ans").innerHTML= "Answer turn:"+player2name;

function send() {
    getword= document.getElementById("word").value;
    word= getword.toLowerCase();
    console.log("Word in lower case is "+ word);

    charat1= word.charAt(1);
    console.log(charat1);

    lengthdivide2= Math.floor(word.length/2);

    charat2=word.charAt(lengthdivide2);
    console.log(charat2);

    lengthminus1= word.length-1;

    charat3=word.charAt(lengthminus1);
    console.log(charat3);

    removechar1= word.replace(charat1,"_");
    removechar2= removechar1.replace(charat2,"_");
    removechar3= removechar2.replace(charat3,"_");
    console.log(removechar3);

    ques_1= "<h4 id='word_display'> Q."+ removechar3+"</h4>";
    inputbox= "<br> Ans: <input type='text' id='checkbox'>";
    checkbutton= "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row= ques_1+ inputbox+ checkbutton;

    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value= "";

}

ques_turn="p1";
ans_turn="p2";

function check() {
    getans=document.getElementById("checkbox").value;
    ans=getans.toLowerCase();
    console.log("Answer in lower case:"+ ans);

    if(ans==word) {
        if(ans_turn=="p1") {
            p1score= p1score+1;
            document.getElementById("p1score").innerHTML=p1score;
        }
        else{
            p2score= p2score+1;
            document.getElementById("p2score").innerHTML=p2score; 
        }
    }
    if(ques_turn=="p1") {
        ques_turn= "p2";
        document.getElementById("player_ques").innerHTML="Question turn:"+ player2name;       
    }
    else{
        ques_turn= "p1";
        document.getElementById("player_ques").innerHTML="Question turn:"+ player1name;       
    }
    if(ans_turn=="p1") {
        ans_turn= "p2";
        document.getElementById("player_ans").innerHTML= "Answer turn:"+player2name;
    }
    else{
        ans_turn= "p1";
        document.getElementById("player_ans").innerHTML= "Answer turn:"+player1name;
    }
    document.getElementById("output").innerHTML="";
}