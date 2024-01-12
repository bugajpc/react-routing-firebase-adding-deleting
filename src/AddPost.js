import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import db from "./firebase-config";
function AddPost() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    const handleAddData = async () => {
        const docRef = await addDoc(collection(db, "students"), {
            name: name,
            age: age
        });
        console.log("Document written with ID: ", docRef.id);
    }

    return (
        <div>
            <input placeholder="Name" 
            onChange={(e) => setName(e.target.value)}
            type="text"/>
            <input placeholder="Age" 
            onChange={(e) => setAge(parseInt(e.target.value))}
            type="number"/>
            <div>
                <button onClick={handleAddData}>Add</button>
            </div>
        </div>
    )
}
export default AddPost