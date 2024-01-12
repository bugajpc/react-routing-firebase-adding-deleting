import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import db from "./firebase-config";
function Posts() {
    const [list, setList] = useState([])

    useEffect(() => {fetchData()},[])

    const fetchData = async () => {
        console.log("wykonalo sie")
        let newList = []
        const querySnapshot = await getDocs(collection(db, "students"));
            querySnapshot.forEach((doc) => {
            const student = {
                id: doc.id,
                name: doc.data().name,
                age: doc.data().age
            }
            newList.push(student)
            console.log(doc.id, " => ", doc.data());
        });
        setList(newList)
    }

    const deleteStudent = async (id) => {
        console.log("wykonalo sie")
        await deleteDoc(doc(db, "students", id));
        let newList = list.filter((item) => item.id != id)
        setList(newList)
    }

    return (
        <div>
            <ul>
                {list.map( (item, index) => (
                    <li key={index}>{item.id} - {item.name} - {item.age}
                    <button onClick={() => deleteStudent(item.id)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}
export default Posts