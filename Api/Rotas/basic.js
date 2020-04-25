const Router = require('express').Router()
function x(req,res){

}
Router.route("/")
    .get('/',x)
    .post('/',x)
    .delete('/',x)
    .put('/',x)
module.exports=Router