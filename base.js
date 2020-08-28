

function calculateTip() {

    // store the data of the inputs
    let billAmount = document.getElementById('billAmount').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numPeople = document.getElementById('totalPeople').value;

    // validate the form data -- if form fields are null
    if (billAmount === '' || serviceQuality === 0) {
        window.alert('please type a number! One or more of your form fields are empty');
        return
    }

    // always at least one person
    if (numPeople === '' || numPeople <= 1) {
        numPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }

    // tip calculation
    let total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // display the tip
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total;

};

// hide tip amount onLoad()
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';


// event listener for button click
document.getElementById('calculate').onclick = function() {
    calculateTip();
};


