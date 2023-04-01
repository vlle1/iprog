export default function SearchActivityView(props) {
return(
    <div>

        {props.activityResults.map(displayActivitiesCB)}
    </div>

)
function displayActivitiesCB(activityResult){
   {console.log(activityResult)}
    return <span key={activityResult.data.key} class="searchResultDiv">
        <div onClick={MoreInformationACB}>{activityResult.data.activity}</div>
        <button onClick={SaveActivityACB}>Save</button>
    </span>
    function SaveActivityACB() {
        props.saveActivity(activityResult.data)
    }
    function MoreInformationACB(){
        props.getActivity(activityResult.data)
    }

}

}