import React, { Component } from "react";
import data from "./dataGlasses.json";

export default class Body extends Component {
  state = {
    isShow: false,
    glass: {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  render() {
    let glassesInfo = this.state;
    return (
      <div className="body">
        <div className="container">
          <div className="row my-5 justify-content-around">
            <div className="vglasses__ ">
              <div className="vglasses__card">
                <div className="vglasses__model" id="avatar">
                  <img src="./glassesImage/v7.png" alt="FENDI F8750" />
                </div>
                <div id="glassesInfo" className="vglasses__info">
                  <h5>FENDI F8750</h5>
                  <p>
                    <span>$80</span>
                  </p>
                  <p>
                    Light pink square lenses define these sunglasses, ending
                    with amother of pearl effect tip.
                  </p>
                </div>
              </div>
            </div>
            <div className="vglasses__ ">
              <div className="vglasses__card">
                {glassesInfo.isShow && (
                  <div>
                    <div className="vglasses__model" id="avatar">
                      <img
                        src={glassesInfo.glass.url}
                        alt={glassesInfo.glass.name}
                      />
                    </div>
                    <div id="glassesInfo" className="vglasses__info">
                      <h5>{glassesInfo.glass.name}</h5>
                      <p>
                        <span>${glassesInfo.glass.price}</span>
                      </p>
                      <p>{glassesInfo.glass.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            {data.map((value) => {
              return (
                <div
                  className="col-2 vglasses"
                  key={value.id}
                  onClick={() => {
                    console.log(value);
                    this.setState({
                      isShow: true,
                      glass: value,
                    });
                  }}
                >
                  <img className="img-fluid" src={value.url} alt={value.name} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
