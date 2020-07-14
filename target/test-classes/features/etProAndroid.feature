Feature: easy Time Pro Android Application Validation


@TC_01
Scenario: User is able to login
Given User enters id and password
When clicks login
Then dashboward is visible

@TC_02
Scenario: User is able to reset password
Given User enters id
When clicks forgot password
Then forgot password page opens, user enters email-id/username and clicks reset

@TC_03
Scenario: User can see all menu options
Given User has successfully logged in
When clicks on menu button
Then menu options are shown

@TC_04
Scenario: user is able to logout from the application 
Given User has successfully logged in
When clicks on menu button
Then clicks sign out,then takes screenshot

@TC_05
Scenario: user is able to view the Profile
Given User has successfully logged in
When clicks on menu button
Then clicks on profile and prints user details

@TC_10
Scenario: user is able to navigate to settings in Profile 
Given User has successfully logged in
When clicks on menu button
Then clicks on profile then clicks on settings validates the formats

@TC_11
Scenario: user is able to check the schedule details
Given User has successfully logged in
When clicks on menu button
Then clicks on schedule

@TC_12
Scenario: user is able to request for change schedule
Given User has successfully logged in
When clicks on menu button
Then clicks on schedule
Then clicks on Change Schedule button

@TC_13
Scenario: user is able to request for change schedule
Given User has successfully logged in
When clicks on menu button
Then clicks on my status
Then clicks on Leave

@TC_14
Scenario: user is able to view the pending Leave Status
Given User has successfully logged in
When clicks on menu button
Then clicks on my status
Then clicks on Overtime

@TC_15
Scenario:  user is able to view the pending Training Status
Given User has successfully logged in
When clicks on menu button
Then clicks on my status
Then clicks on Training

@TC_16
Scenario: user is able to view the pending Schedule Status
Given User has successfully logged in
When clicks on menu button
Then clicks on my status
Then clicks on Schedule

@TC_17
Scenario: user is able to view the pending Manual Punch Status
Given User has successfully logged in
When clicks on menu button
Then clicks on my status
Then clicks on Manual Punch

@TC_18
Scenario:  user is able to view all the contacts
Given User has successfully logged in
When clicks on menu button
Then clicks on my status
Then clicks on Contacts
Then validates a random Contact by clicking it
@TC_19
Scenario:  user is able to search contact by Employee ID or Name
Given User has successfully logged in
When clicks on menu button
Then clicks on my status
Then clicks on Contacts
Then searches for a contact with ID and name
@TC_20
Scenario:  user is able to get the Private Announcement 
Given User has successfully logged in
When clicks on menu button
Then clicks on Announcement
Then clicks on Private Announcement
@TC_21
Scenario:  user is able to get the Public Announcement
Given User has successfully logged in
When clicks on menu button
Then clicks on Announcement
Then clicks on Public Announcement
@TC_22
Scenario: user is able to send the Public Announcement 
Given User has successfully logged in as Admin
When clicks on menu button
Then clicks on Announcement
Then clicks on Public Announcement then Clicks on Plus sign
Then sends a Public announcement

@TC_23
Scenario: user is able to send the Private Announcement 
Given User has successfully logged in as Admin
When clicks on menu button
Then clicks on Announcement
Then clicks on Private Announcement then Clicks on Plus sign
Then sends a private announcement

@TC_24
Scenario:  user is able to Punch after navigating to Menu
Given User has successfully logged in
When navigates to menu and clicks PUNCH
Then fills up the details and punches
Then navigates to recent punches and validates

@TC_25
Scenario: user is able to Outdoor Punch after navigating to Menu
Given User has successfully logged in
When navigates to menu and clicks PUNCH
Then Clicks on outdoor punch and does the punch
Then captures the outdoor punch screen

@TC_26
Scenario: user is able to Punch Attendance from dashboard
Given User has successfully logged in
When clicks punch on dashboard
Then fills up the details and punches

@TC_27
Scenario: user is able to Outdoor Punch from Dashboard
Given User has successfully logged in
When clicks punch on dashboard
Then Clicks on outdoor punch and does the punch

@TC_35
Scenario: user is able to view Attendance exception notifications
Given User has successfully logged in
When user clicks on notification
Then clicks on Exception and verifies the message

@TC_36
Scenario: user is able to view Schedule notifications
Given User has successfully logged in
When user clicks on notification
Then clicks on Schedule and verifies the notification

@TC_37
Scenario: user is able to view private announcement notifications
Given User has successfully logged in
When user clicks on notification
Then clicks on Announcement and verifies if private notifications are there

@TC_38
Scenario: user is able to view Public announcement notifications
Given User has successfully logged in
When user clicks on notification
Then clicks on Announcement and verifies if public notifications are there

@TC_39
Scenario: user is able to view training notifications
Given User has successfully logged in
When user clicks on notification
Then clicks on training and verifies if notifications are there

@TC_40
Scenario: user is able to view Manual log notifications
Given User has successfully logged in
When user clicks on notification
Then clicks on manual log and verifies if notifications are there

@TC_41
Scenario: user is able to view Overtime notifications
Given User has successfully logged in
When user clicks on notification
Then clicks on Overtime and verifies if notifications are there

@TC_42
Scenario: user is able to view leave notifications
Given User has successfully logged in
When user clicks on notification
Then clicks on Leave and verifies if Leave notifications are there

@TC_43
Scenario: user is able to view leave approvals
Given User has successfully logged in as Admin
When user clicks on Approvals
Then clicks on Leave and verifies if Leave approvals are there


@TC_44
Scenario: user is able to view approved leaves in processed approvals
Given User has successfully logged in as Admin
When user clicks on Approvals
Then clicks on Leave, then clicks on processed and verifies if approved leaves are there

@TC_45
Scenario: user is able to view rejected leaves in processed aprovals
Given User has successfully logged in as Admin
When user clicks on Approvals
Then clicks on Leave, then clicks on processed and verifies if rejected leaves are there

@TC_46
Scenario: user is able to filter rejected leaves based upon processed and applied time
Given User has successfully logged in as Admin
When user clicks on Approvals
Then clicks on Leave, then clicks on processed and verifies if rejected leaves are there
Then User filters Rejected leaves by processed time
Then User filters Rejected leaves by applied time

@TC_47
Scenario: user is able to filter approved leaves based upon processed and applied time
Given User has successfully logged in as Admin
When user clicks on Approvals
Then clicks on Leave, then clicks on processed and verifies if approved leaves are there
Then User filters Approved leaves by processed time
Then User filters Approved leaves by applied time

@TC_48
Scenario: user is able to view Overtime approvals
Given User has successfully logged in as Admin
When user clicks on Approvals
Then clicks on Overtime and verifies if Overtime approvals are there


@TC_49
Scenario: user is able to view approved Overtime in processed approvals
Given User has successfully logged in as Admin
When user clicks on Approvals
Then clicks on Overtime, then clicks on processed and verifies if approved leaves are there

@TC_50
Scenario: user is able to view rejected Overtimes in processed aprovals
Given User has successfully logged in as Admin
When user clicks on Approvals
Then clicks on Overtime, then clicks on processed and verifies if rejected leaves are there

@TC_51
Scenario: user is able to filter rejected Overtime based upon processed and applied time
Given User has successfully logged in as Admin
When user clicks on Approvals
Then clicks on Overtime, then clicks on processed and verifies if rejected leaves are there
Then User filters Approved Overtime by processed time
Then User filters Approved Overtime by applied time

@TC_52
Scenario: user is able to filter approved Overtime based upon processed and applied time
Given User has successfully logged in as Admin
When user clicks on Approvals
Then clicks on Overtime, then clicks on processed and verifies if approved leaves are there
Then User filters Rejected Overtime by processed time
Then User filters Rejected Overtime by applied time