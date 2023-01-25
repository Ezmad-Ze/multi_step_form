import "./Checkbox_Wrapper.scss";
import checkbox from "../../assets/icon-checkmark.svg";

interface props {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  timeline: string;
  handleOnChange: (pos: number) => void;
}

const Checkbox_Wrapper = ({
  id,
  title,
  subtitle,
  price,
  timeline,
  handleOnChange,
}: props) => {
  return (
    <label className="check--label">
      <input
        type="checkbox"
        name="check"
        id="check"
        onChange={() => handleOnChange(id)}
      />

      <div className="checkboxContainer">
        <div className="checkboxContainer__check">
          <div className="checkboxContainer__check--square">
            <img src={checkbox} alt="checkmark" />
          </div>
          <div className="checkboxContainer__check--label">
            <h2 className="checkboxContainer__check--label--title">{title}</h2>
            <p className="checkboxContainer__check--label--subtitle">
              {subtitle}
            </p>
          </div>
        </div>

        <span className="checkboxContainer__price">
          +${price}/{timeline}
        </span>
      </div>
    </label>
  );
};

export default Checkbox_Wrapper;
