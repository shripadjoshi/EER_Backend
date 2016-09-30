module.exports = { 

	getSelectedEmployees: function(next) {
        Employee.query('SELECT full_name from Employee where Employee.id not in(select employee from USER)', 
        	function(err, employees){
        	if (err) throw err;
        	next(employees);
        })
	}
}