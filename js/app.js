"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const changeLocation = document.getElementById("change-location");
const card = document.getElementById("card");
const icon = document.getElementById("weather-icon");
const details = document.getElementById("details");
const input = document.querySelector("input");
const wetherName = document.getElementById("wetherName");
input === null || input === void 0 ? void 0 : input.focus();
const updateUi = (weather) => {
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
    if (card === null || card === void 0 ? void 0 : card.classList.contains("hidden")) {
        card.classList.remove("hidden");
    }
    icon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
};
const getWether = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getData(city);
    return data;
});
changeLocation === null || changeLocation === void 0 ? void 0 : changeLocation.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value.trim().toLowerCase();
    getWether(val).then((data) => {
        updateUi(data);
    });
});
