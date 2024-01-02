const Button = (props) => {
  const { name, style } = props;
  return <button className={`button ${style}`}>{name} </button>;
};

const element = (
  <div className="bg-container">
    <div className="content-card">
      <h1 className="main-heading">Social Buttons</h1>
      <div className="buttons-card">
        <Button name="Like" style="btn-1" />
        <Button name="Comment" style="btn-2" />
        <Button name="Share" style="btn-3" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
