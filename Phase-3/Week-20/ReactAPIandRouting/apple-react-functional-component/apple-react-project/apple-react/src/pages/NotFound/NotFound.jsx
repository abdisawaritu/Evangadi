import { Link } from "react-router";
const NotFound = () => {
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="contanier">
          <div className="row  h-100 align-items-center  justify-content-center  text-center">
            <div col-12 mt-5 pt-5>
              <h1 className="font-weight-bold">
                404 <br /> The Page You're Looking For Can't be Found
              </h1>

              <Link to="/"> Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
