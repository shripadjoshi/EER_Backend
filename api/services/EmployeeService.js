module.exports = { 

	getSelectedEmployees: function(next) {
		var empQuery = Employee.find().populate('user', { employee: 2});
		empQuery.exec(function(err, employees) {
            if (err) throw err;
            next(employees);            
        });
	}
}