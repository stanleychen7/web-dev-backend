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



//Set up boot
const bootApp = async() => {
    await createDB();
    await syncDatabase()
};

bootApp();