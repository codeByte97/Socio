// src/CaptureImage.js
import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function CaptureImage() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate image (e.g., check if it contains the logo)
      setImage(URL.createObjectURL(file));
      setError('');
    } else {
      setError('Please select an image.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to verify the image contains the logo
    alert('Image submitted successfully.');
    // Add further actions here
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '100%', maxWidth: '600px' }} className="p-4">
        <Card.Body>
          <Card.Title className="text-center mb-4">Upload Your Image</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Select Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
            </Form.Group>
            {image && (
              <div className="text-center mb-3">
                <img src={image} alt="Preview" style={{ maxWidth: '100%' }} />
              </div>
            )}
            <Button variant="primary" type="submit">
              Submit Image
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CaptureImage;
