//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBhQXzEujA1CuyAoFN7JFMpYLCw_KqzEl8",
      authDomain: "kwitter-14e30.firebaseapp.com",
      databaseURL: "https://kwitter-14e30-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-14e30",
      storageBucket: "kwitter-14e30.appspot.com",
      messagingSenderId: "369496955537",
      appId: "1:369496955537:web:756e2b2f590e3f2d6abd30",
      measurementId: "G-PE0S1EG9MX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

            });
      });
}
getData();

function addRoom() {
      var RN = document.getElementById("RoomName").value;
      firebase.database().ref("/").child(RN).update({

            purpose:"Identifying room"
      });
      localStorage.setItem("Room name",RN);
      window.location="kwitter_ room.html";
}
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("Room name", name);
       window.location("kwitter_room.html");
 }

