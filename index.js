const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB QUERYS //
const { insertarTarea, getTareas, eliminarTarea } = require("./querys");
// DB QUERYS //

app.listen(4000, () => {
	console.log("Server started on port 4000");
});

// Invocacion bootstrap
app.use(
	"/bootstrap",
	express.static(__dirname + "/node_modules/bootstrap/dist/css"),
);
app.use(
	"/BootstrapJs",
	express.static(__dirname + "/node_modules/bootstrap/dist/js/"),
);
// Invocacion bootstrap

// Configuracion de handlebars
app.set("view engine", "handlebars");

app.engine(
	// ! Primer parametro define la extension de los archivos que handlebars identificara como vistas.
	"handlebars",
	// ! Definimos la ruta del directorio desde donde se tomaran las vistas.
	exphbs.engine({
		layoutsDir: __dirname + "/views",
		// ! Ruta para los parciales/componentes
		partialsDir: __dirname + "/views/componentes/",
	}),
);
//-------------------------------

// * RUTA vista inicio
app.get("/", (req, res) => {
	res.render("Inicio", {
		layout: "Inicio",
	});
});
// * RUTA vista creacion nueva tarea
app.get("/todo-create", (req, res) => {
	res.render("NuevaTarea", {
		layout: "NuevaTarea",
	});
});
// * RUTA vista eliminacion de tareas
app.get("/todo-delete/:id&:nombre", (req, res) => {
	const id = req.params.id.slice(1);
	const nombre = req.params.nombre.slice(1);

	res.render("EliminarTarea", {
		layout: "EliminarTarea",
		id: id,
		nombre: nombre,
	});
});

// API
// * GET todas las tareas
app.get("/todos", async (req, res) => {
	const data = await getTareas();
	res.end(JSON.stringify(data.rows));
});

// * POST de nuevas tareas
app.post("/todos", async (req, res) => {
	const { nombre, descripcion, fecha_creacion } = req.body;
	await insertarTarea({ nombre, descripcion, fecha_creacion });
	res.status(200);
	res.send("ok");
});


// * DELETE de tareas
app.delete("/todos/:id", async (req, res) => {
	const id = req.params.id;
	await eliminarTarea(id);
	res.status(204);
	res.send("no-content");
});
