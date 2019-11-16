//Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom d’utilisateur est “admin” et le mot de passe “12345”, affichez le message suivant : « Bonjour [nom de l’utilisateur] ».
// Si les informations ne sont pas correctes, affichez le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide ».

var id = 'admin';
var pwd = '12345';

id = prompt("Entrer votre nom d'utilisateur : ");
pwd = Number(prompt("Entrer votre mot de passe :"));

if(id == 'admin' && pwd == '12345'){
    alert("Bonjour Michael");
}
else{
    alert("Votre nom d’utilisateur ou votre mot de passe est invalide");
}
