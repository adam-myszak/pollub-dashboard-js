const moment = require('moment');
const currency = require('currency.js');
const helper = require("./helper.js");

const updateContent = function () {

    helper.fillElement( 'today', moment().format('DD-MM-YYYY HH:MM:SS') );

    helper.fillElement( 'ballance', moment().format(currency((Math.random() * 10000) + 10000).format()) );
};

const el = document.getElementById("updateContent");
el.addEventListener("click", updateContent);
