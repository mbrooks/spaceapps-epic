import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Rotation from 'react-rotation'

class EpicView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const apiKey = 'Z8p5L30ZCOXLVclsjOwnUbqIErPviUlF6TyjvEMn';
    fetch(`https://api.nasa.gov/EPIC/api/enhanced/images?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  returnImageUrl(image) {
    const baseUrl = 'https://epic.gsfc.nasa.gov/archive/enhanced';
    const date = new Date(image.date);
    const dateString = dateFormat(date,'yyyy/mm/dd');
    return `${baseUrl}/${dateString}/png/${image.image}.png`;
  }

  renderImage(imageData) {
    const imageUrl = this.returnImageUrl(imageData);

    return (
      <div key={imageData.image}>
        <img src={imageUrl} style={{ height: 700 }} alt='' />
        <p>{imageData.date}</p>
      </div>
    )
  }

  render() {
    console.log(this.state.data);
    const { data } = this.state;

    if (!data) {
      return null;
    }

    return (
      <div>
      <Rotation>
        {data.map(image => this.renderImage(image))}
      </Rotation>
      {this.props.name}
      </div>
    );
  }

}

export default EpicView;
