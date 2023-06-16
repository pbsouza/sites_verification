function calculateDifference() {
    var startDate = document.getElementById('date1').value;
    var endDate = document.getElementById('date2').value;

    var differenceInYears = endDate - startDate;

    document.getElementById('result').innerHTML = Math.abs(Math.round(differenceInYears)) + ' anos';
}

function resetIdade() {
    document.getElementById('result').innerHTML = 'Idade';
}