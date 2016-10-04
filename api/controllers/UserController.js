/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');

module.exports = {


	checkUserPass: function(req, res){
		passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message
                });
            }else{
            	return res.send({
                    message: info.message
                });
            }
            

        })(req, res);

    }
};

