import React, {useState} from 'react';
import { Accordion, Container } from 'react-bootstrap';

interface Props {
    
}

const items = [
  { header: "How Can I Buy A Cyber Cityzen?", body: "test1234", eventKey: "0"},
  { header: "Is There A Buy Limit?", body: "", eventKey: "1"},
  { header: "How Many Different Traits do we have?", body: "", eventKey: "2"},
  { header: "Rarity System?", body: "", eventKey: "3"},
  { header: "Community Fund?", body: "", eventKey: "4"},


];

export const CustomAccordion: React.FC<Props> = () => {
    return (
        <Container >
            <Accordion className="bg-color-blue">
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