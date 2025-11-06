interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'Alice', lastName: 'Ng', age: 20, location: 'Rabat' };
const student2: Student = { firstName: 'Ben', lastName: 'Omar', age: 22, location: 'Casablanca' };

const studentsList: Student[] = [student1, student2];

// Render a table with First Name and Location
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((s) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = s.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = s.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
