// downloadExcel 
function downloadExcel() {
    /* Export the table to an Excel file */
    const table = document.querySelector("table");
    const ws = XLSX.utils.table_to_sheet(table);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "TableData");
    XLSX.writeFile(wb, "table_data.xlsx");
  }

//   downloadPDF 
  function convertToPDF() {
    /* Convert the table to a PDF */
    const pdf = new jsPDF();
    pdf.autoTable({html: "table"});
    pdf.save("table_data.pdf");
  }

  
//   Sorting 
function sortTable() {
const table = document.querySelector("table");
const rows = Array.from(table.rows).slice(1); // Get all rows except the header row
const sortSelect = document.getElementById("sort-select");
const column = sortSelect.value; // Get the selected value from the dropdown

rows.sort((a, b) => {
    const cellA = a.cells[column === 'contact' ? 1 : column === 'country' ? 2 : 0].textContent.trim().toUpperCase();
    const cellB = b.cells[column === 'contact' ? 1 : column === 'country' ? 2 : 0].textContent.trim().toUpperCase();

    return cellA.localeCompare(cellB);
});

// Clear the table
while (table.rows.length > 1) {
    table.deleteRow(1);
}

// Reorder the rows in the table
rows.forEach((row) => table.appendChild(row));
}
