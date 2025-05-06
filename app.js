/*Set up Database */
const createDB = require('./database/utils/createDB');
const seedDB = require('./database/utils/seedDB');

const db = require('./database');

const syncDatabase = async() => {
    try {
        await db.sync({force: true});
        console.log('Synced to db');
        await seedDB();
        console.log('Successfully seeded db');
    }
    catch (err) {
        console.error(err)
    }
}

//Set up express and routes
const express = require("express");
const app = express();

const apiRouter = require('./routes/index');

const configureApp = async() => {
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.use("/api", apiRouter);

    app.use((req, res, next) => {
        const error = new Error("Not found, check url");
        error.status = 404;
        next(error);
    });

    app.use((err, req, res, next) => {
        console.error(`Error on ${req.method} ${req.originalUrl}:`, err);
        res.status(err.status || 500).send(err.message || "Internal Server Error.");
    });
}

//Set up boot
const bootApp = async() => {
    await createDB();
    await syncDatabase()
    await configureApp()
};

bootApp();

const PORT = 5001;
app.listen(PORT, console.log(`Server started on ${PORT}`));