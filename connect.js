

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
});

// Vérif Email

var sendMessage = document.getElementById('submit_message').addEventListener('click', (send_mess) =>{
    var p = document.createElement('p');
        p.setAttribute("class", "text-success");
        p.innerHTML = "Votre message a bien été envoyé.";
        var retour = document.getElementById('contact');
        retour.appendChild(p);
})
