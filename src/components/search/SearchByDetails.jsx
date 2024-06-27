import React from "react";
export class SearchByDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'search'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   
    event.preventDefault();
   alert(this.state.value)
  }

  render() {
    return (


        <div className="container">  
        <div className="white text-neutral-900">
          <div className="block">
<form className="form " onSubmit={this.handleSubmit}>
    <div className="xleft">
  <label className="head" htmlFor="head">Years</label>
  <select className="section" value={this.state.value} onChange={this.handleChange}>
       
        <option value="Year">Year</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
    </select>
    </div>
    <div className="xleft">
    <label className="head" htmlFor="head">Brand</label>
    <select className="section" value={this.state.value} onChange={this.handleChange}>
        
        <option value="Year">None</option>
        <option value="2024">TOYOTA</option>
        <option value="2023">KIA</option>
        <option value="2022">BOUGATTI</option>
        <option value="2021">FELLARY</option>
        <option value="2020">BENZ</option>
        <option value="2019">Ford</option>
    </select>
    </div>
    <div className="xleft">
    <label className="head" htmlFor="head">Model</label>
    <select className="section" value={this.state.value} onChange={this.handleChange}>
       
        <option value="models"> <b>Models</b></option>
        <option value="2024">Sedan</option>
        <option value="2023">Van</option>
        <option value="2022">DeckApo</option>
        <option value="2021">V8</option>
        <option value="2020">TXL</option>
        <option value="2019">Carina E</option>
    </select>
   </div>
   <div className="xleft">
    <button className="button ">Submit</button>
     </div>
</form>
</div>
</div>
</div>
    );
  }
}