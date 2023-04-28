export const handleAddFilters = (filterDate, filterName, filterLocation) => {
  const params = { date: "", name: "", location: "" };
  const dateRegEx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  let toastMessage = "";

  if (dateRegEx.test(filterDate) && filterDate !== "") {
    params.date = filterDate;
    toastMessage += "Added Date Filter: " + params.date + "\n";
  }

  if (filterName !== "") {
    params.name = filterName;
    toastMessage += "Added Name Filter: " + params.name + "\n";
  }
  if (filterLocation !== "") {
    params.location = filterLocation;
    toastMessage += "Added Location Filter: " + params.location + "\n";
  }


  return { params, toastMessage };
};
