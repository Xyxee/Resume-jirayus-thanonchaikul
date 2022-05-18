import React from "react";
function App() {
  return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
      <div className="w3-row-padding">
        <div className="w3-third">
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              {/* <img
                src="/w3images/avatar_hat.jpg"
                style={{ width: "100%" }}
                alt="Avatar"
              />
              <div className="w3-display-bottomleft w3-container w3-text-black">
                <h2>Jirayus Thanonchaikul</h2>
              </div> */}
            </div>
            <div className="w3-container">
              <h2>Jirayus Thanonchaikul</h2>
              <p>
                <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                IT Support ,Web Developer
              </p>

              <p>
                <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                jirayus.thanonchaikul@gmail.com
              </p>

              <p>
                <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                091-738-7401
              </p>
              <p>
                <i className="fa fa-folder fa-fw w3-margin-right w3-large w3-text-teal"></i>
                <a href="https://github.com/Xyxee">Github/Xyxee</a>
              </p>
              <hr />

              <p className="w3-large">
                <b>
                  <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                  Skills
                </b>
              </p>
              <p>HTML</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div
                  className="w3-container w3-center w3-round-xlarge w3-teal"
                  style={{ width: "100%" }}
                >
                  100%
                </div>
              </div>
              <p>CSS</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div
                  className="w3-container w3-center w3-round-xlarge w3-teal"
                  style={{ width: "80%" }}
                >
                  <div className="w3-center w3-text-white">80%</div>
                </div>
              </div>
              <p>Javascript {"(Web App-Basic CRUD)"}</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div
                  className="w3-container w3-center w3-round-xlarge w3-teal"
                  style={{ width: "99%" }}
                >
                  99%
                </div>
              </div>
              <p>Library React</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div
                  className="w3-container w3-center w3-round-xlarge w3-teal"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
              <p>Node.js {"(Express, Cluster, ConnectDB, Read-Write File)"}</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div
                  className="w3-container w3-center w3-round-xlarge w3-teal"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <p>mongo DB {"(Aggregate, Insert, Update, Delete)"}</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div
                  className="w3-container w3-center w3-round-xlarge w3-teal"
                  style={{ width: "60%" }}
                >
                  60%
                </div>
              </div>
              <p>SQL</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div
                  className="w3-container w3-center w3-round-xlarge w3-teal"
                  style={{ width: "40%" }}
                >
                  40%
                </div>
              </div>
              <p>Google app script And Google sheet </p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div
                  className="w3-container w3-center w3-round-xlarge w3-teal"
                  style={{ width: "99%" }}
                >
                  99%
                </div>
              </div>
              <p>Infrastructure </p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div
                  className="w3-container w3-center w3-round-xlarge w3-teal"
                  style={{ width: "30%" }}
                >
                  30%
                </div>
              </div>
              <br />

              <p className="w3-large w3-text-theme">
                <b>
                  <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                  Languages
                </b>
              </p>
              <p>English</p>
              <div className="w3-light-grey w3-round-xlarge">
                <div
                  className="w3-round-xlarge w3-teal"
                  style={{ width: "70%", height: "24px" }}
                ></div>
              </div>
              <p>Thai</p>
              <div className="w3-light-grey w3-round-xlarge">
                <div
                  className="w3-round-xlarge w3-teal"
                  style={{ width: "100%", height: "24px" }}
                ></div>
              </div>

              <br />
            </div>
          </div>
          <br />
        </div>
        <div className="w3-twothird">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Work Experience
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>IT Support</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>2 july
                2015 - <span className="w3-tag w3-teal w3-round">Current</span>
              </h6>
              <p>
                *Responsible for maintaining the accounting system. <br />
                *Install and maintain microsoft office program.
                <br />
                *Others related to IT
              </p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Web Developer</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>10
                October 2018 -{" "}
                <span className="w3-tag w3-teal w3-round">Current</span>
              </h6>
              <p>
                *Build a checkout system using Node.js.
                <br /> *Create patient registration system using google app
                script.
                <br />
                !React trains for 4 months. <br />project:
                <a href="http://pmcorporation.fortiddns:3000"> Phoenix-Emma</a>
              </p>
              <hr />
            </div>
          </div>

          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Education
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Google, Youtube, Stack Overflow, w3School </b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever
              </h6>
              <p>I learned programming everything from here.</p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Thonburi Vocational College </b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>2011 -
                2014
              </h6>
              <p>Vocational Certificate Business Computer</p>
              <hr />
            </div>
          </div>
          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Certificate
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Certificate-of-completion-for-kaojao</b>
              </h5>
              <img
                src="https://drive.google.com/uc?id=1g81tFCoD_a3BR3bC9eVxtbm1mAL4uA2p"
                style={{ width: "100%" }}
                alt="Avatar"
              />
            </div>
            <hr />
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>
                  Certificate-of-completion-for-introduction-to-computer-science
                </b>
              </h5>
              <img
                src="https://drive.google.com/uc?id=1aKbDSDiO-PbX1csaKvtun8KaeXCIKQBr"
                style={{ width: "100%" }}
                alt="Avatar"
              />
            </div>
            <hr />
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Certificate-of-completion-for-essential-sql-for-everyone</b>
              </h5>
              <img
                src="https://drive.google.com/uc?id=1qWx28bLBIy1z648K1lYCnDjLqLPJAKBI"
                style={{ width: "100%" }}
                alt="Avatar"
              />
            </div>
            <hr />
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>BorntoDev Online Certificate</b>
              </h5>
              <img
                src="https://drive.google.com/uc?id=14e4Ddv-5QhAVeuWChz5HSb_UdvHJqY_2"
                style={{ width: "100%" }}
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
