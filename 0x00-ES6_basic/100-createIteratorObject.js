export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let index = 0;
  let employeeIndex = 0;

  return {
    next() {
      // Check if all employees have been iterated through
      if (index >= departments.length) {
        return { done: true };
      }

      const department = departments[index];
      // Check if all employees in the current department have been iterated through
      if (employeeIndex >= department.length) {
        index++;
        employeeIndex = 0;
        return this.next(); // Recursive call to move to the next department
      }

      // Return the next employee
      return {
        value: department[employeeIndex++],
        done: false,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
