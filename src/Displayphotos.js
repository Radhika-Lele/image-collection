 

function Displayphotos({photos, handleClick}){
    return(
        <div> 
        <div className="wrapper">
        <section>
            {
                photos.length === 0 ? ( <h3>Please select your option</h3>) 
                :<>
                <h3>Here Are your photos </h3>
                <h4>Select an image to pop up</h4>
                <ul className="photos"> 
                     {
                        photos.map(singlephoto => {
                            return(
                                <li className="photo-container" key={singlephoto.id} onClick={() => handleClick(singlephoto.urls.regular) }> 
                                    <img src={singlephoto.urls.regular} alt={singlephoto.alt_description} />
                                </li>
                            )
                        })
                     }
                </ul>
                </>
            }
        </section>
        </div>
        </div>
    )
}
export default Displayphotos;