function add_user() {
    player1= document.getElementById("p1name").value;
    player2= document.getElementById("p2name").value;
    localStorage.setItem("player1 name",player1);
    localStorage.setItem("player2 name",player2);
window.location.replace("game_page.html");
}