import React, { useState, useEffect } from "react";
import { auth, db, provider } from "../config/FirebaseConfig.js";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { Container, Typography, Button, Paper, Box, Card, CardContent, CircularProgress } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setUser(user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
            alert("Google ile giriş başarısız oldu.");
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error(error);
            alert("Çıkış yapılırken hata oluştu.");
        }
    };

    const fetchData = async () => {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "contactForm"));
        const fetchedData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setData(fetchedData);
        setLoading(false);
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated]);

    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
            {isAuthenticated ? (
                <Box component={Paper} elevation={3} sx={{ padding: 3 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Admin Sayfası
                    </Typography>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Button variant="contained" color="secondary" onClick={handleSignOut}>
                            Çıkış Yap
                        </Button>
                    </Box>
                    <Typography variant="body1" align="center" gutterBottom>
                        Hoş geldiniz, {user?.displayName}
                    </Typography>
                    {loading ? (
                        <Box display="flex" justifyContent="center" mt={4}>
                            <CircularProgress />
                        </Box>
                    ) : (

                        <Box display="flex" flexDirection="column" gap={2} mt={3}>
                            {data.length > 0 ? (
                                data.map((item) => (
                                    <Card key={item.id} variant="outlined" sx={{ marginBottom: 2 }}>
                                        <CardContent>
                                            <Typography variant="h6">
                                                <strong>İsim:</strong> {item.name}
                                            </Typography>
                                            <Typography variant="h6">
                                                <strong>Mail:</strong> {item.mail}
                                            </Typography>
                                            <Typography variant="h6">
                                                <strong>Mesaj:</strong> {item.message}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))
                            ) : (
                                <Typography align="center">Gösterilecek veri yok.</Typography>
                            )}
                        </Box>
                    )}
                </Box>
            ) : (
                <Box component={Paper} elevation={3} sx={{ padding: 3 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Admin Sayfası
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="primary" onClick={handleGoogleSignIn}>
                            Google ile Giriş
                        </Button>
                    </Box>
                </Box>
            )}
        </Container>
    );
};

export default AdminPage;
