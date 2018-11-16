
// listen for submit
document.getElementById('converter-form').addEventListener("submit", function(e){
  // UI vars
  const celsius = document.getElementById('celsius');
  const fahrenheit = document.getElementById('fahrenheit');

  const results = document.getElementById('results');
 

  // convert celsius to fahrenheit
  if (celsius.value){
    convertCtF(celsius.value);

  // convert fahrenheit to celsius
  } else if (fahrenheit.value){
    convertFtoC(fahrenheit.value)
  }

  // results.innerHTML = `${celsius.value}°C equals to ${fahrenheit.value}°F`;
  celsius.value = "";
  fahrenheit.value = "";

  
  e.preventDefault();
});

// Convert Celsius to Fahrenheit
function convertCtF(n){
   fahrenheit.value = (parseFloat(n) * 9 / 5) + 32;
   results.innerHTML = `${celsius.value}°C equals to ${fahrenheit.value}°F`;
}

 // Convert fahrenheit to celsius
function convertFtoC(n){
  celsius.value = (parseFloat(n) -32) * 9 / 5;
  results.innerHTML = `${fahrenheit.value}°F equals to ${celsius.value}°C`;
} 
