import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

type Props = {
  width: number;
  height: number;
};

const Logo = (props: Props) => {
  const { width, height } = props;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width + " " + height}`}>
      <Defs>
        <LinearGradient
          id="a"
          x1="0.018"
          y1="0.927"
          x2="0.983"
          y2="0.928"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset="0" stopColor="#219ebc" />
          <Stop offset="0.389" stopColor="#45a3b1" />
          <Stop offset="0.394" stopColor="#efbc2e" />
          <Stop offset="0.714" stopColor="#efbc2e" />
          <Stop offset="0.716" stopColor="#fb8500" />
          <Stop offset="1" stopColor="#fb8500" />
        </LinearGradient>
      </Defs>
      <G transform="translate(-80.326 -153.643)">
        <Path
          d="M513.935,874.61h18.118v17.084c0,4.6,3.339,6.205,6.405.487l6.331-16.313c1.918-4.953,2.061-7.488-2.21-10.565-2.445-1.758-6-4.157-11.117-7.833-3.432-2.115-3.978-3.953.782-3.9H545.08c5.456,0,6.915-.463,8.634-5.748L558,834.853c1.229-3.787-.087-6.26-3.879-6.26H536.5c-2.768,0-4.45,2.584-4.45,5.126v15.561H513.935a4.936,4.936,0,0,0-4.935,4.9v15.53a4.938,4.938,0,0,0,4.935,4.9Z"
          transform="translate(-428.674 -674.95)"
          fill="#219ebc"
          fill-rule="evenodd"
        />
        <Path
          d="M513.468,870.26h16.405V885.73c0,4.167,3.024,5.618,5.8.441l5.733-14.771c1.736-4.484,1.866-6.78-2-9.567-2.214-1.591-5.435-3.764-10.066-7.093-3.108-1.916-3.6-3.58.708-3.529H541.67c4.94,0,6.261-.419,7.818-5.205l3.883-11.745c1.113-3.429-.078-5.669-3.512-5.669H533.9c-2.507,0-4.03,2.34-4.03,4.641v14.09H513.468a4.469,4.469,0,0,0-4.468,4.44v14.062a4.471,4.471,0,0,0,4.468,4.434Z"
          transform="translate(-426 -669.593)"
          fill="#1e408f"
          stroke="rgba(0,0,0,0)"
          stroke-miterlimit="10"
          stroke-width="1"
          fill-rule="evenodd"
        />
        <Path
          d="M2.6.441H9.893V-17.548L16.629.441h5.883L29.2-17.506V.441h7.289V-29.484H27.925L19.613-8.767l-8.4-20.717H2.6ZM49.026-10.6c0-4.092,2-5.286,5.456-5.286h2V-23.6a8.867,8.867,0,0,0-7.46,4.22v-3.964H41.736V.441h7.289ZM67.7-3.14a4.028,4.028,0,0,0-4.305-4.007A4.041,4.041,0,0,0,59.043-3.14,4.026,4.026,0,0,0,63.391.782,4.013,4.013,0,0,0,67.7-3.14ZM92.421.441h7.716L89.309-29.484h-8.44L70.041.441h7.63l1.79-5.286H90.63ZM88.755-10.472H81.38l3.666-10.955Zm21.953-9.506v-3.368h-7.289V11.78h7.289V-2.884A8.556,8.556,0,0,0,118.04.782c5.84,0,10.486-4.774,10.486-12.277S123.88-23.687,118.04-23.687A8.386,8.386,0,0,0,110.708-19.978Zm10.4,8.483c0,3.794-2.472,5.925-5.243,5.925-2.728,0-5.2-2.089-5.2-5.883s2.472-5.883,5.2-5.883C118.637-17.335,121.109-15.289,121.109-11.5Zm18.543-4.6v-7.5h3.964c2.9,0,4.135,1.449,4.135,3.751s-1.236,3.751-4.135,3.751Zm15.517-3.751c0-5.5-3.666-9.634-11-9.634H132.363V.441h7.289V-10.3h4.519C151.8-10.3,155.169-14.905,155.169-19.85Z"
          transform="translate(136.831 198.633)"
          stroke="rgba(0,0,0,0)"
          stroke-miterlimit="10"
          stroke-width="1"
          fill="url(#a)"
        />
      </G>
    </Svg>
  );
};

export default Logo;