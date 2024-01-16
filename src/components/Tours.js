
import Card from './Card'


function Tours({tours,removeTour}){
    return(
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Onkar</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour )=>{
                        return <Card {...tour} removeTour={removeTour}> </Card> //cloning of the single  object , copy of the object 
                    
                    })
                }
            </div>


        </div>

    )
}

export default Tours;