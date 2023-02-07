import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go Study",
      desc: "You need to study"
    }
  ]
  return (
  <>
    <Header title = "My ToDos List"/>
    <Todos/>
    <Footer/>
  </>
  );
}

export default App;
