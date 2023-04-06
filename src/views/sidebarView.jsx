export default function sidebarView(props) {

    return (
        <div class="sidebar">
            <h2>Search Filter</h2>
           
            
            
            {/* <div className="form-group">
                <label htmlFor="peopleNr">Number of people</label>
            </div> */}
            <div class="search-bar">
                <input id="peopleNr" value="" placeholder="Number of people:"/>
            </div>
            <div class="search-bar">
                <input id="numOfResults"value="" placeholder="Number of results:"/>
            </div>

            <div class="search-bar">
                <label htmlFor="priceFilter">$</label>
                <input type="range" id="priceFilter" name="price" min="0" max="10000" value="10000" />
                <label>$$$</label>
            </div>
            
            <div className="form-group">
                <button  onClick ={priceFilterCB} >Filter</button>
            </div>
        </div>
    )

    


    
    function priceFilterCB(event) {
        var people = document.getElementById("peopleNr").value;
        var price = document.getElementById("priceFilter").value;
        var numOfResults = document.getElementById("numOfResults").value;

        newSeachACB(people, price, numOfResults)
        console.log("priceFilterCB: "+props.filteredActivitesList)

        
    }
    function newSeachACB(people, price, numOfResults) {
        props.filteredActivitesFunc(people, price, numOfResults)
    }
   

}