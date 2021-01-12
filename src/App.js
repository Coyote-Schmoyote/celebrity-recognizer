import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Logo from './Component/Logo/Logo.js';
import Navigation from './Component/Navi/Navigation.js';
import ImageLinkForm from './Component/Form/ImageLinkForm.js';
import CelebName from './Component/CelebName/CelebName.js'
import Clarifai from 'clarifai';
import FaceRecognition from './Component/Face/FaceRecognition.js';

const app = new Clarifai.App({
  apiKey: 'cd0654d3d8654d08868ec03017d7e85a'
});

const initialState = {
  input: "",
  imageUrl: "",
  results: [],
};

const particleOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};


class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }

    transformResponse = (response) => {
      const celebName = response.outputs[0].data.regions[0].data.concepts[0].name;
    
      this.setState({results: celebName});
    };

    onInputChange = (event) => {
      this.setState({ input: event.target.value });  
    };

    onSubmit = () => {
      this.setState({ imageUrl: this.state.input });
      app.models
      .predict(
        Clarifai.CELEBRITY_MODEL,
        this.state.input)
        .then((response) => this.transformResponse(response))
          .catch((err) => console.log(err));
    };
       
  render () {
    let { imageUrl, results } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions} 
          />
        <Navigation />  
        <Logo />
        <CelebName results = {results}/>
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}
          />
        <FaceRecognition 
          imageUrl={imageUrl}    
          />
        </div>
   );
  }
};

export default App;
