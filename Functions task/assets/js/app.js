function Hesabla() {
    let amount_value = Number(document.getElementById('amount').value);
    let slc_value = Number(document.getElementById('slc').value);
    let percent_value = Number(document.getElementById('percent').value);

    let ay_odenis = (((amount_value*percent_value)/100)+amount_value)/slc_value;

    let umumi_mebleg = (amount_value*percent_value/100)+amount_value;

    document.getElementById('demo').innerHTML = `${ay_odenis} ₼`;
    document.getElementById('demo2').innerHTML =`${umumi_mebleg} ₼` ;
}