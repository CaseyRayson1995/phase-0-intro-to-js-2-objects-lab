// Write your solution in this file!

//returns an employee with the original key value pairs and the new key value pair
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};
console.log(employee); 

//it does not modify the original employee, but rather returns a clone with the new data
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
//destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
      //1) updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
      function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
    }

   // deleteFromEmployeeByKey(employee, key)
      //1) deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
      //2) does not modify the original employee (it is non-destructive)

      function deleteFromEmployeeByKey(employee, key) {
        // Create a copy of the employee object
        const newEmployee = { ...employee };
      
        // Delete the key from the copied object
        delete newEmployee[key];
      
        //  Return the new object
        return newEmployee;
      }
      
      //destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.

      function destructivelyDeleteFromEmployeeByKey(employee, key) {
        // Delete the key-value pair from the employee object
        delete employee[key];
    
        // Return the modified employee object
        return employee;
    }