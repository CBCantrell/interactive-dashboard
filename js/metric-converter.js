// Metric Converter tool in JavaScript

// Get the Convert button
var convertButton = document.getElementById("convert-btn");

// Run the conversion when the Convert button is clicked
convertButton.addEventListener("click", function(event)
{
    event.preventDefault();

    // Get numeric value from the input field and convert it to a number
    var value = document.getElementById("metric-value").value;
    value = parseFloat(value);

    // Get the conversion dropdown and determine which option was selected
    var conversionSelect = document.getElementsByTagName("select")[0];
    var selectedOption = conversionSelect.selectedIndex;
    var choice = conversionSelect.options[selectedOption].value;

    var result;
    var fromUnit;
    var toUnit;

    if (choice === "in to cm")
    {
        result = value * 2.54;
        fromUnit = "inches";
        toUnit = "centimeters";
    }
    else if (choice === "ft to cm")
    {
        result = value * 30.48;
        fromUnit = "feet";
        toUnit = "centimeters";
    }
    else if (choice === "yd to m")
    {
        result = value * 0.91;
        fromUnit = "yards";
        toUnit = "meters";
    }
    else if (choice === "mi to km")
    {
        result = value * 1.61;
        fromUnit = "miles";
        toUnit = "kilometers";
    }
    else if (choice === "cm to in")
    {
        result = value * 0.39;
        fromUnit = "centimeters";
        toUnit = "inches";
    }
    else if (choice === "cm to ft")
    {
        result = value * 0.0328;
        fromUnit = "centimeters";
        toUnit = "feet";
    }
    else if (choice === "m to yd")
    {
        result = value * 1.09;
        fromUnit = "meters";
        toUnit = "yards";
    }
    else if (choice === "km to mi")
    {
        result = value * 0.62;
        fromUnit = "kilometers";
        toUnit = "miles";
    }

    // Display the conversion result
    var output = document.getElementById("conversion-result");    
    output.innerHTML = value + " " + fromUnit + " is " + result.toFixed(2) + " " + toUnit;
});
