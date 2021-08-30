import Header from "./components/header";
import React,{useState,useEffect} from "react";
import Card from "./components/card";
import Loader from "./components/Loader";
import Axios from "axios"
import "./app.css"

function App() {
  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState(null)
  const [isLoader, setIsLoader] = useState(false);

  const getUsers = () => {
    
    setIsLoader(true);
    Axios.get("https://reqres.in/api/users?page=1").then((response) => {
      console.log("api data recieved");
      setData(response.data.data);
      setIsLoader(false);
    });
  };

  useEffect(() => {
    isClicked && getUsers()
  }, [isClicked])

  return (
    <div className="App">
      <Header onSetIsClicked={setIsClicked} />
      <div className="row">
        
        {data &&
          data.map((val)=>{
            return(
              <Card
                first_name={val.first_name}
                last_name={val.last_name}
                email={val.email}
                avatar={val.avatar} />
            );
          })}
      </div>
      <Loader show={isLoader} />
    </div>
  );
}

export default App;
