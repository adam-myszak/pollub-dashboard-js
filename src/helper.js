module.exports = {
    fillElement: function (id, content) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = content;
        } else {
            console.log('Element #' + id + ' not found on page');
        }
    }
};