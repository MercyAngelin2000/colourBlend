import React, { useState } from 'react';
import './App.css';

function App() {
  const [chosenColor, setChosenColor] = useState()
  const gradientStyle = {
    backgroundImage: chosenColor && `linear-gradient(to bottom left, ${chosenColor?.shirt}, ${chosenColor?.pant})`,
  };
  const [colors, setColors] = useState([
    { "id": 1, "shirt": "rgb(70 59 59)", "pant": "#c1a49b" },
    { "id": 2, "shirt": "rgb(39 56 85)", "pant": "rgb(226 222 219)" },
    { "id": 3, "shirt": "rgb(153 40 48)", "pant": "rgb(64 109 141)" },
    { "id": 4, "shirt": "rgb(90 144 160)", "pant": "#cbbdae" },
    { "id": 5, "shirt": "rgb(165 96 40)", "pant": "rgb(40 50 60)" },
    { "id": 6, "shirt": "rgb(229 133 135)", "pant": "rgb(96 97 102)" },
    { "id": 7, "shirt": "rgb(94 80 58)", "pant": "rgb(140 127 102)" },
    { "id": 8, "shirt": "rgb(135 160 114)", "pant": "rgb(93 114 154)" },
    { "id": 9, "shirt": "rgb(86 100 41)", "pant": "rgb(78 61 41)" },
    { "id": 10, "shirt": "rgb(96 96 104)", "pant": "rgb(0 9 8)" },
    { "id": 11, "shirt": "rgb(211 162 159)", "pant": "rgb(222 207 184)" },
    { "id": 12, "shirt": "rgb(190 163 25)", "pant": "rgb(124 133 132)" },
    { "id": 13, "shirt": "#6a1a29", "pant": "#c1a588" },
    { "id": 14, "shirt": "#8fb8da", "pant": "#25303c" },
    { "id": 15, "shirt": "rgb(62 24 24)", "pant": "rgb(197 187 178)" },
    { "id": 16, "shirt": "rgb(223 137 168)", "pant": "rgb(1 37 79)" },
    { "id": 17, "shirt": "rgb(24 40 69)", "pant": "rgb(99 83 58)" },
    { "id": 18, "shirt": "rgb(15 38 26)", "pant": "rgb(184 152 120)" },
    { "id": 19, "shirt": "rgb(148 144 86)", "pant": "rgb(178 185 195)" },
    { "id": 20, "shirt": "rgb(179 128 110)", "pant": "rgb(50 34 24)" },
    { "id": 21, "shirt": "rgb(198 185 211)", "pant": "rgb(138 103 155)" },
    { "id": 22, "shirt": "rgb(227 233 244)", "pant": "rgb(112 67 52)" },
    { "id": 23, "shirt": "rgb(126 93 152)", "pant": "rgb(230 233 236)" },
    { "id": 24, "shirt": "rgb(1 133 202)", "pant": "rgb(37 62 81)" },
    { "id": 25, "shirt": "rgb(105 114 131)", "pant": "rgb(167 150 127)" },
    { "id": 26, "shirt": "rgb(47 102 120)", "pant": "rgb(180 163 146)" },
    { "id": 27, "shirt": "rgb(159 159 135)", "pant": "rgb(56 65 55)" },
    { "id": 28, "shirt": "rgb(97 93 48)", "pant": "rgb(3 7 6)" },
    { "id": 29, "shirt": "rgb(79 57 49)", "pant": "rgb(0 0 0)" },
    { "id": 30, "shirt": "rgb(173 159 191)", "pant": "rgb(92 71 115)" },
    { "id": 31, "shirt": "rgb(146 149 154)", "pant": "rgb(214 174 203)" },
    { "id": 32, "shirt": "rgb(3 3 3)", "pant": "rgb(199 148 144)" },
    { "id": 33, "shirt": "rgb(175 124 139)", "pant": "rgb(95 17 59)" },
    { "id": 34, "shirt": "rgb(93 129 97)", "pant": "rgb(168 183 187)" },
    { "id": 35, "shirt": "#870512", "pant": "#465964" },
  ]);
  const handleChoose = (data) => {
    let x = colors?.map(it => {
      if (Number(it?.id) === Number(data?.id)) {
        if (it?.selected) {
          setChosenColor()
          const { selected, ...rest } = it;
          return rest
        } else {
          setChosenColor({ "shirt": it?.shirt, "pant": it?.pant })
          return { ...it, "selected": true }
        }
      }
      if (it?.selected) {
        const { selected, ...rest } = it;
        return rest
      }
      return it
    })
    setColors(x)
  }
  return (
    <div className="App" style={gradientStyle}>
      <h4 className='topic mb-4'>
        <font style={{ color: "rgb(100 49 142)" }}>C</font>
        <font style={{ color: "rgb(231 18 140)" }}>o</font>
        <font style={{ color: "rgb(226 96 55)" }}>l</font>
        <font style={{ color: "rgb(248 147 33)" }}>o</font>
        <font style={{ color: "rgb(1 170 141)" }}>u</font>
        <font style={{ color: "rgb(1 170 141)" }}>r</font>
        &nbsp;
        <font style={{ color: "rgb(203 32 38)" }}>B</font>
        <font style={{ color: "rgb(239 72 131)" }}>l</font>
        <font style={{ color: "rgb(0 146 71)" }}>e</font>
        <font style={{ color: "rgb(140 197 64)" }}>n</font>
        <font style={{ color: "rgb(33 166 222)" }}>d</font>
      </h4>
      <div className='card' id="overall">
        <div className='row'>
          <div className='col-lg-8'>
            <div className='card palatte'>
              <div className='row'>
                {
                  colors?.map((it) => (
                    <div className='col-lg-4 col-6 p-3 columndata' key={it?.id} onClick={() => handleChoose(it)}>
                      <div role='button' title='Pick a colour you want to apply' className={it?.selected ? 'card color rounded-4 selected' : 'card color rounded-4'}>
                        <div className='row'>
                          <div className='col-lg-6 intercolor' style={{ backgroundColor: it?.shirt }}></div>
                          <div className='col-lg-6 intercolor' style={{ backgroundColor: it?.pant }}></div>
                        </div>
                        {
                          it?.selected &&
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill checkIcon" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                          </span>
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className={chosenColor ?'col-lg-4 icons p-3':'col-lg-4 icons p-3'}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="121" width="150" fill={chosenColor ? chosenColor?.shirt: "white"}><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" /></svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="110" width="90" fill={chosenColor && chosenColor?.pant}><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" /></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
