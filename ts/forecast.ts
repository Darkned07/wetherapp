const KEY: string = "b5391417c6b37a57698503e76dfdb7db";

const getData = async (city: string) => {
  const base: string = "https://api.openweathermap.org/data/2.5/weather";
  const query: string = `?q=${city}&appid=${KEY}`;

  const req = await fetch(base + query);
  const data = await req.json();
  return data;
};
