import React from "react";
import './style.scss'

export const Agenda_item = ({data, colour}) =>{
    return (
        <li key={Math.random()*999999} className={`agenda-item_${colour} agenda-item`}>
            <div className="agenda__btn_primary">{data.time}</div>
            <div className="agenda__body">
                <h3 className="agenda__title">{data.title}</h3>
                {data.sub_title && (<p className="agenda__subtitle">{data.sub_title}</p>)}
                {data.description && (<p className="agenda__description">{data.description}</p>)}
            </div>
        </li>
    )
}
