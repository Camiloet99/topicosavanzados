// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Caso de prueba 3', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Caso de prueba 3', async function() {
    // Test name: Caso de prueba 3
    // Step # | name | target | value
    // 1 | open | https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do | 
    await driver.get("https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do")
    // 2 | setWindowSize | 1920x1055 | 
    await driver.manage().window().setRect({ width: 1920, height: 1055 })
    // 3 | click | css=div:nth-child(7) > .btn | 
    await driver.findElement(By.css("div:nth-child(7) > .btn")).click()
    // 4 | click | linkText=10 | 
    await driver.findElement(By.linkText("10")).click()
    // 5 | assertElementPresent | id=dispDate-error | 
    // Validar que hay error por falta de fecha
    {
      const elements = await driver.findElements(By.id("dispDate-error"))
      assert(elements.length)
    }
    // 6 | assertElementPresent | id=creditAmount-error | 
    // Validar que se requiere el valor del credito
    {
      const elements = await driver.findElements(By.id("creditAmount-error"))
      assert(elements.length)
    }
    // 7 | click | id=creditAmount | 
    await driver.findElement(By.id("creditAmount")).click()
    // 8 | click | id=creditAmount | 
    await driver.findElement(By.id("creditAmount")).click()
    // 9 | doubleClick | id=creditAmount | 
    {
      const element = await driver.findElement(By.id("creditAmount"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 10 | type | id=creditAmount | 1200000
    await driver.findElement(By.id("creditAmount")).sendKeys("1200000")
    // 11 | click | css=div:nth-child(7) > .btn | 
    await driver.findElement(By.css("div:nth-child(7) > .btn")).click()
    // 12 | assertElementPresent | css=.alert | 
    // Validar que hay un cuadro de error por falta de tasa de interes
    {
      const elements = await driver.findElements(By.css(".alert"))
      assert(elements.length)
    }
    // 13 | assertElementNotPresent | css=.well-white | 
    // Validar que el cuadro con descripcion de intereses no esta presente tras error
    {
      const elements = await driver.findElements(By.css(".well-white"))
      assert(!elements.length)
    }
    // 14 | click | id=paymentMethod | 
    await driver.findElement(By.id("paymentMethod")).click()
    // 15 | select | id=paymentMethod | label=Trimestral
    {
      const dropdown = await driver.findElement(By.id("paymentMethod"))
      await dropdown.findElement(By.xpath("//option[. = 'Trimestral']")).click()
    }
    // 16 | click | id=period | 
    await driver.findElement(By.id("period")).click()
    // 17 | select | id=period | label=2 años
    {
      const dropdown = await driver.findElement(By.id("period"))
      await dropdown.findElement(By.xpath("//option[. = '2 años']")).click()
    }
    // 18 | click | id=rate | 
    await driver.findElement(By.id("rate")).click()
    // 19 | click | id=rate | 
    await driver.findElement(By.id("rate")).click()
    // 20 | doubleClick | id=rate | 
    {
      const element = await driver.findElement(By.id("rate"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 21 | click | id=rate | 
    await driver.findElement(By.id("rate")).click()
    // 22 | type | id=rate | 12
    await driver.findElement(By.id("rate")).sendKeys("12")
    // 23 | sendKeys | id=rate | ${KEY_ENTER}
    await driver.findElement(By.id("rate")).sendKeys(Key.ENTER)
    // 24 | assertElementPresent | css=th:nth-child(1) | 
    // Validar que la tabla de descripcion esta presente tras añadir valores validos a todos los campos
    {
      const elements = await driver.findElements(By.css("th:nth-child(1)"))
      assert(elements.length)
    }
  })
})
