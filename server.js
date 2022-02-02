import express from "express";
import Router from "./router/Router";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use(Router);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

app.listen(PORT, console.log(`Lancement du serveur sur le port ${PORT}`));