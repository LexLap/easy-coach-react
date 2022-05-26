import { useState } from "react";


const ShotLocation = (props) => {
    const coords = props.shot.shLocation.split(":")
    const [displayDetails, setDisplayDetails] = useState(false)

    return (
        <div
            className="shot-location"
            onMouseEnter={() => setDisplayDetails(true)}
            onMouseLeave={() => setDisplayDetails(false)}

            style={{
                backgroundColor: props.shot.isGoal === "true" ? "green" : "red",
                top: coords[0] + '%',
                left: coords[1] + '%'
            }}
        >
            {!!displayDetails &&
                <div className="shot-details">
                    {props.shot.shooter.split(" ")[2]}
                    <span> {props.shot.time}</span>
                </div>
            }
        </div>
    );
}


export default ShotLocation;
