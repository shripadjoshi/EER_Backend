/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcryptjs');
module.exports = {

  attributes: {
      	user_name:{
        	type: "string",
            required: true,
            maxLength: "10",
            minLength: "4",
            unique: true
        },
        password:{
        	type: "string",
            required: true
        },        
        employee:{
        	model: 'employee',
        	required: true,
            unique: true
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },
    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    console.log(hash);
                    user.password = hash;
                    cb();
                }
            });
        });
    }
  };

