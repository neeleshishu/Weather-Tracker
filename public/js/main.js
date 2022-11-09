const submit = document.getElementById('submit');

const text = document.getElementById('text');

const info = async(event)=>{
    event.preventDefault();
    const city_name = text.value;
    if(city_name === "")
    {
        const main = document.querySelector('.main_layer');
        main.innerHTML = "please write a city name to get the temp";
    }else{
        try{
        const api = await fetch(`
        http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=adfda6a2845f8867e5b24016bb1abc02`);
        const data = await api.json();
        console.log(data);
        document.getElementById('city_name').innerText = city_name;
        document.getElementById('temp').innerText = data[0].lat;
        document.getElementById('time').innerText = "Cloudy";
        }catch{
            const main = document.querySelector('.main_layer');
        main.innerHTML = "please write a correct city name to get the temp";
        }
    }

}
submit.addEventListener('click',info);


