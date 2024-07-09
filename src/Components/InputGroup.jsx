import Input from "./Input";

export default function InputGroup({ handleInputChange, values }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          handleInputChange={handleInputChange}
          inputLabel="Initial Investment"
          defaultValue={10000}
          dataId="initialInvestment"
        />
        <Input
          handleInputChange={handleInputChange}
          inputLabel="Anual Investment"
          defaultValue={1200}
          dataId="annualInvestment"
        />
      </div>
      <div className="input-group">
        <Input
          handleInputChange={handleInputChange}
          inputLabel="Expected Return"
          defaultValue={6}
          dataId="expectedReturn"
        />
        <Input
          handleInputChange={handleInputChange}
          inputLabel="Duration"
          defaultValue={10}
          dataId="duration"
        />
      </div>
    </section>
  );
}
