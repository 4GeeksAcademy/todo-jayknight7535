const TodoItem = ({list, showDelete= false, onDelete}) => {
    return (
        <div className="flex-d">
            <div className="d-flex">
                <div className="mb-3 d-flex">
                  <div>{list?.todo ? list.todo: "nothing to do"}</div>  
                  <div className ="name">{list?.name ? list.name: "you"}</div>
                  <div>
                    {showDelete ? (
                  <button type="button" className="btn-close" aria-label="Close tastk" onClick={onDelete}></button>) : ("")}
                   </div>
                </div> 
            </div>
        </div>
    );
}
//
export default TodoItem