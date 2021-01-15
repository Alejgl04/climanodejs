const axios = require('axios');

const getDireccionLatLng = async (dir) => {
	const encodeUrid = encodeURI(dir);
	const instance = axios.create({
	  	baseURL: `https://api.ipgeolocationapi.com/countries/${encodeUrid}`,
	});

	const resp = await instance.get();

	if (resp.data.message=='Country code not found.') {
		throw new Error(`No hay resultados para ${dir}`);
	}
	const data      = resp.data;

	const direccion = data.name;
	const lat      = data.geo.latitude;
	const lng      = data.geo.longitude;
	return {
		direccion,
		lat,
		lng
	}
}
module.exports = {
	getDireccionLatLng
}