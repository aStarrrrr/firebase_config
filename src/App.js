import { db } from './Firebase/config';
import { collection, getDocs } from "firebase/firestore";

function App() {
  const fetchData = () => {
    getDocs(collection(db, 'products'))
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data());
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <h1>Abhinand</h1>
      <button onClick={fetchData}>Click me</button>
    </div>
  );
}

export default App;
