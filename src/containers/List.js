import React, { Component, Fragment } from 'react'
import Card from '../components/Card/Card';

export default class List extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            search: "",
            error: ""
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Search" 
                                onChange={e => this.setState({search: e.target.value})}
                                autoFocus 
                                value={this.state.search}
                            />
                        </form>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.data.map(e => 
                            <Card key={e.imdbID} movie={e}/>
                        )
                    }
                    <p className="text-white">{this.state.error}</p>
                    
                </div>
            </Fragment>
        )
    }

    fetchData = async (search) => {
        try{
            const res = await fetch(`${process.env.API}&s=${search ? search : 'batman'}`);
            const data = await res.json();
            if(data.Search){
                this.setState({
                    data: data.Search,
                    error: ""
                })
            }else{
                this.setState({
                    data: [],
                    error: "No results"
                })
            }
        }catch(err){
            this.setState({
                data: [],
                error: "No results"
            })
        }
        
    }

    handleSubmit = e => {
        e.preventDefault();
        this.fetchData(this.state.search)
        this.setState({
            search: ""
        })
    }
}
