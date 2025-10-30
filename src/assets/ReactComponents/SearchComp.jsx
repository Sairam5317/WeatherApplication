import React from 'react'

const SearchComp = () => {
  return (
    <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid d-felx flex-row justify-content-center">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="City Name" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
        </nav>
    </>
  )
}

export default SearchComp