/**
 * Task 0: Student interface + render table (Vanilla JS)
 */

export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'Alice', lastName: 'Doe', age: 20, location: 'Casablanca' };
const student2: Student = { firstName: 'Bob', lastName: 'Smith', age: 22, location: 'Rabat' };

export const studentsList: Student[] = [student1, student2];

// Render a table with firstName and location
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
