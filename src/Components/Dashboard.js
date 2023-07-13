import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Netflix_Logo.png";
import poster from "../Assets/moviePoster.jpg";
import axios from "axios";
import Pagination from "react-js-pagination";

function Dashboard() {
  const [movieData, setMovieData] = useState([]);
  const [activePage, setActivePage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [pages, setPages] = useState()
  const [aggregate, setAggregate] = useState({
    search: "",
    limit: 4,
    skip: 0
  })

  let paginate = (data) => {
    console.log(data)
    const limit = aggregate.limit

    if (data) {
      setActivePage(data)
      setCurrentPage(limit)
      setAggregate((state) => {
        return {
          ...state,
          skip: data * limit - limit
        }
      })
    }
  }

  // const fetchmovie = async () => {
  //   const res = await axios.get("http://localhost:8000/get/all/movies", {
  //     headers: {
  //       Authorization: localStorage.getItem('myapptoken')
  //     }
  //   });
  //   setMovieData(res.data.response);
  // };

  const aggregateApi = async () => {
    const res = await axios.post('http://localhost:8000/aggregate/movie', aggregate)
    console.log(res)
    if (res.data.status === 1) {
      setMovieData(res.data.response.result)
      setPages(res.data.response.fullcount)
    }
  }

  let navigate = useNavigate();
  let token = localStorage.getItem("myapptoken");
  const checkLogin = () => {
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    checkLogin();

    aggregateApi()
  }, [aggregate]);

  const handleLogout = () => {
    localStorage.removeItem("myapptoken");
    navigate("/login");
  };

  const handleChange = (e) => {
    setAggregate((state) =>
      ({ ...state, [e.target.name]: e.target.value })
    )
  }

  return (
    <div className="dashboard">
      <nav className="Navbar dashBoard_nav">
        <div className="container_dash">
          <img className="logo" src={logo} alt="logo" />
          <div className="nav_elements">
            <input className="email_login" name="search" type="text" onChange={(e) => handleChange(e)} />
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <hr></hr>
      <div className="container__contents">
        <div className="row_dash">
          {movieData.map((item) => {
            return (
              <div className="card_dash">
                <img className="poster" src={poster} alt="..." />
                <h5 className="card-title">{item.name}</h5>
              </div>

            );
          })}
        </div>
        <Pagination
          prevPageText={<i class="fa fa-angle-left card-title" aria-hidden="true"></i>}
          nextPageText={<i class="fa fa-angle-right card-title " aria-hidden="true"></i>}
          firstPageText={<i class="fa fa-angle-double-left card-title" aria-hidden="true"></i>}
          lastPageText={<i class="fa fa-angle-double-right card-title" aria-hidden="true"></i>}
          activePage={activePage}
          itemsCountPerPage={currentPage}
          totalItemsCount={pages}
          onChange={paginate}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
}

export default Dashboard;
