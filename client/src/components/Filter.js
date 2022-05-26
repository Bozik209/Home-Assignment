
const Filter = ({ onFilter }) => {

  const onChange = (e) => {
    onFilter(e);
  };
  return (
    <div className="add-form">
      <div className="form-control">
        <label>Filter</label>
        <input
          type="text"
          placeholder="search filter"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
