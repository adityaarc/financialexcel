var express = require('express');
var formulajs = require('@formulajs/formulajs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Financial' });
});

router.post('/calc', function(req, res, next) {

  //! ------ For Year 1 ------ 

  //? ----- Revenues -------

  //*Product Revenue
  // Values from req.body.
  var PricePerProduct = 2500;
  var MonthlyProductSales = 10;
  var ProductSalesGrowth = 0.15;

  var Dec = formulajs.IFERROR(formulajs.ROUNDDOWN((MonthlyProductSales*(1+ProductSalesGrowth))));
  var Nov = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((11-1)/11)*(Dec-MonthlyProductSales)))))
  var Oct = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((10-1)/11)*(Dec-MonthlyProductSales)))))
  var Sep = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((9-1)/11)*(Dec-MonthlyProductSales)))))
  var Aug = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((8-1)/11)*(Dec-MonthlyProductSales)))))
  var Jul = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((7-1)/11)*(Dec-MonthlyProductSales)))))
  var Jun = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((6-1)/11)*(Dec-MonthlyProductSales)))))
  var May = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((5-1)/11)*(Dec-MonthlyProductSales)))))
  var Apr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((4-1)/11)*(Dec-MonthlyProductSales)))))
  var Mar = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((3-1)/11)*(Dec-MonthlyProductSales)))))
  var Feb = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((2-1)/11)*(Dec-MonthlyProductSales)))))
  var Jan = MonthlyProductSales;

  var PDec = formulajs.IFERROR(formulajs.ROUNDUP(MonthlyProductSales*(1+ProductSalesGrowth),0),"")
  var SDec = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyProductSales*(1+ProductSalesGrowth),0),"")
  console.log(PDec, SDec);
  var ProductUnitSold = formulajs.SUM([Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec])
  var ProductRevenue = (ProductUnitSold*PricePerProduct)
  
  console.log("Product Unit Sold: " + ProductUnitSold);
  console.log("Product Revenue: " + ProductRevenue+ "\n");




  // //*Service Revenue
  // Values from req.body.
  var PricePerService = 100;
  var MonthlyServiceSales = 15;
  var SerciceSalesGrowth = 0.45; 

  var Dec = formulajs.IFERROR(formulajs.ROUNDDOWN((MonthlyServiceSales*(1+SerciceSalesGrowth))))
  var Nov = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((11-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Oct = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((10-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Sep = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((9-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Aug = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((8-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Jul = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((7-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Jun = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((6-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var May = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((5-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Apr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((4-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Mar = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((3-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Feb = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((2-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Jan = MonthlyServiceSales

  var ServiceUnitsSold = formulajs.SUM([Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec])
  var ServiceRevenues = (ServiceUnitsSold*PricePerService)
  console.log("Service Unit Sold: " + ServiceUnitsSold);
  console.log("Service Revenues: " + ServiceRevenues + "\n");



  // //* Billable Hours Revenue
  // Values from req.body.
  var RatePerHour = 150;
  var BillableHoursPerMonth = 45;
  var BillableHoursGrowth = 0.3;

  var Dec = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth*(1+BillableHoursGrowth),1),"")
  var Nov = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((11-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Oct = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((10-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Sep = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((9-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Aug = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((8-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Jul = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((7-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Jun = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((6-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var May = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((5-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Apr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((4-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Mar = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((3-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Feb = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((2-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Jan = BillableHoursPerMonth

  var TotalBillableHoursPerMonth = formulajs.SUM([Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec])
  var BillableHoursRevenues = (TotalBillableHoursPerMonth*RatePerHour)
  console.log("Total Billable Hours Per Month: "+TotalBillableHoursPerMonth)
  console.log("Billable Hour Revenues: "+BillableHoursRevenues+"\n")



  // //* Subscription Revenue
  // Values from req.body.
  var SetUpFee = 20;
  var RecurringCharge = 11;
  var ExistingNumberOfCustomers = 0;
  var NumberOfNewCustomersPerMonth = 10;
  var ChurnRate = 0.3;

  var Jan = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+ExistingNumberOfCustomers-(ExistingNumberOfCustomers*ChurnRate),0)
  var Feb = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+Jan-(Jan*ChurnRate),0)
  var Mar = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+Feb-(Feb*ChurnRate),0)
  var Apr = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+Mar-(Mar*ChurnRate),0)
  var May = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+Apr-(Apr*ChurnRate),0)
  var Jun = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+May-(May*ChurnRate),0)
  var Jul = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+Jun-(Jun*ChurnRate),0)
  var Aug = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+Jul-(Jul*ChurnRate),0)
  var Sep = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+Aug-(Aug*ChurnRate),0)
  var Oct = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+Sep-(Sep*ChurnRate),0)
  var Nov = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+Oct-(Oct*ChurnRate),0)
  var Dec = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth+Nov-(Nov*ChurnRate),0)

  //Subscription Revenue per month
  var JanSub = (Jan*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var FebSub = (Feb*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var MarSub = (Mar*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var AprSub = (Apr*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var MaySub = (May*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var JunSub = (Jun*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var JulSub = (Jul*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var AugSub = (Aug*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var SepSub = (Sep*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var OctSub = (Oct*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var NovSub = (Nov*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)
  var DecSub = (Dec*RecurringCharge+NumberOfNewCustomersPerMonth*SetUpFee)

  var NewCustomerPerMonth = (NumberOfNewCustomersPerMonth*12)
  var TotalNumberOfCustomers = formulajs.SUM([Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec])
  var SubscriptionRevenues = formulajs.SUM([JanSub, FebSub, MarSub, AprSub, MaySub, JunSub, JulSub, AugSub, SepSub, OctSub, NovSub, DecSub])

  console.log("New Customer Per Month: "+NewCustomerPerMonth);
  console.log("Total Number Of Customers: "+TotalNumberOfCustomers);
  console.log("Subscription Revenues: "+SubscriptionRevenues+ "\n");

  //* Total Sales Revenue
  var TotalSalesRevenue = formulajs.SUM([ProductRevenue, ServiceRevenues, BillableHoursRevenues, SubscriptionRevenues])
  console.log("Total Sales Revenue: "+TotalSalesRevenue+ "\n\n");

  
  
  // //? ------ Wage and Related Costs ------

  var MangagementSalaries = {
    MonthlyCostsPerUnit: 6400,
    Number: 2,
    YearlyWageIncrease: 0.05
  }

  var Operations = {
    MonthlyCostsPerUnit: 0,
    Number: 0,
    YearlyWageIncrease: 0.02
  }

  var Legal = {
    MonthlyCostsPerUnit: 0,
    Number: 0,
    YearlyWageIncrease: 0.02
  }

  var IT = {
    MonthlyCostsPerUnit: 3200,
    Number: 1,
    YearlyWageIncrease: 0.02
  }

  var Marketing = {
    MonthlyCostsPerUnit: 0,
    Number: 0,
    YearlyWageIncrease: 0.02
  }

  var OtherEmployee = {
    MonthlyCostsPerUnit: 1800,
    Number: 2,
    YearlyWageIncrease: 0
  }

  var FullTimeEmployees = {
    NumberOfEmployees: 3,
    HourlyRate: 10.00,
    HoursPerWeek: 40
  }

  var PartTimeEmployees = {
    NumberOfEmployees: 2,
    HourlyRate: 9.00,
    HoursPerWeek: 20
  }

  var Other = {
    NumberOfEmployees: 0,
    HourlyRate: 0,
    HoursPerWeek: 0
  }

  TotalMangagementSalaries = (MangagementSalaries.MonthlyCostsPerUnit*MangagementSalaries.Number)*12
  TotalOperations = (Operations.MonthlyCostsPerUnit*Operations.Number)*12
  TotalLegal = (Legal.MonthlyCostsPerUnit*Legal.Number)*12
  TotalIT = (IT.MonthlyCostsPerUnit*IT.Number)*12
  TotalMarketing = (Marketing.MonthlyCostsPerUnit*Marketing.Number)*12
  TotalOtherEmployee = (OtherEmployee.MonthlyCostsPerUnit*OtherEmployee.Number)*12
  TotalFullTimeEmployees = (((FullTimeEmployees.HourlyRate*FullTimeEmployees.HoursPerWeek*52)/12)*FullTimeEmployees.NumberOfEmployees)*12
  TotalPartTimeEmployees = (((PartTimeEmployees.HourlyRate*PartTimeEmployees.HoursPerWeek*52)/12)*PartTimeEmployees.NumberOfEmployees)*12
  TotalOther = (((Other.HourlyRate*Other.HoursPerWeek*52)/12)*Other.NumberOfEmployees)*12

  var TotalWageCosts = formulajs.SUM([TotalMangagementSalaries, TotalOperations, TotalLegal, TotalIT, TotalMarketing, TotalOtherEmployee, TotalFullTimeEmployees, TotalPartTimeEmployees, TotalOther]);
  console.log("Total Wage Costs: "+TotalWageCosts+ "\n");

  var PayrollTaxesAndBenefits = {
    AnnualCostPerUnit: 640,
    Number: 5
  }

  TotalPayrollTaxesAndBenefits = (PayrollTaxesAndBenefits.AnnualCostPerUnit*PayrollTaxesAndBenefits.Number/12)*12
  console.log("Total Payroll Taxes And Benefits: "+TotalPayrollTaxesAndBenefits);

  TotalSalariesAndRelatedExpenses = formulajs.SUM([TotalWageCosts, TotalPayrollTaxesAndBenefits])
  console.log("Total Salaries And Related Expenses: "+TotalSalariesAndRelatedExpenses+"\n\n");

  
  //? ------ Overhead Costs ------

  var AdvertisingCampaigns = {
    MonthlyCost: 500,
    Units: 1
  }

  var CarAndTruckExpenses = {
    MonthlyCost: 300,
    Units: 2
  }

  var BankMerchantFees = {
    MonthlyCost: 0,
    Units: 3
  }

  var ConferenceSeminars = {
    MonthlyCost: 0,
    Units: 1
  }

  var DuesSubscription = {
    MonthlyCost: 200,
    Units: 1
  }

  var Miscellaneous = {
    MonthlyCost: 0,
    Units: 2
  }

  var Insurance = {
    MonthlyCost: 0,
    Units: 1
  }

  var LicensesFeesPermits = {
    MonthlyCost: 0,
    Units: 1
  }

  var LegalProfessionalFees = {
    MonthlyCost: 0,
    Units: 1
  }

  var OfficeExpensesSupplies = {
    MonthlyCost: 0,
    Units: 1
  }

  var PostageDelivery = {
    MonthlyCost: 200,
    Units: 1
  }

  var Rent = {
    MonthlyCost: 3000,
    Units: 1
  }

  var RentsOfVehiclesEquipment = {
    MonthlyCost: 740,
    Units: 1
  }

  var TaxesOther = {
    MonthlyCost: 0,
    Units: 1
  }

  var TelephoneCommunication = {
    MonthlyCost: 0,
    Units: 1
  }

  var Travel = {
    MonthlyCost: 0,
    Units: 1
  }

  var ITService = {
    MonthlyCost: 0,
    Units: 1
  }

  var Utilities = {
    MonthlyCost: 150,
    Units: 1
  }

  var Othersga = {
    MonthlyCost: 0,
    Units: 1
  }

  TotalAdvertisingCampaigns = (AdvertisingCampaigns.MonthlyCost*AdvertisingCampaigns.Units)*12
  TotalCarAndTruckExpenses = (CarAndTruckExpenses.MonthlyCost*CarAndTruckExpenses.Units)*12
  TotalBankMerchantFees = (BankMerchantFees.MonthlyCost*BankMerchantFees.Units)*12
  TotalConferenceSeminars = (ConferenceSeminars.MonthlyCost*ConferenceSeminars.Units)*12
  TotalDuesSubscription = (DuesSubscription.MonthlyCost*DuesSubscription.Units)*12
  TotalMiscellaneous = (Miscellaneous.MonthlyCost*Miscellaneous.Units)*12
  TotalInsurance = (Insurance.MonthlyCost*Insurance.Units)*12
  TotalLicensesFeesPermits = (LicensesFeesPermits.MonthlyCost*LicensesFeesPermits.Units)*12
  TotalLegalProfessionalFees = (LegalProfessionalFees.MonthlyCost*LegalProfessionalFees.Units)*12
  TotalOfficeExpensesSupplies = (OfficeExpensesSupplies.MonthlyCost*OfficeExpensesSupplies.Units)*12
  TotalPostageDelivery = (PostageDelivery.MonthlyCost*PostageDelivery.Units)*12
  TotalRent = (Rent.MonthlyCost*Rent.Units)*12
  TotalRentsOfVehiclesEquipment = (RentsOfVehiclesEquipment.MonthlyCost*RentsOfVehiclesEquipment.Units)*12
  TotalTaxesOther = (TaxesOther.MonthlyCost*TaxesOther.Units)*12
  TotalTelephoneCommunication = (TelephoneCommunication.MonthlyCost*TelephoneCommunication.Units)*12
  TotalTravel = (Travel.MonthlyCost*Travel.Units)*12
  TotalITService = (ITService.MonthlyCost*ITService.Units)*12
  TotalUtilities = (Utilities.MonthlyCost*Utilities.Units)*12
  TotalOthersga = (Othersga.MonthlyCost*Othersga.Units)*12
  
  var TotalOverheadCosts = formulajs.SUM([
    TotalAdvertisingCampaigns, 
    TotalCarAndTruckExpenses, 
    TotalBankMerchantFees, 
    TotalConferenceSeminars,
    TotalDuesSubscription,
    TotalMiscellaneous,
    TotalInsurance,
    TotalLicensesFeesPermits,
    TotalLegalProfessionalFees,
    TotalOfficeExpensesSupplies,
    TotalPostageDelivery,
    TotalRent,
    TotalRentsOfVehiclesEquipment,
    TotalTaxesOther,
    TotalTelephoneCommunication,
    TotalTravel,
    TotalITService,
    TotalUtilities,
    TotalOthersga])

    console.log('Overhead Costs: '+TotalOverheadCosts+"\n\n");


  //? ------ Income ------

  var RateOfCapitalExpindenture = 0.2

  TotalOperatingIncome = formulajs.SUM([TotalSalesRevenue, TotalWageCosts, TotalOverheadCosts])

  console.log("Total Operating Income: "+TotalOperatingIncome+"\n");

  //? ------ Capex -------

  var Plant = {
    CapexPeriod: 1,
    CapexAmount: 100000
  }

  var Property = {
    CapexPeriod: 1,
    CapexAmount: 1200000
  }

  var Equipment = {
    CapexPeriod: 6,
    CapexAmount: 23000
  }

  var Other = {
    CapexPeriod: 2,
    CapexAmount: 3000
  }

  var Jan = formulajs.IFERROR(formulajs.INDEX(Plant,formulajs.MATCH(1,Plant.CapexPeriod),2),0)
  console.log(Jan);

  res.render('index', {
    title: 'Financial',
    ProductUnitSold: ProductUnitSold,
    ProductRevenue: ProductRevenue,

  });
});

module.exports = router;
