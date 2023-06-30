function handleSubmit(){
  var Vorname=document.getElementById('Vorname').value;
  var Nachname=document.getElementById('Nachname').value;
  var Straße=document.getElementById('Straße').value;
  var Hausnummer=document.getElementById('Hausnummer').value;
  var Postleitzahl=document.getElementById('Postleitzahl').value;
  var Ort=document.getElementById('Ort').value;
  var date1=document.getElementById('date1').value;
  var date2=document.getElementById('date2').value;
  var Mail=document.getElementById('E-Mail').value;
  var Haustier=document.getElementById('Haustier').value;
  var Datenschutzerklärung=document.getElementById('flexCheckIndeterminate').checked;
}

var message=
  'Vorname: ' +
  Vorname +
  'Nachname: ' +
  Nachname +
  'Straße: ' +
  Straße +
  'Hausnummer: ' +
  Hausnummer +
  'Postleitzahl: ' +
  Postleitzahl +
  'Ort: ' +
  Ort +
  'Anreisedatum: ' +
  date1 +
  'Abreisedatum: ' +
  date2 +
  'E-Mail: ' +
  Mail +
  'Mitgebrachte Haustiere: ' +
  Haustier +
'Datenschutzerklärung annerkannt: ' + 
Datenschutzerklärung

alert(`Folgende Angaben wurden an uns übersandt: ${message} Vielen Dank für Ihre Buchung.`);