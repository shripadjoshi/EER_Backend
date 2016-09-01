/**
 * Company.js
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
        website: {
        	type: "string",
        	required: true,
        	unique: true
        },
        address:{
            type: "text",
            required: true
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
            type: "number",
            required: true
        },
        phone_no:{
            type: "number",
            required: true
        },
        mobile_no:{
        	type: "number",
        	required: true
        },
        companyType: {
        	type: "string",
        	required: true
        },
        industryType: {
        	type: "string",
        	required: true
        }//,

        // Add a reference to URL
        /*urls: {
            collection: 'url',
            via: 'category'
        }*/
    }
};
