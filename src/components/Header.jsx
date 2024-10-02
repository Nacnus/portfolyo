import '../css/Header.css';
import {Button} from "@mui/material";


function Header() {

    const headers = [
        {
            to: '/',
            title: 'Ana Sayfa'
        },
        {
            to: '/projects',
            title: 'Projeler'
        },
        {
            to: '/contact',
            title: 'İletişim'
        },
        {
            to: '#cv',
            title: 'CV'
        },
    ]

    return (
        <div className='header'>
            <div className='left-text'>Yusuf Can Sun</div>
            <div className='right-buttons'>
                {
                    headers.map(header => {
                        return <Button
                            variant="contained"
                            disableElevation
                            className='button-styles'
                            size="small"
                            color='secondary'
                            style={{marginLeft: 5 + 'px'}}
                            key={header.id}
                            href={header.to}
                        >
                            {header.title}
                        </Button>
                    })
                }
            </div>
        </div>
    );
}

export default Header;
