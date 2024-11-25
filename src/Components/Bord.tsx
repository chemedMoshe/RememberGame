import CardModel from "../Models/CardModel"
import Card from "./Card"
import { cardList } from "../Data/listCards"
import { useEffect, useState } from "react"

interface Props {
    listCard: CardModel[]
}

export default function Bord() {

    const [sumSelected, setSumSelected] = useState(0)
    const [message, setMessage] = useState('')
    useEffect(() => {
        checkIfAccessUser()
    }, [sumSelected])
    function checkUserSelected() {
        
        setSumSelected(sumSelected + 1)
    }

    function checkIfAccessUser() {
        const chooseUSer = cardList.filter(x => x.isFront)
        chooseUSer.length >= 2 ?
            chooseUSer[0].link == chooseUSer[1].link ? setMessage('Hii good') :
                setMessage('no try again')
            :
            null

    }
    return (

        <div className="bord">
            {cardList.map((c, i) =>
                <Card card={c} key={i} checkUserSelected={checkUserSelected} />)}
            {cardList.filter(x => x.isFront).length >= 2 && <p className="message">{message}</p>}

        </div>


    )
}
