const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

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
// -------------------------------
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
	// Renderizado
	res.render("Inicio", {
		layout: "Inicio",
	});
});
