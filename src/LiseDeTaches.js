import { useCallback, useEffect, useState } from 'react';
export default function ListeDeTaches() {
    const [list, setList] = useState([])
    const [listDisplay, setListDisplay] = useState([])
    const [tache, setTache] = useState('')


    /* useEffect(() => {

        setList([...list, tache]);
        setListDisplay(list.map((item, index) => {
            return (<li key={index}>{item}<button onClick={handleClickDelete(item)}  > supprimer</button></li>)
        }))
    }, [list]) */






    function handleClickAdd() {
        list.push(tache)
        // setList([...list, tache]);
        console.log('list : ' + list)
        setListDisplay(list.map((item, index) => {
            return (<li key={index}>{item}<button className="button" onClick={handleClickDelete} value={index} > delete</button></li>)
        }))
        setTache('')

    }
    function handleChangeTask(event) {
        setTache(event.target.value)
    }
    function handleClickDelete(e) {
        console.log(e.target.value)
        list.splice(e.target.value, 1);
        setListDisplay(list.map((item, index) => {
            return (<li key={index}>{item}<button className="button" onClick={handleClickDelete} value={index}> delete</button></li>)
        }))



    }


    return (
        <div className='countainer'>
            <div className='countainerInput'>
                <input type="text" value={tache} onChange={handleChangeTask}></input>
                <button onClick={handleClickAdd} disabled={tache === ''}>Ajouter taches =></button>
            </div>
            <div className='countainerList'>
                <ul>
                    {listDisplay}

                    {/*  {list.map((item, index) => {
                        return (<li key={index}>{item}<button onClick={handleClickDelete} value={index}>supprimer</button></li>)
                    })} */}
                </ul>
            </div>
        </div>
    )
}