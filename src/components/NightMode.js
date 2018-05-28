import React from 'react'

const Night = ({Night, onClick}) => (
    <div className={Night ? 'nightmode darken' : 'nightmode'} onClick={onClick}>
        {!Night && <i className="fas fa-moon"></i>}
        {Night && <i className="fas fa-sun"></i>}
    </div>
)
export default Night