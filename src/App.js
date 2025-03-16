import { db } from './Firebase/config';
import { collection, getDocs, addDoc } from "firebase/firestore";

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
  

  return (
    <div>
      <h1>Abhinand</h1>
      <button onClick={fetchData}>Click me</button>
      <button onClick={writeData}>Click me</button>
    </div>
  );
}

export default App;
