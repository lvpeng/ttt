var doExe = function (a, callback) {
    setTimeout(() => {
        if(callback) {
            callback()
        }
    },10 * Math.random())
}

module.exports = doExe