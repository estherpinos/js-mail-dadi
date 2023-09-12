// MAIL

const listaEmail = [
  'estherpinos@gmail.com',
  'sara2001@gmial.com',
  'carla20@gmail.com',
  'Pietro12@gmail.com',
  'Carlo12@gmail.com',
  'chiara123s@mail.com',
  'emma45@gmail.com',
  'simone67@gmail.com',
  'luca56@gmail.com',
  'bea66@gmail.com'
];

document.getElementById('ok').addEventListener('click', function(){

  const mail = document.getElementById('datimail').value;
  console.log(mail);

  const btn = document.getElementById('ok');

  let c=false;

  for (let i = 0; i < listaEmail.length; i++) {
    const element = listaEmail[i];

    if (mail==element) {
      c=true;    
    }
    
  }

  if (c==true) {
    console.log(' l\'utente inserito esiste');
    document.getElementById('messaggio').innerHTML=' l\'utente inserito esiste'
    
    
  }
  else {
    console.log('errore, l\'utente inserito non esiste');
    document.getElementById('messaggio').innerHTML=' errore, l\'utente inserito non esiste'
  }

})

// DADI

document.getElementById('scopri').addEventListener('click', function(){
  
  let numero1 = Math.floor(Math.random() *6)+1;
  document.getElementById('player').innerHTML='Il tuo numero è: '+numero1;

  let numero2 = Math.floor(Math.random() *6)+1;
  document.getElementById('computer').innerHTML='Il numero del computer è: '+ numero2;

  if(numero1>numero2){
    document.getElementById('vincitore').innerHTML='Hai vinto!'
    
  }

  else if(numero1<numero2){
    document.getElementById('vincitore').
    innerHTML='Hai perso :c'
  }

  else if(numero1==numero2){
    document.getElementById('vincitore').
    innerHTML='Pari, riprova!'
  }
})



