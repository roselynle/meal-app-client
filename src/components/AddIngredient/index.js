import React, {useState} from "react";


// function AddIngredient(){
//     return(
// //        <>
// //             <input type='text'/>
// //             <label for="units">Choose a unit:</label>
// //             <select id="units" name="units">
// //                 <option value="grams">grams</option>
// //                 <option value="ml">ml</option>
// //                 <option value="cups">cups</option>
// //             </select>
// //             <input type='button' value="save"/>
// //    </>

      
//     )
// }


function AddIngredient ({ addIngredient }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        
        addIngredient(value);
        setValue("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new ingredient"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}


export default AddIngredient;