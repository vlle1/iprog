export default function detailView(props){
    return(
    <div> {console.log("DETAIL VIEW:" + props)}
        {console.log("DETAIL VIEW ACTIVITIES:" + props.activity)}
        <h1>{props.activity.activity}</h1>
        <div>Accessibility: {
            props.activity.accessibility === "" ? "No info" : props.activity.accessibility
        }</div>
        <div>Type: {props.activity.type}</div>
        <div>Participants: {props.activity.participants}</div>
        <div>Price in euros: {props.activity.price}</div>
        <div>Link: {props.activity.link ? props.activity.link : "No info"}</div>

        <div>
        <button onClick={GoBackACB}>Cancel</button>
        </div>
    </div>
    
  
    )
    function GoBackACB() {
        window.location.hash="#/"
    }

}