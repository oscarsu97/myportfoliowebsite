import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p style={{fontSize: "25px"}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>
                        <b>{this.props.jobName}</b>
                    </h4>
                    <p style={{fontSize: "17px"}}>
                        {this.props.jobDescription}
                     </p>
                </Cell>
            </Grid>
            )
    }
}

export default Experience;