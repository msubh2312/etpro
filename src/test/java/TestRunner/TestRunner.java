package TestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java",
		glue="stepDefinitions",
		plugin= {"pretty","html:target/cucumber"},
		monochrome=true)
public class TestRunner {

}