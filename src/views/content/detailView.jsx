import {router} from "../../VueRoot"
import userPng from '/static/user.png' // user icon
export default function detailView(props){
    return(
    <div class="detailsCard">
        <h1>{props.activity.activity}</h1>
        <div>
            <h2>{props.activity.type.toUpperCase()} ACTIVITY</h2>
            <div><h3>{props.activity.accessibility === "" ? "No info" : props.activity.accessibility <= 0.33 ? "Easy" : props.activity.accessibility <= 0.66 ? "Medium hard" : "Tricky"} to Perform</h3></div>
            <div><h3>Participants: {renderParticipantsACB(props.activity.participants)}</h3></div>
            <div><h3>Price: {props.activity.price == 0 ? "Free" : props.activity.price <= 0.5 ? "Cheap" : "Expensive"}</h3></div>
            <div><h3>{props.activity.link ? "Link: " + props.activity.link : ""}</h3></div>

            <div>
                <button onClick={GoBackACB}>Cancel</button>
            </div>
        </div>
    </div>
    
  
    )
    function GoBackACB() {
        router.go(-1);
    }

    function renderParticipantsACB(participants){
        let participantsArr = [];

        for (let i = 0; i < participants; i++) {
                participantsArr.push(<img key={i} src={userPng} class="participantsPic" />);
        }
        return participantsArr;

    }

}