const dotEnv = require('dotenv');
const app = require('fastify')({logger: true});

const envCheck = dotEnv.config({path: './environment/.env'});
if (envCheck.error) {
    throw envCheck.error;
}

const PORT = process.env.PORT;

(async () => {
    try {
        await app.listen(PORT);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
})();
