// src/WifiLogin.js
import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function WifiLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'user' && password === 'password') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Invalid credentials');
        }
    };

    const handleInstagramLogin = () => {
        window.location.href = 'http://localhost:5000/auth/instagram';
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="login-card">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Wi-Fi Login</Card.Title>
                    {!isLoggedIn ? (
                        <Form onSubmit={handleSubmit}>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Log In
                            </Button>
                        </Form>
                    ) : (
                        <div>
                            <h4>Welcome, {username}!</h4>
                            <p>You are now connected to the Wi-Fi.</p>
                        </div>
                    )}
                    <Button variant="secondary" onClick={handleInstagramLogin}>
                        Log In with Instagram
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default WifiLogin;
