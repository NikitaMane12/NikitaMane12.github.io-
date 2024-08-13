import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1 style={{ color: "white" }}>Nikita Mane</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://github.com/NikitaMane12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.61.4.07.55-.17.55-.39 0-.19-.01-.84-.01-1.52-2.01.43-2.43-.49-2.43-.49-.33-.83-.81-1.05-.81-1.05-.66-.45 0-.45 0-.45.73.05 1.11.75 1.11.75.65 1.11 1.7.79 2.11.6.07-.47.25-.79.45-.97-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.01.08-2.1 0 0 .67-.22 2.2.84.64-.18 1.33-.27 2.01-.27.68 0 1.37.09 2.01.27 1.53-1.06 2.2-.84 2.2-.84.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.14 0 3.06-1.87 3.75-3.65 3.95.26.23.49.68.49 1.37 0 .99-.01 1.79-.01 2.03 0 .22.15.46.55.39C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nikita-mane-32b3682a0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0.28C0.447 0.28 0 0.727 0 1.28V14.72C0 15.273 0.447 15.72 1 15.72H15C15.553 15.72 16 15.273 16 14.72V1.28C16 0.727 15.553 0.28 15 0.28H1ZM4.348 12H2.716V6.442H4.348V12ZM3.532 5.528C2.958 5.528 2.465 5.029 2.465 4.43C2.465 3.831 2.958 3.328 3.532 3.328C4.103 3.328 4.597 3.831 4.597 4.43C4.597 5.029 4.103 5.528 3.532 5.528ZM12.292 12H10.66V9.882C10.66 8.89 10.628 7.534 9.165 7.534C7.659 7.534 7.5 8.602 7.5 9.763V12H5.868V6.442H7.5V7.606C7.878 7.042 8.597 6.272 10.027 6.272C12.494 6.272 12.292 8.354 12.292 10.165V12Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://leetcode.com/u/manenikita2212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm0 14.4c-3.56 0-6.4-2.84-6.4-6.4S4.44 1.6 8 1.6 14.4 4.44 14.4 8 11.56 14.4 8 14.4z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
