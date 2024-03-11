import { ReactNode } from "react";
import { Topic } from "./ui/topic";


const topics: string[] = [
    "Feel good",
    "Party",
    "Rap",
    "Commute",
    "Sad",
    "Sleep",
    "Energise",
    "Relax"
];


function Topics(): ReactNode {
    return (
        <div className="flex w-full gap-x-3 pt-8 lg:pt-12 overflow-x-scroll no-scrollbar">
            {
                topics.map((val: string, index) => {
                    return(
                        <Topic key={index} topicName={val}/>
                    )
                })
            }
        </div>
    )
}

export default Topics;