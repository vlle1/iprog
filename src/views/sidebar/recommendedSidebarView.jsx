export default function sidebarView(props) {
  return (
    <div class="sidebar">
      <h2>Sidebar</h2>

      {/* <div className="form-group">
                <label htmlFor="peopleNr">Number of people</label>
            </div> */}
      <div>
      <div style="font-size: 16px; font-weight: bold; color: white; text-align: center;">
                Filter activities
            </div>
        <div class="search-bar">
          <input id="peopleNr" onChange={onPeopleChangePlusACB} value={props.filterPeople} placeholder="Number of people:" />
        </div>

        <div>
            <select class="search-bar" onChange={onTypeChangePlusACB} name="type" id="types">
              {props.activitesTypes.map(optionsTypesCB)}
            </select>
        </div>

        <div>
            <select class="search-bar" onChange={onPriceChangePlusACB} name="price" id="prices">
              {props.priceInterval.map(optionsTypesCB)}
            </select>
        </div>

        
        
        

        <div className="form-group">
          <button onClick={generateACB}>Generate 10 new</button>
        </div>
      </div>
    </div>
  );

  function generateACB() {
    props.generate()
    
  }

  function onPriceChangePlusACB() {
    var price = document.getElementById("prices").value;
    props.onPriceChange(price)
    
  }


  function onPeopleChangePlusACB() {
    var people = document.getElementById("peopleNr").value;
    props.onPeopleChange(people)
    
  }
  function onTypeChangePlusACB() {
    var type = document.getElementById("types").value;
    props.onTypeChange(type)
  }

  function optionsTypesCB(type) {
    return <option value= {type} >{type}</option>
    
  }

}
