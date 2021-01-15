const axios = require('axios');

const getClima = async (lat,lng) => {

	const apiSecret = '15a9a66935908be38bdeaac34abf6d7a';

	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiSecret}&units=metric`);

	return resp.data.main.temp;
}

module.exports = {
	getClima
}