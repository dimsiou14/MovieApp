import React, { useState }  from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Label, Modal, ModalBody, ModalFooter, Row} from 'reactstrap'

const Home = () => {

    const [Profile, setProfile] = useState({})
    const [OpenModal, setOpenModal] = useState(false)

    const data = [
        {
            id:1,
            title:"Tsitsi",
            duration:"2hrs",
            rate:10,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:2,
            title:"Ele",
            duration:"2hrs",
            rate:10,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:3,
            title:"Dim",
            duration:"2hrs",
            rate:7,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:4,
            title:"Kostas",
            duration:"2hrs",
            rate:6,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:5,
            title:"Diana",
            duration:"2hrs",
            rate:10,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:6,
            title:"dadada",
            duration:"2hrs",
            rate:6,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:7,
            title:"Tsigqrwgqwgqrwgtsi",
            duration:"3hrs",
            rate:9.5,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:8,
            title:"Tsdadfadfitsi",
            duration:"2hrs",
            rate:6,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:9,
            title:"grwgherTsitsi",
            duration:"4hrs",
            rate:3,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },
        {
            id:10,
            title:"nvjvjv",
            duration:"3hrs",
            rate:5,
            summary:"gbaksbgalkgbq;iwurbgliuwarbgaghwrahhwarilghiulwrAGHFHVLIAWHEVGHAWELIGHAILWHGIULAWHGLAIWUHGL"
        },

    ]

    const ClickHandler = (movie) => {
        setOpenModal(true)
        setProfile(movie)
    }
    
    return (
    <div className="d-flex justify-content-between" style={{height:'100vh', width:'100vw'}}>
        <div className='nav d-flex justify-content-between' >
            <Row style={{background:'orange', marginTop:'2vh'}}>
                
                    <span>Home</span>
               
                    <span>Movies</span>
                
                    <span>Favorites</span>
               
            </Row>
        </div>
        <Card style={{marginTop:'10vh', height:'50vh', width:'100vw'}}>
            <CardHeader>
                <CardTitle tag="h4" style={{alignSelf:'center'}}>Movies</CardTitle>
            </CardHeader>
            <CardBody style={{overflowY:'scroll'}}>
                <ul>
                {data.map((movie) => {
                    return (
                        <li onClick={() => {
                            ClickHandler(movie)
                        }}>
                    <Row key={movie.id}>
                        <Label>{movie.title}</Label>
                        <br/>
                        <Label>{movie.rate}</Label>
                        <br/>
                        <p>{movie.summary}</p>
                        <hr/>
                    </Row>
                    </li>
                    )
                })}
                </ul>
            </CardBody>
            <CardFooter>
                <Button>Save</Button>
            </CardFooter>
        
        </Card> 
        <Modal isOpen={OpenModal} scrollable centered size='lg' backdrop onDrop={() => {
            setOpenModal(false)
            setProfile({})
        }}>
            <ModalBody>
            <Label>{Profile.title}</Label>
            <br/>
            <Label>{Profile.rate}</Label>
            <br/>
            <p>{Profile.summary}</p>
            </ModalBody>
            <ModalFooter>
                <Button 
                onClick={() => {
                    setOpenModal(false)
                    setProfile({})
                }}
                >
                    Close
                </Button>
            </ModalFooter>

        </Modal>
    </div>
    )
}

export default Home