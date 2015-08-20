'use strict'
var fs = require('fs')
module.exports = function (){
    var filenames = fs.readdirSync('/Users')
    return filenames.filter(function(filename){
        if(filename.indexOf('.') != -1 || filename == 'Shared'){
            return false
        }
        return true
    })
}
