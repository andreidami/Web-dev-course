import React from "react";
import Card from "./Card";


const DogList = ({dogs}) => {
    return (
        <div>
            {dogs.map((user, i) => {
                return (<Card
                    key={i}
                    id={dogs[i].id}
                    name={dogs[i].name}/>
                    );
            })}
        </div>
    )
}

export default DogList;