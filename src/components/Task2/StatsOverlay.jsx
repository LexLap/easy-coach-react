import ShotLocation from "./ShotLocation";


const StatsOverlay = (props) => {


    return (
        <div className="stats-overlay">
            {props.shots.map((shot, i) => {
                return <ShotLocation key={i} shot={shot} />
            })}
        </div>
    );
}


export default StatsOverlay;
