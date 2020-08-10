import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        
                    <div className="banner-text">
                        <h1>Oscar Su Zhen Hong</h1>
                        
                        <hr/>
                        
                        <p>Penultimate student at National University of Singapore</p>
                    
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;