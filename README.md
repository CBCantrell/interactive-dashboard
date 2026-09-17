# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [x] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator.

## Weekly Task Goals

The weekly task goal calculator multiplies the daily task goal by five workdays, then adds any weekly bonus tasks to calculate the total weekly goal.

## Imperial/Metric Converter

The Imperial/Metric Converter allows a user to enter a numeric value and select a conversion type using inch, foot, yard, mile, centimeter, meter, or kilometer. The converter will perform the calculation and then display the result to two decimal places.

### Logic and Pseudocode

BEGIN
    INPUT numeric value
    INPUT conversion choice

    IF conversion choice = "in to cm" THEN
        SET result = numeric value * 2.54
    ELSE IF conversion choice = "ft to cm" THEN
        SET result = numeric value * 30.48
    ELSE IF conversion choice = "yd to m" THEN
        SET result = numeric value * 0.91
    ELSE IF conversion choice = "mi to km" THEN
        SET result = numeric value * 1.61
    ELSE IF conversion choice = "cm to in" THEN
        SET result = numeric value * 0.39
    ELSE IF conversion choice = "cm to ft" THEN
        SET result = numeric value * 0.0328
    ELSE IF conversion choice = "m to yd" THEN
        SET result = numeric value * 1.09
    ELSE IF conversion choice = "km to mi" THEN
        SET result = numeric value * 0.62

    OUTPUT result
END
