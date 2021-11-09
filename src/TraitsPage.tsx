import React, {useState} from 'react';
import {Carousel, Button, Container, Row, Col} from 'react-bootstrap';
import { TopNavbar } from "./Navbar";
import DiscordImage from './images/CYBE-14.png';

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
    { src: menshirt1, rarity: "common", description: 380 },
    { src: menshirt2, rarity: "common", description: 650 },
    { src: menshirt3, rarity: "common", description: 300 },
    { src: menshirt4, rarity: "common", description: 650 },
    { src: menshirt5, rarity: "common", description: 300 },
    { src: menshirt6, rarity: "common", description: 650 },
    { src: menshirt7, rarity: "uncommon", description: 300 },
    { src: menshirt8, rarity: "uncommon", description: 300 },
    { src: menshirt9, rarity: "uncommon", description: 650 },
    { src: menshirt10, rarity: "rare", description: 300 },
];

const womenshirtall = [
    { src: womenshirt1, rarity: "common", description: 380 },
    { src: womenshirt2, rarity: "common", description: 650 },
    { src: womenshirt3, rarity: "common", description: 300 },
    { src: womenshirt4, rarity: "common", description: 650 },
    { src: womenshirt5, rarity: "common", description: 300 },
];

const menshirtrare = [
    { src: menshirt1, rarity: "rare", description: 380 },
    { src: menshirt2, rarity: "rare", description: 650 },
];

const images2 = [
    { src: Cyber1, rarity: 600, description: 380 },
    { src: Cyber2, rarity: 400, description: 650 },
    { src: Cyber3, rarity: 300, description: 300 },
    { src: Cyber1, rarity: 600, description: 380 },
    { src: Cyber2, rarity: 400, description: 650 },
    { src: Cyber3, rarity: 300, description: 300 },
];

const imageArr = [
    menshirtall,
    womenshirtall,
    menshirtrare
];


interface RarityBoxProps {
    imageSelection: number,
    index: number
}

const  RarityBoxs: React.FC<RarityBoxProps> = ({imageSelection,index}) => {
    var images = imageArr[imageSelection];
    var rarity = images[index].rarity;
    if(rarity == "common") {
        return <Container className="rarity-box bg-color-blue">{rarity}</Container>;
    } else if (rarity == "uncommon") {
        return <Container className="rarity-box bg-color-red">{rarity}</Container>;
    } else {
        return <Container className="rarity-box bg-color-gold">{rarity}</Container>;
    }
}


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
            <RarityBoxs imageSelection={imageSelection} index={index}></RarityBoxs>
        </Container>
        <div className="footer">
      <a target="_blank" href={"https://discord.gg/uYhfgZVA7P"}>
      <img
          className="img-fluid footerImg"
          src={DiscordImage}
          alt=""
        />
      </a>
      </div>
        </div>
    )
}