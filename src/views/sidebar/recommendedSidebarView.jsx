export default function sidebarView(props) {
  return (
    <div class="sidebar">
      <h2>Sidebar</h2>

      {/* <div className="form-group">
                <label htmlFor="peopleNr">Number of people</label>
            </div> */}
      <div class="rectangle">
      <div style="font-size: 16px; font-weight: bold; color: black; text-align: center;">
                Find a saved activity
            </div>
        <div class="search-bar">
          <input id="peopleNr" value="" placeholder="Number of people:" />
        </div>
        <div class="search-bar">
          <input id="numOfResults" value="" placeholder="Number of results:" />
        </div>

        <div class="search-bar">
        <label for="typeOf">Choose type of activity</label>
            <select name="type" id="types">
              {props.activitesTypes.map(optionsTypesCB)}
            </select>
        </div>
        

        <div class="search-bar">
          <label htmlFor="priceFilter">$</label>
          <input
            type="range"
            id="priceFilter"
            name="price"
            min="0"
            max="10000"
            value="10000"
          />
          <label>$$$</label>
        </div>
        

        <div className="form-group">
          <button onClick={priceFilterCB}>Filter</button>
        </div>
      </div>
    </div>
  );

  function priceFilterCB(event) {
    var people = document.getElementById("peopleNr").value;
    var price = document.getElementById("priceFilter").value;
    var numOfResults = document.getElementById("numOfResults").value;
    var type = document.getElementById("types").value;

    newSeachACB(people, price, numOfResults,type);
  }
  function newSeachACB(people, price, numOfResults,type) {
    props.filteredActivitesFunc(people, price, numOfResults,type);
  }

  function optionsTypesCB(type) {
    /*
    let types = [];
    //for saved activites
    
    for (let index = 0; index < props.recommendedActivities.length; index++) {
      try {
        let type = props.recommendedActivities[index].data.type
        if (!types.includes(type)) {
          types.push(type)
          
        }
      }catch (error) {
        //pass
      }

    }
    */
    return <option value= {type} >{type}</option>
    

    
  }
  function optionElementCB(type) {
    return <option value= {type} >{type}</option>
    
  }
}
