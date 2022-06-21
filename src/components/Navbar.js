import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import '../App.css';

// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import { TextField } from "@material-ui/core";
import ReactDOM from 'react-dom';
import Cards from './Cards';
import {useNavigate} from 'react-router-dom';
import Badge from '@mui/material/Badge';
import {Link} from 'react-router-dom';
import RegLink from '@mui/material/Link';


// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// export default function NavTabs({children}) {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
//         <LinkTab label="Page One" href="/drafts" />
//         <LinkTab label="Page Two" href="/trash" />
//         <LinkTab label="Page Three" href="/spam" />
//       </Tabs>
//       {children}
//     </Box>
//       );
//     }
export default function TemporaryDrawer({children}) {
  const navigate = useNavigate()

  
  const [state, setState] = React.useState({
    top: true,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{fontSize: 40, color:"white", backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://img.freepik.com/free-photo/astrology-horoscope-pattern-texture-background-graphic-design_41691-3225.jpg?w=900')",     backgroundSize: 'cover', flexGrow: 1}}>

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 550 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List >
        {
        [{label:'Home', path:'/'}, 
        {label:'Daily Horoscope', path:'/horoscopes'},
        {label:'Tarot Reading', path:'/tarot'},
        {label:'Edit Profile', path:'/edit'},

        {label:'Logout', path:'/logout'},
        {label:'Login', path:'/login'},
        {label:'Register', path:'/register'},
        ].map((text, index) => (
          <ListItem  key={text.label} >
            
            <Link to={text.path} style={{display:"flex", color:"white", textDecoration:'none', fontSize:"30px"}}>
              
              <ListItemText primary={text.label} />
            </Link>
          </ListItem>
        ))}
      </List> 
      </Box>  
      </Box>  

  );

  return (
    <div>
      {[ 'Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {children}
    </div>
  );
};