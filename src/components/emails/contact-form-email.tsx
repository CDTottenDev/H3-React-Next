import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  phone,
  message,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={heading}>New Contact Request</Heading>
        </Section>
        
        <Section style={body}>
          <Text style={paragraph}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong> {email}
          </Text>
          {phone && (
            <Text style={paragraph}>
              <strong>Phone:</strong> {phone}
            </Text>
          )}
          <Text style={paragraph}>
            <strong>Message:</strong>
          </Text>
          <Text style={messageText}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const header = {
  borderBottom: '1px solid #e5e5e5',
  paddingBottom: '16px',
};

const heading = {
  fontSize: '24px',
  color: '#333333',
  textAlign: 'center' as const,
};

const body = {
  padding: '24px 0',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333333',
  margin: '0 0 16px',
};

const messageText = {
  ...paragraph,
  padding: '16px',
  backgroundColor: '#f5f5f5',
  borderRadius: '4px',
}; 