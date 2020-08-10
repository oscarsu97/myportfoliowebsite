import React, {Component} from 'react';
import profile_photo_japan from './img/profile_photo_japan.jpg';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <img 
                        src={profile_photo_japan} 
                        alt="profile-photo" 
                        className="profile-photo"
                        />
                        <p style={{ fontSize: '30px', width: '100%', margin: 'auto', paddingTop: '1em', fontFamily: 'Meriwether'}}>
                        OPEN FOR INTERNSHIP OPPORTUNITY!
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope-square" aria-hidden="true"/>
                                    oscarsu@u.nus.edu
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    zhenhuanghuang97@gmail.com
                            </ListItemContent>
                            </ListItem>
                        
                            <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <div>
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/oscar-s-261a52a5/"  rel="noopener noreferrer" target="_blank">
                                https://www.linkedin.com/in/oscar-s-261a52a5/
                                 </a>
                                </div>
                                </ListItemContent>  
                            </ListItem>
                        </List>
                    </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;