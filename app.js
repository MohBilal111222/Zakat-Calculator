



function calculateZakat() {
    // Get input values
    var goldValue = parseFloat(document.getElementById("goldValue").value);
    var silverValue = parseFloat(document.getElementById("silverValue").value);
    var cashValue = parseFloat(document.getElementById("cashValue").value);
    var otherAssetsValue = parseFloat(document.getElementById("otherAssetsValue").value);
    
    // Zakat calculation (2.5% of total)
    var totalWealth = goldValue + (silverValue * 0.075) + cashValue + otherAssetsValue;
    var zakatAmount = totalWealth * 0.025;

    // Display Zakat amount
    document.getElementById("zakatAmount").innerHTML = "Zakat Amount: $" + zakatAmount.toFixed(2);
}