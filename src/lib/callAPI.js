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
export async function generatorActivityFilter(people,priceMinx, priceMax,type) {

  let toggle= 0;
  let query= ""

  if ((people != "") & (type == "All")) {
  
    toggle = 1;
    query = "?participants="+people+ "&minprice="+priceMinx+ "&maxprice="+priceMax;
  }
  if ((people == "") & (type == "All")) {
   
    toggle = 1;
    query = "?minprice="+priceMinx+ "&maxprice="+priceMax;
  }

  if ((people == "") & (type != "All")) {
   
    toggle = 1;
    query = "?type="+type+"&minprice="+priceMinx+ "&maxprice="+priceMax;
  }

  if ((people != "") & (type != "All")) {

    toggle = 1;
    query = "?type="+type+"&participants="+people+"&minprice="+priceMinx+ "&maxprice="+priceMax;
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

export async function recomendedActivitiesFilter(people,priceMin, priceMax,type) {
  return generatorActivityFilter(people, priceMin,priceMax ,type).then(getActvityACB);
}

function getActvityACB(activity) {
  return activity;
}
