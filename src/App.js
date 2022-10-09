import './App.css';
import DisplayData from './components/DisplayData';
import Post from './components/Post';

const initialData = {
  human: {
      sex: "man",
      surname: "Detic",
  },
  accountBalance: 1000
}

function App() {
  return (
    <div className="App">
      <DisplayData props={initialData}/> {/*Zadanie 1*/}
      <Post/> {/*Zadanie 2*/}
    </div>
  );
}

export default App;
