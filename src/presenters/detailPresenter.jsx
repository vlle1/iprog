import DetailView from "../views/content/detailView";

export default {
    name: "Details",
    props: ["model"],
    setup(props) {
       
       
    

        return function renderACB(props) {
            return(

              (<DetailView activity={props.model.currentActivity}/>)
            ) 

        }
    }

}