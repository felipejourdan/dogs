import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Dogs - A rede social boa pra cachorro!"
      />
      <Feed />
    </section>
  );
};

export default Home;
