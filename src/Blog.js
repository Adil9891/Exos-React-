import { useState } from "react"

export default function Blog() {
    const [counterId, setCounterId] = useState(2);
    const [listPublication, setListPublication] = useState([])
    const [displayListPublication, setDsplayListPublication] = useState([])
    const [newPublication, setNewPublication] = useState({ id: '1', titre: '', contenu: '' })
    const [selectedPublication, setSelectedPublication] = useState({ id: '', titre: '', contenu: '' })
    const [showPublication, setShowPublication] = useState(true);


    function handleChange(event) {
        const { name, value } = event.target;
        setNewPublication({ ...newPublication, [name]: value });

        //setNewPublication({ ...newPublication, id: listPublication.length });
    }

    function handleClickShowPublication(item) {

        setShowPublication(!showPublication)
        showPublication ? (setSelectedPublication(item)) : (setSelectedPublication({ id: '', titre: '', contenu: '' }))
    }
    function handlClickAdd() {
        //setNewPublication({ ...newPublication, id: counterId })
        setNewPublication((prevPublication) => ({ ...prevPublication, id: counterId }));

        listPublication.push(newPublication)
        // setListPublication([...listPublication, { ...newPublication, id: counterId }])
        const listID = listPublication.map((item) => item.id);
        const maxNumber = Math.max(...listID);
        console.log('Max : ' + maxNumber)

        console.log(listPublication)
        setDsplayListPublication(
            listPublication.map(item => {
                return (<li key={item.id} onClick={() => handleClickShowPublication(item)}>{item.titre}</li>)
            }
            ))

        setCounterId(counterId + 1)
    }


    return (


        < div className="countainer" >

            {/* {showPublication && (
                <div>
                    <div className="countainerList">
                        <ul>
                            {displayListPublication}
                        </ul>

                    </div>
                    <input type="text" name="titre" value={newPublication.titre} onChange={handleChange} placeholder="titre"></input>
                    <textarea name="contenu" value={newPublication.contenu} onChange={handleChange} placeholder="contenu"></textarea>
                    <button onClick={handlClickAdd}>Créer un nouvel article</button>
                </div >
            )}
            {!showPublication && (
                <div>
                    mon blog
                </div>
            )} */}


            {showPublication ? (

                <div>
                    <div className="countainerList2">
                        <ul>
                            {displayListPublication}
                        </ul>

                    </div>
                    <input type="text" name="titre" value={newPublication.titre} onChange={handleChange} placeholder="titre"></input>
                    <textarea name="contenu" value={newPublication.contenu} onChange={handleChange} placeholder="contenu"></textarea>
                    <button onClick={handlClickAdd}>Créer un nouvel article</button>
                </div >

            ) : (
                <div>

                    <h3>{selectedPublication.titre}</h3>
                    <p>{selectedPublication.contenu}</p>
                    <button onClick={handleClickShowPublication}>Retour</button>

                </div>
            )
            }







        </div >
    )

}