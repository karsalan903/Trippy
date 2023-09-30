import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MiscellaneousServicesRoundedIcon from '@mui/icons-material/MiscellaneousServicesRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';

const MenuItems = [
    {
        title : "Home",
        url : "/",
        className : "navLinks",
        icon : <CottageRoundedIcon/>
    },
    {
        title : "About",
        url : "/pages/about",
        className : "navLinks",
        icon : <InfoRoundedIcon/>
    },
    {
        title : "Service",
        url : "/pages/service",
        className : "navLinks",
        icon : <MiscellaneousServicesRoundedIcon/>
    },
    {
        title : "Contact",
        url : "/pages/contact",
        className : "navLinks",
        icon : <ContactsRoundedIcon/>
    },
    {
        title : "Sign up",
        url : "/signup",
        className : "navLinksMobile",
    }
]

export default MenuItems