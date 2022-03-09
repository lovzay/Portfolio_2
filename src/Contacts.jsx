import React from 'react';
import { Box, Heading } from 'grommet';
import {  MailOption,  Linkedin, Github } from 'grommet-icons';

const Contacts = () => {    
    return ( 
      <div id='contacts' style={{paddingTop:'30px'}}> 
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
              <Heading level='3'><MailOption color='#444444' size='medium' /> Contacts</Heading>
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
                 <MailOption color='#444444' size ='large'/>
              </Box>
              <Box                           
                 pad='medium' 
                 fill='horizontal'
                 align='start'
                 width='xlarge' 
                 justify='start'    
             >                                                
                <p>
                  leyble.alvin.int@gmail.com
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
              <Linkedin color='#444444' size='large'/>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                 <a href='https://www.linkedin.com/in/alvin-leyble-1411a0228/' rel="noreferrer" target='_blank'>Linkedin</a>
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
              <Github color='#444444' size='large'/>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                 <a href='https://github.com/lovzay/' rel="noreferrer" target='_blank'>GitHub</a>
             </p>
           </Box>  
        </Box>  
        </Box>           
      </Box>
      </div>
    )}

export default Contacts;