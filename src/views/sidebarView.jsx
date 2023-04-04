export default function sidebarView(props) {

    return (
        <div>
            <h2>Sidebar</h2>
           
            <label for="priceFilter">Price:</label>
            <input type="range" id="priceFilter" name="price" min ="0" max = "10000" value ="10000" > Price</input>
            
            <label for="numOfResults">Number of results wanted:</label>
            <input id="numOfResults"value=""> Number of results wanted</input>
            
            <button onClick ={priceFilterCB} > Search</button>

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