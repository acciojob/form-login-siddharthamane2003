function getFormvalue() {
  // prevent form from reloading the page
  event.preventDefault();

  // Access the form
  const form = document.forms["form1"];

  // Get values of fname and lname
  const fname = form["fname"].value.trim();
  const lname = form["lname"].value.trim();

  // Concatenate and show alert
  const fullName = fname + " " + lname;
  alert(fullName);
}
