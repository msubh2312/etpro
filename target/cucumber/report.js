$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/etProAndroid.feature");
formatter.feature({
  "name": "easy Time Pro Android Application Validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User is able to login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enters id and password",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_enters_id_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dashboward is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.dashboward_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User is able to reset password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enters id",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_enters_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks forgot password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_forgot_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "forgot password page opens, user enters email-id/username and clicks reset",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.forgot_password_page_opens_user_enters_email_id_username_and_clicks_reset()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can see all menu options",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_03"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "menu options are shown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.menu_options_are_shown()"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 10, Size: 10\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat stepDefinitions.stepDefinition.menu_options_are_shown(stepDefinition.java:197)\r\n\tat ✽.menu options are shown(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:20)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "user is able to logout from the application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_04"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks sign out,then takes screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_sign_outthen_takes_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view the Profile",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_05"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on profile and prints user details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_profile_and_prints_user_details()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to navigate to settings in Profile",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_10"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on profile then clicks on settings validates the formats",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_profile_then_clicks_on_settings_validates_the_formats()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to check the schedule details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_11"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on schedule",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_schedule()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to request for change schedule",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_12"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on schedule",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_schedule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Change Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_change_schedule_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHANKAR\u0027, ip: \u0027192.168.4.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Admin\\eclipse-work..., appPackage: com.zkteco.easytimepro, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: C:\\Users\\Admin\\eclipse-work..., autoGrantPermissions: true, automationName: UiAutomator2, locationServicesAuthorized: true, newCommandTimeout: 4000, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: ZY322CFT6B, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: ZY322CFT6B, javascriptEnabled: true, locationContextEnabled: false, locationServicesAuthorized: true, networkConnectionEnabled: true, newCommandTimeout: 4000, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 3edb69eb-c82b-48e7-9488-a93b70e8b88d\n*** Element info: {Using\u003did, value\u003dcom.zkteco.easytimepro:id/btn_schedule}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat stepDefinitions.stepDefinition.clicks_on_change_schedule_button(stepDefinition.java:467)\r\n\tat ✽.clicks on Change Schedule button(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:51)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "user is able to request for change schedule",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_13"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on my status",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_my_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Leave",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Leave()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view the pending Leave Status",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_14"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on my status",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_my_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Overtime",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Overtime()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view the pending Training Status",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_15"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on my status",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_my_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Training",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Training()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view the pending Schedule Status",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_16"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on my status",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_my_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Schedule",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Schedule()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view the pending Manual Punch Status",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_17"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on my status",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_my_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Manual Punch",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Manual_punch()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view all the contacts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_18"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on my status",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_my_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Contacts",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_contacts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates a random Contact by clicking it",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.validates_a_random_Contact_by_clicking_it()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHANKAR\u0027, ip: \u0027192.168.4.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Admin\\eclipse-work..., appPackage: com.zkteco.easytimepro, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: C:\\Users\\Admin\\eclipse-work..., autoGrantPermissions: true, automationName: UiAutomator2, locationServicesAuthorized: true, newCommandTimeout: 4000, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: ZY322CFT6B, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: ZY322CFT6B, javascriptEnabled: true, locationContextEnabled: false, locationServicesAuthorized: true, networkConnectionEnabled: true, newCommandTimeout: 4000, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 143768e2-7b7f-4cdc-947e-3f89619961d5\n*** Element info: {Using\u003did, value\u003dcom.zkteco.easytimepro:id/tv_name_cpinfo}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat stepDefinitions.stepDefinition.validates_a_random_Contact_by_clicking_it(stepDefinition.java:516)\r\n\tat ✽.validates a random Contact by clicking it(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:94)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "user is able to search contact by Employee ID or Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_19"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on my status",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_my_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Contacts",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_contacts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "searches for a contact with ID and name",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.searches_for_a_contact_with_id_and_name()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHANKAR\u0027, ip: \u0027192.168.4.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Admin\\eclipse-work..., appPackage: com.zkteco.easytimepro, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: C:\\Users\\Admin\\eclipse-work..., autoGrantPermissions: true, automationName: UiAutomator2, locationServicesAuthorized: true, newCommandTimeout: 4000, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: ZY322CFT6B, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: ZY322CFT6B, javascriptEnabled: true, locationContextEnabled: false, locationServicesAuthorized: true, networkConnectionEnabled: true, newCommandTimeout: 4000, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: c7d2c535-1da8-4e84-855b-622de42ecfee\n*** Element info: {Using\u003did, value\u003dcom.zkteco.easytimepro:id/et_search_contact}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat stepDefinitions.stepDefinition.searches_for_a_contact_with_id_and_name(stepDefinition.java:526)\r\n\tat ✽.searches for a contact with ID and name(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:101)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "user is able to get the Private Announcement",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_20"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Announcement",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_announcement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Private Announcement",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_private_announcement()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to get the Public Announcement",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_21"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Announcement",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_announcement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Public Announcement",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_public_announcement()"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 4, Size: 4\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat stepDefinitions.stepDefinition.clicks_on_public_announcement(stepDefinition.java:577)\r\n\tat ✽.clicks on Public Announcement(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:113)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "user is able to send the Public Announcement",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_22"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Announcement",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_announcement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Public Announcement then Clicks on Plus sign",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Public_Announcement_then_clicks_on_plus_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends a Public announcement",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_plus_sign_and_sends_a_public_announcement()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to send the Private Announcement",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_23"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on menu button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Announcement",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_announcement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Private Announcement then Clicks on Plus sign",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Proivate_Announcement_then_clicks_on_plus_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends a private announcement",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_plus_sign_and_sends_a_private_announcement()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to Punch after navigating to Menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_24"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to menu and clicks PUNCH",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.navigates_to_menu_and_clicks_punch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fills up the details and punches",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.fills_up_the_details_and_punches()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHANKAR\u0027, ip: \u0027192.168.4.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Admin\\eclipse-work..., appPackage: com.zkteco.easytimepro, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: C:\\Users\\Admin\\eclipse-work..., autoGrantPermissions: true, automationName: UiAutomator2, locationServicesAuthorized: true, newCommandTimeout: 4000, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: ZY322CFT6B, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: ZY322CFT6B, javascriptEnabled: true, locationContextEnabled: false, locationServicesAuthorized: true, networkConnectionEnabled: true, newCommandTimeout: 4000, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 772935f3-44aa-49c9-99aa-67be567914cb\n*** Element info: {Using\u003did, value\u003dcom.zkteco.easytimepro:id/ll_recent}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat stepDefinitions.stepDefinition.fills_up_the_details_and_punches(stepDefinition.java:127)\r\n\tat ✽.fills up the details and punches(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:134)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "navigates to recent punches and validates",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.navigates_to_recent_punches_and_validates()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user is able to Outdoor Punch after navigating to Menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_25"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to menu and clicks PUNCH",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.navigates_to_menu_and_clicks_punch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on outdoor punch and does the punch",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_outdoor_punch_and_does_the_punch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "captures the outdoor punch screen",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.captures_the_outdoor_punch_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to Punch Attendance from dashboard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_26"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks punch on dashboard",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_punch_on_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fills up the details and punches",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.fills_up_the_details_and_punches()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHANKAR\u0027, ip: \u0027192.168.4.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Admin\\eclipse-work..., appPackage: com.zkteco.easytimepro, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: C:\\Users\\Admin\\eclipse-work..., autoGrantPermissions: true, automationName: UiAutomator2, locationServicesAuthorized: true, newCommandTimeout: 4000, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: ZY322CFT6B, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: ZY322CFT6B, javascriptEnabled: true, locationContextEnabled: false, locationServicesAuthorized: true, networkConnectionEnabled: true, newCommandTimeout: 4000, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 185d8762-ac4a-49fa-b9e9-5a018a1c7a13\n*** Element info: {Using\u003did, value\u003dcom.zkteco.easytimepro:id/ll_recent}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat stepDefinitions.stepDefinition.fills_up_the_details_and_punches(stepDefinition.java:127)\r\n\tat ✽.fills up the details and punches(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:148)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "user is able to Outdoor Punch from Dashboard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_27"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks punch on dashboard",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_punch_on_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on outdoor punch and does the punch",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_outdoor_punch_and_does_the_punch()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view Attendance exception notifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_35"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on notification",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Exception and verifies the message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_exception_and_verifies_the_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view Schedule notifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_36"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on notification",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Schedule and verifies the notification",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_schedule_and_verifies_the_notification()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element \u0027By.xpath: //android.widget.TextView[@text\u003d\u0027Schedule\u0027]\u0027 does not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHANKAR\u0027, ip: \u0027192.168.4.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Admin\\eclipse-work..., appPackage: com.zkteco.easytimepro, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: C:\\Users\\Admin\\eclipse-work..., autoGrantPermissions: true, automationName: UiAutomator2, locationServicesAuthorized: true, newCommandTimeout: 4000, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: ZY322CFT6B, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: ZY322CFT6B, javascriptEnabled: true, locationContextEnabled: false, locationServicesAuthorized: true, networkConnectionEnabled: true, newCommandTimeout: 4000, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: d084539d-df3c-439a-ac17-bff0c8ec3dc2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepDefinitions.stepDefinition.clicks_on_schedule_and_verifies_the_notification(stepDefinition.java:280)\r\n\tat ✽.clicks on Schedule and verifies the notification(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:166)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "user is able to view private announcement notifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_37"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHANKAR\u0027, ip: \u0027192.168.4.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Admin\\eclipse-work..., appPackage: com.zkteco.easytimepro, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: C:\\Users\\Admin\\eclipse-work..., autoGrantPermissions: true, automationName: UiAutomator2, locationServicesAuthorized: true, newCommandTimeout: 4000, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: ZY322CFT6B, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: ZY322CFT6B, javascriptEnabled: true, locationContextEnabled: false, locationServicesAuthorized: true, networkConnectionEnabled: true, newCommandTimeout: 4000, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 277c3bdd-4593-4126-86a4-88f1a86ec30e\n*** Element info: {Using\u003did, value\u003dcom.zkteco.easytimepro:id/portEditText}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat stepDefinitions.stepDefinition.user_has_successfully_logged_in(stepDefinition.java:42)\r\n\tat ✽.User has successfully logged in(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:170)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on notification",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_notification()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Announcement and verifies if private notifications are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Announcement_and_verifies_if_private_notifications_are_there()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user is able to view Public announcement notifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_38"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on notification",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Announcement and verifies if public notifications are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Announcement_and_verifies_if_public_notifications_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view training notifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_39"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on notification",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on training and verifies if notifications are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_training_and_verifies_if_notifications_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view Manual log notifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_40"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on notification",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on manual log and verifies if notifications are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_manual_log_and_verifies_if_notifications_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view Overtime notifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_41"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on notification",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_notification()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHANKAR\u0027, ip: \u0027192.168.4.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Admin\\eclipse-work..., appPackage: com.zkteco.easytimepro, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: C:\\Users\\Admin\\eclipse-work..., autoGrantPermissions: true, automationName: UiAutomator2, locationServicesAuthorized: true, newCommandTimeout: 4000, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: ZY322CFT6B, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: ZY322CFT6B, javascriptEnabled: true, locationContextEnabled: false, locationServicesAuthorized: true, networkConnectionEnabled: true, newCommandTimeout: 4000, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: da7562ff-48d9-46f3-96e5-43c27b628fa8\n*** Element info: {Using\u003did, value\u003dcom.zkteco.easytimepro:id/base_menu}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat stepDefinitions.stepDefinition.user_clicks_on_notification(stepDefinition.java:260)\r\n\tat ✽.user clicks on notification(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:195)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "clicks on Overtime and verifies if notifications are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Overtime_and_if_notifications_are_there()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user is able to view leave notifications",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_42"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on notification",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Leave and verifies if Leave notifications are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Leave_and_verifies_if_notifications_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view leave approvals",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_43"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Approvals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_Approvals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Leave and verifies if Leave approvals are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Leave_and_verifies_if_Leave_approvals_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view approved leaves in processed approvals",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_44"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Approvals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_Approvals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Leave, then clicks on processed and verifies if approved leaves are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Leave_and_verifies_if_approved_leaves_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view rejected leaves in processed aprovals",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_45"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Approvals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_Approvals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Leave, then clicks on processed and verifies if rejected leaves are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Leave_and_verifies_if_rejected_leaves_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to filter rejected leaves based upon processed and applied time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_46"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Approvals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_Approvals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Leave, then clicks on processed and verifies if rejected leaves are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Leave_and_verifies_if_rejected_leaves_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filters Rejected leaves by processed time",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.User_filters_rejected_leaves_by_processed_time()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filters Rejected leaves by applied time",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.User_filters_rejected_leaves_by_applied_time()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to filter approved leaves based upon processed and applied time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_47"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Approvals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_Approvals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Leave, then clicks on processed and verifies if approved leaves are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_Leave_and_verifies_if_approved_leaves_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filters Approved leaves by processed time",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.User_filters_leaves_by_processed_time()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filters Approved leaves by applied time",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.User_filters_leaves_by_applied_time()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view Overtime approvals",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_48"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Approvals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_Approvals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Overtime and verifies if Overtime approvals are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_overtime_and_verifies_if_leave_approvals_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view approved Overtime in processed approvals",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_49"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Approvals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_Approvals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Overtime, then clicks on processed and verifies if approved leaves are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_overtime_then_clicks_on_processed_and_verifies_if_approved_leaves_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to view rejected Overtimes in processed aprovals",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_50"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Approvals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_Approvals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Overtime, then clicks on processed and verifies if rejected leaves are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_overtime_then_clicks_on_processed_and_verifies_if_rejected_leaves_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to filter rejected Overtime based upon processed and applied time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_51"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Approvals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_Approvals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Overtime, then clicks on processed and verifies if rejected leaves are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_overtime_then_clicks_on_processed_and_verifies_if_rejected_leaves_are_there()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filters Approved Overtime by processed time",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_filters_overtime_by_processed_time()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filters Approved Overtime by applied time",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_filters_overtime_by_applied_time()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to filter approved Overtime based upon processed and applied time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC_52"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has successfully logged in as Admin",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_has_successfully_logged_in_as_Admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Approvals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_clicks_on_Approvals()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUBHANKAR\u0027, ip: \u0027192.168.4.170\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Admin\\eclipse-work..., appPackage: com.zkteco.easytimepro, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: C:\\Users\\Admin\\eclipse-work..., autoGrantPermissions: true, automationName: UiAutomator2, locationServicesAuthorized: true, newCommandTimeout: 4000, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S) Plus, deviceName: ZY322CFT6B, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: ZY322CFT6B, javascriptEnabled: true, locationContextEnabled: false, locationServicesAuthorized: true, networkConnectionEnabled: true, newCommandTimeout: 4000, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 289152fd-6be9-46dc-8a12-5f00d3d6faba\n*** Element info: {Using\u003did, value\u003dcom.zkteco.easytimepro:id/base_menu}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat stepDefinitions.stepDefinition.user_clicks_on_Approvals(stepDefinition.java:266)\r\n\tat ✽.user clicks on Approvals(file:///C:/Users/Admin/eclipse-workspace/easyTimeProAndroidBDD/src/test/java/features/etProAndroid.feature:269)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "clicks on Overtime, then clicks on processed and verifies if approved leaves are there",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.clicks_on_overtime_then_clicks_on_processed_and_verifies_if_approved_leaves_are_there()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User filters Rejected Overtime by processed time",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_filters_rejected_overtime_by_processed_time()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User filters Rejected Overtime by applied time",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinition.user_filters_rejected_overtime_by_applied_time()"
});
formatter.result({
  "status": "skipped"
});
});