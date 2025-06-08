/**
 * Sorts the table with id equal to "my-table" based on the data available
 * in the specified column.
 */
function sortTable(columnIndex) {

    // Get the table rows and remove the header.
    let table = document.getElementById("my-table");
    let rows = Array.from(table.rows).slice(1);

    // Generate the sorted rows.
    let sortedRows = rows.sort((a, b) => {
        let cellA = a.cells[columnIndex].innerText;
        let cellB = b.cells[columnIndex].innerText;
        return cellA.localeCompare(cellB);
    });

    // Update the table data.
    sortedRows.forEach(row => table.tBodies[0].appendChild(row));

}