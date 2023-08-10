// Affichage en console "hello wold"

console.log("Hello world");

// Calculateur de TVA:

let montant = prompt('saisir un nombre') ;
let tva =  20 / 100;
let montantHt = montant * tva;
console.log(montantHt);



// liste d'achats

let tab = ['telephone', 'ecouteur', 'radio' , 'television' , 'machine'];
//parcourir sur des elements
    for (let i = 0; i < tab.length; i++){
        console.log(tab[i]);
    }
    


// demande a l'utilisateur de saisir son age
    let age = prompt('Entrez votre age');
     if(age <= 17){
        console.log('vous etes  mineur');
     } else{
        alert('Vous etes majeur');
     }

     //Divinette

     function nombre() {
        let randomNr = Math.floor(Math.random() * 100);
        let guess;

        do{
            guess = prompt("Devine un nombre entre 1 et 100");
            console.log(guess, randomNr);

            if (randomNr > guess){
                console.log("trop petit !");


            } else if (randomNr < guess) {
                 console.log("Trop grand !");
            }


        } while (guess != randomNr){
            console.log(gagné);
        }

       
        
     }
     nombre();
     console.log(nombre);

