import React, {useState} from 'react';
import { Accordion, Container } from 'react-bootstrap';

interface Props {
    
}

const items = [
  { header: "This is a test", body: "test1234", eventKey: "0"},
  { header: "", body: "", eventKey: "1"},
  { header: "", body: "", eventKey: "2"},
];

export const CustomAccordion: React.FC<Props> = () => {
    const [toggleQuestion, setToggequestion] = useState(1);

    return (
        <Container >
            <Accordion className="bg-color-blue"  defaultActiveKey="0">
              {items.map((item) => (
                <Accordion.Item className="bg-color-blue" eventKey={item.eventKey}>
                <Accordion.Header className="bg-color-blue">{item.header}</Accordion.Header>
                <Accordion.Body className="bg-color-blue">
                  {item.body}
                </Accordion.Body>
              </Accordion.Item>
              ))}
            </Accordion>
        </Container>
    )
}