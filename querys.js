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

const insertarTarea = async (datos) => {
	const consulta = {
		text: "INSERT INTO tareas(nombre, descripcion, fecha_creacion) VALUES ($1,$2,$3)",
		values: [datos.nombre, datos.descripcion, datos.fecha_creacion],
	};

	try {
		await pool.query("BEGIN");
		const resultado = await pool.query(consulta);
		await pool.query("COMMIT");
		return resultado;
	} catch (err) {
		await pool.query("ROLLBACK");
		console.error(err.code);
		return err;
	}
};

module.exports = { insertarTarea, getTareas };
