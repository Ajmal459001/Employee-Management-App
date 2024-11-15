import React from 'react'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg px-5 px-auto bg-primary py-2" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand text-info" href="#"><i class="fa-solid fa-users-gear me-2"></i>EMPLOYEE MANAGEMENT APP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div>
            <form class="d-flex me-auto">
              <input class="form-control me-sm-2" type="search" placeholder="Search"/>
              <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header