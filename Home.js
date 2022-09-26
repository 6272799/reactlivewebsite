import React from "react";

const Home = () => {
  return (
    <>
      <section>
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-6 pt-5 pt-lg-0  order-2 order-lg-1">
                  <h1>
                    Grow your business with{" "}
                    <strong className="brand-name"> Uzair malik</strong>
                  </h1>
                  <h2 className="my-10">
                    {" "}
                    We are the team of talented developer making website{" "}
                  </h2>
                  <div>
                    <a href="/contact"> contact here</a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-6 pt-5 pt-lg-0  order-2 order-lg-1">
                      <div>
                        <img src="/images/uzair.jpg" alt="uzair" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
