import React from "react";
import Text from "./text/Text";


const AlkaliMetals = props => {
  return (
    <div>
      {/*<section id="top">*/}
      {/*  <a style="float:left;" className="fond button-flip" href="#text">*/}
      {/*    <button style="color: #fff; margin: 50px;" type="button" className="btn" id="to-ammend" href="#text">More*/}
      {/*      info*/}
      {/*    </button>*/}
      {/*  </a>*/}
      {/*  <div className="main">*/}
      {/*    <div id="container"></div>*/}
      {/*    <div id="menu">*/}
      {/*      <a className="button-flip">*/}
      {/*        <button id="helix" style="color: #fff;" className="btn">VIEW ALKALI METALS</button>*/}
      {/*      </a>*/}
      {/*      <a className="button-flip">*/}
      {/*        <button id="table">TABLE VIEW</button>*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <Text props={props.description} />
    </div>
  );
};

export default props => <AlkaliMetals {...props} />;