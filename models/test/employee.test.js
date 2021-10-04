const Employee = require('../employee.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {

  it('should throw an error if no "firstName", "lastName", "department" arg', () => {
    const emp = new Employee({}); 
  
    emp.validate(err => {
      expect(err.errors.firstName).to.exist;
      expect(err.errors.lastName).to.exist;
      expect(err.errors.department).to.exist;
    });  
  });

  it('should throw an error if "firstName", "lastName", "department" is not a string', () => {

    const emp = new Employee({ firstName: [], firstName: {}, lastName: [], lastName: {}, department: [], department: {}});
  
    emp.validate(err => {
      expect(err.errors.firstName).to.exist;
      expect(err.errors.lastName).to.exist;
      expect(err.errors.department).to.exist;
      });       
  });

  it('should not throw an error if "firstName", "lastName", "department" is okay', () => {
   
    const emp = new Employee({ firstName: 'Amanda', lastName: 'Doe', department: 'IT'});
  
      emp.validate(err => {
        expect(err).to.not.exist;
      });
    
  }); 

  it('should throw an error if not all arg were added', () => {

    const cases = [
      {firstName: 'Amanda', lastName: 'Doe'},
      {lastName: 'John', department: 'IT'},
      {firstName: 'Mike', department: 'Marketing'}
    ];

    for (let type of cases) {
      const emp = new Employee({type});     
      
      emp.validate(err => {
        expect(err).to.exist;
      });
    };

    after(() => {
    mongoose.models = {};
    });

  });

});