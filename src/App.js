import React, { Component } from 'react';
import './App.css';
import SignIn from './Component/SignIn/SignIn.js';
import Register from './Component/Register/Register.js';
import Particles from 'react-particles-js';
import Logo from './Component/Logo/Logo.js';
import Navigation from './Component/Navi/Navigation.js';
import ImageLinkForm from './Component/Form/ImageLinkForm.js';
import CelebName from './Component/CelebName/CelebName.js'
import Clarifai from 'clarifai';
import FaceRecognition from './Component/Face/FaceRecognition.js';
import FaceComparison from './Component/Comparison/FaceComparison.js';

const app = new Clarifai.App({
  apiKey: 'DUMBLEDORE'
});

const initialState = {
  input: "",
  imageUrl: "",
  results: [],
  route: "SignIn",
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

const particleOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800,
      },

    }
      }
    }

class App extends Component{
  constructor() {
    super();
    this.state = initialState;
  }

    transformResponse = (response) => {
      const clarifaiResults = response.outputs[0].data.regions[0].data.concepts[0].name;
    
      const results = clarifaiResults.map((ingredient) => ({
        ingredients: ingredient.name,
        probablitiy: ingredient.value,
      }));

      this.setState({results: results.celebrityName});
    
      return {results: []};
    };

  onInputChange = (event) => {
    this.setState({input: event.target.value});

  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.CELEBRITY_MODEL,
      this.state.input)
      .then(response => {
        console.log(response.outputs[0].data.regions[0].data.concepts[0].name)
        if (response) {
          fetch ('http://localhost:3000', {
            method: 'post',
            headers: {'Conent-Type' : 'application/json'},
            body: JSON.stringify({
              input: this.state.user.input
            })
          })
          .then((response) => response.json)
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries:count}))
          })
          console.log(response.json);
        }
        this.transformResponse(response.json());
      })
      .catch(err => console.log(err));
        

      };  
         
      ;



    onRouteChange = (route) => {
      if (route === 'signout'){
        this.setState({isSignedIn: false})
      } else if (route ==='home'){
        this.setState({isSignedIn: true})
      }
      this.setState({route: route});
    }

  render() { 
    let { isSignedIn, imageUrl, route, results} = this.state;
    return (
      <div className="App">
            <Particles className='particles'
             params={particleOptions} 
             />
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            { route ==='home'  
              ? <div>
                  <Logo />
                  <CelebName 
                   results = {results}/>
                  <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onSubmit={this.onSubmit}
                    />
                    <FaceRecognition 
                    imageUrl={imageUrl}    
                  />
                  <FaceComparison 
                    results = {results}
                  />
                </div>
              : (
                    route === 'SignIn' 
                  ? <SignIn onRouteChange={this.onRouteChange}/>
                  : <Register />
              )
               
            }
      </div>
    );
  };
}

export default App;
