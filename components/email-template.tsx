import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Markdown,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  to?: string;
  subject?: string;
  message: string;
}

export const EmailTemplate = ({ to, subject, message }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />

      <Body className="bg-primary font-inter">
        <Container>
          <Section>
            <Img src={`/logo/logo.png`} width="96" height="30" alt="Airbnb" />
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <div className=""></div>
            </Row>
            <Markdown
              markdownCustomStyles={{
                codeInline: { background: "grey" },
              }}
              markdownContainerStyles={{
                padding: "12px",
                border: "solid 1px black",
              }}
            >
              {`${message}`}
            </Markdown>
          </Section>

          <Hr style={hr} />
        </Container>
      </Body>
    </Html>
  );
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
