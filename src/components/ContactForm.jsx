import React, { useState, useEffect } from "react";
import {Button, TextField, Container, Typography, Alert, Stack, Box} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { submitContactForm } from "../config/FirebaseConfig.js"; // Firebase fonksiyonunu içe aktarın
import Grid from '@mui/material/Grid';

// Doğrulama şeması
const validationSchema = Yup.object({
    name: Yup.string().required("İsim zorunludur"),
    email: Yup.string().email("Geçerli bir e-posta girin").required("E-posta zorunludur"),
    message: Yup.string().required("Mesaj zorunludur"),
});

const ContactForm = () => {
    const [open, setOpen] = useState(false);

    const handleFormSubmit = async (values, { resetForm }) => {
        await submitContactForm(values.name, values.email, values.message);
        resetForm();
        setOpen(true);

        setTimeout(() => {
            setOpen(false);
        }, 5000);
    };

    return (
        <Container maxWidth="sm" className="mb-4" >
            <Typography
                fontWeight="bold"
                align="center"
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ alignItems: "center" }}
            >
                İletişim Formu
            </Typography>
            <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="İsim"
                                    name="name"
                                    variant="outlined"
                                    margin="normal"
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="E-posta"
                                    name="email"
                                    variant="outlined"
                                    margin="normal"
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </Grid>
                        </Grid>
                        <Field
                            as={TextField}
                            fullWidth
                            label="Mesaj"
                            name="message"
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={4}
                            error={touched.message && Boolean(errors.message)}
                            helperText={touched.message && errors.message}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Gönder
                        </Button>
                    </Form>
                )}
            </Formik>
            {open && (
                <Box
                    sx={{
                        position: "fixed",
                        bottom: 16,
                        right: 16,
                        zIndex: 1000,
                    }}
                >
                    <Alert severity="success" onClose={() => setOpen(false)}>
                        Form başarıyla gönderildi!
                    </Alert>
                </Box>
            )}
        </Container>
    );
};

export default ContactForm;
