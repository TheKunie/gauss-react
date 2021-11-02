import React, { Component } from 'react';
import Display from '../display/Display';
import Input from '../input/Input';





    function Preview() {

        return(
            <div className="row">
                <div className="col">
                    <Display input={this.state.eq1}/>
                </div>  
                <div className="col">
                    <Display input={this.state.eq1}/>
                </div>  
                <div className="col">
                    <Display input={this.state.eq1}/>
                </div>  
            </div>
        );
    }


export default Preview;