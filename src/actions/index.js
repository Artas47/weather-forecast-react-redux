import axios from 'axios';

const API_KEY = '65e660078331cfb1d54ad3ce2dd336ba';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	
	return {
		type: FETCH_WEATHER,
		payload: request
  }
}
