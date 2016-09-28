/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing Employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	unassigned_employees: function (req, res) {
	    var employees = EmployeeService.getSelectedEmployees(function(employees){
	            res.json(employees);    
	    });
	}
};

