const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

console.log("Ваш депозит на начало расчётного периода составлял " + deposit + " " + currency + ".");

console.log("Согласно вашему тарифу, вам была присвоена ставка " + interestRate + "%");

console.log("К концу расчётного периода прирост составил " + " " + growth + " " + currency + "., и на данный момент ваш депозит составляет " + (+deposit + +growth) + " " + currency + ".");

button.addEventListener('click', () => {
const sum = document.querySelector('.sum').value;
total.textContent = ("Через год у вас будет " + (sum*1.07) + " " + currency + ". на счету"); 
// Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});