# IMS 452 Capstone Project Spring 2023
Built in React Native utilizing [ViroReact](https://viro-community.readme.io/) for VR capabilities.

## Installation
I initially built this app on Android, but I downloaded a pre-built starter kit for the project, so it should run smoothly on iOS and already have necessary pods installed.

You should just be able to clone the git repo and run `npx react-native run-android` or `npx react-native run-ios` in a terminal (make sure you are in the starter-kit folder). The app must be started on a physical device and **NOT** an emulator. See Viro's [README.md](README(theirs).md) for troubleshooting.

> if `npx react-native run-android` fails with EACCESS gradlew.bat or EACCESS gradlew, run `chmod +x gradlew.bat` or `chmod +x gradlew`.
> ⚠️ NOTE: The android emulators are not supported by Viro. See [this](https://viro-community.readme.io/docs/frequently-asked-questions#does-this-work-with-ios-simulators-or-android-emulators).
*From Viro's README*

The app was developed using node version **14.18.1**. If the app doesn't start properly, try downgrading your version of Node.js.

### Known issues / Tips for using the app
1. VR Scene throws "undefined is not an object (evaluating 'this.props')" error when appearing, can be dismissed and the app still seems to work fine. This may be a problem with the starter kit I installed and would have to be changed within the node modules for Viro as this is an issue I have dealt with from the beginning.
2. 3D models for objects will only be visible if the app is connected to Metro, but any image-based background will still show.
3. Having a VR headset that is compatible with your mobile device adds to the immersion, but is not required.

## About
**_This project was built for academic purposes and use only._**

This app was an idea to build as part of my capstone at Miami University. The goal of the app is to be a proof-of-concept for building a custom virtual sensory spaces for those with autism or have special sensory needs. I decided to develop for mobile devices instead of VR headsets because, firstly, mobile devices are more common than standalone headets, and, secondly, mobile devices are more portable than standalone headets, meaning that people could use this app anywhere. 

I knew that I couldn't build a polished app in a semester with a React library (Viro) that I had no experience using, so I went with something that is rough, unpolished, and has few assets. This is the main reason why I don't plan on ever building and releasing this app to the public (especially not in its current form). There are also a lot of things within the app I would like to fix at some point, but my end goal for this project was to have a working POC, and I so far was able to achieve that goal.

### Assets
None of the assets used in this app belong to me, but I was able to obtain for free. All credit goes to the original creators.

## Contact
Not able to get the app running and want to see a demo? Contact me on [LinkedIn](https://linkedin.com/in/ian-j-russell).