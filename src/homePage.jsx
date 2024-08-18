// src/HomePage.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, Card, Alert } from 'react-bootstrap';

function HomePage() {
  const [accessToken, setAccessToken] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('access_token');
    if (token) {
      setAccessToken(token);
      setShowPrompt(true);
    } else {
      navigate('/'); // Redirect to home if no token
    }
  }, [location.search, navigate]);

  const handleCaptureImage = () => {
    // Logic to capture image with camera or prompt to upload
    alert('Please capture an image with our logo.');
    // Add your implementation here
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '100%', maxWidth: '600px' }} className="p-4">
        <Card.Body>
          <Card.Title className="text-center mb-4">Home Page</Card.Title>
          {showPrompt ? (
            <div className="text-center">
              <Alert variant="info">
                To complete the process, please capture or upload an image with our logo.
              </Alert>
              <Button variant="primary" onClick={handleCaptureImage}>
                Capture Image
              </Button>
            </div>
          ) : (
            <Alert variant="danger">No access token found. Please log in again.</Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HomePage;
