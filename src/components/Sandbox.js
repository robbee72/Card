import React from 'react';

class Sandbox extends React.Component {
  render() {
    var holePar = 3;
    var score = -1;
    const num = score + holePar;
    return (
      <div>
        {(() => {
          if (score === 0) {
            return <div className="par"> {num} </div>;
          } else if (score === -1) {
            return <div className="birdie">{num}</div>;
          } else if (score === -2) {
            return <div className="eagle">{num}</div>;
          } else if (score === -3) {
            return <div className="albatross">{num}</div>;
          } else if (score === 1) {
            return <div className="bogey">{num}</div>;
          } else if (score === 2) {
            return <div className="double-bogey">{num}</div>;
          } else if (score === 3) {
            return <div className="triple-bogey">{num}</div>;
          } else if (score === 4) {
            return <div className="quad-bogey">{num}</div>;
          } else {
            return <div className="other">Oh my!{num}</div>;
          }
        })()}
      </div>
    );
  }
}
export default Sandbox;
