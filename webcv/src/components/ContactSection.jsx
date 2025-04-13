import React, { useState } from 'react';
import {
  Container, Row, Col, Button, OverlayTrigger, Tooltip,
  Badge, Toast, ToastContainer
} from 'react-bootstrap';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaQrcode
} from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';

const ContactSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [showQR, setShowQR] = useState(false);

  const email = 'yramklass@gmail.com';
  const phone = '+27823691475';

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMsg(`${label} copied to clipboard!`);
    setShowToast(false); // Reset first to retrigger toast
    setTimeout(() => setShowToast(true), 50); // Small delay to force rerender
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const contactItems = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      tooltip: 'View GitHub',
      onClick: () => window.open('https://github.com/yramklass'),
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      tooltip: 'View LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/yash-ramklass-a34109208/'),
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      tooltip: `Email: ${email}`,
      onClick: () => {
        if (isMobile) {
          window.location.href = `mailto:${email}`;
        } else {
          handleCopy(email, 'Email');
        }
      },
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      tooltip: `Phone: ${phone}`,
      onClick: () => {
        if (isMobile) {
          window.location.href = `tel:${phone}`;
        } else {
          handleCopy(phone, 'Phone number');
        }
      },
    },
  ];

  return (
    <div id='contact' className="bg-white text-dark contact-section">
      <Container>
        <h2 className="text-center mb-2">GET IN CONTACT</h2>
        <p className="text-center mb-4">
          <Badge bg="success">Open to work</Badge>
        </p>

        <Row className="justify-content-center">
          {contactItems.map(({ icon, label, tooltip, onClick }, idx) => (
            <Col xs={6} sm={4} md={3} className="mb-4 d-flex justify-content-center" key={idx}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`tooltip-${label}`}>{tooltip}</Tooltip>}
              >
                <div className="contact-icon" onClick={onClick} style={{ cursor: 'pointer' }}>
                  <div className="icon-wrapper">{icon}</div>
                </div>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button variant="outline-dark" className="me-2" href="/downloads/Yash_CV_2025.pdf" download>
            <FaDownload className="me-1" /> Download CV
          </Button>
          <Button variant="outline-dark" className="me-2" href="/downloads/yashramklass.vcf" download>
            <FaDownload className="me-1" /> Download vCard
          </Button>
          <Button variant="outline-dark" onClick={() => setShowQR(!showQR)}>
            <FaQrcode className="me-1" /> {showQR ? 'Hide QR' : 'Show QR'}
          </Button>
        </div>

        {showQR && (
          <div className="text-center mt-3">
            <QRCodeSVG value="https://yramklass.github.io/downloads/yashramklass.vcf" size={128} />
            <p className="mt-2">Scan to add contact</p>
          </div>
        )}
      </Container>

      <ToastContainer
  position="bottom-center"
  className="p-3"
  style={{
    zIndex: 9999,
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
  }}
>
  <Toast
    show={showToast}
    onClose={() => setShowToast(false)}
    delay={2500}
    autohide
    className="custom-toast"
  >
    <Toast.Body>{toastMsg}</Toast.Body>
  </Toast>
</ToastContainer>

<style>{`
  .custom-toast {
    background-color:#lightgrey; /* soft blue */
    border: 1px solid #00BFFF;
    color: black;
    font-weight: 500;
    border-radius: 10px;
    padding: 0.75rem 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    text-align:center;
  }
`}</style>


      {/* Inline Styling */}
      <style>{`
        .contact-icon {
          width: 100px;
          height: 100px;
          background-color: #f8f9fa;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .contact-icon:hover {
          transform: scale(1.05);
          background-color: #e9ecef;
        }

        .contact-icon:hover .icon-wrapper {
          color: #00BFFF;
        }

        .icon-wrapper {
          font-size: 2rem;
          color: #212529;
          transition: color 0.4s ease;
        }

        .contact-section{
            padding-top: 75px;
            padding-bottom: 75px;
        }
      
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
