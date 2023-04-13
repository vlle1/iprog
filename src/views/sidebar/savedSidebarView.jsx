export default function sidebarView(props) {

    return (
        <div class="sidebar">

            <h2>Sidebar</h2>
            <div class="rectangle2">
            <div style="font-size: 16px; font-weight: bold; color: black; text-align: center;">
                Find a saved activity
            </div>
                <div class="search-bar">
                    <input id="peopleNr" value="" placeholder="Number of people:" />
                </div>

                <div class="search-bar">
                    <label htmlFor="priceFilter">$</label>
                    <input type="range" id="priceFilter" name="price" min="0" max="10000" value="10000" />
                    <label>$$$</label>
                </div>

                <div className="form-group">
                    <button onClick={priceFilterCB} >Filter</button>
                </div>
            </div>
            <div class="rectangle3">
            <div style="font-size: 16px; font-weight: bold; color: black; text-align: center;">
                Add your own activity
            </div>
            <div class="search-bar">
                    <input id="name" value=""  placeholder="Name your activity:" />
            </div>
            <div class="search-bar">
                    <input type="number" id="peopleNr2" value="" min="0" placeholder="Number of people:" />
            </div>
            <div class="search-bar">
                    <input  id="type" value=""  placeholder="Type of activity" />
            </div>
            <div class="search-bar">
                    <input type="number" id="Price" value=""  min="0" placeholder="Price in euros" />
            </div>
            <div class="search-bar">
                    <input id="link" value="" placeholder="Link:" />
            </div>
            <div class="search-bar">
                    <input type="number" id="accesibility" min="0" value="" placeholder="Accessibility:" />
            </div>
                <button onClick={AddActivityCB} >Add</button>

            </div>
        </div>
    )


    function AddActivityCB(){
        var newPeople= document.getElementById("peopleNr2").value;
        var newType= document.getElementById("type").value;
        var newPrice= document.getElementById("Price").value;
        var newLink= document.getElementById("link").value;
        var newName= document.getElementById("name").value;
        var newAccessibility= document.getElementById("accesibility").value;
        console.log(newPrice)
        const newActivity = {
        activity: newName,
        type: newType,
        participants: newPeople,
        price: newPrice,
        link: newLink,
        accessibility: newAccessibility
        };
        props.saveNewActivity(newActivity);

        document.getElementById("peopleNr2").value = "";
        document.getElementById("type").value = "";
        document.getElementById("Price").value = "";
        document.getElementById("link").value = "";
        document.getElementById("name").value = "";
        document.getElementById("accesibility").value = "";
    }
    

    function priceFilterCB(event) {
        var people = document.getElementById("peopleNr").value;
        var price = document.getElementById("priceFilter").value;


        newSeachACB(people, price)


    }
    function newSeachACB(people, price) {
        props.filteredSavedActivitesFunc(people, price)
    }


}