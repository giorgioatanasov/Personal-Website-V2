import React from "react";
import Tab from "../Tab/Tab.js";
import Button from "../../Button/Button.js";
import { openJob } from "../../../Pages/HomePage/JobTabScript.js";

const Table = () => {
  return (
    <div class="wrapper">
      <div class="tab">
        <Button
              {...{
                text: "Applause",
                class: "tablinks",
                id: "first",
                onClick: (e) => {
                  openJob(e, "Applause");
                },
              }}
            >
          </Button>

        <Button
            {...{
              text: "TacoBell",
              class: "tablinks",
              id: "first",
              onClick: (e) => {
                openJob(e, "TacoBell");
              },
            }}
          >
        </Button>

        <Button
          {...{
            text: "CoderSchool",
            class: "tablinks",
            onClick: (e) => {
              openJob(e, "CoderSchool");
            },
          }}
        >
        </Button>

        <Button
          {...{
            text: "Prifina",
            class: "tablinks",
            id: "first",
            onClick: (e) => {
              openJob(e, "Prifina");
            },
          }}
        >
        </Button>
      </div>

      <Tab
        {...{
          id: "Applause",
          jobTitle: "Software Engineer",
          spanClass: "highlight",
          spanText: " @ Applause",
          duration: "Apr. 2022 - Present",
          description1:
            "Developed codeless automation software through use of NestJS, mySQL, & Angular.",
          description2:
            "Mentored and assisted engineering interns in making their code 10% more efficient.",
            description3:
            "Saved customers testing time and removed 100% need for manual automation testing by implementing software that converts user actions to codeless automation."
        }}
      ></Tab>

      <Tab
        {...{
          id: "TacoBell",
          jobTitle: "Software Engineer",
          spanClass: "highlight",
          spanText: " @ TacoBell",
          duration: "Jun. 2020 - Apr. 2022",
          description1:
            "Started as intern deploying AWS lambdas with dynamoDB database and integrated full stack project using React",
          description2:
            "Developed APIs through the use of Serverless framework and Express APIs.",
        }}
      ></Tab>

      <Tab
        {...{
          id: "CoderSchool",
          jobTitle: "Software Engineer Instructor",
          duration: "Jun. 2019 - Sept. 2019",
          description1:
            "Held Python, Javascript, and HTML workshops for kids from ages 8 to 16. Integrated programming platforms such as Scratch, Repl, and Pygame.",
          description2:
            "Helped increase students’ development skills such as teamwork, creativity, and presentation skills.",
        }}
      ></Tab>

      <Tab
        {...{
          id: "Prifina",
          jobTitle: "Software Engineer Intern",
          spanClass: "highlight",
          spanText: " @ Prifina",
          duration: "Jun. 2019 - Sept. 2019",
          description1:
            "Worked with AWS Serverless services such as API Gateway, Lambda, S3 to implement functions where users could file share through use of NodeJS.",
          description2:
            "Documented how and why API functions and Lambda functions are done in AWS Serverless architecture environment, utilizing general practices logic of serverless .com framework.",
        }}
      ></Tab>
    </div>
  );
};

export default Table;
