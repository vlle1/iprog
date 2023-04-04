import { BASE_URL } from "./apiConfig";
export async function generatorActivity() {
    const url_string= BASE_URL
    const options= {
        method: 'GET',
        headers:{}
    }
    return fetch(url_string,options)
    .then(processResponseToJsonACB)
}
function processResponseToJsonACB(response) {
    if(!response.ok) {
        throw Error("Wrong query.");
    }
    return response.json()
     
}
export async function recomendedActivities() {
    return generatorActivity().then(getActvityACB)
    
}
//for filter
export async function generatorActivityFilter(people, price) {
    if (people != null & price != null) {
        let query = "participants=1&price<=price"
        
    }



    const url_string= BASE_URL
    const options= {
        method: 'GET',
        headers:{}
    }
    return fetch(url_string,options)
    .then(processResponseToJsonACB)
}

export async function recomendedActivitiesFilter() {
    return generatorActivityFilter().then(getActvityACB)
    
}

function getActvityACB(activity) {
    return activity
}