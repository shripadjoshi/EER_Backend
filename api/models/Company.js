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
        /*preferedURL: {
        	type: "string",
        	required: true,
        	unique: true
        },*/
        address:{
        	type: "text",
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
