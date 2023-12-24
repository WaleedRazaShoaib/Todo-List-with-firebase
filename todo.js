import {
    auth,
    signOut,
    getFirestore,
    collection,
    addDoc,
    db,
    doc,
    onSnapshot,
    query,
    orderBy,
    updateDoc,
    serverTimestamp,
    getDocs,
    setDoc,
    deleteDoc

}
    from "./firebase.js"

// ALL IDS GET TO SHOW THE SIMPLE ALL WORK INNER HTML

let userinput = document.getElementById("userinput");
let allwork = document.getElementById("allwork");
let btnwork = document.getElementById("btnwork")

// FUNCTION TO ADD WORK ON EMPTY DIV ON HTML

const getdata = () => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (res) => {
        // console.log(res.docs)
        res.docs.forEach(element => {
            // console.log(element.data());
            allwork.innerHTML += `
            <div class="container" >
            <h2 style="margin-top:5px;">${element.data().todo}</h2>
    <input type="text" id="updatevalue" class ="updateInput" placeholder="Write the Edit Todo"style ="display:none;">
    <span class="edit">
    <button style ="display:none;"  onclick="updates(this)" class ="btnwork">UPDATE</button>
    <button class ="btnwork" onclick="edit(this)">EDIT</button>
    <button onclick="deleted(this)" class = "btnwork"> DELETE</button>
    </span>
    </div>
    `
        });
    });

}


getdata()
const addtodo = () => {
    if (userinput.value.trim() !== "") {
        try {
            const docRef = addDoc(collection(db, "todos"), {
                todo: userinput.value
            });
            // console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    // AND IF CONDITION IS NOT RUNING ELSE CONDITION RUN
    else {
        Swal.fire({
            icon: "error",
            title: "First You Add The Todo",
            text: "Add First todo",
        });
    }
    userinput.value = ""
}

btnwork.addEventListener("click", addtodo)

// FUNCTION TO EDIT THE TODO VALUE
let editvaluebtn = document.getElementById("editvaluebtn");
const edit = (e) => {
    let mybtnUpdate = e.parentNode.parentNode.childNodes[5].childNodes[1]
    let mybtnEdit = e.parentNode.parentNode.childNodes[5].childNodes[3]
    let myUpdateInp = e.parentNode.parentNode.childNodes[3]
    mybtnUpdate.style.display = "block";
    myUpdateInp.style.display = "block";
    mybtnEdit.style.display = "none";
    // console.log(e.parentNode.parentNode.childNodes[1].childNodes[0].nodeValue)
}

window.edit = edit;


// FUNCTION TO UPDATE THE TODO  VALUE 
const updates = async (o) => {

    const ref = collection(db, "todos");
    const querySnapshot = await getDocs(ref);
    const documents = querySnapshot.docs;
    const docId = documents[0].id;
    console.log("docId", docId)
    console.log(o.parentNode.parentNode.childNodes[3].value);
     o.parentNode.parentNode.childNodes[3].value 
    // Stop listening to changes
    if (updatevalue.value !== "") {
        const washingtonRef = doc(db, "todos", docId);
        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
            todo: o.parentNode.parentNode.childNodes[3].value,
        });
    }
    else {
        Swal.fire({
            icon: "error",
            title: "PLEASE WRITE SOMETHING TO UPDATE VALUE",
        });
    }

    let myUpdateInp1 = o.parentNode.parentNode.childNodes[3];
    let mybtnEdit1 = o.parentNode.parentNode.childNodes[5].childNodes[3]
    let mybtnUpdate1 = o.parentNode.parentNode.childNodes[5].childNodes[1]
    myUpdateInp1.style.display = "none";
    mybtnEdit1.style.display = "block";
    mybtnUpdate1.style.display = "none";
    updatevalue.value = "";
}
window.updates = updates;

// FUNCTION TO DELETE THE VALUE OF TODO
const deleted = async (l) => {
    const ref = query(collection(db, "todos"),);
    const querySnapshot = await getDocs(ref);
    const documents = querySnapshot.docs;
    const docId = documents[0].id;
    await deleteDoc(doc(db, "todos", docId));
    let allremove = l.parentNode.parentNode;
    allremove.remove();
}
window.deleted = deleted;
//  orderBy("timestamp", "desc")

var as = 12;
console.log(as)