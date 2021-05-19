// Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCqDUHcZ3fkCl3FaPPinaL3rjL4dp4vGbk",
      authDomain: "chatapp-for-school.firebaseapp.com",
      databaseURL: "https://chatapp-for-school-default-rtdb.firebaseio.com",
      projectId: "chatapp-for-school",
      storageBucket: "chatapp-for-school.appspot.com",
      messagingSenderId: "673546131426",
      appId: "1:673546131426:web:b531a6b635d76a6c170bbb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
username=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="welcome  "+username;
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;


function username() {
  var username=document.getElementById("user_name").value;
  firebase.database().ref("/").child(username).update(
    {
      purpose:"adding user"
    }
  );
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();
function logout() {
  logout=document.getElementById("logout").value;
  localStorage.setItem("logout",Logout);
  window.location="lets chat_room.html" ;
 }
function addroom () {
addroom=document.getElementById("addroom").value;
localStorage.setItem("addroom",ADDROOM);
}     
function addroom() {
      roomname=document.getElementById("room_name").value; 
      firebase.database().ref("/").child(roomname).update({
      purpose: "adding room"
      });
      localStorage.setItem("addroom",roomname);
      window.location="lets chat_page.html";
}
function redirecttoroom(name) {
 console.log(name);
 localStorage.setItem("roomname",name);
 window.location="lets chat_page.html";    
}




//ADD YOUR FIREBASE LINKS HERE


      //Start 

      //End code
      });});}
getData();
function addroom() {
      roomname=document.getElementById("room_name").value; 
      firebase.database().ref("/").child(roomname).update({
      purpose: "adding room"
      });
      localStorage.setItem("addroom",roomname);
      window.location="kwitter_page.html";
}
function redirecttoroom(name) {
 console.log(name);
 localStorage.setItem("roomname",name);
 window.location="kwitter_page.html";    
}