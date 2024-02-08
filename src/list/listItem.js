import Label2 from "./label2";
import './listItem.css';
function ListItem(props) {
    const { title, descr, isActive, onDelete,onLabelClick} = props;
    return (
        <div className="list-item">
            <hr />
            <div className="list-title">
                <h4>{title}</h4>
                <label onClick={onDelete}>Delete</label>
            </div>
            <div className="list-desc">
                {descr}
            </div>
            <div className="list-label">
                <Label2 onAction={onLabelClick} isActive={isActive} />
            </div>
            <hr />
        </div>
    );
}

export default ListItem;