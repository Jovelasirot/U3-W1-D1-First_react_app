import logo from "./img/dogecoin-logo.png";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div>
            <ImageComponent
              imgSrc="https://cdn.compro-oro-e-argento.it/ressources_v4/images/pieces/ag/dogecoin-1oz-piece-argent-crypto-idee-cadeau1.webp"
              imgAlt="Coin One"
            />
          </div>
          <div>
            <ButtonComponent textBtn="Press for Silver" styleBtn="btn" />
          </div>
          <div>
            <ImageComponent
              imgSrc="https://www.simplilearn.com/ice9/free_resources_article_thumb/Shyamli/Dogecoin.png"
              imgAlt="Coin Two"
            />
          </div>
          <div>
            <ButtonComponent textBtn="Press for Gold" styleBtn="btn" />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
