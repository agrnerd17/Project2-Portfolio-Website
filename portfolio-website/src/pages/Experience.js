import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import UniIcon from "@mui/icons-material/School";

function Experience() {
    return (
    <div className="experience">
        <VerticalTimeline lineColor="pink">
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2020 - Present"
            iconStyle={{background: "pink", color: "#fff"}}
            icon={<UniIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    California State University, Fullerton, Fullerton, CA
                </h3>
                <p3>Bachelor's of Science in Computer Science</p3>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    )
}

export default Experience;