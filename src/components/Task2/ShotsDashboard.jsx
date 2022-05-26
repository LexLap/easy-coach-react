import { useState } from "react";
import { getShotsData } from "../../utils/shotsData";
import StatsOverlay from "./StatsOverlay";


const ShotsDashboard = () => {

    const [data] = useState(getShotsData)


    return (
        <div className="shots-dashboard-container">

            <div><h1>{data.team}</h1></div>

            <div className="field"            >

                <div className="area" id="area-1" />

                <div className="area" id="area-2" >
                    <div className="area" id="area-3" />
                </div>

                <div className="area" id="area-4" />
                <div className="area" id="area-5" />
                <div className="area" id="area-6" />
                <div className="area" id="area-7" />

                <StatsOverlay shots={data.shots} />
            </div>

        </div>
    );
}


export default ShotsDashboard;
