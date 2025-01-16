// Replace date format from 12-12-2024 to 12/12/2024

function replaceDateFormat() {
  let date = "12-12-2024";
  date = date.replaceAll("-", "/");

  console.log('After date modified: ',date);
}
replaceDateFormat();
