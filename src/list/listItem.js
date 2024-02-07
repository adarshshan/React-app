import Label from "./label";
import './listItem.css';
function ListItem(props) {
    return (
        <div className="list-item">
            <hr />
            <div className="list-title">
                <h4>{props.title}</h4>
            </div>
            <div className="list-desc">
                {props.descr}
            </div>
            <div className="list-label">
                <Label onAction={()=>alert('parent clicked.')} isActive={props.isActive} />
            </div>
            <hr />
        </div>
    );
}

export default ListItem;