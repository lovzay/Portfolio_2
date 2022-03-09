import React from 'react';
import { Box, Heading, } from 'grommet';
import { UserExpert } from 'grommet-icons';
import photo from './resume_photo.jpg';

const About = (props) => {    
  
    return (      
      <div id='about' style={{paddingTop:'65px'}}><big><strong>Aspiring QA Engineer</strong></big><br/>
      {(props.size ==='small' || props.size ==='medium') && <div align='center'><img src={photo} alt = 'Bogdan Samoletskyi' width='207' height='207' /></div>}
        <Box
            margin={{ left: 'none', right: 'none', vertical: 'large' }}>
              <Box
                 flex
                 pad={{ left: 'medium', right: 'small', vertical: 'none' }}
                 fill='horizontal'
                 align = 'start'                       
                 elevation='large'
                 background='#669bbc' 
                 width='large' 
                 style={{width:'100%'}}                    
              >
                <Heading level='3'> <UserExpert color='#444444' size='medium' /> About </Heading>
              </Box>
              <Box 
                 direction='row'
                 background='light-3'                                              
                 elevation='large'>
              <Box
                flex
                 pad='medium' 
                 fill='horizontal'
                 align = 'start' 
                 width='xlarge' 
                 justify='start'         
              >                 
                 <big><strong>Always open for new opportunities and challenges to make the world better.</strong></big>
                 
                 <p>
                 A 23 year old web development major aspiring to expand my skills and knowledges outside my academic background. <br />Looking to enhance my skills in digital solutions wherein I could also convert my hobbies, strengths, and skills into reality. <br />
              

              </p>                    
              </Box>
              {(props.size !=='small' && props.size !=='medium') && (
              <Box 
                pad={{ left: 'medium', right: 'none', vertical: 'medium' }}
              >
                   <img src={photo} alt = 'Bogdan Samoletskyi' width='207' height='207'/>
              </Box>
               )}
              </Box>                   
              </Box>  
         </div>
    )}

    export default About;
