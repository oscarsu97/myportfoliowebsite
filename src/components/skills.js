import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProgressBar from './Progress';

class Skill extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div className="progress" style={{float: "left", marginRight: "5px", width: "15%"}}>
                    <span style={{fontSize: '20px'}}>{this.props.skill}</span>
                    </div>
                    <div>
                    <ProgressBar color={'red'} width={'500px'} value={this.props.progress} max={100}/>
                    </div>
                </Cell>
               
            </Grid>
            )
    }
}

export default Skill;