function handleSubmit(){
  var vname=document.getElementById('vname').value;
  var nname=document.getElementById('nname').value;
  var street=document.getElementById('street').value;
  var hausnummer=document.getElementById('hausnummer').value;
  var postleitzahl=document.getElementById('postleitzahl').value;
  var ort=document.getElementById('ort').value;
  var date1=document.getElementById('date1').value;
  var date2=document.getElementById('date2').value;
  var mail=document.getElementById('floatingInputValue').value;
  var haustier=document.getElementById('haustier').value;
  var datenschutzerklaerung=document.getElementById('flexCheckIndeterminate').checked;


var message=
  'Vorname: ' + 
  vname +
  '\nNname: ' +
  nname +
  '\nStraße: ' +
  street +
  '\nHausnummer: ' +
  hausnummer +
  '\nPostleitzahl: ' +
  postleitzahl +
  '\nOrt: ' +
  ort +
  '\nAnreisedatum: ' +
  date1 +
  '\nAbreisedatum: ' +
  date2 +
  '\nE-Mail: ' +
  mail +
  '\nMitgebrachte Haustiere: ' +
  haustier +
'\nDatenschutzerklärung annerkannt: ' + 
datenschutzerklaerung

alert(`Folgende Angaben wurden an uns übersandt: \n ${message} \n Vielen Dank für Ihre Buchung.`);
}