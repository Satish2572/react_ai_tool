import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../helper";

const Answers = ({ ans, key }) => {
    const [heading, setHeading] = useState(false);
    const [answer, setAnswer] = useState(ans)
    useEffect(() => {
        if (checkHeading(ans)) {
            setHeading(true);
            setAnswer(replaceHeadingStars(ans));
        }
    }, []);

    return (
        <>
            {heading ? <span className="pt-2 text-lg block">{answer}</span> : <span className="pl-5">{answer}</span>}
        </>
    )
}

export default Answers;