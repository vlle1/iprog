export default function sidebarView(props) {

    return (
        <div>
            <h2>Sidebar</h2>
           
            
            
            <div className="form-group">
                <label htmlFor="peopleNr">Number of people</label>
            </div>
            <div className="form-group">
                <input id="peopleNr" value="" />
            </div>

            <div className="form-group">
                <label htmlFor="priceFilter">Price:</label>
                <input type="range" id="priceFilter" name="price" min="0" max="10000" value="10000" />
            </div>
            <div className="form-group">
                <label for="numOfResults">Number of results wanted:</label>
                <input id="numOfResults"value=""> Number of results wanted</input>
            </div>
            <div className="form-group">
                <button  onClick ={priceFilterCB} > Search</button>
            </div>
        </div>
    )

    


    
    function priceFilterCB(event) {
        var people = document.getElementById("peopleNr").value;
        var price = document.getElementById("priceFilter").value;
        var numOfResults = document.getElementById("numOfResults").value;

        newSeachACB(people, price, numOfResults)
        console.log(props.filteredActivitesList)

        
    }
    function newSeachACB(people, price, numOfResults) {
        props.filteredActivitesFunc(people, price, numOfResults)
    }
   

}