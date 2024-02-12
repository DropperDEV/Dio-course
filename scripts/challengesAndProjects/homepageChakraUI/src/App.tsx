import { useState } from "react";
import { Layout } from "./components/Layout";
import { Card } from "./components/Card";
import { IMockData } from "./interface/data";
import "./reset.css";
import { Login } from "./components/Login";

const staticData: IMockData = {
  id: 414,
  details: "Programador assíduo",
  paragraph: "Ele que faz acontecer, não deixa levar pela onda",
};

function App() {
  const [loginShow, setLoginShow] = useState<boolean>(false);

  return (
    <Layout>
      {loginShow ? (
        <Card
          id={staticData.id}
          paragraph={staticData.paragraph}
          details={staticData.details}
        />
      ) : (
        <Login setLoginShow={setLoginShow} />
      )}
    </Layout>
  );
}

export default App;
