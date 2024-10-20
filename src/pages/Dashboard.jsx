import React from 'react'




import Add from '../components/Add';
import Card2 from '../components/Card2';

function Dashboard() {
  return (
    <>
     <div className='d-flex justify-content-center mt-5' style={{minHeight:"90vh"}}>
    <div className='w-75 border border-shadow container-fluid'>
      <div className=' mt-5 d-flex justify-content-center'>
        <Add/>
     
      <h2 className='text-primary  text-center d-inline'>How was Your Day?</h2>
      </div>
      <p className='mt-5' style={{textAlign:"justify"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, magni. Ipsam nobis adipisci laboriosam, excepturi facere dolore commodi, tenetur, voluptate ipsum pariatur corporis reiciendis deleniti? Pariatur possimus odit quod accusamus.</p>

  <div className='row container-fluid justify-content-around'>

<Card2/>
 
    </div>
   
</div>
    </div>
    </>
  )
}

export default Dashboard