const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
// DB QUERYS //
const { insertar, getTareas } = require("./querys");
// DB QUERYS //

app.listen(3000, () => {
	console.log("Server started on port 3000");
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

app.get("/", (req, res) => {
	res.render("Inicio", {
		layout: "Inicio",
	});
});

app.get("/todo-create", (req, res) => {});

app.get("/todo-delete/:id", (req, res) => {});

// API
app.get("/todos", async (req, res) => {
	const data = await getTareas();
	res.end(JSON.stringify(data.rows));
});

app.post("/todos", async (req, res) => {});

app.delete("/todos/:id", async (req, res) => {});
