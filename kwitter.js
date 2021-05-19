function Adduser(){
    var userName=document.getElementById("UserName").value;
    localStorage.setItem("Username",userName);
    window.location="kwitter_room.html";
}