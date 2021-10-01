import React from "react";

class SearchBar extends React.Component{
    state = {term : ''}
    onFormSubmit = (event) => {
       event.preventDefault();
       this.props.onSubmit(this.state.term)
    }
    

    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={(event)=>this.onFormSubmit(event)} className='ui form'>
                    <div className='field'>
                        <label>Image search</label>
                    <input type='text' value={this.state.term} onChange={(e) => this.setState({term:e.target.value})} placeholder="Search"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;