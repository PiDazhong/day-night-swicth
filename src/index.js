/**
 * @des 日夜切换 switch       width默认是180，因为switch的宽高是180*100
 */

import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const DayNightSwitch = props => {
  const { value, onChange, style, className } = props;

  const [isClicked, setIsClicked] = useState(false);

  const isDark = value === false

  /** dom 节点 */
  const contanierRef = useRef(null);

  const mainButtonRef = useRef(null);
  const daytimeBackgrondRef = useRef(null);
  const cloudRef = useRef(null);
  const cloudListRef = useRef(null);
  const cloudLightRef = useRef(null);
  const componentsRef = useRef(null);
  const moonRef = useRef(null);
  const starsRef = useRef(null);
  const starRef = useRef(null);

  useEffect(() => {
    if (contanierRef.current) {
      mainButtonRef.current = contanierRef.current?.querySelector(".main-button");
      daytimeBackgrondRef.current = contanierRef.current?.querySelectorAll(".daytime-backgrond");
      cloudRef.current = contanierRef.current?.querySelector(".cloud");
      cloudListRef.current = contanierRef.current?.querySelectorAll(".cloud-son");
      cloudLightRef.current = contanierRef.current?.querySelector(".cloud-light");
      componentsRef.current = contanierRef.current?.querySelector(".components");
      moonRef.current = contanierRef.current?.querySelectorAll(".moon");
      starsRef.current = contanierRef.current?.querySelector(".stars");
      starRef.current = contanierRef.current?.querySelectorAll(".star");
    }
  }, [])

  useEffect(() => {
    if (contanierRef?.current && mainButtonRef.current) {
      if (value) {
        handleComponentsClick('light');
      } else {
        handleComponentsClick('dark');
      }
    }
  }, [value, contanierRef.current])

  // 点击事件
  const handleComponentsClick = targetTheme => {

    if (targetTheme === 'light') {
      mainButtonRef.current.style.transform = "translateX(0)";
      mainButtonRef.current.style.backgroundColor = "rgba(255, 195, 35,1)";

      mainButtonRef.current.style.boxShadow =
        "3px 3px 5px rgba(0, 0, 0, 0.5), inset  -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset  4px 5px 2px -2px rgba(255, 230, 80,1)";

      daytimeBackgrondRef.current[0].style.transform = "translateX(0)";
      daytimeBackgrondRef.current[1].style.transform = "translateX(0)";
      daytimeBackgrondRef.current[2].style.transform = "translateX(0)";
      cloudRef.current.style.transform = "translateY(10px)";
      cloudLightRef.current.style.transform = "translateY(10px)";
      componentsRef.current.style.backgroundColor = "rgba(70, 133, 192,1)";

      moonRef.current[0].style.opacity = "0";
      moonRef.current[1].style.opacity = "0";
      moonRef.current[2].style.opacity = "0";

      starsRef.current.style.transform = "translateY(-125px)";
      starsRef.current.style.opacity = "0";

      onChange(true)
    } else {
      mainButtonRef.current.style.transform = "translateX(110px)";
      mainButtonRef.current.style.backgroundColor = "rgba(195, 200,210,1)";

      mainButtonRef.current.style.boxShadow =
        "3px 3px 5px rgba(0, 0, 0, 0.5), inset  -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset  4px 5px 2px -2px rgba(255, 255, 210,1)";

      daytimeBackgrondRef.current[0].style.transform = "translateX(110px)";
      daytimeBackgrondRef.current[1].style.transform = "translateX(80px)";
      daytimeBackgrondRef.current[2].style.transform = "translateX(50px)";
      cloudRef.current.style.transform = "translateY(80px)";
      cloudLightRef.current.style.transform = "translateY(80px)";
      componentsRef.current.style.backgroundColor = "rgba(25,30,50,1)";

      moonRef.current[0].style.opacity = "1";
      moonRef.current[1].style.opacity = "1";
      moonRef.current[2].style.opacity = "1";

      starsRef.current.style.transform = "translateY(-62.5px)";
      starsRef.current.style.opacity = "1";

      onChange(false)
    }

    setIsClicked(true)

    setTimeout(function () {
      setIsClicked(false)
    }, 500);
  }

  // 移出事件
  const handleComponentsMouseOut = () => {
    if (isClicked) {
      return;
    }
    if (isDark) {
      mainButtonRef.current.style.transform = "translateX(110px)";
      daytimeBackgrondRef.current[0].style.transform = "translateX(110px)";
      daytimeBackgrondRef.current[1].style.transform = "translateX(80px)";
      daytimeBackgrondRef.current[2].style.transform = "translateX(50px)";

      starRef.current[0].style.top = "11px";
      starRef.current[0].style.left = "39px";
      starRef.current[1].style.top = "39px";
      starRef.current[1].style.left = "91px";
      starRef.current[2].style.top = "26px";
      starRef.current[2].style.left = "19px";
      starRef.current[3].style.top = "37px";
      starRef.current[3].style.left = "66px";
      starRef.current[4].style.top = "21px";
      starRef.current[4].style.left = "75px";
      starRef.current[5].style.top = "51px";
      starRef.current[5].style.left = "38px";
    } else {
      mainButtonRef.current.style.transform = "translateX(0px)";
      daytimeBackgrondRef.current[0].style.transform = "translateX(0px)";
      daytimeBackgrondRef.current[1].style.transform = "translateX(0px)";
      daytimeBackgrondRef.current[2].style.transform = "translateX(0px)";

      cloudListRef.current[0].style.right = "-20px";
      cloudListRef.current[0].style.bottom = "10px";
      cloudListRef.current[1].style.right = "-10px";
      cloudListRef.current[1].style.bottom = "-25px";
      cloudListRef.current[2].style.right = "20px";
      cloudListRef.current[2].style.bottom = "-40px";
      cloudListRef.current[3].style.right = "50px";
      cloudListRef.current[3].style.bottom = "-35px";
      cloudListRef.current[4].style.right = "75px";
      cloudListRef.current[4].style.bottom = "-60px";
      cloudListRef.current[5].style.right = "110px";
      cloudListRef.current[5].style.bottom = "-50px";
      cloudListRef.current[6].style.right = "-20px";
      cloudListRef.current[6].style.bottom = "10px";
      cloudListRef.current[7].style.right = "-10px";
      cloudListRef.current[7].style.bottom = "-25px";
      cloudListRef.current[8].style.right = "20px";
      cloudListRef.current[8].style.bottom = "-40px";
      cloudListRef.current[9].style.right = "50px";
      cloudListRef.current[9].style.bottom = "-35px";
      cloudListRef.current[10].style.right = "75px";
      cloudListRef.current[10].style.bottom = "-60px";
      cloudListRef.current[11].style.right = "110px";
      cloudListRef.current[11].style.bottom = "-50px";
    }
  }

  // 移入事件
  const handleComponentsMouseMove = () => {
    if (isClicked) return;

    if (isDark) {
      mainButtonRef.current.style.transform = "translateX(100px)";
      daytimeBackgrondRef.current[0].style.transform = "translateX(100px)";
      daytimeBackgrondRef.current[1].style.transform = "translateX(73px)";
      daytimeBackgrondRef.current[2].style.transform = "translateX(46px)";

      starRef.current[0].style.top = "10px";
      starRef.current[0].style.left = "36px";
      starRef.current[1].style.top = "40px";
      starRef.current[1].style.left = "87px";
      starRef.current[2].style.top = "26px";
      starRef.current[2].style.left = "16px";
      starRef.current[3].style.top = "38px";
      starRef.current[3].style.left = "63px";
      starRef.current[4].style.top = "20.5px";
      starRef.current[4].style.left = "72px";
      starRef.current[5].style.top = "51.5px";
      starRef.current[5].style.left = "35px";
    } else {
      mainButtonRef.current.style.transform = "translateX(10px)";
      daytimeBackgrondRef.current[0].style.transform = "translateX(10px)";
      daytimeBackgrondRef.current[1].style.transform = "translateX(7px)";
      daytimeBackgrondRef.current[2].style.transform = "translateX(4px)";

      cloudListRef.current[0].style.right = "-24px";
      cloudListRef.current[0].style.bottom = "10px";
      cloudListRef.current[1].style.right = "-12px";
      cloudListRef.current[1].style.bottom = "-27px";
      cloudListRef.current[2].style.right = "17px";
      cloudListRef.current[2].style.bottom = "-43px";
      cloudListRef.current[3].style.right = "46px";
      cloudListRef.current[3].style.bottom = "-39px";
      cloudListRef.current[4].style.right = "70px";
      cloudListRef.current[4].style.bottom = "-65px";
      cloudListRef.current[5].style.right = "109px";
      cloudListRef.current[5].style.bottom = "-54px";
      cloudListRef.current[6].style.right = "-23px";
      cloudListRef.current[6].style.bottom = "10px";
      cloudListRef.current[7].style.right = "-11px";
      cloudListRef.current[7].style.bottom = "-26px";
      cloudListRef.current[8].style.right = "18px";
      cloudListRef.current[8].style.bottom = "-42px";
      cloudListRef.current[9].style.right = "47px";
      cloudListRef.current[9].style.bottom = "-38px";
      cloudListRef.current[10].style.right = "74px";
      cloudListRef.current[10].style.bottom = "-64px";
      cloudListRef.current[11].style.right = "110px";
      cloudListRef.current[11].style.bottom = "-55px";
    }
  }

  return (
    <div
      className={`day-night-switch-contanier ${className ? className : ''}`}
      ref={contanierRef}
      style={style}
    >
      <div className="components" 
        onClick={() => handleComponentsClick(isDark ? 'light' : 'dark')}
        onMouseOut={handleComponentsMouseOut}
        onMouseMove={handleComponentsMouseMove}
      >
        <div className="main-button">
          <div className="moon"></div>
          <div className="moon"></div>
          <div className="moon"></div>
        </div>
        <div className="daytime-backgrond"></div>
        <div className="daytime-backgrond"></div>
        <div className="daytime-backgrond"></div>
        <div className="cloud">
          <div className="cloud-son"></div>
          <div className="cloud-son"></div>
          <div className="cloud-son"></div>
          <div className="cloud-son"></div>
          <div className="cloud-son"></div>
          <div className="cloud-son"></div>
        </div>
        <div className="cloud-light">
          <div className="cloud-son"></div>
          <div className="cloud-son"></div>
          <div className="cloud-son"></div>
          <div className="cloud-son"></div>
          <div className="cloud-son"></div>
          <div className="cloud-son"></div>
        </div>
        <div className="stars">
          <div className="star big">
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
          </div>
          <div className="star big">
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
          </div>
          <div className="star medium">
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
          </div>
          <div className="star medium">
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
          </div>
          <div className="star small">
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
          </div>
          <div className="star small">
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
            <div className="star-son"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayNightSwitch
