import "./Form_One.scss";
import Title from "./Title";
import Form_Wrapper from "./wrapper/Form_Wrapper";

interface FormOne {
  name: string;
  email: string;
  phone: string;
}

type props = FormOne & {
  update: (fields: Partial<FormOne>) => void;
};

const Form_One = ({ name, email, phone, update }: props) => {
  const val = true;
  return (
    <Form_Wrapper>
      <Title
        title="Personal info"
        paragraph="Please provide your name, email, address, and phone number"
      />
      <div className="stepone">
        <div className="stepone__labelanderror">
          <label htmlFor="name">Name</label>
          <p className={`${val ? "none" : "error"}`}>This field is required</p>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          className={`${val ? "active" : "error"}`}
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => update({ name: e.target.value })}
        />
        <div className="stepone__labelanderror">
          <label htmlFor="email">Email</label>
          <p className={`${val ? "none" : "error"}`}>This field is required</p>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className={`${val ? "active" : "error"}`}
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e) => update({ email: e.target.value })}
        />
        <div className="stepone__labelanderror">
          <label htmlFor="phone">Phone Number</label>
          <p className={`${val ? "none" : "error"}`}>This field is required</p>
        </div>
        <input
          type="tel"
          name="pone"
          id="phone"
          className={`${val ? "active" : "error"}`}
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={(e) => update({ phone: e.target.value })}
        />
      </div>
    </Form_Wrapper>
  );
};

export default Form_One;
