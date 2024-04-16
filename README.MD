JAVA 17
Gradle 7


echo -e "\n# Android\nexport ANDROID_HOME=/mnt/c/Users/tdc/AppData/Local/Android/Sdk\nexport WSLENV=ANDROID_HOME/p" >> $HOME/.bashrc && source $HOME/.bashrc


cd /mnt/c/Users/tdc/AppData/Local/Android/Sdk/build-tools/34.0.0
> mv d8.bat dx.bat
cd lib
> mv d8.jar dx.jar



npm install --global eas-cli
npx create-expo-app
npx expo install expo-updates
eas init
eas update:configure
>> npx expo run:android --variant release
npx expo prebuild