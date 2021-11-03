import React, {useState} from 'react';
import {Carousel, Button, Container, Row, Col} from 'react-bootstrap';
import { TopNavbar } from "./Navbar";

import Cyber1 from './images/cyber1.jpg';
import Cyber2 from './images/cyber2.jpg';
import Cyber3 from './images/cyber3.jpeg';
import menshirt1 from './images/menshirt1.png';
import menshirt2 from './images/menshirt2.png';
import menshirt3 from './images/menshirt3.png';
import menshirt4 from './images/menshirt4.png';
import menshirt5 from './images/menshirt5.png';
import menshirt6 from './images/menshirt6.png';
import menshirt7 from './images/menshirt7.png';
import menshirt8 from './images/menshirt8.png';
import menshirt9 from './images/menshirt9.png';
import menshirt10 from './images/menshirt10.png';
import womenshirt1 from './images/womenshirt1.png';
import womenshirt2 from './images/womenshirt2.png';
import womenshirt3 from './images/womenshirt3.png';
import womenshirt4 from './images/womenshirt4.png';
import womenshirt5 from './images/womenshirt5.png';



const menshirtall = [
    { src: menshirt1, width: 600, height: 380 },
    { src: menshirt2, width: 400, height: 650 },
    { src: menshirt3, width: 300, height: 300 },
    { src: menshirt4, width: 400, height: 650 },
    { src: menshirt5, width: 300, height: 300 },
    { src: menshirt6, width: 400, height: 650 },
    { src: menshirt7, width: 300, height: 300 },
    { src: menshirt8, width: 300, height: 300 },
    { src: menshirt9, width: 400, height: 650 },
    { src: menshirt10, width: 300, height: 300 },
];

const womenshirtall = [
    { src: womenshirt1, width: 600, height: 380 },
    { src: womenshirt2, width: 400, height: 650 },
    { src: womenshirt3, width: 300, height: 300 },
    { src: womenshirt4, width: 400, height: 650 },
    { src: womenshirt5, width: 300, height: 300 },
];

const menshirtrare = [
    { src: menshirt1, width: 600, height: 380 },
    { src: menshirt2, width: 400, height: 650 },
];

const images2 = [
    { src: Cyber1, width: 600, height: 380 },
    { src: Cyber2, width: 400, height: 650 },
    { src: Cyber3, width: 300, height: 300 },
    { src: Cyber1, width: 600, height: 380 },
    { src: Cyber2, width: 400, height: 650 },
    { src: Cyber3, width: 300, height: 300 },
];

const imageArr = [
    menshirtall,
    womenshirtall,
    menshirtrare
];

interface Props {

}
export const TraitsPage: React.FC<Props> = () => {
    const [imageSelection, setimageSelection] = useState(0); // array index for the imgArr
    const [index, setIndex] = useState(0); //this is for the current slide...


    const [selectedOptionSpecies, setSpeciesOption] = useState("men");
    const [selectedOptionRarity, setRarityOption] = useState("all");
    const [selectedOptionTraits, setTraitsOption] = useState("clothes");
    const handleSpeciesChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const element = event.target as HTMLSelectElement;
        setSpeciesOption(element.value);
    }
    const handleRarityChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const element = event.target as HTMLSelectElement;
        setRarityOption(element.value);
    }
    
    const handleTraitsChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const element = event.target as HTMLSelectElement;
        setTraitsOption(element.value);
    }



    // a tester function delete this
    function btnClick() {
        if (selectedOptionSpecies == "men") {
            if (selectedOptionTraits == "clothes") {
                if (selectedOptionRarity == "all") {
                    setimageSelection(0);
                    setIndex(0);
                } else if(selectedOptionRarity == "common") {

                } else if(selectedOptionRarity == "uncommon") {
                    
                } else if(selectedOptionRarity == "rare") {
                    setimageSelection(2);
                    setIndex(0);
                }

            } else if (selectedOptionTraits == "structure") {

            } else if (selectedOptionTraits == "items") {

            }
        } else if (selectedOptionSpecies == "skull") {
            if (selectedOptionTraits == "clothes") {

            } else if (selectedOptionTraits == "structure") {

            } else if (selectedOptionTraits == "items") {

            }
        } else if (selectedOptionSpecies == "women") {
            if (selectedOptionTraits == "clothes") {
                if (selectedOptionRarity == "all") {
                    setimageSelection(1);
                    setIndex(0);
                } else if(selectedOptionRarity == "common") {

                } else if(selectedOptionRarity == "uncommon") {
                    
                } else if(selectedOptionRarity == "rare") {
                
                }
                
            } else if (selectedOptionTraits == "structure") {

            } else if (selectedOptionTraits == "items") {

            }
        }
      }

    return (
        <div>
        <TopNavbar></TopNavbar>
        <Container>
            <div className="select-area ft-sz-md">
                <Row className="p-3">
                    <Col className="col-md-4">Choose a Species:</Col>
                    <Col className="col-md-4">
                        <select className="select-box" value={selectedOptionSpecies} onChange={handleSpeciesChange}>
                            <option value="men">Men</option>
                            <option value="skull">Skull</option>
                            <option value="women">Women</option>
                        </select>
                    </Col>
                </Row>

                <Row className="p-3 ft-sz-md">
                    <Col className="col-md-4">Choose a Rarity:</Col>
                    <Col className="col-md-4">
                        <select className="select-box" value={selectedOptionRarity} onChange={handleRarityChange}>
                            <option value="all">All</option>
                            <option value="common">Common</option>
                            <option value="uncommon">Uncommon</option>
                            <option value="rare">Rare</option>
                        </select>
                    </Col>
                </Row>

                <Row className="p-3 ft-sz-md">
                <Col className="col-md-4">Choose a Trait:</Col>
                    <Col className="col-md-4">
                        <select className="select-box" value={selectedOptionTraits} onChange={handleTraitsChange}>
                            <option value="clothes">Clothes</option>
                            <option value="structure">Structure</option>
                            <option value="items">Items</option>
                        </select>
                    </Col>
                </Row>

                <Row className="p-3"><Col className="col-md-4"></Col><Col><Button className="submit-button" variant="primary" onClick={btnClick}>Submit</Button></Col></Row>
            </div>
            <Carousel activeIndex={index} onSelect={setIndex}  className="carousel-inner" variant="dark">
                {imageArr[imageSelection].map((img) => (
                    <Carousel.Item className="item">
                    <img
                    className="d-block img-fluid"
                    src={img.src}
                    alt="First slide"
                    />
                </Carousel.Item>
                ))}
            </Carousel>
        </Container>
        </div>
    )
}