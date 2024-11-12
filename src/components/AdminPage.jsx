import React, { useState, useEffect } from "react";
import { auth, provider } from "../config/FirebaseConfig.js";  // Firebase config import ediliyor
import { signInWithPopup , onAuthStateChanged, signOut } from "firebase/auth";
import { Container, Typography, Button, Paper, Box } from "@mui/material";

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Firebase'deki oturum durumunu kontrol et
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
            // Google ile giriş işlemini bekleyin
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            setUser(user); // Kullanıcıyı state'e set et
            setIsAuthenticated(true); // Giriş durumunu güncelle
        } catch (error) {
            console.error(error);
            alert("Google ile giriş başarısız oldu.");
        }
    };

    const handleSignOut = async () => {
        try {
            // Çıkış işlemini bekleyin
            await signOut(auth);

            setUser(null); // Kullanıcıyı null olarak set et
            setIsAuthenticated(false); // Giriş durumunu güncelle
        } catch (error) {
            console.error(error);
            alert("Çıkış yapılırken hata oluştu.");
        }
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 4 }}>
            {isAuthenticated ? (
                <Box component={Paper} elevation={3} sx={{ padding: 3 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Admin Sayfası
                    </Typography>
                    <Typography variant="body1" align="center">
                        Hoş geldiniz, {user?.displayName}
                    </Typography>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Button variant="contained" color="secondary" onClick={handleSignOut}>
                            Çıkış Yap
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box component={Paper} elevation={3} sx={{ padding: 3 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Google ile Giriş Yap
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
