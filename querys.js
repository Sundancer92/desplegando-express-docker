const { Pool } = require("pg");
const pool = new Pool({
	user: "postgres",
	host: "localhost",
	password: "postgres",
	port: 5432,
	database: "desafiodocker",
});

const getTareas = async () => {
	const consulta = "SELECT * FROM tareas";

	try {
		const resultado = await pool.query(consulta);
		return resultado;
	} catch (err) {
		console.log("Error");
		console.error(err.code);
		return err;
	}
};

const insertar = async (datos) => {
	const consulta = {
		text: "INSERT INTO tareas VALUES ($1,$2",
		values: [datos.nombre, datos.descripcion],
	};

	try {
		const resultado = await pool.query(consulta);
		return resultado;
	} catch (err) {
		console.error(err.code);
		return err;
	}
};

module.exports = { insertar, getTareas };
