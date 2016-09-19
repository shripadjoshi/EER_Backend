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
        model: 'company'//,
        //required: true
    },
    // Add a reference to Department
    employee_department:{
        model: 'department'//,
        //required: true
    },
    // Add a reference to Department
    employee_designation:{
        model: 'designation'//,
        //required: true
    },
    isDeleted:{
    	type: 'boolean',
  		defaultsTo: false,
  		boolean: true
    }

  },
  // Add a reference to Employee
    users: {
        collection: 'user',
        via: 'employee'
    },
    
  	//model validation messages definitions
	validationMessages: { //hand for i18n & l10n
		salutation:{
	  		required: 'Salutation is required',
	        minLength: 'Salutation should be atleast 3 characters',
	        maxLength: 'Salutation should be 10 characters only'
	  	},
	  	first_name: {
	        required: 'First name is required',
		    maxLength: 'First name should be 20 characters only'
	    },

	    last_name:{
	    	required: 'Last name is required',
			maxLength: 'Last name should be 20 characters only'
	    },
	    full_name:{
	    	required: 'Full name is required'
	    },
	    emp_id:{
	    	required: 'Employee id is required',
	    },
	    email_id:{
	    	required: 'Email is required',
	        email: 'Provide valid email address',
	        unique: 'Email address is already taken',
	        maxLength: 'Email should be 50 characters only'
	    },
	    address:{
	        required: 'Address is required'
	    },
	    country:{
	        required: 'Country is required'
	    },
	    state:{
	        required: 'State is required'
	    },
	    city:{
	        required: 'City is required'
	    },
	    pincode:{
	    	required: 'Pincode is required',
	        numeric: 'Pincode must be numberic',
	        maxLength: 'Pincode should be 6 characters only',
	        minLength: 'Pincode should be 6 characters only'
	    },
	    phone_no:{
	        numeric: 'Phone no must be numberic'
	    },
	    mobile_no:{
	    	required: 'Mobile no is required',
	        numeric: 'Mobile no must be numberic',
	        maxLength: 'Mobile no should be 10 characters only',
	        minLength: 'Mobile no should be 10 characters only'
	    },    
	    employee_type:{
	    	required: 'Employee type is required'       
	    }
	}

};

