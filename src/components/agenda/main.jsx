import React from "react";
import { Agenda_item }  from "./Agenda_1/script";
import './style.scss'

export const Agenda = ({data}) =>{
    
    return (
        <div className='Agenda' id='agenda'>
            <div className="agenda-text">
                <h2 className="header_2">Agenda</h2>
                <p className="body-text">MiCaaS is built around a conference-based format with opportunities to engage with fellow attendees formally in 1-to-1 meetings or informally across the day.</p>
                <p className="body-text">Attendee places include overnight accommodation enabling you to relax and engage with peers and potential partners.</p>
            </div>
            <ul className="agenda-items">
                {data.map((element, index) =>(
                    <Agenda_item colour={index%2 === 0 ? 'primary':'secondary'} data={element}/>
                ))}
            </ul>
        </div>
    )
}
