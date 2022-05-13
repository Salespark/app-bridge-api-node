const Bridge = require('./index');

(async () => {

    const app = new Bridge();
    await app.init('123456789');

    app.marketplace.list().then((res) => {
        console.log(res)
    });

})();