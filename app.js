const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
	direccion: {
		alias:'d',
		desc:'Dirección de la cuidad para obtener el clima',
		demand:true
	}
}).argv;
// lugar.getDireccionLatLng(argv.direccion)
// 						.then(console.log)
// 						.catch(err => console.log(err));
// clima.getClima(6.42375,-66.58973)
// 	.then(console.log)
// 	.catch(console.log);

const getInfo = async (direccion) => {
	try {
		const coordenadas = await lugar.getDireccionLatLng(direccion);
		const temperatura = await clima.getClima(coordenadas.lat,coordenadas.lng);
		return `El clima de ${coordenadas.direccion} es de ${temperatura}.`;
		// statements
	} catch(e) {
		// statements
		return 'No se pudo determinar el clima de ' + direccion;
		console.log(e);
	}
}

getInfo(argv.direccion).then(console.log).catch(console.log);