import logo from './logo.svg';
import './App.css';
// import your fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEdit, faTrashAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCarAlt, faHomeAlt, faMoneyBill, faUserFriends } from '@fortawesome/free-solid-svg-icons';

function Side(){
  return(
    <>
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <img src="https://i.imgur.com/cUAWawn.jpg" alt="Bootstrap" width="30" height="24"/>
                </a>
                <ul class="nav nav-pills mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item w-100 ">
                        <a href="#" class="nav-link align-middle px-2 py-1">
                        <FontAwesomeIcon icon={faHomeAlt} />  <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li class="nav-item w-100 p-2">
                        <a href="#" class=" active nav-link align-middle px-2 p-1">
                        <FontAwesomeIcon icon={faCarAlt} />  <span class="ms-1 d-none d-sm-inline">Cars</span>
                        </a>
                    </li>
                </ul>
                <hr/>
            </div>
        </div>
    </>
  )
}

function Nav(){
  return(
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://i.imgur.com/cUAWawn.jpg" alt="Bootstrap" width="30" height="24"/>
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div class="dropdown ps-3 pe-1 my-auto">
                    <a href="#" class="d-flex align-items-center text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className='rounded-circle' src='https://via.placeholder.com/30/3C73A8/FFFFFF/?text=U'/>
                        <p className='my-auto '> Unis Badri </p>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
          </div>
        </div>
      </nav>
    </>
  )
}

function Cumbs(){
  return(
    <>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Cars</a></li>
        <li class="breadcrumb-item active" aria-current="page">List Car</li>
      </ol>
    </nav>
    </>
  )
}

function Top(){
  return(
    <>
    <div className='col-12'>
      <div className='d-flex justify-content-between'>
        <p className='font-weight-bold h4'>List Car</p>
        <button className='btn btn-primary'>+ Add New Car</button>
      </div>
    </div>
    </>
  )
}
function Filter({name, isActive}){
  return(
    <> 
    <button type='button' className={'btn me-3 ' +(isActive ? ' btn-outline-primary  active':'btn-outline-secondary')}>{name}</button>
    </>
  )
}

function Card({name, type, price, capacity, updated, image}){
  return(
    <>
      <div className='col-4 p-2'>
        <div class="card">
          <div class="card-body">
            <div className='col-12 text-center pb-3'>
              <img className=' img-fluid ' src={image}/>
            </div>
            <p class="card-text m-0">{name} / {type}</p>
            <p class="card-text m-0 fw-bold"> {price} / hari</p>
            <p class="card-text m-0"><FontAwesomeIcon icon={faUserFriends} /> {capacity} people</p>
            <p class="card-text m-0"><FontAwesomeIcon icon={faClock} /> Updated at {updated}</p>
            <div className='d-flex justify-content-between pt-5'>
              <button className='btn btn-outline-danger btn-lg form-control me-2'><FontAwesomeIcon icon={faTrashAlt} /> Delete</button> <button className='btn btn-success btn-lg form-control'><FontAwesomeIcon icon={faEdit} /> Edit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default function App() {
  return (
    <section>
      <div class="row flex-nowrap">
        <Side/>
        <div class="col">
          <Nav/>
          <div className="col-12 container pt-5 ps-3 pe-3 bg-muted">
            <Cumbs/>
            <Top/>
            <div className='col-12'>
              <Filter name="All" isActive={true}/>
              <Filter name="2-4" isActive={false}/>
              <Filter name="4-6" isActive={false}/>
              <Filter name="6-8" isActive={false}/>
            </div>
            <div className='row col-12'>
              <Card name={"Avanza"} type={"2017"} price={"Rp. 350.000"} capacity={"4-6"} updated={"4 November 2022, 18.00"} image={"https://i.imgur.com/diPgeKx.png"}/>
              <Card name={"Avanza"} type={"2017"} price={"Rp. 350.000"} capacity={"4-6"} updated={"4 November 2022, 18.00"} image={"https://i.imgur.com/diPgeKx.png"}/>
              <Card name={"Avanza"} type={"2017"} price={"Rp. 350.000"} capacity={"4-6"} updated={"4 November 2022, 18.00"} image={"https://i.imgur.com/diPgeKx.png"}/>
              <Card name={"Avanza"} type={"2017"} price={"Rp. 350.000"} capacity={"4-6"} updated={"4 November 2022, 18.00"} image={"https://i.imgur.com/diPgeKx.png"}/>
              <Card name={"Avanza"} type={"2017"} price={"Rp. 350.000"} capacity={"4-6"} updated={"4 November 2022, 18.00"} image={"https://i.imgur.com/diPgeKx.png"}/>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
