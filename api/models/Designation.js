/**
 * Designation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
        type: "string",
        required: true,
        unique: true
    },
    profile: {
    	type: "text"
    },
    // Add a reference to company
    company: {
        model: 'company',
        required: true
    },
    // Add a reference to Department
    department: {
        model: 'department',
        required: true
    }
  }
};

