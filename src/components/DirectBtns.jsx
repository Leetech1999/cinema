import { Link } from "react-router-dom";

function DirectBtns({ baseUrl }) {
  return (
    <section className="direct_btns">
      <Link to="/">
        <img src={`${baseUrl}images/mid-item1.png`} alt="" />
      </Link>
      <Link to="/">
        <img src={`${baseUrl}images/mid-item2.png`} alt="" />
      </Link>
      <Link to="/">
        <img src={`${baseUrl}images/mid-item3.png`} alt="" />
      </Link>
      <Link to="/">
        <img src={`${baseUrl}images/mid-item4.png`} alt="" />
      </Link>
      <Link to="/">
        <img src={`${baseUrl}images/mid-item5.png`} alt="" />
      </Link>
    </section>
  );
}

export default DirectBtns;
