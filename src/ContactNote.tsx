export type ContactNoteType = "Emails" | "Phone Calls" | "General Notes";

type ContactNoteProps = {
  contactNoteType: ContactNoteType;
  onChange: (variant: string, value: any) => void;
  value: any;
};

export const ContactNote: React.FC<ContactNoteProps> = ({
  onChange,
  contactNoteType,
  value,
}) => {
  return (
    <div className="ContactNote">
      <label className="ContactNoteType">{contactNoteType}</label>
      <textarea
        className="ContactNotes"
        placeholder={contactNoteType}
        onChange={(e) => onChange(contactNoteType, e.target.value)}
      >
        {value}
      </textarea>
    </div>
  );
};
