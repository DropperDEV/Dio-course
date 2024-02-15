import { useState } from "react";
import { Layout } from "./components/Layout";
import { Card } from "./components/Card";
import "./reset.css";
import { Login } from "./components/Login";


function App() {
  const [loginShow, setLoginShow] = useState<boolean>(false);

  return (
    <Layout>
      {loginShow ? (
        <Card
        />
      ) : (
        <Login setLoginShow={setLoginShow} />
      )}
    </Layout>
  );
}

export default App;
