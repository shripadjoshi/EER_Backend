/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

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
    	type: "text",
        required: true
    },
    password_key:{
        type: "string",
        required: true
    },
    employee:{
    	model: 'employee',
    	required: true,
        unique: true
    }
  }
};

