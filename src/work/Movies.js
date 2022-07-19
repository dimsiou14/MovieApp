import React, { useState }  from 'react';
import { Card, Button, Label, Col, Row, Navbar, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import {MovieActions} from './reduxWork/movies';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Datatabe from 'react-data-table-component';

const Movies = () => {

    const movies =  useSelector(state => state.movies.movieList)
    const profile = useSelector(state => state.movies.profile)
    const [showModal, setShowModal] = useState(false)
    const [filteredData, setFilteredData] = useState([])
    const [searchBar, setSearchbar] = useState("")
    const dispatch = useDispatch()

    const TitleSortFunction = (rowA, rowB) => {
        const a = rowA.title.toLowerCase()
        const b = rowB.title.toLowerCase()
    
        if (a > b) {
            return 1
        }
    
        if (b > a) {
            return -1
        }
    
        return 0
    }
    const RankSortFunction = (rowA, rowB) => {
        const a = rowA.rank
        const b = rowB.rank
    
        if (a > b) {
            return 1
        }
    
        if (b > a) {
            return -1
        }
    
        return 0
    }
    const RatingSortFunction = (rowA, rowB) => {
        const a = rowA.imDbRating
        const b = rowB.imDbRating
    
        if (a > b) {
            return 1
        }
    
        if (b > a) {
            return -1
        }
    
        return 0
    }

    const columnsMovies = [
        {
            name:'Rank',
            cell:(row) => row.rank,
            sortable:true,
            sortFunction: RankSortFunction
        },
        {
            name:'Title',
            cell:(row) => {
                return (
                    <div>
                        <Row>
                            <Col>
                            <img src={row.image} alt={`movie-${row.id}`} width="20px" height="20px"/>
                            </Col>
                            <Col>
                            <span style={{marginLeft:'2vw'}}>{row.title}</span>
                            </Col>
                        </Row>
                    </div>
                )
            },
            sortable:true,
            sortFunction:TitleSortFunction
        },
        {
            name:'ImDbRating',
            cell:(row) => row.imDbRating,
            sortable:true,
            sortFunction:RatingSortFunction
        },
        {
            name:'Actions',
            cell:(row) => {
                return (
                    <div>
                        <Button onClick={() => {
                            dispatch(MovieActions.addToFavorites(row))
                        }}>Add To Favorites</Button>
                    </div>
                )
            }
        }
    ]

    const TableStyle = {
        table:{
            style:{
                borderStyle:'none'
            }
        },
        headRow: {
            style:{
                background:'orange',
                color:'white',
                borderRadius:5,
                fonstSize:'16px'
            }
        },
        rows: {
            style:{
                color:'black',
                background:'whitesmoke',
                borderRadius:5,
                fonstSize:'12px'
            },
            highlightOnHoverStyle: {
                background:'lightgray'
            }

        }
        
    }

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const SearchBarHandler = (e) => {

        const Value = e.target.value
        let updatedData

        updatedData = movies.map((item) => {
            const startsWith = item.title.toLowerCase().startsWith(Value.toString().toLowerCase()) ||
            item.rank.toString().toLowerCase().startsWith(Value.toString().toLowerCase()) ||
            item.imDbRating.toString().toLowerCase().startsWith(Value.toString().toLowerCase())

            const includes = item.title.toLowerCase().includes(Value.toString().toLowerCase()) ||
            item.rank.toString().toLowerCase().includes(Value.toString().toLowerCase()) ||
            item.imDbRating.toString().toLowerCase().includes(Value.toString().toLowerCase())

            if (includes) {
                return includes
            } else if (startsWith) {
                return (startsWith)
            } else {
                return null
            }
        })

        setFilteredData([...updatedData])
        setSearchbar(Value)
    }

    const dataToRender = () => {
        if (searchBar.length) {
            return filteredData
        } else {
            return movies
        }
    }

    return (
        <div style={{width:'100vw', height:'100vh'}}>
             <Navbar className='nav d-flex justify-content-between' style={{background:'orange', marginTop:'2vh', borderRadius:'5rem', width:'50vw', marginLeft:'25vw'}}>
            <Col>
                <Link 
                to={"/"} 
                style={{color:'black', textDecoration:'none'}} 
                onMouseOver={() => {
                    document.getElementById("linkHome").style.color = 'blue'
                }}
                onMouseLeave={() => {
                    document.getElementById("linkHome").style.color = 'black'
                }} 
                id="linkHome">
                Home 
                </Link>
                </Col>
                <Col>
                     
                <Link 
                to={"/movies"} 
                style={{color:'black', marginLeft:'1vw', textDecoration:'none'}} 
                id="linkMovies"
                 onMouseOver={() => {
                    document.getElementById("linkMovies").style.color = 'blue'
                }}
                onMouseLeave={() => {
                    document.getElementById("linkMovies").style.color = 'black'
                }}> 
                Movies

                </Link>
                   </Col>
                   <Col>
                <Link 
                to={"/favorites"} 
                style={{color:'black', marginLeft:'1vw', textDecoration:'none'}} 
                id="linkFavorites"
                 onMouseOver={() => {
                    document.getElementById("linkFavorites").style.color = 'blue'
                }}
                onMouseLeave={() => {
                    document.getElementById("linkFavorites").style.color = 'black'
                }}>
                Favorites
                
                </Link>
                </Col>
       
        </Navbar>
           <Card style={{marginTop:'10vh', width:'90vw', marginLeft:'5vw'}}>
            {movies.length && <div>
             SearchBar :   
            <Input
             type='text' 
             value={searchBar}
             onChange={SearchBarHandler}/>
           </div>}
           
           <Datatabe
           data={dataToRender()}
           columns={columnsMovies}
           responsive
           striped
           pagination
           highlightOnHover
           onRowClicked={(row) => {
            setShowModal(true)
            dispatch(MovieActions.setMovieProfile(row))
           }}
           customStyles={TableStyle}
           />
            </Card>
            <Modal isOpen={showModal} toggle={toggleModal} centered backdrop size="lg" autoFocus scrollable> 
                <ModalHeader>
                    <Label>{profile.fullTitle}</Label>
                </ModalHeader>
                <ModalBody>
                    <Label>{profile.title}</Label>
                    <Label>{profile.crew}</Label>
                    <Label>{profile.rank}</Label>
                </ModalBody>
                <ModalFooter>
                    <Button 
                    color='danger'
                    onClick={() => {
                        setShowModal(false)
                    }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Movies