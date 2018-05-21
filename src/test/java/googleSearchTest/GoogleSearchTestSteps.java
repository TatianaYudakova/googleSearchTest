package googleSearchTest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import static org.junit.Assert.assertTrue;
public class GoogleSearchTestSteps {

    {System.setProperty("webdriver.gecko.driver", "/home/tatiana/Загрузки/geckodriver");}
    private WebDriver driver = new FirefoxDriver();

    @Given("^I am on the \"([^\"]*)\"$")
    public void thePageIsOpen(String page) throws Throwable {
        driver.get(page);
    }

    @When("^I search for \"([^\"]*)\"$")
    public void iSearchFor(String search) throws Throwable {
        WebElement element = driver.findElement(By.name("q"));
        element.sendKeys(search);
        element.submit();
    }

    @Then("^the first link should be \"([^\"]*)\"$")
    public void firstLinkShouldBe(String text) throws Throwable {
        Thread.sleep(5000);
        assertTrue(driver.findElement(By.tagName("cite")).getText().equals(text));
    }
}
