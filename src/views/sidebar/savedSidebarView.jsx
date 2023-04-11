export default function sidebarView(props) {

    return (
        <div class="sidebar">
            <h2>Search in your<br/>Saved Activites</h2>
           
            <div class="search-bar">
                <input id="peopleNr" value="" placeholder="Number of people:"/>
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
      

        newSeachACB(people, price)

        
    }
    function newSeachACB(people, price) {
        props.filteredSavedActivitesFunc(people, price)
    }
   

}