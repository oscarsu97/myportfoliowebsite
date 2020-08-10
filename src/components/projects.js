import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="project-grid">
                {/* Orbital */}
                <div>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <div>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://1000logos.net/wp-content/uploads/2016/10/Android-Logo.png)', backgroundSize:'contain' }}>
                        </CardTitle>
                        <CardText style={{textAlign: 'center'}}>
                            Mobile App Development Project
                        </CardText>
                    </div>
                    <CardActions border>
                        <Button colored href="https://github.com/oscarsu97/orbital">Github</Button>
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                    </CardMenu>
                </Card>
                </div>

                {/*Computer Vision*/}
                <div>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://st2.depositphotos.com/1192512/6870/v/450/depositphotos_68706365-stock-illustration-woman-eye-logo-beauty-symbol.jpg', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    </CardTitle>
                    <CardText style={{textAlign: 'center'}}>
                        Computer Vision Project
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://www.dropbox.com/s/u9du168vm5sr4lg/strawberry.mp4?dl=0" target="_blank">Video Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                    </CardMenu>
                </Card>
                </div>    

                {/* Software Engineering Project*/}
                <div>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(data:image/png;base64,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', backgroundPosition: 'center'}}>
                    </CardTitle>
                    <CardText style={{textAlign: 'center'}}>
                        Software Engineering Project
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/oscarsu97/main" target="_blank">Github</Button>
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                    </CardMenu>
                </Card>
                </div>
            </div>
            )
        } 
        // else if (this.state.activeTab === 1) {
        //     return (
        //         <div><h1>This is Angular</h1></div>
        //     )
        // }    
    }

    render() {
        return(
            // <div className="category-tabs">
            //     <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            //     <Tab>React</Tab>
            //     <Tab>Angular</Tab>
            //     <Tab>VueJS</Tab>
            //     <Tab>MongoDB</Tab>
            //     </Tabs>
                <div>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </div>
        )
    }
}

export default Project;