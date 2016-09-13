/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	salutation:{
  		type: 'string',
  		required: true,
  		maxLength: "10",
        minLength: "3"
  	},
  	first_name: {
        type: "string",
        required: true,
        maxLength: "20"
    },
    middle_name: {
        type: "string",
        maxLength: "20"    
    },
    last_name:{
    	type: "string",
        required: true,
        maxLength: "20"
    },
    full_name:{
    	type: "text",
    	required: true
    },
    emp_id:{
    	type: "string",
    	required: true
    },
    email_id:{
    	type:"string",
    	required: true,
    	unique: true,
    	maxLength: "50",
    },
    address:{
        type: "text",
        required: true
    },
    landmark:{
        type: "text",
    },
    country:{
        type: "string",
        required: true
    },
    state:{
        type: "string",
        required: true
    },
    city:{
        type: "string",
        required: true
    },
    pincode:{
        type: "float",
        required: true,
        numeric: true,
        maxLength: "6",
        minLength: "6"
    },
    phone_no:{
        type: "float",
       /* required: true,*/
        numeric: true
    },
    mobile_no:{
    	type: "float",
    	required: true,
        numeric: true,
        maxLength: "10",
        minLength: "10"
    },
    /*user_name:{
    	type: "string",
        required: true,
        maxLength: "10",
        minLength: "4",
        unique: true
    },
    password:{
    	type: "text",
        required: true        
    },*/
    employee_type:{
    	type: "string",
        required: true        
    },
    // Add a reference to company
    employee_company:{
        model: 'company',
        required: true
    },
    // Add a reference to Department
    employee_department:{
        model: 'department',
        required: true
    },
    // Add a reference to Department
    employee_designation:{
        model: 'designation',
        required: true
    },
    isDeleted:{
    	type: 'boolean',
  		defaultsTo: false,
  		boolean: true
    }

  }

};

