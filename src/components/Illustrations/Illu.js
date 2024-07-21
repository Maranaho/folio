import React ,{useState}from 'react'
import astronaut from "../../assets/blurs/astronaut.jpg"
import backpack from "../../assets/blurs/backpack.jpg"
import basket from "../../assets/blurs/basket.jpg"
import bulk from "../../assets/blurs/bulk.jpg"
import canap from "../../assets/blurs/canap.jpg"
import designers from "../../assets/blurs/designers.jpg"
import drums from "../../assets/blurs/drums.jpg"
import family from "../../assets/blurs/family.jpg"
import fixie from "../../assets/blurs/fixie.jpg"
import gamer from "../../assets/blurs/gamer.jpg"
import harden from "../../assets/blurs/harden.jpg"
import jesus from "../../assets/blurs/jesus.jpg"
import lebron from "../../assets/blurs/lebron.jpg"
import michaelleague from "../../assets/blurs/michaelleague.jpg"
import miller from "../../assets/blurs/miller.jpg"
import moose from "../../assets/blurs/moose.jpg"
import poker from "../../assets/blurs/poker.jpg"
import police from "../../assets/blurs/police.jpg"
import porzingis from "../../assets/blurs/porzingis.jpg"
import shoe from "../../assets/blurs/shoe.jpg"
import spacewalker from "../../assets/blurs/spacewalker.jpg"
import ui from "../../assets/blurs/ui.jpg"
import westbrook from "../../assets/blurs/westbrook.jpg"
const blurs = {astronaut,backpack,basket,bulk,canap,designers,drums,family,fixie,gamer,harden,jesus,lebron,michaelleague,miller,moose,poker,police,porzingis,shoe,spacewalker,ui,westbrook}

const Illu = ({
  ratio,
  format,
  name,
  folder
}) => {
    
  const [loaded,setLoaded] = useState(false)
  return (
    <li
    className={loaded?"loaded":"loading"}
    style={{
      transform:`scale(${ratio})`,
      backgroundImage:`url(${blurs[name]})`,
      height:`${ratio*window.innerHeight}`
    }}
    >
      <img
        alt={name}
        name={name}
        loading="lazy"
        onLoad={()=>setLoaded(true)}
        src={`${folder}${name}.${format}`}
      />
    </li>
  )
}
export default Illu
