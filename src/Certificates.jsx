import React from 'react';
import { Box, Heading } from 'grommet';
import { Certificate, Workshop, Amazon, Windows } from 'grommet-icons';

const Certificates = () => {    
    return (  
      <div id='certificates' style={{paddingTop:'30px'}}>     
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
              
             <Heading level='3'> <Certificate color='#444444' size='medium' /> Education</Heading>
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
              <Heading level='4'><Workshop color='#444444' />  Education</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                UNIVERSITY OF SANTO TOMAS, SENIOR HIGH SCHOOL <br />
                SCIENCE, TECHNOLOGY, ENGINEERING & MATHEMATICS <br />
                2016 - 2018<br />
                Learned basic HTML and CSS in the course Empowerment Technologies

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
              <Heading level='4'><Workshop color='#444444' />  Education</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                 UNIVERSITY OF SANTO TOMAS <br />
                 BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY <br/>
                 2018 - 2022 <br />
                 Learned to work in a team environment setup as a QA in a DevOps team and was able to develop android apps, website, and webapps
             </p>
           </Box>  
        </Box>  
        </Box>           
      </Box>
      </div>  
    )}

export default Certificates;