import { Table, Tag } from "antd";
import { useContext, useState } from "react";
import { MatchStatsContext } from "../../context/MatchStatsContext";
import ScrollableContainer from "../containers/ScrollableContainer";


const StatsTable = () => {

    const { matchStats, dispatchChartFilter } = useContext(MatchStatsContext)
    const [displayCategory, setDisplayCategory] = useState(null)


    const handleToggleCategory = () => {
        setDisplayCategory((prev) => { return !prev })
    }

    const categorizedColumns = displayCategory ?
        matchStats?.columns.slice(0, 1).concat(matchStats.columns.slice(16))
        :
        matchStats?.columns.slice(0, 16)

    categorizedColumns?.push(
        {
            title: 'Tags',
            key: 'Tags',
            dataIndex: 'Tags',
            render: (tags) => (
                <span>
                    {tags?.map((tag) => {
                        return (
                            <Tag
                                onClick={() => { dispatchChartFilter(tag) }}
                                style={{ cursor: "pointer" }}
                                color={"#fa8c16"} key={tag} >
                                {tag}
                            </Tag>
                        );
                    })
                    }
                </span >
            ),
        }
    )

    return (
        <>
            <button
                className="toggle-categories-button"
                onClick={() => { handleToggleCategory() }}
            >Touches / Passes category display
            </button>

            {
                !!matchStats &&
                <ScrollableContainer>
                    <Table
                        onChange={() => dispatchChartFilter(sessionStorage.getItem("chartFilter"))}
                        dataSource={matchStats.dataSource} columns={categorizedColumns}
                    />
                </ScrollableContainer>
            }
        </>
    );
}


export default StatsTable;
