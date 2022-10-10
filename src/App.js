import './App.css';
import DisplayData from './components/DisplayData';
import Post from './components/Post';
import Table from './components/Table';

const data = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
      }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
  }
}

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
      <DisplayData props={initialData} /> {/*Zadanie 1*/}
      <Post /> {/*Zadanie 2*/}
      <Table props={data} /> {/*Zadanie 3*/}
    </div>
  );
}

export default App;
