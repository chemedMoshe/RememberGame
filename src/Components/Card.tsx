import { useState } from "react"
import CardModel from "../Models/CardModel"
import { cardList } from "../Data/listCards"
interface Props {
  card: CardModel
  checkUserSelected: () => void
}
export default function Card({ card, checkUserSelected }: Props) {
  const [className, setclassName] = useState("card")
  const backClassName = () => {
    className == "card" && setclassName("cardBack")
    className == "cardBack" && setclassName("card")
    card.isFront = !card.isFront
    checkUserSelected()
  }
  return (
    <div className={className}
      onClick={backClassName}>
      {className !== "cardBack" && <p>  Hello from Card</p>}
      <img src={`${card.link}`} alt="" />
    </div>
  )
}
