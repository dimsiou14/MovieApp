import React, { useState }  from 'react';
import { Card, Button, Label, Col, Row, Navbar, Modal, ModalHeader, ModalBody, ModalFooter, Input, CardHeader, CardBody, CardTitle } from 'reactstrap';
import {MovieActions} from './reduxWork/movies';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Datatabe from 'react-data-table-component';
import { Heart, Star } from 'react-feather';

const Favorites = () => {

    const favoritesMovies = useSelector(state => state.movies.favorites)
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

    const columnsFavorites = [
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
                    <div style={{textAlign:'start'}}>
                        <img src={row.image} alt={`movie-${row.id}`} width="20px" height="20px"/>
                        <span style={{marginLeft:'0.5vw'}}>{row.title}</span>
                    </div>
                )
            },
            sortable:true,
            sortFunction:TitleSortFunction
        },
        {
            name:'ImDbRating',
            cell:(row) => {
                return (
                    <div>
                        <span>{row.imDbRating}</span>
                        <Star size={'1.1rem'} style={{marginLeft:'1vw'}}/>
                    </div>
                )
            },
            sortable:true,
            sortFunction:RatingSortFunction
        },
        {
            name:'Actions',
            cell:(row) => {

                return (
                    <div>
                        <Heart fill size='1.1rem'  onClick={() => {
                            dispatch(MovieActions.removeFromFavorites(row))
                        }}/>
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
                background:'indigo',
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

        updatedData = favoritesMovies.filter((item) => {
           
            const startsWith = item.title.toLowerCase().startsWith(Value.toString().toLowerCase()) ||
            item.rank.toString().toLowerCase().startsWith(Value.toString().toLowerCase()) ||
            item.imDbRating.toString().toLowerCase().startsWith(Value.toString().toLowerCase())

            const includes = item.title.toLowerCase().includes(Value.toString().toLowerCase()) ||
            item.rank.toString().toLowerCase().includes(Value.toString().toLowerCase()) ||
            item.imDbRating.toString().toLowerCase().includes(Value.toString().toLowerCase())

            if (includes) {
                return item
            } else if (startsWith) {
                return item
            }
        })

        setFilteredData([...updatedData])
        setSearchbar(Value)
    }

    const dataToRender = () => {
        if (searchBar !== "") {
            return filteredData
        } else {
            return favoritesMovies
        }
    }

    return (
        <div style={{width:'97vw', height:'97vh'}}>
        <Navbar className='nav d-flex justify-content-between' style={{background:'indigo', marginTop:'2vh', borderRadius:'5rem', width:'50vw', marginLeft:'25vw'}}>
       <Col>
           <Link 
           to={"/"} 
           style={{color:'white', textDecoration:'none'}} 
           onMouseOver={() => {
               document.getElementById("linkHome").style.color = 'lightgrey'
           }}
           onMouseLeave={() => {
               document.getElementById("linkHome").style.color = 'white'
           }} 
           id="linkHome">
           Home 
           </Link>
           </Col>
           <Col>
                
           <Link 
           to={"/movies"} 
           style={{color:'white', marginLeft:'1vw', textDecoration:'none'}} 
           id="linkMovies"
            onMouseOver={() => {
                document.getElementById("linkMovies").style.color = 'lightgrey'
           }}
           onMouseLeave={() => {
            document.getElementById("linkMovies").style.color = 'white'
           }}> 
           Movies

           </Link>
              </Col>
              <Col>
           <Link 
           to={"/favorites"} 
           style={{color:'white', marginLeft:'1vw', textDecoration:'none'}} 
           id="linkFavorites"
            onMouseOver={() => {
                document.getElementById("linkFavorites").style.color = 'lightgrey'
           }}
           onMouseLeave={() => {
            document.getElementById("linkFavorites").style.color = 'white'
           }}>
           Favorites
           
           </Link>
           </Col>
  
   </Navbar>
      <Card style={{marginTop:'5vh', width:'90vw', marginLeft:'5vw'}}>
      {favoritesMovies.length ? <CardHeader>
       
       <Row md={5} style={{marginTop:'1vh'}}>
           <Col style={{marginTop:'1vh', fontWeight:'bold'}}><CardTitle>Favorites</CardTitle></Col>
           <Col></Col>
           <Col></Col>
           <Col style={{marginTop:'1vh'}}>SearchBar :</Col>
           <Col>
           <Input
           id='searchbar'
           type='text' 
           value={searchBar}
           onChange={SearchBarHandler}/>
        </Col>
       </Row> 
       </CardHeader> :null}
      <CardBody>
      
      <Datatabe
      data={dataToRender()}
      columns={columnsFavorites}
      pointerOnHover
      paginationPerPage={7}
      paginationRowsPerPageOptions={[1,3,7]}
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
      </CardBody>
       </Card>
       <Modal isOpen={showModal} toggle={toggleModal} centered backdrop size="lg" autoFocus scrollable> 
           <ModalHeader>
               <Label>{profile.fullTitle}</Label>
           </ModalHeader>
           <ModalBody>
           <Row md={2}>
                    <img src={profile.image} alt={profile.id} />
                    <Col>
                        
                        <Label><span style={{fontWeight:'bold'}}> Year : </span>{profile.year}</Label>
                        <hr/>
                        <Label><span style={{fontWeight:'bold'}}>  Rank : </span>{profile.rank}</Label>
                        <hr/>
                        <Label><span style={{fontWeight:'bold'}}>  Rating : </span>{profile.imDbRating} <Star size={'1.1rem'} /></Label>
                        <hr/>
                        <Label><span style={{fontWeight:'bold'}}>  Reviews No : </span>{profile.imDbRatingCount}</Label>
                        <hr/>
                        <Label><span style={{fontWeight:'bold'}}>  Cast : </span>{profile.crew}</Label>
                        </Col>
                 
                  </Row>
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

export default Favorites