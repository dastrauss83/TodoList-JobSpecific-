export type DataTrackerType = "Students" | "Staff" | "Date";

type DataTrackerProps = {
  dataTrackerType: DataTrackerType;
  onChange: (variant: string, value: any) => void;
  value: any;
  checked: boolean;
  variant: string;
};

export const DataTracker: React.FC<DataTrackerProps> = ({
  onChange,
  dataTrackerType,
  value,
  checked,
  variant,
}) => {
  return (
    <div className="DataTracker">
      <div className="DataTrackerHeader">
        <input
          className="CheckBox"
          type="checkbox"
          checked={checked}
          onChange={() => {
            onChange(variant, "");
          }}
        ></input>
        <label className="DataTrackerType">{dataTrackerType}</label>
      </div>
      <textarea
        className="DataTextArea"
        placeholder={dataTrackerType}
        onChange={(e) => onChange(dataTrackerType, e.target.value)}
      >
        {value}
      </textarea>
    </div>
  );
};
