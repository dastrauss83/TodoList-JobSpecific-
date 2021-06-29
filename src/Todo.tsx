import { DataTracker } from "./DataTracker";
import { SchoolInfo } from "./SchoolInfo";
import { ContactNote } from "./ContactNote";
import { SchoolInfoInputs } from "./SchoolInfoInputs";
import { useState } from "react";

export type todo = {
  schoolName: string;

  contactName: string;
  contactEmail: string;
  contactPhone: string;

  Students: string;
  StudentsChecked: boolean;
  Staff: string;
  StaffChecked: boolean;
  Date: string;
  DateChecked: boolean;

  Emails: string;
  "Phone Calls": string;
  "General Notes": string;
};

export type TodoProps = {
  screenState: string;
  setScreenState: any;
};

export const Todo: React.FC<TodoProps> = ({ screenState, setScreenState }) => {
  const [school, setSchool] = useState<todo>({
    schoolName: "",

    contactName: "",
    contactEmail: "",
    contactPhone: "",

    Students: "",
    StudentsChecked: false,
    Staff: "",
    StaffChecked: false,
    Date: "",
    DateChecked: false,

    Emails: "",
    "Phone Calls": "",
    "General Notes": "",
  });
  const [todoState, setTodoState] = useState<string>("full");

  const handleChange = (variant: string, value?: any): void => {
    if (variant) {
      if (
        variant === "StudentsChecked" ||
        variant === "StaffChecked" ||
        variant === "DateChecked"
      ) {
        setSchool((prevState) => ({
          ...prevState,
          [variant]: !school[variant],
        }));
      } else {
        setSchool((prevState) => ({
          ...prevState,
          [variant]: value,
        }));
      }
    }
  };

  if (screenState === "new") {
    return (
      <div className="Todo">
        <SchoolInfo
          schoolName={school.schoolName}
          contactName={school.contactName}
          contactEmail={school.contactEmail}
          contactPhone={school.contactPhone}
        />
        <SchoolInfoInputs onChange={handleChange} />
        <button className="Button" onClick={() => setScreenState("list")}>
          Create
        </button>
      </div>
    );
  }

  if (screenState === "list") {
    return (
      <div className="Todo">
        <SchoolInfo
          schoolName={school.schoolName}
          contactName={school.contactName}
          contactEmail={school.contactEmail}
          contactPhone={school.contactPhone}
        />
        <button
          className="Button"
          onClick={() => {
            setTodoState("full");
            setScreenState("full");
          }}
        >
          Expand
        </button>
      </div>
    );
  }

  if (todoState === "full") {
    return (
      <div className="Todo">
        <SchoolInfo
          schoolName={school.schoolName}
          contactName={school.contactName}
          contactEmail={school.contactEmail}
          contactPhone={school.contactPhone}
        />
        <div className="DataTrackerSection">
          <DataTracker
            dataTrackerType="Students"
            onChange={handleChange}
            value={school.Students}
            checked={school.StudentsChecked}
            variant={"StudentsChecked"}
          />
          <DataTracker
            dataTrackerType="Staff"
            onChange={handleChange}
            value={school.Staff}
            checked={school.StaffChecked}
            variant={"StaffChecked"}
          />
          <DataTracker
            dataTrackerType="Date"
            onChange={handleChange}
            value={school.Date}
            checked={school.DateChecked}
            variant={"DateChecked"}
          />
        </div>
        <div className="ContactNoteSection">
          <ContactNote
            contactNoteType="Emails"
            onChange={handleChange}
            value={school.Emails}
          />
          <ContactNote
            contactNoteType="Phone Calls"
            onChange={handleChange}
            value={school["Phone Calls"]}
          />
          <ContactNote
            contactNoteType="General Notes"
            onChange={handleChange}
            value={school["General Notes"]}
          />
        </div>
        <SchoolInfoInputs onChange={handleChange} />
      </div>
    );
  }
  return <div>Loading</div>;
};
