import React from 'react'

const MainBodyComp = () => {
  return (
    <>
        <div className='mainBodyContainer m-2 d-flex flex-row justify-content-center text-center p-4 gap-5'>
            <div className='d-flex flex-column boxContainer1 w-50 h-50 text-center'>
              <div className='d-flex flex-row'>
                <div className='boxes m-2'>icon</div>
                <div  className='boxes m-2'>Temp</div>
              </div>
              <div className='d-flex flex-row'>
                <div  className='boxes m-2'>city</div>
                <div  className='boxes m-2'>smoke</div>
              </div>
            </div>
            <div className='h-50 w-50 text-center boxContainer2 d-flex flex-cloumn justify-content-center'>
              <div><h1>Time</h1></div>
            </div>
        </div>
        
    </>
  )
}

export default MainBodyComp