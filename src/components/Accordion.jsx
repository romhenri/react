import { useState, useRef } from "react"
import icon_arrow from "../assets/svg/arrow.svg" 
import style from "../css/Accordion.module.css"

const Accordion = (
  {
    title,
    children = " - "
  }
) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const AccordionBody = useRef(null);

  const { card, header, active } = style;

  const toggleCollapsed = () =>  {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div 
      className={card}
      onClick={toggleCollapsed}
    >
      <div className={header} >
        {title}
        <div>
          <img 
            style={{
              width: "20px",
              height: "20px",
              transform: isCollapsed
              ? "rotate(0deg)" 
              : "rotate(90deg)"
            }}
            src={icon_arrow} 
            alt="null"
            />
        </div>
      </div>
      <div 
        className={isCollapsed ? '' : active} 
        ref={AccordionBody}>
        {isCollapsed ? '' : children}
      </div>
    </div>
  )
};

export default Accordion;