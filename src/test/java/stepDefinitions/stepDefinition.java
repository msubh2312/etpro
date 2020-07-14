package stepDefinitions;

import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.junit.Assert;
import Resources.base;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import io.appium.java_client.touch.offset.PointOption;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepDefinition extends base {
	private static AndroidDriver<AndroidElement> driver;
	Properties prop = new Properties();
	
	//@Given("^everything is initialized$")
	@Before
    public void everything_is_initialized() throws Throwable {
		driver = Capabilities("ETPro");
    }
	//@After
	//public void teardown() throws IOException {
		//Runtime runtime = Runtime.getRuntime();
		//runtime.exec("taskkill /F /IM node.exe");
	//}
	
	

	@Given("User has successfully logged in")
	public void user_has_successfully_logged_in() {
		driver.findElement(By.id("com.zkteco.easytimepro:id/serverConfig")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/serverEditText")).sendKeys("192.168.1.12");
		driver.findElement(By.id("com.zkteco.easytimepro:id/portEditText")).sendKeys("80");
		driver.findElement(By.id("com.zkteco.easytimepro:id/saveButton")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/usernameEditText")).sendKeys("AT1");
		driver.findElement(By.id("com.zkteco.easytimepro:id/passwordEditText")).sendKeys("1234");
		driver.findElement(By.id("com.zkteco.easytimepro:id/loginButton")).click();
	}

	
	@Given("^User has successfully logged in as Admin$")
	public void user_has_successfully_logged_in_as_Admin() throws Throwable {
		
		driver.findElement(By.id("com.zkteco.easytimepro:id/serverConfig")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/serverEditText")).sendKeys("192.168.1.12");
		driver.findElement(By.id("com.zkteco.easytimepro:id/portEditText")).sendKeys("80");
		driver.findElement(By.id("com.zkteco.easytimepro:id/saveButton")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/usernameEditText")).sendKeys("AT4");
		driver.findElement(By.id("com.zkteco.easytimepro:id/passwordEditText")).sendKeys("1234");
		driver.findElement(By.id("com.zkteco.easytimepro:id/loginButton")).click();
		
	}
	

	@When("^navigates to menu and clicks PUNCH$")
	public void navigates_to_menu_and_clicks_punch() throws Throwable {
		driver.findElement(By.id("com.zkteco.easytimepro:id/base_menu")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/centerView")).click();

	}

	@Then("^Clicks on outdoor punch and does the punch$")
	public void clicks_on_outdoor_punch_and_does_the_punch() throws Throwable {
		driver.findElement(By.id("com.zkteco.easytimepro:id/unScheduleRadio")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/out_lay_camera_pp")).click();
		Thread.sleep(5000l);
		((AndroidDriver<?>) driver).pressKey(new KeyEvent(AndroidKey.CAMERA));
		Thread.sleep(5000l);
		((AndroidDriver<?>) driver).pressKey(new KeyEvent(AndroidKey.ENTER));
		driver.findElement(By.id("com.zkteco.easytimepro:id/outdoor_spinner_function")).click();
		
			
			driver.findElement(By.id("com.zkteco.easytimepro:id/text_view_spinner")).click();
			driver.findElement(By.id("com.zkteco.easytimepro:id/companyNameSpinner")).click();
						for (int i = 0; i < driver.findElements(By.id("com.zkteco.easytimepro:id/text_view_spinner")).size(); i++) {
				if (driver.findElements(By.className("android.widget.TextView")).get(i).getText()
						.equalsIgnoreCase("flipkart")) {
					driver.findElements(By.className("android.widget.TextView")).get(i).click();
					break;
				}
			}
		driver.findElement(By.id("com.zkteco.easytimepro:id/summary")).sendKeys("Visiting fo meeting");
		Thread.sleep(2000l);
		screenShot("OutdoorPunchDetailsFilled");
		driver.findElement(By.id("com.zkteco.easytimepro:id/out_bt_ok")).click();
	}

	@Then("^captures the outdoor punch screen$")
	public void captures_the_outdoor_punch_screen() throws Throwable {
		Thread.sleep(2000l);
		screenShot("toastMessageinOutdoorPunch");
	}

	@When("^clicks punch on dashboard$")
	public void clicks_punch_on_dashboard() throws Throwable {
		driver.findElement(By.id("com.zkteco.easytimepro:id/img_click")).click();
	}

	@Then("^fills up the details and punches$")
	public void fills_up_the_details_and_punches() throws Throwable {
		driver.findElement(By.id("com.zkteco.easytimepro:id/spinner_wordcode")).click();
		for (int i = 0; i < driver.findElements(By.id("com.zkteco.easytimepro:id/text_view_spinner")).size(); i++) {
			if (driver.findElements(By.id("com.zkteco.easytimepro:id/text_view_spinner")).get(i).getText()
					.equalsIgnoreCase("Night")) {
				driver.findElements(By.id("com.zkteco.easytimepro:id/text_view_spinner")).get(i).click();
				break;
			}
		}
		driver.findElement(By.id("com.zkteco.easytimepro:id/spinner_function")).click();
		for (int i = 0; i < driver.findElements(By.id("com.zkteco.easytimepro:id/text_view_spinner")).size(); i++) {
			if (driver.findElements(By.id("com.zkteco.easytimepro:id/text_view_spinner")).get(i).getText()
					.equalsIgnoreCase("Break Out")) {
				driver.findElements(By.id("com.zkteco.easytimepro:id/text_view_spinner")).get(i).click();
				break;
			}
		}
		driver.findElement(By.id("com.zkteco.easytimepro:id/bt_ok")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/ll_recent")).click();
		driver.findElementByAndroidUIAutomator(
				"new UiScrollable(new UiSelector().resourceId(\"com.zkteco.easytimepro:id/tv_title_item_mpunches\")).scrollIntoView(text(\"2020-07-14\"));");
		Thread.sleep(3000l);
		screenShot("RecentPunchespage");
		Thread.sleep(3000l);
		driver.navigate().back();
		Thread.sleep(3000l);
		screenShot("DashboardRecentPunches");
	}

	@Then("^navigates to recent punches and validates$")
	public void navigates_to_recent_punches_and_validates() throws Throwable {
		driver.navigate().back();
		Assert.assertTrue(driver.findElement(By.id("com.zkteco.easytimepro:id/ll_recent")).isDisplayed());
		driver.findElement(By.id("com.zkteco.easytimepro:id/ll_recent")).click();
		Thread.sleep(3000l);
		if (driver.findElement(By.id("com.zkteco.easytimepro:id/base_title")).isDisplayed()) {
			driver.findElementByAndroidUIAutomator(
					"new UiScrollable(new UiSelector().resourceId(\"com.zkteco.easytimepro:id/tv_type_detail\")).scrollIntoView(text(\"Check Out\"));");
			Thread.sleep(3000l);
			screenShot("toastMessageinRecentPunches");
		}
	}

	@Then("^clicks on profile and prints user details$")
	public void clicks_on_profile_and_prints_user_details() throws Throwable {
		driver.findElement(By.xpath("//android.widget.TextView[@text='Profile']")).click();
		System.out.println("Name : " + driver.findElement(By.id("com.zkteco.easytimepro:id/tv_name_pf")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Employee ID:']")).getText()
				+ " " + driver.findElement(By.id("com.zkteco.easytimepro:id/tv_workno_pf")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Department:']")).getText()
				+ " " + driver.findElement(By.id("com.zkteco.easytimepro:id/tv_department_pf")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Position:']")).getText() + " "
				+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_desig_pf")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Area:']")).getText() + " "
				+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_ads_pf")).getText());
	}

	@Then("^clicks sign out,then takes screenshot$")
	public void clicks_sign_outthen_takes_screenshot() throws Throwable {
		driver.findElement(By.id("com.zkteco.easytimepro:id/tv_exit_menu")).click();
		// implement screenshot
	}


	@When("clicks on menu button")
	public void clicks_on_menu_button() {
		driver.findElement(By.id("com.zkteco.easytimepro:id/base_menu")).click();
	}
	
	@Then ("clicks on profile then clicks on settings validates the formats")
	public void clicks_on_profile_then_clicks_on_settings_validates_the_formats() {
		driver.findElement(By.id("com.zkteco.easytimepro:id/lay_Profile")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
		// validated date format
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Date Format']")).getText()
				+ " : " + driver.findElement(By.xpath("//android.widget.TextView[@text='YYYY/MM/DD']")).getText());
		// validated time format
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Time Format']")).getText()
				+ " : " + driver.findElement(By.xpath("//android.widget.TextView[@text='12-Hour']")).getText());
		
	}

	@Then("menu options are shown")
	public void menu_options_are_shown() throws InterruptedException {
		int noOfElements = driver.findElements(By.className("android.widget.LinearLayout")).size();
		System.out.println(noOfElements);
		Thread.sleep(2000l);
		for (int i = 0; i <noOfElements+1; i++) {
			System.out.println(driver.findElements(By.className("android.widget.TextView")).get(i).getText());
			Thread.sleep(2000l);
	}
	}
	@Given("^User enters id and password$")
	public void user_enters_id_and_password() throws Throwable {
		driver.findElement(By.id("com.zkteco.easytimepro:id/serverConfig")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/serverEditText")).sendKeys("192.168.1.12");
		driver.findElement(By.id("com.zkteco.easytimepro:id/portEditText")).sendKeys("80");
		driver.findElement(By.id("com.zkteco.easytimepro:id/saveButton")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/usernameEditText")).sendKeys("AT1");
		driver.findElement(By.id("com.zkteco.easytimepro:id/passwordEditText")).sendKeys("1234");

	}

	@When("^clicks login$")
	public void clicks_login() throws Throwable {
		driver.findElement(By.id("com.zkteco.easytimepro:id/loginButton")).click();
	}

	

	@Then("^dashboward is visible$")
	public void dashboward_is_visible() throws Throwable {
		Assert.assertTrue(driver.findElement(By.id("com.zkteco.easytimepro:id/base_title")).isDisplayed());
		Assert.assertTrue(driver.findElement(By.id("com.zkteco.easytimepro:id/base_menu")).isDisplayed());
		Assert.assertTrue(driver.findElement(By.id("com.zkteco.easytimepro:id/imageView")).isDisplayed());
		Assert.assertTrue(driver.findElement(By.id("com.zkteco.easytimepro:id/ll_recent")).isDisplayed());
		Assert.assertTrue(driver.findElement(By.id("com.zkteco.easytimepro:id/img_click")).isDisplayed());
		org.junit.Assert.assertTrue(
				driver.findElement(By.xpath("//android.view.View[@content-desc='Google Map']")).isDisplayed());
		Assert.assertTrue(driver.findElement(By.id("com.zkteco.easytimepro:id/tv_title_main")).getText()
				.equalsIgnoreCase("My Statistics"));
		Assert.assertTrue(driver.findElement(By.id("com.zkteco.easytimepro:id/rb_house_check_1")).getText()
				.equalsIgnoreCase("weekly"));
		Assert.assertTrue(driver.findElement(By.id("com.zkteco.easytimepro:id/rb_house_check_2")).getText()
				.equalsIgnoreCase("monthly"));
	}

	@Given("^User enters id$")
	public void user_enters_id() throws Throwable {
		driver.findElement(By.id("com.zkteco.easytimepro:id/serverConfig")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/serverEditText")).sendKeys("192.168.1.12");
		driver.findElement(By.id("com.zkteco.easytimepro:id/portEditText")).sendKeys("80");
		driver.findElement(By.id("com.zkteco.easytimepro:id/saveButton")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/usernameEditText")).clear();
		driver.findElement(By.id("com.zkteco.easytimepro:id/usernameEditText")).sendKeys("AT1");
	}

	@When("^clicks forgot password$")
	public void clicks_forgot_password() throws Throwable {
		driver.findElement(By.id("com.zkteco.easytimepro:id/forgotPassTextView")).click();
	}

	@Then("forgot password page opens, user enters email-id\\/username and clicks reset")
	public void forgot_password_page_opens_user_enters_email_id_username_and_clicks_reset() {
		driver.findElement(By.id("com.zkteco.easytimepro:id/emailEditText")).sendKeys("zkindia_rd07@zkteco.com");
		driver.findElement(By.id("com.zkteco.easytimepro:id/saveButton")).click();
	}
	
	
	@When("^user clicks on notification$")
    public void user_clicks_on_notification() throws Throwable {
		driver.findElement(By.id("com.zkteco.easytimepro:id/base_menu")).click();
        driver.findElement(By.xpath("//android.widget.TextView[@text='Notifications']")).click();
        
    }
	@When("user clicks on Approvals")
    public void user_clicks_on_Approvals() {
		driver.findElement(By.id("com.zkteco.easytimepro:id/base_menu")).click();
        driver.findElement(By.xpath("//android.widget.TextView[@text='Approvals']")).click();
    }
	

    @Then("^clicks on Exception and verifies the message$")
    public void clicks_on_exception_and_verifies_the_message() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Exception']")).click();
        driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
        screenShot("Attendance Exception Notification");
    }
    
    @Then("^clicks on Schedule and verifies the notification$")
    public void clicks_on_schedule_and_verifies_the_notification() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Schedule']")).click();
        driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
        screenShot("Schedule Notification");
    }
        
    @Then("^clicks on Announcement and verifies if private notifications are there$")
    public void clicks_on_Announcement_and_verifies_if_private_notifications_are_there() throws Throwable {
    	Thread.sleep(2000l);
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Announcement']")).click();
        driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
        screenShot("Private Notification");
    }
    
    @Then("^clicks on Announcement and verifies if public notifications are there$")
    public void clicks_on_Announcement_and_verifies_if_public_notifications_are_there() throws Throwable {
    	Thread.sleep(2000l);
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Announcement']")).click();
        driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
        screenShot("public Notification");
    }   
     
    @Then("^clicks on training and verifies if notifications are there$")
    public void clicks_on_training_and_verifies_if_notifications_are_there() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Training']")).click();
        driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
        screenShot("training notification");
    } 

    
    @Then("^clicks on manual log and verifies if notifications are there$")
    public void clicks_on_manual_log_and_verifies_if_notifications_are_there() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Manual Log']")).click();
        driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
        screenShot("manual log notification");
    } 
    
    
    @Then("^clicks on Overtime and verifies if notifications are there$")
    public void clicks_on_Overtime_and_if_notifications_are_there() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Overtime']")).click();
        driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
        screenShot("overtime notification");
    } 
    
    
    @Then("^clicks on Leave and verifies if Leave notifications are there$")
    public void clicks_on_Leave_and_verifies_if_notifications_are_there() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Leave']")).click();
        driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
        screenShot("leave notification");
    } 

    @Then("clicks on Leave and verifies if Leave approvals are there")
    public void clicks_on_Leave_and_verifies_if_Leave_approvals_are_there() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Leave']")).click();
        screenShot("leave pending approval");
    }
    
    @Then("clicks on Leave, then clicks on processed and verifies if approved leaves are there")
    public void clicks_on_Leave_and_verifies_if_approved_leaves_are_there() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Leave']")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/rb_over_ap")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/tv_approve_ap")).click();
        screenShot("leaves approved");
    }
    
    @Then("clicks on Leave, then clicks on processed and verifies if rejected leaves are there")
    public void clicks_on_Leave_and_verifies_if_rejected_leaves_are_there() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Leave']")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/rb_over_ap")).click();
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Rejected']")).click();
        screenShot("leave rejected");
    }
    
    @Then("User filters Approved leaves by processed time")
    public void User_filters_leaves_by_processed_time() throws IOException {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/img_rby_sb")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/btn_sb")).click();
    	
    	new TouchAction(driver).tap(PointOption.point(353, 946)).perform();
    	screenShot("Approved leaves filtered by processed time");
    	
    }
    
    @Then("User filters Approved leaves by applied time")
    public void User_filters_leaves_by_applied_time() throws IOException {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/img_aby_sb")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/btn_sb")).click();
    	new TouchAction(driver).tap(PointOption.point(353, 946)).perform();
    	screenShot("Approved leaves filtered by approved time");

    }
    
    @Then("User filters Rejected leaves by processed time")
    public void User_filters_rejected_leaves_by_processed_time() throws IOException {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/img_rby_sb")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/btn_sb")).click();
    	
    	new TouchAction(driver).tap(PointOption.point(353, 946)).perform();
    	screenShot("Approved leaves filtered by processed time");
    	
    }
    
    @Then("User filters Rejected leaves by applied time")
    public void User_filters_rejected_leaves_by_applied_time() throws IOException {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/img_aby_sb")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/btn_sb")).click();
    	new TouchAction(driver).tap(PointOption.point(353, 946)).perform();
    	screenShot("Approved leaves filtered by approved time");

    }
    
      @Then("^clicks on Overtime and verifies if Overtime approvals are there$")
    public void clicks_on_overtime_and_verifies_if_leave_approvals_are_there() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='OverTime']")).click();
        screenShot("Overtime pending approval");
    }
    
    @Then("^clicks on Overtime, then clicks on processed and verifies if approved leaves are there$")
    public void clicks_on_overtime_then_clicks_on_processed_and_verifies_if_approved_leaves_are_there() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='OverTime']")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/rb_over_ap")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/tv_approve_ap")).click();
        screenShot("Overtime approved");
    }
    
    @Then("^clicks on Overtime, then clicks on processed and verifies if rejected leaves are there$")
    public void clicks_on_overtime_then_clicks_on_processed_and_verifies_if_rejected_leaves_are_there() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='OverTime']")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/rb_over_ap")).click();
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Rejected']")).click();
        screenShot("Overtime rejected");
    }
    
    @Then("^User filters Approved Overtime by processed time$")
    public void user_filters_overtime_by_processed_time() throws IOException {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/img_rby_sb")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/btn_sb")).click();
    	
    	new TouchAction(driver).tap(PointOption.point(353, 946)).perform();
    	screenShot("Approved Overtimes filtered by processed time");
    	
    }
    
    @Then("^User filters Approved Overtime by applied time$")
    public void user_filters_overtime_by_applied_time() throws IOException {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/img_aby_sb")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/btn_sb")).click();
    	new TouchAction(driver).tap(PointOption.point(353, 946)).perform();
    	screenShot("Approved Overtimes filtered by approved time");

    }
    @Then("^User filters Rejected Overtime by processed time$")
    public void user_filters_rejected_overtime_by_processed_time() throws IOException {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/img_rby_sb")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/btn_sb")).click();
    	
    	new TouchAction(driver).tap(PointOption.point(353, 946)).perform();
    	screenShot("Approved Overtimes filtered by processed time");
    	
    }
    
    @Then("^User filters Rejected Overtime by applied time$")
    public void user_filters_rejected_overtime_by_applied_time() throws IOException {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/img_aby_sb")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/btn_sb")).click();
    	new TouchAction(driver).tap(PointOption.point(353, 946)).perform();
    	screenShot("Approved Overtimes filtered by approved time");

    }
    
    @Then("clicks on schedule")
    public void clicks_on_schedule() throws IOException {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/lay_Schedule")).click();

    }
    
    @Then("clicks on Change Schedule button")
    public void clicks_on_change_schedule_button() throws IOException {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/btn_schedule")).click();

    }
    
    @Then("clicks on my status")
    public void clicks_on_my_status() throws IOException {
    	//scroll needed
    	driver.findElement(By.xpath("//android.widget.TextView[@text='My Status']")).click();

    } 
    @Then("clicks on Leave")
    public void clicks_on_Leave() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Leave']")).click();

    }
    
    @Then("clicks on Overtime")
    public void clicks_on_Overtime() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='OverTime']")).click();

    }
    
    @Then("clicks on Training")
    public void clicks_on_Training() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Training']")).click();

    }
    
    @Then("clicks on Schedule")
    public void clicks_on_Schedule() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Schedule']")).click();

    }
    
    @Then("clicks on Manual Punch")
    public void clicks_on_Manual_punch() throws IOException {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Manual Punch']")).click();

    }
    
    @Then("^clicks on Contacts$")
    public void clicks_on_contacts() throws Throwable {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/lay_Contact")).click();
    }
    
    @Then("^validates a random Contact by clicking it$")
    public void validates_a_random_Contact_by_clicking_it() throws Throwable {
    	int contact = (int) ((Math.random() * 9) + 1);
		driver.findElements(By.className("android.widget.TextView")).get(contact).click();
		System.out.println(driver.findElement(By.id("com.zkteco.easytimepro:id/tv_name_cpinfo")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Mobile No:']")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='E-mail:']")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Position:']")).getText()
				+ " : " + driver.findElement(By.id("com.zkteco.easytimepro:id/tv_postion_cpinfo")).getText());
		new TouchAction(driver).tap(PointOption.point(957, 505)).release().perform();
    }

    @Then("^searches for a contact with ID and name$")
    public void searches_for_a_contact_with_id_and_name() throws Throwable {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/et_search_contact")).sendKeys("AT1");// id
		driver.findElement(By.id("com.zkteco.easytimepro:id/tv_name_itemc")).click();
		System.out.println(driver.findElement(By.id("com.zkteco.easytimepro:id/tv_name_cpinfo")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Mobile No:']")).getText() + " "
				+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_tel_cpinfo")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='E-mail:']")).getText() + " "
				+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_email_cpinfo")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Position:']")).getText() + " "
				+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_postion_cpinfo")).getText());
		new TouchAction(driver).tap(PointOption.point(957, 505)).release().perform();

		driver.findElement(By.id("com.zkteco.easytimepro:id/et_search_contact")).sendKeys("android2");// employeename
		driver.findElement(By.id("com.zkteco.easytimepro:id/tv_name_itemc")).click();
		System.out.println(driver.findElement(By.id("com.zkteco.easytimepro:id/tv_name_cpinfo")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Mobile No:']")).getText() + " "
				+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_tel_cpinfo")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='E-mail:']")).getText() + " "
				+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_email_cpinfo")).getText());
		System.out.println(driver.findElement(By.xpath("//android.widget.TextView[@text='Position:']")).getText() + " "
				+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_postion_cpinfo")).getText());
		new TouchAction(driver).tap(PointOption.point(957, 505)).release().perform();
    }

    @Then("^clicks on Announcement$")
    public void clicks_on_announcement() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Announcement']")).click();
    }

    @Then("^clicks on Private Announcement$")
    public void clicks_on_private_announcement() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Private']")).click();
		if (driver.findElement(By.id("com.zkteco.easytimepro:id/tv_sc")).isDisplayed()) {
			System.out.println(driver.findElement(By.id("com.zkteco.easytimepro:id/tv_sc")).getText());
		} else {
			new TouchAction(driver).tap(PointOption.point(998, 413)).release().perform();
			System.out.println("Message Type : "
					+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_type_itemacml")).getText());
			System.out.println("Message Sender : "
					+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_name_itemacml")).getText());
			System.out.println("Message Subject : "
					+ driver.findElement(By.id("com.zkteco.easytimepro:id/tv_title_itemacml")).getText());
			System.out.println("Message Body : "
					+ driver.findElement(By.id("com.zkteco.easytimepro:id/lay_detalnote_itemacml")).getText());
		}
    }

    @Then("^clicks on Public Announcement$")
    public void clicks_on_public_announcement() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Public']")).click();
		
		for (int i = 0; i < driver.findElements(By.className("android.widget.LinearLayout")).size(); i++) {
			driver.findElements(By.id("com.zkteco.easytimepro:id/img_arrow_itemacml")).get(i).click();
			Thread.sleep(2000l);

			System.out.println("Message Type : "
					+ driver.findElements(By.id("com.zkteco.easytimepro:id/tv_type_itemacml")).get(i).getText());
			System.out.println("Message Sender : "
					+ driver.findElements(By.id("com.zkteco.easytimepro:id/tv_name_itemacml")).get(i).getText());
			System.out.println("Message Subject : "
					+ driver.findElements(By.id("com.zkteco.easytimepro:id/tv_title_itemacml")).get(i).getText());
			System.out.println("Message Body : "
					+ driver.findElements(By.id("com.zkteco.easytimepro:id/lay_detalnote_itemacml")).get(i).getText());

		}
    }
    @Then("^clicks on Public Announcement then Clicks on Plus sign$")
    public void clicks_on_Public_Announcement_then_clicks_on_plus_sign() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Public']")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/img_add_accoun")).click();
    }

    @Then("^sends a Public announcement$")
    public void clicks_on_plus_sign_and_sends_a_public_announcement() throws Throwable {
    	
		//driver.findElement(By.id("com.zkteco.easytimepro:id/img_add_accoun")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/et_subject")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/et_subject")).sendKeys("Public message");
		driver.findElement(By.id("com.zkteco.easytimepro:id/et_code")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/et_code")).sendKeys("Good evening");
		driver.findElement(By.id("com.zkteco.easytimepro:id/bt_ok")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/refresh")).click();
    }
    
    @Then("^clicks on Private Announcement then Clicks on Plus sign$")
    public void clicks_on_Proivate_Announcement_then_clicks_on_plus_sign() throws Throwable {
    	driver.findElement(By.xpath("//android.widget.TextView[@text='Private']")).click();
    	driver.findElement(By.id("com.zkteco.easytimepro:id/img_add_accoun")).click();
    }

    @Then("^sends a private announcement$")
    public void clicks_on_plus_sign_and_sends_a_private_announcement() throws Throwable {
    	driver.findElement(By.id("com.zkteco.easytimepro:id/tv_person")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/et_search_contact")).sendKeys("at1");
		driver.findElement(By.id("com.zkteco.easytimepro:id/img_head_itemc")).click();
		driver.findElement(By.id("com.zkteco.easytimepro:id/et_subject")).sendKeys("Private message");
		driver.findElement(By.id("com.zkteco.easytimepro:id/et_code")).sendKeys("Good evening");
		driver.findElement(By.id("com.zkteco.easytimepro:id/bt_ok")).click();
		screenShot("toastMessageinPrivateAnnouncement");
    }

    }


