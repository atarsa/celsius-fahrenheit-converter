
  // UI vars
  const celsius = document.getElementById('celsius');
  const fahrenheit = document.getElementById('fahrenheit');
  const results = document.getElementById('results');
 
  // add eventListener to each input field
  celsius.addEventListener('keyup', function(){
    // Convert Celsius to Fahrenheit
    fahrenheit.value = (parseFloat(celsius.value) * 9 / 5) + 32;
   results.innerHTML = `${celsius.value}°C equals to ${fahrenheit.value}°F`;
  });
 
  fahrenheit.addEventListener('keyup', function(){
    // Convert fahrenheit to celsius
    celsius.value = (parseFloat(fahrenheit.value) -32) * 9 / 5;
    results.innerHTML = `${fahrenheit.value}°F equals to ${celsius.value}°C`;
  });

