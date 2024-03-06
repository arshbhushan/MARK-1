import React ,{useState} from 'react';
import {Link} from 'react-scroll';
import Logo from "../Assets/Logow-nobg.png";
//import {BsCart2} from 'react-icons/bs';
import {HiOutlineBars3} from 'react-icons/hi2';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
//import CommentRoundedIcon from '@mui/icons-material/CommentRounded'; //for reviews if we add later
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';





const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false);
    const menuOptions=[
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About Us",
            icon:<InfoIcon/>
        },{
          text:"Our Goals",
          icon:<InfoIcon/>
      },
        {
            text:"Product",
            icon:<HomeIcon/>
        },
        {
            text:"Contact Us",
            icon:<PhoneRoundedIcon/>
        },
 
    ]

  return (
    <>

     <nav >
        <div className='nav-logo-container'>
        <img src={Logo} alt=''/>
        </div>
        <div className='navbar-links-container'>

        <Link to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</Link>
        <Link to="goals" spy={true} smooth={true} offset={50} duration={500} >Goals</Link>
        <Link to="product" spy={true} smooth={true} offset={50} duration={500} >Product</Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact Us</Link>
                </div>
        <div>
        {/* <button className='primary-button'>Get Started</button> */}

        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={()=>{setOpenMenu(true)}}/>
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
     </nav>

    </>
  )

}

export default Navbar