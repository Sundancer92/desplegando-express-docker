require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool();

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

const eliminarTarea = async (id) => {
	const deleteQuery = {
		text: "DELETE FROM tareas WHERE id = $1",
		values: [id],
	};
	try {
		await pool.query("BEGIN");
		const resultado = await pool.query(deleteQuery);
		await pool.query("COMMIT");
		return resultado.rows;
	} catch (error) {
		await pool.query("ROLLBACK");
		console.log(error);
	}
};

module.exports = { insertarTarea, getTareas, eliminarTarea };
