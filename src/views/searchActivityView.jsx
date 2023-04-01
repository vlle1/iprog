export default function SearchActivityView(props) {
return(
    <div>

        {props.activityResults.map(displayActivitiesCB)}
    </div>

)
function displayActivitiesCB(activityResult){
    if (activityResult && activityResult.data) {
        return <span>
            
            <div onClick={MoreInformationACB}>{activityResult.data.activity}</div>
            <button onClick={SaveActivityACB}>Save</button>
        </span> }
    function SaveActivityACB() {
        
        props.saveActivity(activityResult.data)
    }
    function MoreInformationACB(){
        
        props.getActivity(activityResult.data)
        window.location.hash="#/details"
    }

}

}