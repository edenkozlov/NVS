import List from "../List"
import Button from "../Button"



function Team() {

  return (
    <div id="clients" data-color="white" className='team section font-[SansitaReg] py-20'>
      <div className="head1">
        <h1 className="text-5xl sm:text-6xl text-center tracking-tight">
          Our Clients
        </h1>
      </div>
      <div className="list mt-10 w-full px-8">
        {/* //single list */}
        <List />
       
      </div>
    </div>
  )
}

export default Team
