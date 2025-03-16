import { db } from './Firebase/config';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";

function App() {
  const fetchData = () => {
    getDocs(collection(db, 'products'))
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data(),doc.id);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  const writeData = () => {
    addDoc(collection(db, "products"), {
      name: "Laptop",
      price: 50000,
      category: "Electronics"
    })
    .then((docRef) => {
      console.log("Document added with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  };
  // Update Data
  const updateData = (docId) => {
    updateDoc(doc(db, "products", docId), { price: 45000 })
    .then(() => {
      console.log(`Document with ID ${docId} updated successfully.`);
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
  };

  // Delete Data
  const deleteData = (docId) => {
    deleteDoc(doc(db, "products", docId))
    .then(() => {
      console.log(`Document with ID ${docId} deleted successfully.`);
    })
    .catch((error) => {
      console.error("Error deleting document: ", error);
    });
  };

  return (
    <div>
      <h1>Abhinand</h1>
      <button onClick={fetchData}>Get</button>
      <button onClick={writeData}>Add</button>
      <button onClick={() => updateData("49fcp3qdNpohsTeuNZpu")}>Update Product</button>
      <button onClick={() => deleteData("your_document_id_here")}>Delete Product</button>
    </div>
  );
}

export default App;
