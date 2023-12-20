let submit = document.getElementById('sub-btn');

submit.onclick = function calculateMortgage() {
    
    let loanAmount = parseFloat(document.getElementById('customRange1').value);
      let downPayment = parseFloat(document.getElementById('customRange3').value);
      let totalLoanAmount = loanAmount - downPayment;
      let interestRate = parseFloat(document.getElementById('customRange2').value);
      let loanTerm = parseFloat(document.getElementById('customRange4').value);
      
      let monthlyInterest = (interestRate / 100) / 12;
      let totalPayments = loanTerm * 12;
      
      let mortgagePayment = (totalLoanAmount * monthlyInterest) / (1 - (1 + monthlyInterest)**(-totalPayments));
      
      document.getElementById('result').innerHTML = `<span class="fw-bold fs-5 me-2">Ежемесячный платеж:</span><span class="fw-light fs-5">${mortgagePayment.toFixed()} руб.</span>`;
}