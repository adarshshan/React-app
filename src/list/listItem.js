import Label from "./label";
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
                <Label onAction={onLabelClick} isActive={isActive} />
            </div>
            <hr />
        </div>
    );
}

export default ListItem;