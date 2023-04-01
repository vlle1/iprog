export default function PromiseNoData(props) {
    if (!props.promise) {
        return (
            <div>
            no data
            </div>
        );
    }
    if (!props.data && !props.error) {
        return (
            <img src="https://cdn-images-1.medium.com/max/800/0*4Gzjgh9Y7Gu8KEtZ.gif">
            </img>
        );
    }
    if (props.error) {
        return (
            <div>
            {props.error.error}
            </div>
        );
    }
    return false;
}