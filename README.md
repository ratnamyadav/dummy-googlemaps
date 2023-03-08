# DummyGooglemaps

## Setting up the project

### Install Angular CLI
`npm install -g @angular/cli`

### Create a new project
`ng new dummy-googlemaps`

### Go to project folder
`cd dummy-googlemaps`

### Install Capacitor
`ng add @capacitor/angular`

### Building angular project
`ng build`

### Add iOS and Android platforms
`npm i @capacitor/ios @capacitor/android`

`npx cap add ios`

`npx cap add android`

### Add google maps capacitor plugin

`npm install @capacitor/google-maps`

`npx cap sync`

### Android specific changes

Go to AndroidManifest.xml

inside `<application>`

```
<meta-data android:name="com.google.android.geo.API_KEY" android:value="your api key" />
```

inside `<manifest>`

```
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```
