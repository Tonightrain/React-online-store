import React from 'react';

class AddCommodity extends React.Component{
    constructor(props){
        super(props);
        this.state={
          name:"",
          price:"",
          unit:"",
          img:"",
        }
      }

      handleSubmit = (event) => {
        alert(JSON.stringify(this.state));
        event.preventDefault();
      }

    handlePriceChange = (event)=>{
        this.setState({
            price:event.target.value,
        })
    }
    handleNameChange = (event)=>{
        this.setState({
            name:event.target.value,
        })
    }
    handleUnitChange = (event)=>{
        this.setState({
            unit:event.target.value,
        })
    }
    handleImgChange = (event)=>{
        this.setState({
            img:event.target.value,
        })
    }
    render(){
        return(
            <form className="addCommodity" onSubmit={this.handleSubmit}>
                <h1>添加商品</h1>
                <label>*名称</label><br></br>
                <input type="text" 
                value={this.state.value} 
                onChange={this.handleNameChange} 
                placeholder="名称" />
                <label>*价格</label><br></br>
                <input type="text" value={this.state.value} onChange={this.handlePriceChange} placeholder="价格" />
                <label>*单位</label><br></br>
                <input type="text" value={this.state.value} onChange={this.handleUnitChange} placeholder="单位" />
                <label>*图片</label><br></br>
                <input type="text" value={this.state.value} onChange={this.handleImgChange} placeholder="图片" />
                <input type="submit" 
                value="Submit" 
                style={{width:"160px",height:"40px"}}
                disabled={!this.state.name ||!this.state.gender ||!this.state.description ||!this.state.choose}
                onClick={this.handleSubmit}></input>
            </form>
        )
    }
    
}

export default AddCommodity;