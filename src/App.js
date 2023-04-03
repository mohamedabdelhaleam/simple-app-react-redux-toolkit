
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import './App.css'


function App() {


  return (
    <div className="app">

        <Header />
        <div className="main">
          <Sidebar />
          <Form />
        </div>
    </div>
  );
}

export default App;
