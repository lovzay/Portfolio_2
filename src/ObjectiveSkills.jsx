import React from 'react';
import { Box,Heading } from 'grommet';
import { Waypoint, Code, Database, Desktop, Js, Language, Checkbox, Checkmark, Capacity, Optimize } from 'grommet-icons';

const ObjectiveSkills = () => {    
    return (
      <div id='ObjectiveSkills' style={{paddingTop:'30px'}}>
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
               <Heading level='3'> <Waypoint color='#444444' size='medium' /> ObjectiveSkills </Heading>
            </Box>
            <Box
               flex                        
               pad='medium' 
               fill='horizontal'
               align = 'center'                      
               elevation='large'
               background='light-3' 
               width='xlarge' 
               justify='center'                    
            >        
            <Box 
               margin={{ left: 'none', right: 'none', vertical: 'small' }}
               direction='row-responsive'
               background='light-2' 
               elevation='medium'
               style={{width:'80%'}} 
            >  
           <Box 
               pad='medium' 
               align='start' 
               width='medium' 
               justify='center'  
               background='light-4' 
           >
              <Heading level='4'><Checkmark color='#444444' /> Main Objectives</Heading>
           </Box>
           <Box                           
               pad='medium' 
               fill='horizontal'
               align='start'
               width='xlarge' 
               justify='start'    
           >                                                
              <p>
                To expand my skills and contribute to a reputable workplace <br />
                To gain first-hand insight on how blockchain development and DevOps work in the industry <br />
                To work in a dynamic, passionate team <br />
             </p>
           </Box>  
        </Box>  
        <Box 
           margin={{ left: 'none', right: 'none', vertical: 'small' }}
           direction='row-responsive'
           background='light-2' 
           elevation='medium'
           style={{width:'80%'}} 
        >  
           <Box 
              pad='medium' 
              align='start' 
              width='medium' 
              justify='center'  
              background='light-4' 
           >
            <Heading level='4'><Optimize color='#444444' />Core Strengths</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
               <p>
               Exceptional communication and networking skills <br />
               Punctual on the tasks given with my skills on multi-tasking and can work under pressure<br />
               Able to work independently and in a team environment<br />
               </p>
           </Box>  
        </Box>
        <Box 
           margin={{ left: 'none', right: 'none', vertical: 'small' }}
           direction='row-responsive'
           background='light-2' 
           elevation='medium'
           style={{width:'80%'}} 
        >  
           <Box 
               pad='medium' 
               align='start' 
               width='medium' 
               justify='center'  
               background='light-4' 
           >
              <Heading level='4'><Desktop color='#444444' />Hobbies and Skills</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
              Blockchain Technology<br />
              NFTs <br />
              Stock/Crypto Trading<br />
              Data Science<br />
              QA Testing<br />
                Programming<br />
                Esports<br />
                PC Building & Troubleshooting
             </p>
           </Box>  
        </Box>  
        

        </Box>
           
      </Box>
      </div>
    )}

export default ObjectiveSkills;