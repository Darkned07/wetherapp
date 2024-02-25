const changeLocation = document.getElementById("change-location");
const card = document.getElementById("card");
const icon: any = document.getElementById("weather-icon");
const details: any = document.getElementById("details");
const input: any = document.querySelector("input");
const wetherName = document.getElementById("wetherName");

input?.focus();

const updateUi = (weather: any) => {
  console.log(weather);
  details.innerHTML = `   <h2 class="flex flex-row gap-[10px] text-[20px] text-slate-400">
    ${weather.name},<span>${weather.sys.country}</span>
  </h2>
  <span class="text-[12px] text-slate-600 tracking-[3px]"
    >${weather.weather[0].main}</span
  >
  <h3 class="text-[45px] font-extralight tracking-[3px]">
    ${Math.round(weather.main.temp / 10)} <span>&deg;C</span>
  </h3>`;

  if (card?.classList.contains("hidden")) {
    card.classList.remove("hidden");
  }

  icon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
};

const getWether = async (city: string) => {
  const data = await getData(city);
  return data;
};

changeLocation?.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = input.value.trim().toLowerCase();
  getWether(val).then((data) => {
    updateUi(data);
  });
});
