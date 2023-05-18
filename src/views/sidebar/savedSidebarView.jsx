export default function sidebarView(props) {

    return (
        <div class="sidebar">

            <h2>Sidebar</h2>
            <div>
            <div style="font-size: 16px; font-weight: bold; color: white; text-align: center;">
                Find a saved activity
            </div>
                <div class="search-bar">
                <input id="peopleNr" onChange={onPeopleChangePlusACB} value={props.filterPeople} placeholder="Number of people:" />
            </div>

            <div>
                <select class="search-bar"  onChange={onTypeChangePlusACB}  name="type" id="types">
                {props.activitesTypes.map(optionsTypesCB)}
                </select>
            </div>
            
            <div>
                <select class="search-bar" onChange={onPriceChangePlusACB} name="price" id="prices">
                {props.priceInterval.map(optionsTypesCB)}
                </select>
                <button onClick={resetACB} >Reset</button>
            </div>
               

          
            </div>
            <div>
            <div class="ownActivity">
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
    function onPeopleChangePlusACB() {
        var people = document.getElementById("peopleNr").value;
        props.onPeopleChange(people)
    }
    function optionsTypesCB(type) {
        return <option value= {type} >{type}</option>
        
      }
      function onPriceChangePlusACB() {
        var price = document.getElementById("prices").value;
        props.onPriceChange(price)
        
    }

    function onTypeChangePlusACB() {
        var type = document.getElementById("types").value;
        props.onTypeChange(type)
      }

      function resetACB() {
        props.onReset()
      }


    function AddActivityCB(){
        var newPeople= document.getElementById("peopleNr2").value;
        var newType= document.getElementById("type").value;
        var newPrice= document.getElementById("Price").value;
        var newLink= document.getElementById("link").value;
        var newName= document.getElementById("name").value;
        var newAccessibility= document.getElementById("accesibility").value;
        //console.log(newPrice)
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