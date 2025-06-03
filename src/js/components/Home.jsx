import React, { useEffect, useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoItem from "./todoitem"; TodoItem

//create your first component
const Home = () => {
	const [todo,settodo] = useState("");
	const [name, setname] = useState("");
	const [lists, setlists] = useState([]);
	const deletelist = (idx) =>{
		const tempLists= lists.toSpliced(idx, 1);
		localStorage.setItem("library", JSON.stringify(tempLists));
		setlists(tempLists);
		
	}


	
	return (
	  <div className="card">
 		<div className="card-body">
    	  <form
		  onSubmit={(ev) => {
			ev.preventDefault();
			setlists([...lists, {todo, name}]);
			settodo("");
			setimportance("");
		  }}>
			<input 
			 className ="form-control" 
			 id= "todo"
			 type="text" 
			 placeholder="What do I need to do?" 
			 aria-label="todo" 
			 value={todo} 
			 onChange={(ev) => settodo(ev.target.value) }/>
           	<input
             className="form-control"  
			 id= "name"
             type="text"
             placeholder="who needs to do the todo?"
             aria-label="name"
             value={name}
             onChange={(ev) => setname(ev.target.value) }/>
			<div className="mb-2">
			   <button className= "btn btn-primary" type="submit">Add task</button>
			</div>
		  </form>
		  <div>
			{lists.map((list, idx) => (
                <TodoItem list= {list} showDelete onDelete={() => deletelist(idx)} key={idx}/>
            ))}
		  </div>
        </div>
		 <div class="card-footer text-body-secondary">
			you have {lists.length} tasks to do
			</div>
      </div>
	);
};


export default Home;