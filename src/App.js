import React from 'react';
import { Box, Grid, Grommet, ResponsiveContext } from 'grommet';
import MinMenu from './MinMenu';
import MainMenu from './MainMenu';
import About from './About';
import Experience from './Experience';
import ObjectiveSkills from './ObjectiveSkills';
import Certificates from './Certificates';
import Contacts from './Contacts';

  const App = () => {  
      return (
         <Grommet> 
         <ResponsiveContext.Consumer>
         {size => (
           
               <Grid 
                  rows={['xxsmall', 'fill']}
                  columns={[size !== 'small' ? 'small' : 'none'  , 'auto']}
                  gap='small'
                  areas={[
                     { name: 'header', start: [0, 0], end: [1, 0], fill: true },
                     { name: 'nav', start: [0, 1], end: [0, 1],  fill: true } ,
                     { name: 'main', start: [1, 1], end: [1, 1], fill: true },
                  ]}
               >                                       
                <Box  
                   full direction='row'
                   align='end'
                   justify='between'
                   background='#3f1052'
                   pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                   margin={{ top: 'none' }}
                   elevation='medium'
                   style={{ zIndex: '1', position: 'fixed', width:'100%', top: '0px', left: '0px', lineHeight: '20px'}}
                   gridArea='header'
                >
                   <Box flex  width='small' style={{lineHeight: '25px'}}><span className='headertext'>Resume </span> </Box>{size=== 'small' && ( <MinMenu /> )} 
                </Box>  

                {size !== 'small' &&  (          
                
                  <MainMenu />

                )}
               
                <Box 
                   flex 
                   pad={{ left: 'small', right: 'small', vertical: 'large' }} 
                   align = 'stretch' 
                   gridArea='main' 
                >
                <div>
                  
                   {/* --- About Section --- */}
                   <About size={size}/>  
                  {/* --- Experience Section --- */}  
                  <Experience />

                  {/* --- ObjectiveSkills Section --- */}  
                  <ObjectiveSkills/> 

                  {/* --- Certificates Section --- */}          
                  <Certificates />

                  

                  {/* --- Contacts Section --- */}
                  <Contacts />
                  
                  
                </div>
                </Box>
                
                
                </Grid>
                
                )}
               </ResponsiveContext.Consumer>
               </Grommet>
               
    
        )}

export default App;
