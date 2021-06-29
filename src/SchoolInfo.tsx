type SchoolInfoProps = {
  schoolName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
};

export const SchoolInfo: React.FC<SchoolInfoProps> = ({
  schoolName,
  contactName,
  contactEmail,
  contactPhone,
}) => {
  return (
    <div className="SchoolInfo">
      <h1 className="SchoolName">
        {schoolName === "" ? "School" : schoolName}
      </h1>
      <div className="ContactInputsContainer">
        <div className="ContactInput" id="Name">
          {contactName === "" ? "Name" : contactName}
        </div>
        <div className="ContactInput" id="Email">
          {contactEmail === "" ? "Email" : contactEmail}
        </div>
        <div className="ContactInput" id="Phone">
          {contactPhone === "" ? "Phone" : contactPhone}
        </div>
      </div>
    </div>
  );
};
