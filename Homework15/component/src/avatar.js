import React from "react";

const Avatar = (props) => {
    return (
        <div className="Emperor">
            <div className="Info">
                <img className="picture" alt=
                "Kings of Rome" src={props.author.pictureUrl} />
                <div className="name"> {props.author.name} </div>
            </div>
            <div className="descripton">{props.text}</div>
            <div className="Date">{props.date} </div>
        </div>
    );
};

export default Avatar