import { BASE_URL } from "./apiConfig";
export async function generatorActivity() {
  const url_string = BASE_URL;
  const options = {
    method: "GET",
    headers: {},
  };
  return fetch(url_string, options).then(processResponseToJsonACB);
}
function processResponseToJsonACB(response) {
  if (!response.ok) {
    throw Error("Wrong query.");
  }
  return response.json();
}
export async function recomendedActivities() {
  return generatorActivity().then(getActvityACB);
}
//for filter
export async function generatorActivityFilter(people, price,type) {


  let toggle= 0;
  let query= ""

  if ((people != "") & (type == "All")) {
    toggle = 1;
    query = "?participants="+people+"&maxprice="+price;
  }
  if ((people == "") & (type == "All")) {
    toggle = 1;
    query = "?maxprice="+price;
  }

  if ((people != "") & (type != "All")) {
    toggle = 1;
    query = "?type="+type+"&participants="+people+"&maxprice="+price
  }

  let url_string = BASE_URL + query;
  const options = {
    method: "GET",
    headers: {},
  };

  if (toggle ==1) {
    url_string="https://www.boredapi.com/api/activity" + query
    
  }



 
  return fetch(url_string, options).then(processResponseToJsonACB);
}

export async function recomendedActivitiesFilter(people, price,type) {
  return generatorActivityFilter(people, price,type).then(getActvityACB);
}

function getActvityACB(activity) {
  return activity;
}
