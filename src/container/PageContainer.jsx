import React from 'react';
import {Container} from "@mui/material";

function PageContainer({children}) {
    return (
        <Container maxWidth='lg' sx={{marginTop:'5%'}}>{children}</Container>
    );
}

export default PageContainer;
