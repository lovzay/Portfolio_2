import React from 'react';
import { Box, Heading } from 'grommet';
import { Flag  } from 'grommet-icons';

const Experience = () => {    
    return (
      <div id='experience' style={{paddingTop:'30px'}}>
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
            <Heading level='3'> <Flag color='#444444' size='medium' /> Experience </Heading>
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
              align='center' 
              width='medium' 
              justify='start'   
              background='light-4' 
           >
               <strong>02/2022 – Till now</strong>
           </Box>

            <Box 
               pad='medium' 
               fill='horizontal'
               align='start'
               width='xlarge' 
               justify='start'    
            >
               <strong>Symph.co</strong>                         
               <p>
                  QA Intern involved in various projects<br />
               </p>
            </Box> 
         </Box>    
         
         </Box>            
      </Box>
      </div>
    )}

export default Experience;
