var digo = require("digo");
digo.config({sourceMap: true});

exports.default = function () {
	digo.src("fixtures/*.less").pipe("../").dest("_build");
};
