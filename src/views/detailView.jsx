export default function detailView(props){
    return(
    <div>
        {console.log(props.activity)}
        <h1>{props.activity.activity}</h1>
        <div>Acessibility: {props.activity.accesibility}</div>
        <div>Type: {props.activity.type}</div>
        <div>Participants: {props.activity.participants}</div>
        <div>Price in euros: {props.activity.price}</div>
        <div>Link:{props.activity.link}</div>
    </div>
  
    )

}