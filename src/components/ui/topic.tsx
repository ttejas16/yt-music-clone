import { ReactNode } from "react";
import { Button } from "./button";

interface TopicProps{
    topicName:string
};


function Topic({ topicName }:TopicProps): ReactNode {
    return(
        <Button size={"sm"} variant={"ghost"} className="text-white bg-opacity-[0.7] bg-neutral-800 hover:bg-neutral-700 hover:text-white">
            {
                topicName
            }
        </Button>
    )
}

export { Topic };