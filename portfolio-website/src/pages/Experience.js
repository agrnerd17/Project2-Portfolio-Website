import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
    return (
    <div className="experience">
        <VerticalTimeline lineColor="pink">
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2016 - 2020"
            iconStyle={{background: "pink", color: "#fff"}}
            icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    City Honors High School, Inglewood, CA
                </h3>
                <p3>High School Diploma</p3>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="pink">
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2020 - Present"
            iconStyle={{background: "pink", color: "#fff"}}
            icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    California State University, Fullerton, Fullerton, CA
                </h3>
                <p3>Bachelor's of Science in Computer Science</p3>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="pink">
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="July 2022 - July 2022"
            iconStyle={{background: "lightcoral", color: "#fff"}}
            icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Remote, CA
                </h3>
                <p3>Meta: Career Insights Intern</p3>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="pink">
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="June 2023 - July 2023"
            iconStyle={{background: "lightcoral", color: "#fff"}}
            icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    California State University, Fullerton, Fullerton, CA
                </h3>
                <p3>CIC | PCUBED Research Intern</p3>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    )
}

export default Experience;