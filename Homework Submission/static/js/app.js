// from data.js
var tableData = data;

// Assign variables
var button = d3.select("#filter-btn")
var tblbody = d3.select('tbody');

// Create a function that creates a table with data from data.js
function createTable(data){
    tblbody.html('');
    data.forEach((row)=>{
        var tblrow = tblbody.append("tr");
        Object.values(row).forEach((val) => {
            var cell = tblrow.append("td");
              cell.text(val);
            }
          );
    })
}
// Call the function to create table when page loads 
createTable(tableData);

// Create event handler function that points to the element, grabs the input value and creates 
// array with the filtered data matching the input value. If there is no data, it will print "There are no matching results." 
function handleClick () {
    
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");
    var filteredData = tableData.filter(tableData=>tableData.datetime ===inputDate);
    // Print filteredData to check values are correct.
    console.log(filteredData)
    // Print length to check the number of rows of data found that matches inputDate.
    console.log(filteredData.length)
    // Clear the tblbody before rendering result
    tblbody.html("");
        if (filteredData.length !== 0){
       createTable(filteredData)
    } else {tblbody.append("tr").append("td").text("There are no matching results.");}
}

//Attach the event handler function to the button element and call the function. 
button.on("click", handleClick);

