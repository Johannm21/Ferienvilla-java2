function handleSubmit(){
  var vname=document.getElementById('vname').value;
  var nname=document.getElementById('nname').value;
  var street=document.getElementById('Straße').value;
  var hausnummer=document.getElementById('Hausnummer').value;
  var postleitzahl=document.getElementById('Postleitzahl').value;
  var ort=document.getElementById('Ort').value;
  var date1=document.getElementById('date1').value;
  var date2=document.getElementById('date2').value;
  var mail=document.getElementById('E-Mail').value;
  var haustier=document.getElementById('Haustier').value;
  var datenschutzerklaerung=document.getElementById('flexCheckIndeterminate').checked;


var message=
  'Vorname: ' +
  vname +
  'Nname: ' +
  nachname +
  'Straße: ' +
  street +
  'Hausnummer: ' +
  hausnummer +
  'Postleitzahl: ' +
  postleitzahl +
  'Ort: ' +
  ort +
  'Anreisedatum: ' +
  date1 +
  'Abreisedatum: ' +
  date2 +
  'E-Mail: ' +
  mail +
  'Mitgebrachte Haustiere: ' +
  haustier +
'Datenschutzerklärung annerkannt: ' + 
datenschutzerklaerung

alert(`Folgende Angaben wurden an uns übersandt: ${message} Vielen Dank für Ihre Buchung.`);
}