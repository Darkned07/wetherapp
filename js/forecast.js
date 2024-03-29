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
const KEY = "b5391417c6b37a57698503e76dfdb7db";
const getData = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const base = "https://api.openweathermap.org/data/2.5/weather";
    const query = `?q=${city}&appid=${KEY}`;
    const req = yield fetch(base + query);
    const data = yield req.json();
    return data;
});
