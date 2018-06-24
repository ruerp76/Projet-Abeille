

// MODAL SIGN IN

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});

// MODAL SIGN UP

$(document).ready(function(){
    $("#myBtn2").click(function(){
        $("#myModal2").modal();
    });
});



var usrMail = document.getElementById("newsLetter").value;
var confirm = document.getElementById("vali_mail_news").addEventListener('click', (submitButton) =>{
    var a = document.getElementById("newsLetter").value;
    alert("Merci " + a + " , votre inscription à la newsletter est bien enregistrée.");

  // var p = document.createElement('p');
  //     p.setAttribute('class', ' text-center submit_para');
  //     p.style.color = "black";
  //     p.innerHTML = "Bonjour " + usrname;
  //     document.body.appendChild(p);
});
