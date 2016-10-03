module.exports = { 

	getSelectedEmployees: function(next) {
        Employee.query('SELECT id,full_name from Employee where Employee.id not in(select employee from USER) and Employee.IsDeleted = 0', 
        	function(err, employees){
        	if (err) throw err;
        	next(employees);
        })
	}
}