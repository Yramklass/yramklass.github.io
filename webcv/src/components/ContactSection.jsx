import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Button, Badge, Toast, ToastContainer
} from 'react-bootstrap';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaQrcode, FaShareAlt
} from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import { Tooltip } from 'react-tooltip'; // Updated import

const ContactSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const email = 'yramklass@gmail.com';
  const phone = '+27823691475';
  const websiteUrl = 'https://yramklass.github.io';
  const vcardUrl = `${websiteUrl}/downloads/yashramklass.vcf`;

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMsg(`${label} copied to clipboard!`);
    setShowToast(false);
    setTimeout(() => setShowToast(true), 50);
  };

  const handleShareContact = async () => {
    const contactInfo = {
      title: "Yash Ramklass",
      text: "Contact information for Yash Ramklass",
      url: vcardUrl
    };
    if (navigator.share) {
      try {
        await navigator.share(contactInfo);
        setToastMsg("Thanks for sharing!");
        setShowToast(true);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setToastMsg("Error sharing contact");
          setShowToast(true);
        }
      }
    } else {
      setToastMsg("Sharing not supported on this browser");
      setShowToast(true);
    }
  };

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
      onClick: () => window.open('https://www.linkedin.com/in/yash-ramklass'),
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      tooltip: `Email: ${email}`,
      onClick: () => {
        isMobile ? window.location.href = `mailto:${email}` : handleCopy(email, 'Email');
      },
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      tooltip: `Phone: ${phone}`,
      onClick: () => {
        isMobile ? window.location.href = `tel:${phone}` : handleCopy(phone, 'Phone number');
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
              <div
                className="contact-icon contact-tooltip"
                data-tooltip-content={tooltip}
                onClick={onClick}
                style={{ cursor: 'pointer' }}
              >
                <div className="icon-wrapper">{icon}</div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4 contact-buttons">
          <Button variant="outline-dark" className="me-2" href="/downloads/Yash_CV_2025.pdf" download>
            <FaDownload className="me-1" /> Download CV
          </Button>
          <Button variant="outline-dark" className="me-2" href="/downloads/yashramklass.vcf" download>
            <FaDownload className="me-1" /> Download vCard
          </Button>
          {isMobile ? (
            <Button variant="outline-dark" onClick={handleShareContact}>
              <FaShareAlt className="me-1" /> Share Contact
            </Button>
          ) : (
            <Button variant="outline-dark" onClick={() => setShowQR(!showQR)}>
              <FaQrcode className="me-1" /> {showQR ? 'Hide QR' : 'Show QR'}
            </Button>
          )}
        </div>

        {!isMobile && showQR && (
          <div className="text-center mt-5">
            <QRCodeSVG value={vcardUrl} size={128} />
            <p className="mt-2">Scan to add contact</p>
          </div>
        )}
      </Container>

      <Tooltip
        anchorSelect=".contact-tooltip"
        place="top"
        delayShow={50}
        className="custom-react-tooltip"
      />

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
          background-color: #f8f9fa;
          border: 1px solid #00BFFF;
          color: black;
          font-weight: 500;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          text-align: center;
        }

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

        .contact-section {
          padding-top: 75px;
          padding-bottom: 75px;
        }

        @media (max-width: 768px) {
          .contact-buttons .btn {
            margin-bottom: 10px;
            width: 80%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          .contact-buttons .btn.me-2 {
            margin-right: auto !important;
          }
        }

        .custom-react-tooltip {
  background-color: rgba(0, 0, 0, 0.75) !important;
  color: #fff !important;
  font-weight: 500;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.85rem;
}

      `}</style>
    </div>
  );
};

export default ContactSection;
