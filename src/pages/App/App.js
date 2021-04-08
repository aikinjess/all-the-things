import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ManliestThings from "../ManliestThings/ManliestThings";
import FunctionalThings from "../FunctionalThings/FunctionalThings";
import StyledThings from "../StyledThings/StyledThings";
import TexasThings from "../TexasThings/TexasThings"

class App extends Component {
  state = {
    bensThings: [
      {
        name: "banana",
        image:
          "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        attributes: [
          "potassium-rich",
          "yellow when good",
          "not a taco",
          "ring ring ring ring ring ring ring",
        ],
      },
      {
        name: "turkey",
        image:
          "https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: [
          "such gobbles",
          "good when stuffed",
          "not a taco",
          "why gravy exists",
        ],
      },
      {
        name: "taco",
        image:
          "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        attributes: [
          "yummy in my tummy",
          "salsas may vary",
          "definitely a taco",
          "very edible",
        ],
      },
      {
        name: "linux",
        image: "https://i.imgur.com/3BmfSOA.png",
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"],
      },
    ],
    davidsThings: [
      {
        name: "waffle",
        image: "https://i.imgur.com/C3PmdhO.jpg",
        attributes: ["tasty", "fluffy", "breakfast", "yummy"],
      },
      {
        name: "giraffe",
        image: "https://i.imgur.com/qIIVePm.jpg",
        attributes: [
          "tall",
          "cool",
          "fun",
          "animal",
          "(David doesn't acually own a giraffe)",
        ],
      },
      {
        name: "Liam",
        image: "https://i.imgur.com/l2qX34X.jpg",
        attributes: ["fluffy", "happy", "sleepy", "dumb"],
      },
      {
        name: "Poptart®",
        image: "https://i.imgur.com/q9zgcaP.jpg",
        attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"],
      },
    ],
    shahzadsThings: [
      {
        name: "functional programming",
        image: "https://imgs.xkcd.com/comics/functional.png",
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
      {
        name: "React hooks",
        image:
          "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: [
          "useEffect",
          "useState",
          "not a taco",
          "state's best friend",
        ],
      },
      {
        name: "BluBlockers",
        image:
          "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: [
          "very attractive",
          "useful probably!",
          "good for viewing tacos",
          "such hip",
          "worn by all the cool kids",
        ],
      },
      {
        name: "Healthy food",
        image: "https://i.imgur.com/gRxOxsA.jpg",
        attributes: [
          "makes you live a long time",
          "consistent poops",
          "probably tacos sometimes!",
          "farm to market",
        ],
      },
    ],
    christiansThings: [
      {
        name: "camaro",
        image: "https://www.cnet.com/a/img/GMY945JCs9IE0JED4IyM-QzywZI=/1200x630/2017/11/29/16ceac81-c8e6-42e9-8d2a-7ec18ae5e9a3/2018-chevrolet-camaro-ss-1.jpg",  
        attributes: ["fast", "silver", "not a cat",],
      },
      {
        name: "Mavs",
        image: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fhoopshabit.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1192198986.jpeg",
        attributes: ["luka", "porzingis", "not a cat", "NBA"], 
      },
      {
        name: "Cowboy boots",
        image: "https://m.media-amazon.com/images/I/61UgbSKIs4L._AC_UL1400_.jpg",
        attributes: ["sturdy", "leather", "dancing", "worn by all the cool kids except christian"],
      },

    ],
    jessicasThings: [
      {
        name: "favorite food",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["tacos", "mac and cheese", "seafood",],
      },
      {
        name: "favorite shows",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["bates's motel", "power", "sisters"], 
      },
      {
        name: "favorite destinations",
        image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: ["bahamas", "las vegas", "detroit", "dubai"],
      },
      { 
        name: "favorite colors", 
        image: "https://i.imgur.com/gRxOxsA.jpg", 
        attributes: ["pink", "turquoise", "teal", "blue"], 
      },
    ]  
  }; 

  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <>
              {/* All the <a> tags should live here */}
              <h2>All-The-Things</h2>

              <a href="/the-manliest-things">Ben's Things</a><br/>
              <a href="/the-functional-things">Shahzad's Things</a><br/>
              <a href="/the-well-styled-things">David's Things</a><br/>
              <a href="/jessicas-things">Jessica's Things</a><br/>

            </>
          )}
        />
        {/* All the <Route> components should live here */}
        <Route
          exact
          path="/the-manliest-things"
          render={() => <ManliestThings things={this.state.bensThings} />}
        />
        <Route
          exact
          path="/the-functional-things"
          render={() => <FunctionalThings things={this.state.shahzadsThings} />}
        />
        <Route
          exact
          path="/the-well-styled-things"
          render={() => <StyledThings things={this.state.davidsThings} />}
        />
        <Route
          exact
          path="/the-texas-things"
          render={() => <TexasThings things={this.state.christiansThings} />}
        />
         <Route 
          exact path='/jessicas-things'
          render={()=> <StyledThings things={this.state.jessicasThings} />}
        />
      </>
    );
  }
}

export default App;
