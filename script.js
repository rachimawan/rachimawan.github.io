// Menghitung Zakaat
function calculateZakaat() {
    let nomAmt = document.getElementById("nomamt").value

      //Jika user menginput syarat hanya 1 atau tidak menginput sama sekali
      let penghasilan = document.getElementById("penghasilan").checked
      let syarat = document.getElementById("syarat").checked
      
      if (penghasilan === false || syarat === false) {
          alert('Tolong dipenuhi dulu syarat-syaratnya ya!')
          return
      }
    
    
    //Jika user memasukan input besar nominal yang kosong atau string
    if (nomAmt === '' || nomAmt === 0 || nomAmt === undefined || !nomAmt || Number.isNaN(Number(nomAmt))) {
        alert('Masukan nominal angka!')
        return
    }
    
  
    
    //Menghitung berapakah zakatmu?
    let zakaat = (nomAmt * 2.5/100)
    zakaat = Math.round(zakaat)
    document.getElementById("totalZakaat").style.display = "block";
    document.getElementById("total").innerHTML = zakaat.toLocaleString();
}


// Jika hitung zakaat diclick, maka eksekusi function calculateZakaat
document.getElementById("calculate").onclick = function() {
    calculateZakaat()
  }

