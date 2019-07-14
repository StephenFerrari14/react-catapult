Component to launch content across the screen. No more toasts/popovers, catapults are the future of notifications.

Demo coming soon.

Usage:
```js
<Catapult 
  shouldLaunchCatapult={true}
  distance={window.innerWidth * 2} // Distance to launch catapult payload, recommend to be double where you want it to apex 
  height={window.innerHeight / 2} // Height you want the payload to apex
  duration={5} // How long the payload takes to travel
  launchFromRight: false, // Toggle between launching from the right, defaults to launching from the left
  xAxisBezier: '0.5,0.5,0.5,0.5', // Animations to catapult payload follow a bezier curve and it can be customeized for a different trajectory by a comma separated string of values
  yAxisBezier: '0.1,0.34,0.4,1.44' // Animations to catapult payload follow a bezier curve and it can be customeized for a different trajectory by a comma separated string of values
>
  <div>Login Successful!</div>
</Catapult>
```