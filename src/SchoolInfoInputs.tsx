type SchoolInfoInputsProps = {
  onChange: (variant: string, value: any) => void;
};

export const SchoolInfoInputs: React.FC<SchoolInfoInputsProps> = ({
  onChange,
}) => {
  return (
    <div className="SchoolInfoInputs">
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="School"
        onChange={(e) => onChange("schoolName", e.target.value)}
      />
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="Contact Name"
        onChange={(e) => onChange("contactName", e.target.value)}
      />
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="Email"
        onChange={(e) => onChange("contactEmail", e.target.value)}
      />
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="Phone"
        onChange={(e) => onChange("contactPhone", e.target.value)}
      />
    </div>
  );
};
