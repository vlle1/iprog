export default function sidebarView(props) {

    return (
        <div>
            <h2>Sidebar</h2>
           
            
            
            <div>
                <label htmlFor="peopleNr">Number of people</label>
                <input id="peopleNr" value="" />
            </div>

            <div>
                <label htmlFor="priceFilter">Price:</label>
                <input type="range" id="priceFilter" name="price" min="0" max="10000" value="10000" />
            </div>
            <div >
                <label for="numOfResults">Number of results wanted:</label>
                <input id="numOfResults"value=""> Number of results wanted</input>
            </div>
            <div >
                <button  onClick ={priceFilterCB} > Search</button>
            </div>
        </div>
    )

    


    
    function priceFilterCB(event) {
        var price = document.getElementById("priceFilter").value;
        var numOfResults = document.getElementById("numOfResults").value;

        newSeachACB(4, price, numOfResults)
        console.log(props.filteredActivitesList)

        
    }
    function newSeachACB(people, price, numOfResults) {
        props.filteredActivitesFunc(people, price, numOfResults)
    }
   

}