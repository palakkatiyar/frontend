import React from 'react'
import './Card.css';

const Card = ({ id, title, tag, status }) => {
    return (
        <div className="card-container flex gap-10" style={{ gap: '5px' }}>
            <div className="card-heading flex-sb">
                <span>{id}</span>
                <div className="image-container">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="UserImage" />
                    <div className="show-status"></div>
                </div>
            </div>
            <div className="card-title" style={{fontWeight:"200"}}>
                <p>{title}</p>
            </div>
            <br></br>
            <div className="card-tags">
                <div className="tags" style={{ width: 'max-content', color:"gray"}}> ... </div>
                {
                    tag?.map((ele, index) => {
                        return <div key={index} className="tags"> <span>•</span> {ele}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Card;