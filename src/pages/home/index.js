import React from "react";

import Header from "../../components/header";
import Form from "./form";
import List from "./list";
import Presentation from "./presentation";

function Home(props) {
  return (
    <div>
      <Header />
      <Presentation />
      <Form />
      <List />
    </div>
  );
}

export default Home;
