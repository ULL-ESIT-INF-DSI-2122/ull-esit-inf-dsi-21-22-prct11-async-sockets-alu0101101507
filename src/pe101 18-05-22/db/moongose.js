"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
/**
 * Coneccion con el servidoe de mongodb a travez de mongoose
 */
mongoose_1.connect('mongodb://127.0.0.1:27017/dsi-assessment', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(function () {
    console.log('Connected to the database');
})["catch"](function () {
    console.log('Something went wrong when conecting to the database');
});
