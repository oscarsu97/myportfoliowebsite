import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profile_photo_cny from './img/profile_photo_cny.jpg';

class Resume extends Component {
    render() {
        return(
            <div className="resume-grid">
                <Grid>
                    <Cell col={3}>
                    <div style={{textAlign: 'center'}}>
                    <img 
                        src={profile_photo_cny} 
                        alt="profile-photo" 
                        className="profile-photo"
                        style= {{height: '300px', width:'300px', marginTop: '75%'}}
                        />
                        
                        </div>

                        <h3 style={{textAlign: 'center', fontFamily: "Merriweather"}}><b>Oscar Su Zhen Hong</b></h3>
                        
                        
                    </Cell>
                    <Cell className="resume-right-col" col={9}>
                        <h2>Education</h2>
                        <Education 
                        startYear={"Aug 2018"}
                        endYear={"present"}
                        schoolName="National University of Singapore"
                        degreeDescription="Bachelor of Computing (Computer Science), Honours"
                        gradDate="May 2022"
                        specialisation="Artificial Intelligence"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience
                        startYear={"Apr 2016"}
                        endYear={"Feb 2018"}
                        jobName="Singapore Armed Forces, Combat Engineer(CBRD) Specialist"
                        jobDescription="Undergoes rigorous training exercises to be ready for real time chemical threats"
                        />     
                        
                        <Experience
                        startYear={"May 2020"}
                        endYear={"July 2020"}
                        jobName="NUS Advanced Robotics Centre, Computer Vision Intern"
                        jobDescription="Developed a computer vision model that is capable of learning an object of interest with visual learning and speech recognition for training social robots to support nurses in their daily operations"
                        />

                           

                        <hr style={{borderTop: '3px solid #e22947'}} />
              
                        <h2>Skills</h2>
                        <Skills
                        skill="Java"
                        progress={90}/>

                        <Skills
                        skill="Python"
                        progress={85}/>
                        
                        <Skills
                        skill="OpenCV"
                        progress={85}/>

                        <Skills
                        skill="HTML"
                        progress={90}/>

                        <Skills
                        skill="CSS"
                        progress={85}/>

                        <Skills
                        skill="JavaScript"
                        progress={70}/>

                        <Skills
                        skill="React"
                        progress={75}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;