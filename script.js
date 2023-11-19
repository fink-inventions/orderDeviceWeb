/* deklariere folgende Variablen: 
unsingned long orderTimeStart
unsingned long orderTimeEnd
unsingned long runningOrderTime
unsigned int orderNrCurrent
unsinged int orderNrAll
bool isOrderRunning */

/* erstelle folgende Funktionen:
formatTime: die Variable runningOrderTime hat später das Format Sekunden
das li Time soll aber in Minuten und Sekunden angezeigt werden.
Schreibe die Funktion für die Umrechnung*/

/*wird in select Guest ein neuer Wert ausgewählt, soll dieser in das Textfeld selectedGuest übernommen werden */

/*wird in select Drink ein neuer Wert ausgewählt, soll dieser in das Textfeld selectedDrink übernommen werden */

/*wird der Button order geklickt soll:
1. runningOrderTime = 0 -> soll jede Sekunde um 1 erhöht werden 
2.isOrderRunning = true
3. neues Listenelement selectedGuest, selectedDrink, orderNrCurrent, button submitOne soll rot sein
4. orderNrCurrent ++
5. orderNrAll ++
*/

/** wird der submitOne Button geklickt soll button submitOne grün sein */

/** wird der submitAll Button geklickt soll:
 * isOrderRunning = false
 * Liste laufende Bestellungen leeren
 */

 // Deklariere die Variablen
 var orderTimeStart = 0;
 var orderTimeEnd = 0;
 var runningOrderTime = 0;
 var orderNrCurrent = 0;
 var orderNrAll = 0;
 var isOrderRunning = false;

// Funktion zur Umrechnung der Zeit von Sekunden in Minuten und Sekunden
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} Minuten ${remainingSeconds} Sekunden`;
}

// Wird in select Guest ein neuer Wert ausgewählt, übernimm ihn in das Textfeld selectedGuest
document.getElementById('guestSelect').addEventListener('change', function() {
    const selectedGuest = this.value;
    document.getElementById('selectedGuest').value = selectedGuest;
});

// Wird in select Drink ein neuer Wert ausgewählt, übernimm ihn in das Textfeld selectedDrink
document.getElementById('drinkSelect').addEventListener('change', function() {
    const selectedDrink = this.value;
    document.getElementById('selectedDrink').value = selectedDrink;
});

// Funktion, die beim Klicken des "order" Buttons ausgeführt wird
document.getElementById('orderButton').addEventListener('click', function() {
    runningOrderTime = 0;
    isOrderRunning = true;
    orderNrCurrent++;
    orderNrAll++;

    // Ändere die Farbe des neuen Listenelements und des submitOne Buttons auf Rot
    const orderListItem = document.createElement('li');
    orderListItem.innerHTML = `
        Guest: <span>${document.getElementById('selectedGuest').value}</span>
        Drink: <span>${document.getElementById('selectedDrink').value}</span>
        OrderNr: <span>${orderNrCurrent}</span>
        Time: <span id="orderTime${orderNrCurrent}">${formatTime(runningOrderTime)}</span>
        <button class="submitOne" style="background-color: red;">submitOne</button>
    `;
    document.getElementById('orderList').appendChild(orderListItem);

    // Starte den Timer zur Aktualisierung der Zeit
    const orderTimeElement = document.getElementById(`orderTime${orderNrCurrent}`);
    const timerInterval = setInterval(function() {
        runningOrderTime++;
        orderTimeElement.textContent = formatTime(runningOrderTime);
    }, 1000);
});

// Funktion, die beim Klicken des "submitOne" Buttons ausgeführt wird
document.getElementById('orderList').addEventListener('click', function(event) {
    if (event.target.classList.contains('submitOne')) {
        event.target.style.backgroundColor = 'green';
    }
});

// Funktion, die beim Klicken des "submitAll" Buttons ausgeführt wird
document.getElementById('submitAll').addEventListener('click', function() {
    isOrderRunning = false;
    document.getElementById('orderList').innerHTML = ''; // Leere die Liste der laufenden Bestellungen
});
