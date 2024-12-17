function SendMail() {
    var params ={
        nom : document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    };
    
    if (!params.nom || !params.prenom || !params.email) {
        alert("Veuillez remplir tous les champs obligatoires !");
        return;
    }
    else{alert("votre formulaire est envoyé avec succée!");}
}