// this componenet will handle displaying our photos
// create some logic to check if there are actually images to display and if there aren't let the user know, otherwise dispplay the photos  
function Displayphotos({photos}){
    return(
        <section>
            <h2>Here Are your photos </h2>
            {
                photos.length === 0 ? ( <h3>Sorry, no photos today</h3>) 
                :<ul className="photos"> 
                     {
                        photos.map(singlephoto => {
                            return(
                                <li className="photo-container" key={singlephoto.id}>
                                    <img src={singlephoto.urls.regular} alt={singlephoto.alt_description} />
                                </li>
                            )
                        })
                     }
                </ul>
            }
        </section>
    )
}
export default Displayphotos;