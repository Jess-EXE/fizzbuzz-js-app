// Get user input for fizz and buzz values
// Controller function

function getValues() {

    let fizzValue = document.getElementById("fizz").value;
    let buzzValue = document.getElementById("buzz").value;

    // Parse for integers

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // If integers, continue

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        let results = fizzBuzz(fizzValue, buzzValue);

        displayResults(results);

    } else {

        alert("You did not enter an integer!");
    }
}

// Logic Function

function fizzBuzz(fizzValue, buzzValue) {

    let results = [];

    // Loop through 1 - 100, using conditional logic to determine FizzBuzz

    for (let i = 1; i <= 100; i++) {

        if (i % fizzValue == 0 && i % buzzValue == 0) {

            results.push("FizzBuzz");

        } else if (i % fizzValue == 0) {

            results.push("Fizz");

        }  else if (i % buzzValue == 0) {

            results.push("Buzz");

        } else {

            results.push(i);

        }
    }

    return results;

}

// Display results
// View function

function displayResults(resultsArray) {

    let tableBody = document.getElementById("results");

    let templateRow = document.getElementById("fbTemplate");

    // Make sure table is clear

    tableBody.innerHTML= "";

    for (let i = 0; i < resultsArray.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        // Get the <td> elements to put in the array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(resultsArray[i]);
        rowCols[0].textContent = resultsArray[i];

        rowCols[1].classList.add(resultsArray[i + 1]);
        rowCols[1].textContent = resultsArray[i + 1];

        rowCols[2].classList.add(resultsArray[i + 2]);
        rowCols[2].textContent = resultsArray[i + 2];

        rowCols[3].classList.add(resultsArray[i + 3]);
        rowCols[3].textContent = resultsArray[i + 3];

        rowCols[4].classList.add(resultsArray[i + 4]);
        rowCols[4].textContent = resultsArray[i + 4];

        tableBody.appendChild(tableRow);
    }

}