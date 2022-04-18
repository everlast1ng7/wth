let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })
})
    

function onClickFunction(){
    const city = document.getElementById('city').value;
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8575bf43f9b70921f0e7547ebf5f97d3`)
        .then(function(resp) {return resp.json()})
        .then(function(data){
            console.log(data);
            document.getElementById('block').style.display = "block";
            document.getElementById('linkroom').style.display = "block";
            document.querySelector('.hr1').innerHTML = "<img src=city.png>" + " " + data.name;
            document.querySelector('.hr2').innerHTML = "<img src=fl.png>" + " " + "Feels like: " + Math.round(data.main.feels_like - 273) + '&deg;';
            document.querySelector('.hr3').innerHTML = "<img src=temp2.png>" + Math.round(data.main.temp - 273) + '&deg;';
            if (data.weather[0]['description'] == "overcast clouds"){
                document.querySelector('.hr5').innerHTML = `<img src="sunrain1.png">`;
            } else if (data.weather[0]['description'] == "clear sky"){
                document.querySelector('.hr5').innerHTML = `<img src="sun1.png">`;
            } else if (data.weather[0]['description'] == "few clouds"){
                document.querySelector('.hr5').innerHTML = `<img src="cloud1.png">`;
            } else if (data.weather[0]['description'] == "broken clouds"){
                document.querySelector('.hr5').innerHTML = `<img src="cloud1.png">`;
            } else if (data.weather[0]['description'] == "scattered clouds"){
                document.querySelector('.hr5').innerHTML = `<img src="sunrain1.png">`;
            } else if (data.weather[0]['description'] == "shower rain"){
                document.querySelector('.hr5').innerHTML = `<img src="rain1.png">`;
            } else if (data.weather[0]['description'] == "rain"){
                document.querySelector('.hr5').innerHTML = `<img src="rain1.png">`;
            } else if (data.weather[0]['description'] == "thunderstorm"){
                document.querySelector('.hr5').innerHTML = `<img src="groza1.png">`;
            } else if (data.weather[0]['description'] == "snow"){
                document.querySelector('.hr5').innerHTML = `<img src="snow1.png">`;
            } else if (data.weather[0]['description'] == "mist"){
                document.querySelector('.hr5').innerHTML = `<img src="mist1.png">`;
            } else if (data.weather[0]['description'] == "heavy snow"){
                document.querySelector('.hr5').innerHTML = `<img src="snow1.png">`;
            } else if (data.weather[0]['description'] == "light snow"){
                document.querySelector('.hr5').innerHTML = `<img src="snow1.png">`;
            } else if (data.weather[0]['description'] == "light rain"){
                document.querySelector('.hr5').innerHTML = `<img src="lightrain1.png">`;
            } else if (data.weather[0]['description'] == "moderate rain"){
                document.querySelector('.hr5').innerHTML = `<img src="rain1.png">`
            }
            document.querySelector('.hr6').innerHTML = "<img src=vs.png>" + " " + `Visibility: ${data.visibility}`;
            document.querySelector('.hr7').innerHTML = "<img src=wn.png>" + " " + `Wind: ${data.wind.speed}`;
            document.querySelector('.hr8').innerHTML = "<img src=pres.png>" + " " + `Pressure: ${data.main.pressure}`;
        })
        .catch(function(){
            console.log("Error");
        });
    }
    

