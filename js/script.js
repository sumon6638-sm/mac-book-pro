/*
------------------------
    Starting Increase Memory
------------------------
*/

// function for increasing memory
function increasingMemory(isIncreasingMemory) {
    let extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    let memoryCost = document.getElementById('extra-memory-cost');

    if (isIncreasingMemory == '8gb') {
        memoryCost.innerText = 0;
    }
    else if (isIncreasingMemory == '16gb') {
        memoryCost.innerText = 180;
    }
    return memoryCost;
}

//memory increase decrease events
document.getElementById('8GB-memory').addEventListener('click', function () {
    increasingMemory('8gb');
    calculateTotal('8gb');
});

document.getElementById('16GB-memory').addEventListener('click', function () {
    increasingMemory('16gb');
    calculateTotal('16gb');
});


/*
------------------------
    Starting Increase Storage
------------------------
*/

// function for increasing storage
function increasingStorage(isIncreasingStorage) {
    let extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    let storageCost = document.getElementById('extra-storage-cost');

    if (isIncreasingStorage == '256gb-ssd') {
        storageCost.innerText = 0;
    }
    else if (isIncreasingStorage == '512gb-ssd') {
        storageCost.innerText = 100;
    }
    else if (isIncreasingStorage == '1tb-ssd') {
        storageCost.innerText = 180;
    }
    return storageCost;
}

//storage increase decrease events
document.getElementById('256gb-ssd').addEventListener('click', function () {
    increasingStorage('256gb-ssd');
    calculateTotal('256gb-ssd');
});

document.getElementById('512gb-ssd').addEventListener('click', function () {
    increasingStorage('512gb-ssd');
    calculateTotal('512gb-ssd');
});

document.getElementById('1tb-ssd').addEventListener('click', function () {
    increasingStorage('1tb-ssd');
    calculateTotal('1tb-ssd');
});


/*
------------------------
    Starting Fast Shipping 
------------------------
*/

// function for fast shipping
function fastShipping(isFastShipping) {
    let extraShippingCost = document.getElementById('delivery-cost').innerText;
    let shippingCost = document.getElementById('delivery-cost');

    if (isFastShipping == 'without-charge') {
        shippingCost.innerText = 0;
    }
    else if (isFastShipping == 'with-charge') {
        shippingCost.innerText = 20;
    }
    return shippingCost;
}

//fast or normal shipping events
document.getElementById('free-shipping').addEventListener('click', function () {
    fastShipping('without-charge');
    calculateTotal('without-charge');
});

document.getElementById('fast-shipping').addEventListener('click', function () {
    fastShipping('with-charge');
    calculateTotal('with-charge');
});


/*
------------------------
    Starting Calculating Total Cost
------------------------
*/
//Calculating Total Cost
function calculateTotal(memory, storage, deliveryCharge, code) {
    let totalMemoryCost = increasingMemory(memory).innerText;
    const finalMemoryCost = parseInt(totalMemoryCost);

    let totalStorageCost = increasingStorage(storage).innerText;
    const finalStorageCost = parseInt(totalStorageCost);

    let totalDeliveryCost = fastShipping(deliveryCharge).innerText;
    const finalDeliveryCost = parseInt(totalDeliveryCost);

    let currentBalance = document.getElementById('best-cost').innerText;
    let totalBalance = document.getElementById('total-cost');

    totalBalance.innerText = finalMemoryCost + finalStorageCost + finalDeliveryCost + parseInt(currentBalance);

    //bonusPart-1(Display Total Cost)
    let displayCost = document.getElementById('display-cost');
    displayCost.innerText = totalBalance.innerText;

    //bonusPart-2(Applying Promo Code)
    code = document.getElementById('promo-code').value;
    if (code == 'stevekaku') {
        const p = document.getElementById("promo-code-text");
        p.innerText = 'This price is after applying promo code!! Be happy, Stay with us.';

        const reducingAmount = parseFloat(totalBalance.innerText) * .20;
        const afterPromoCost = totalBalance.innerText - parseFloat(reducingAmount);
        displayCost.innerText = afterPromoCost;

    }
}


//Bonus Part or Promo-code-applied
document.getElementById('code-applied').addEventListener('click', function () {
    calculateTotal('stevekaku');

    document.getElementById('promo-code').value = '';
});