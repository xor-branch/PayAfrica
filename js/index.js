function calcul_DiaspoPay(){
  var montant_cfa = Number(document.getElementById("description").value);
  var montantTTC = montant_cfa;
    if  (150000 < montant_cfa) {
      montantTTC = 0;
    } else if  (140000 < montant_cfa) {
      montantTTC = montant_cfa*1.074;
    } else if (130000< montant_cfa) {
      montantTTC = montant_cfa*1.078;
    } else if (120000 < montant_cfa) {
      montantTTC = montant_cfa*1.080;
    } else if (110000 < montant_cfa) {
      montantTTC = montant_cfa*1.083;
    } else if (100000 < montant_cfa) {
      montantTTC = montant_cfa*1.085;
    } else if (95000 < montant_cfa) {
      montantTTC = montant_cfa*1.092;
    } else if (90000 < montant_cfa) {
      montantTTC = montant_cfa*1.093;
    } else if (85000 < montant_cfa) {
      montantTTC = montant_cfa*1.094;
    } else if (80000 < montant_cfa) {
      montantTTC = montant_cfa*1.095;
    } else if (75000 < montant_cfa) {
      montantTTC = montant_cfa*1.096;
    } else if (70000 < montant_cfa) {
      montantTTC = montant_cfa*1.097;
    } else if (65000 < montant_cfa) {
      montantTTC = montant_cfa*1.098;
    } else if (60000 < montant_cfa) {
      montantTTC = montant_cfa*1.099;
    } else if (55000 < montant_cfa) {
      montantTTC = montant_cfa*1.10;
    } else if (50000 < montant_cfa) {
      montantTTC = montant_cfa*1.105;
    } else if (45000 < montant_cfa) {
      montantTTC = montant_cfa*1.11;
    } else if (40000 < montant_cfa) {
      montantTTC = montant_cfa*1.12;
    } else if (35000 < montant_cfa) {
      montantTTC = montant_cfa*1.13;
    } else if (30000 < montant_cfa) {
      montantTTC = montant_cfa*1.14;
    } else if (25000 < montant_cfa) {
      montantTTC = montant_cfa*1.16;
    } else if (20000 < montant_cfa) {
      montantTTC = montant_cfa*1.2;
    } else if (15000 < montant_cfa) {
      montantTTC = montant_cfa*1.22;
    } else if (10000 < montant_cfa) {
      montantTTC = montant_cfa*1.25;
    } else{
      montantTTC = montant_cfa*1.27;
    };

  if (montantTTC == 0){
    document.getElementById("amount").value = 0
  }else {
    var amount = montantTTC/656;
    document.getElementById("amount").value = Math.round(amount * 100)/100;
  };
};


function calcul_BonDachat(){
  var montant_cfa = Number(document.getElementById("description").value);
  var montantTTC = montant_cfa;
    if  (100000 < montant_cfa) {
      montantTTC = 0;
    } else if (95000 < montant_cfa) {
      montantTTC = montant_cfa*1.057;
    } else if (90000 < montant_cfa) {
      montantTTC = montant_cfa*1.056;
    } else if (85000 < montant_cfa) {
      montantTTC = montant_cfa*1.058;
    } else if (80000 < montant_cfa) {
      montantTTC = montant_cfa*1.058;
    } else if (75000 < montant_cfa) {
      montantTTC = montant_cfa*1.060;
    } else if (70000 < montant_cfa) {
      montantTTC = montant_cfa*1.062;
    } else if (65000 < montant_cfa) {
      montantTTC = montant_cfa*1.065;
    } else if (60000 < montant_cfa) {
      montantTTC = montant_cfa*1.068;
    } else if (55000 < montant_cfa) {
      montantTTC = montant_cfa*1.071;
    } else if (50000 < montant_cfa) {
      montantTTC = montant_cfa*1.077;
    } else if (45000 < montant_cfa) {
      montantTTC = montant_cfa*1.084;
    } else if (40000 < montant_cfa) {
      montantTTC = montant_cfa*1.093;
    } else if (35000 < montant_cfa) {
      montantTTC = montant_cfa*1.095;
    } else if (30000 < montant_cfa) {
      montantTTC = montant_cfa*1.105;
    } else if (25000 < montant_cfa) {
      montantTTC = montant_cfa*1.12;
    } else if (20000 < montant_cfa) {
      montantTTC = montant_cfa*1.14;
    } else if (15000 < montant_cfa) {
      montantTTC = montant_cfa*1.17;
    } else if (10000 < montant_cfa) {
      montantTTC = montant_cfa*1.22;
    } else{
      montantTTC = montant_cfa*1.27;
    };

  if (montantTTC == 0){
    document.getElementById("amount").value = 0
  }else {
    var amount = montantTTC/656;
    document.getElementById("amount").value = Math.round(amount * 100)/100;
  };
};