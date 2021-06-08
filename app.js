const btn = document.querySelector(".btn");
const input = document.querySelector('.textarea');
const img = document.querySelector(".qr-code");

btn.addEventListener('click', getQr);


function getQr() {
  const data = input.value;
  
  const baseUrl = 'https://chart.googleapis.com/chart';
  const type = '?cht=qr';
  const size = '&chs=400x400';
  const cData = '&chl=' + data;

  const fullUrl = baseUrl + type + size + cData;

  // change image url to new url
  img.setAttribute('src', fullUrl);
}