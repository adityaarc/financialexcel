var express = require('express');
var formulajs = require('@formulajs/formulajs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Financial' });
});

router.post('/calc', function (req, res, next) {

  //! ------ For Year 1 ------ 

  //? ----- Revenues -------

  //*Product Revenue
  // Values from req.body.
  var PricePerProduct = 2500;
  var MonthlyProductSales = 25;
  var ProductSalesGrowth = 0.15;

  var DecPr = formulajs.IFERROR(formulajs.ROUNDDOWN((MonthlyProductSales * (1 + ProductSalesGrowth))));
  var NovPr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales + ((11 - 1) / 11) * (DecPr - MonthlyProductSales)))))
  var OctPr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales + ((10 - 1) / 11) * (DecPr - MonthlyProductSales)))))
  var SepPr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales + ((9 - 1) / 11) * (DecPr - MonthlyProductSales)))))
  var AugPr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales + ((8 - 1) / 11) * (DecPr - MonthlyProductSales)))))
  var JulPr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales + ((7 - 1) / 11) * (DecPr - MonthlyProductSales)))))
  var JunPr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales + ((6 - 1) / 11) * (DecPr - MonthlyProductSales)))))
  var MayPr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales + ((5 - 1) / 11) * (DecPr - MonthlyProductSales)))))
  var AprPr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales + ((4 - 1) / 11) * (DecPr - MonthlyProductSales)))))
  var MarPr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales + ((3 - 1) / 11) * (DecPr - MonthlyProductSales)))))
  var FebPr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales + ((2 - 1) / 11) * (DecPr - MonthlyProductSales)))))
  var JanPr = MonthlyProductSales;

  var ProductUnitSold = formulajs.SUM([JanPr, FebPr, MarPr, AprPr, MayPr, JunPr, JulPr, AugPr, SepPr, OctPr, NovPr, DecPr])
  var ProductRevenue = (ProductUnitSold * PricePerProduct)

  console.log("Product Unit Sold: " + ProductUnitSold);
  console.log("Product Revenue: " + ProductRevenue + "\n");




  // //*Service Revenue
  // Values from req.body.
  var PricePerService = 100;
  var MonthlyServiceSales = 15;
  var SerciceSalesGrowth = 0.45;

  var DecSr = formulajs.IFERROR(formulajs.ROUNDDOWN((MonthlyServiceSales * (1 + SerciceSalesGrowth))))
  var NovSr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales + ((11 - 1) / 11) * (DecSr - MonthlyServiceSales), 0), "")
  var OctSr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales + ((10 - 1) / 11) * (DecSr - MonthlyServiceSales), 0), "")
  var SepSr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales + ((9 - 1) / 11) * (DecSr - MonthlyServiceSales), 0), "")
  var AugSr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales + ((8 - 1) / 11) * (DecSr - MonthlyServiceSales), 0), "")
  var JulSr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales + ((7 - 1) / 11) * (DecSr - MonthlyServiceSales), 0), "")
  var JunSr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales + ((6 - 1) / 11) * (DecSr - MonthlyServiceSales), 0), "")
  var MaySr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales + ((5 - 1) / 11) * (DecSr - MonthlyServiceSales), 0), "")
  var AprSr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales + ((4 - 1) / 11) * (DecSr - MonthlyServiceSales), 0), "")
  var MarSr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales + ((3 - 1) / 11) * (DecSr - MonthlyServiceSales), 0), "")
  var FebSr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales + ((2 - 1) / 11) * (DecSr - MonthlyServiceSales), 0), "")
  var JanSr = MonthlyServiceSales

  var ServiceUnitsSold = formulajs.SUM([JanSr, FebSr, MarSr, AprSr, MaySr, JunSr, JulSr, AugSr, SepSr, OctSr, NovSr, DecSr])
  var ServiceRevenues = (ServiceUnitsSold * PricePerService)
  console.log("Service Unit Sold: " + ServiceUnitsSold);
  console.log("Service Revenues: " + ServiceRevenues + "\n");



  //* Billable Hours Revenue
  // Values from req.body.
  var RatePerHour = 150;
  var BillableHoursPerMonth = 45;
  var BillableHoursGrowth = 0.3;

  var DecBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth * (1 + BillableHoursGrowth), 1), "")
  var NovBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth + ((11 - 1) / 11) * (DecBr - BillableHoursPerMonth), 1), "")
  var OctBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth + ((10 - 1) / 11) * (DecBr - BillableHoursPerMonth), 1), "")
  var SepBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth + ((9 - 1) / 11) * (DecBr - BillableHoursPerMonth), 1), "")
  var AugBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth + ((8 - 1) / 11) * (DecBr - BillableHoursPerMonth), 1), "")
  var JulBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth + ((7 - 1) / 11) * (DecBr - BillableHoursPerMonth), 1), "")
  var JunBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth + ((6 - 1) / 11) * (DecBr - BillableHoursPerMonth), 1), "")
  var MayBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth + ((5 - 1) / 11) * (DecBr - BillableHoursPerMonth), 1), "")
  var AprBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth + ((4 - 1) / 11) * (DecBr - BillableHoursPerMonth), 1), "")
  var MarBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth + ((3 - 1) / 11) * (DecBr - BillableHoursPerMonth), 1), "")
  var FebBr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth + ((2 - 1) / 11) * (DecBr - BillableHoursPerMonth), 1), "")
  var JanBr = BillableHoursPerMonth

  var TotalBillableHoursPerMonth = formulajs.SUM([JanBr, FebBr, MarBr, AprBr, MayBr, JunBr, JulBr, AugBr, SepBr, OctBr, NovBr, DecBr])
  var BillableHoursRevenues = (TotalBillableHoursPerMonth * RatePerHour)
  console.log("Total Billable Hours Per Month: " + TotalBillableHoursPerMonth)
  console.log("Billable Hour Revenues: " + BillableHoursRevenues + "\n")



  // //* Subscription Revenue
  // Values from req.body.
  var SetUpFee = 20;
  var RecurringCharge = 11;
  var ExistingNumberOfCustomers = 0;
  var NumberOfNewCustomersPerMonth = 10;
  var ChurnRate = 0.3;

  var JanSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + ExistingNumberOfCustomers - (ExistingNumberOfCustomers * ChurnRate), 0)
  var FebSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + JanSur - (JanSur * ChurnRate), 0)
  var MarSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + FebSur - (FebSur * ChurnRate), 0)
  var AprSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + MarSur - (MarSur * ChurnRate), 0)
  var MaySur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + AprSur - (AprSur * ChurnRate), 0)
  var JunSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + MaySur - (MaySur * ChurnRate), 0)
  var JulSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + JunSur - (JunSur * ChurnRate), 0)
  var AugSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + JulSur - (JulSur * ChurnRate), 0)
  var SepSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + AugSur - (AugSur * ChurnRate), 0)
  var OctSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + SepSur - (SepSur * ChurnRate), 0)
  var NovSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + OctSur - (OctSur * ChurnRate), 0)
  var DecSur = formulajs.ROUNDDOWN(NumberOfNewCustomersPerMonth + NovSur - (NovSur * ChurnRate), 0)

  //Subscription Revenue per month
  var JanSub = (JanSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var FebSub = (FebSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var MarSub = (MarSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var AprSub = (AprSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var MaySub = (MaySur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var JunSub = (JunSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var JulSub = (JulSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var AugSub = (AugSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var SepSub = (SepSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var OctSub = (OctSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var NovSub = (NovSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)
  var DecSub = (DecSur * RecurringCharge + NumberOfNewCustomersPerMonth * SetUpFee)

  var NewCustomerPerMonth = (NumberOfNewCustomersPerMonth * 12)
  var TotalNumberOfCustomers = formulajs.SUM([JanSur, FebSur, MarSur, AprSur, MaySur, JunSur, JulSur, AugSur, SepSur, OctSur, NovSur, DecSur])
  var SubscriptionRevenues = formulajs.SUM([JanSub, FebSub, MarSub, AprSub, MaySub, JunSub, JulSub, AugSub, SepSub, OctSub, NovSub, DecSub])

  console.log("New Customer Per Month: " + NewCustomerPerMonth);
  console.log("Total Number Of Customers: " + TotalNumberOfCustomers);
  console.log("Subscription Revenues: " + SubscriptionRevenues + "\n");

  //* Total Sales Revenue
  var TotalSalesRevenue = formulajs.SUM([ProductRevenue, ServiceRevenues, BillableHoursRevenues, SubscriptionRevenues])
  console.log("Total Sales Revenue: " + TotalSalesRevenue + "\n\n");



  
  //? ------ Direct Costs -------

  var CostofGoodsSoldforProductRevenues = 0.03;
  var CostofGoodsSoldforServiceRevenues = 0.03;
  var CostofGoodsSoldforBillableHoursRevenues = 0.05;
  var CostofGoodsSoldforSubscriptionRevenues = 0.06;


  var Jangspr = ((JanPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Febgspr = ((FebPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Margspr = ((MarPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Aprgspr = ((AprPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Maygspr = ((MayPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Jungspr = ((JunPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Julgspr = ((JulPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Auggspr = ((AugPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Sepgspr = ((SepPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Octgspr = ((OctPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Novgspr = ((NovPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
  var Decgspr = ((DecPr*PricePerProduct)*CostofGoodsSoldforProductRevenues)

  var SumCostofGoodsSoldforProductRevenues = formulajs.SUM([Jangspr, Febgspr, Margspr, Aprgspr, Maygspr, Jungspr, Julgspr, Auggspr, Sepgspr, Octgspr, Novgspr, Decgspr])
  console.log("Sum Cost of Goods Sold for Product Revenues: "+SumCostofGoodsSoldforProductRevenues+ "\n\n");





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

  TotalMangagementSalaries = (MangagementSalaries.MonthlyCostsPerUnit * MangagementSalaries.Number) * 12
  TotalOperations = (Operations.MonthlyCostsPerUnit * Operations.Number) * 12
  TotalLegal = (Legal.MonthlyCostsPerUnit * Legal.Number) * 12
  TotalIT = (IT.MonthlyCostsPerUnit * IT.Number) * 12
  TotalMarketing = (Marketing.MonthlyCostsPerUnit * Marketing.Number) * 12
  TotalOtherEmployee = (OtherEmployee.MonthlyCostsPerUnit * OtherEmployee.Number) * 12
  TotalFullTimeEmployees = (((FullTimeEmployees.HourlyRate * FullTimeEmployees.HoursPerWeek * 52) / 12) * FullTimeEmployees.NumberOfEmployees) * 12
  TotalPartTimeEmployees = (((PartTimeEmployees.HourlyRate * PartTimeEmployees.HoursPerWeek * 52) / 12) * PartTimeEmployees.NumberOfEmployees) * 12
  TotalOther = (((Other.HourlyRate * Other.HoursPerWeek * 52) / 12) * Other.NumberOfEmployees) * 12

  var TotalWageCosts = formulajs.SUM([TotalMangagementSalaries, TotalOperations, TotalLegal, TotalIT, TotalMarketing, TotalOtherEmployee, TotalFullTimeEmployees, TotalPartTimeEmployees, TotalOther]);
  console.log("Total Wage Costs: " + TotalWageCosts + "\n");

  var PayrollTaxesAndBenefits = {
    AnnualCostPerUnit: 640,
    Number: 5
  }

  TotalPayrollTaxesAndBenefits = (PayrollTaxesAndBenefits.AnnualCostPerUnit * PayrollTaxesAndBenefits.Number / 12) * 12
  console.log("Total Payroll Taxes And Benefits: " + TotalPayrollTaxesAndBenefits);

  TotalSalariesAndRelatedExpenses = formulajs.SUM([TotalWageCosts, TotalPayrollTaxesAndBenefits])
  console.log("Total Salaries And Related Expenses: " + TotalSalariesAndRelatedExpenses + "\n\n");


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

  var TotalAdvertisingCampaigns = (AdvertisingCampaigns.MonthlyCost * AdvertisingCampaigns.Units) * 12
  var TotalCarAndTruckExpenses = (CarAndTruckExpenses.MonthlyCost * CarAndTruckExpenses.Units) * 12
  var TotalBankMerchantFees = (BankMerchantFees.MonthlyCost * BankMerchantFees.Units) * 12
  var TotalConferenceSeminars = (ConferenceSeminars.MonthlyCost * ConferenceSeminars.Units) * 12
  var TotalDuesSubscription = (DuesSubscription.MonthlyCost * DuesSubscription.Units) * 12
  var TotalMiscellaneous = (Miscellaneous.MonthlyCost * Miscellaneous.Units) * 12
  var TotalInsurance = (Insurance.MonthlyCost * Insurance.Units) * 12
  var TotalLicensesFeesPermits = (LicensesFeesPermits.MonthlyCost * LicensesFeesPermits.Units) * 12
  var TotalLegalProfessionalFees = (LegalProfessionalFees.MonthlyCost * LegalProfessionalFees.Units) * 12
  var TotalOfficeExpensesSupplies = (OfficeExpensesSupplies.MonthlyCost * OfficeExpensesSupplies.Units) * 12
  var TotalPostageDelivery = (PostageDelivery.MonthlyCost * PostageDelivery.Units) * 12
  var TotalRent = (Rent.MonthlyCost * Rent.Units) * 12
  var TotalRentsOfVehiclesEquipment = (RentsOfVehiclesEquipment.MonthlyCost * RentsOfVehiclesEquipment.Units) * 12
  var TotalTaxesOther = (TaxesOther.MonthlyCost * TaxesOther.Units) * 12
  var TotalTelephoneCommunication = (TelephoneCommunication.MonthlyCost * TelephoneCommunication.Units) * 12
  var TotalTravel = (Travel.MonthlyCost * Travel.Units) * 12
  var TotalITService = (ITService.MonthlyCost * ITService.Units) * 12
  var TotalUtilities = (Utilities.MonthlyCost * Utilities.Units) * 12
  var TotalOthersga = (Othersga.MonthlyCost * Othersga.Units) * 12

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

  console.log('Overhead Costs: ' + TotalOverheadCosts + "\n\n");



  //? ------ Capex -------

  // One-off Capital Expenditures
  var Plant = {
    CapexPeriod: 3,
    CapexAmount: 2564
  }

  var Property = {
    CapexPeriod: 1,
    CapexAmount: 1200000
  }

  var Equipment = {
    CapexPeriod: 6,
    CapexAmount: 23000
  }

  var CapexOther = {
    CapexPeriod: 2,
    CapexAmount: 3000
  }

  switch (Plant.CapexPeriod) {
    case 1:
      var JanPlant = Plant.CapexAmount
      break;
    case 2:
      var FebPlant = Plant.CapexAmount
      break
    case 3:
      var MarPlant = Plant.CapexAmount
      break
    case 4:
      var AprPlant = Plant.CapexAmount
      break
    case 5:
      var MayPlant = Plant.CapexAmount
      break
    case 6:
      var JunPlant = Plant.CapexAmount
      break
    case 7:
      var JulPlant = Plant.CapexAmount
      break
    case 8:
      var AugPlant = Plant.CapexAmount
      break
    case 9:
      var SepPlant = Plant.CapexAmount
      break
    case 10:
      var OctPlant = Plant.CapexAmount
      break
    case 11:
      var NovPlant = Plant.CapexAmount
      break
    case 12:
      var DecPlant = Plant.CapexAmount
      break
    default:
      break;
  }
  var TotalPlantCapex = formulajs.SUM([JanPlant, FebPlant, MarPlant, AprPlant, MayPlant, JunPlant, JulPlant, AugPlant, SepPlant, OctPlant, NovPlant, DecPlant]);

  switch (Property.CapexPeriod) {
    case 1:
      var JanProperty = Property.CapexAmount
      break;
    case 2:
      var FebProperty = Property.CapexAmount
      break;
    case 3:
      var MarProperty = Property.CapexAmount
      break;
    case 4:
      var AprProperty = Property.CapexAmount
      break;
    case 5:
      var MayProperty = Property.CapexAmount
      break;
    case 6:
      var JunProperty = Property.CapexAmount
      break;
    case 7:
      var JulProperty = Property.CapexAmount
      break;
    case 8:
      var AugProperty = Property.CapexAmount
      break;
    case 9:
      var SepProperty = Property.CapexAmount
      break;
    case 10:
      var OctProperty = Property.CapexAmount
      break;
    case 11:
      var NovProperty = Property.CapexAmount
      break;
    case 12:
      var DecProperty = Property.CapexAmount
      break;
    default:
      break;
  }
  var TotalPropertyCapex = formulajs.SUM([JanProperty, FebProperty, MarProperty, AprProperty, MayProperty, JunProperty, JulProperty, AugProperty, SepProperty, OctProperty, NovProperty, DecProperty]);
  
  switch (Equipment.CapexPeriod) {
    case 1:
      var JanEquipment = Equipment.CapexAmount
      break;
    case 2:
      var FebEquipment = Equipment.CapexAmount
      break;
    case 3:
      var MarEquipment = Equipment.CapexAmount
      break;
    case 4:
      var AprEquipment = Equipment.CapexAmount
      break;
    case 5:
      var MayEquipment = Equipment.CapexAmount
      break;
    case 6:
      var JunEquipment = Equipment.CapexAmount
      break;
    case 7:
      var JulEquipment = Equipment.CapexAmount
      break;
    case 8:
      var AugEquipment = Equipment.CapexAmount
      break;
    case 9:
      var SepEquipment = Equipment.CapexAmount
      break;
    case 10:
      var OctEquipment = Equipment.CapexAmount
      break;
    case 11:
      var NovEquipment = Equipment.CapexAmount
      break;
    case 12:
      var DecEquipment = Equipment.CapexAmount
      break;
    default:
      break;
  }
  var TotalEquipmentCapex = formulajs.SUM([JanEquipment, FebEquipment, MarEquipment, AprEquipment, MayEquipment, JunEquipment, JulEquipment, AugEquipment, SepEquipment, OctEquipment, NovEquipment, DecEquipment]);

  switch (CapexOther.CapexPeriod) {
    case 1:
      var JanCapexOther = CapexOther.CapexAmount
      break;
    case 2:
      var FebCapexOther = CapexOther.CapexAmount
      break;
    case 3:
      var MarCapexOther = CapexOther.CapexAmount
      break;
    case 4:
      var AprCapexOther = CapexOther.CapexAmount
      break;
    case 5:
      var MayCapexOther = CapexOther.CapexAmount
      break;
    case 6:
      var JunCapexOther = CapexOther.CapexAmount
      break;
    case 7:
      var JulCapexOther = CapexOther.CapexAmount
      break;
    case 8:
      var AugCapexOther = CapexOther.CapexAmount
      break;
    case 9:
      var SepCapexOther = CapexOther.CapexAmount
      break;
    case 10:
      var OctCapexOther = CapexOther.CapexAmount
      break;
    case 11:
      var NovCapexOther = CapexOther.CapexAmount
      break;
    case 12:
      var DecCapexOther = CapexOther.CapexAmount
      break;
    default:
      break;
  }

  var TotalOtherCapex = formulajs.SUM([JanCapexOther, FebCapexOther, MarCapexOther, AprCapexOther, MayCapexOther, JunCapexOther, JulCapexOther, AugCapexOther, SepCapexOther, OctCapexOther, NovCapexOther, DecCapexOther]);
  console.log("Total Plant Capex: "+TotalPlantCapex);
  console.log("Total Property Capex: "+TotalPropertyCapex);
  console.log("Total Equipment Capex: "+TotalEquipmentCapex);
  console.log("Total Other Capex: "+TotalOtherCapex+"\n");



  // Recurring Capital Expenditures
  var RecurringPlant = {
    CapexAmount: 1200,
    CapexPeriod: 1,
    RecurringPeriod: 7
  }
  var TotalRecurringPlant = 0
  for (let i = 1; i <= 12; i++) {
    TotalRecurringPlant += formulajs.IF(i==RecurringPlant.CapexPeriod,RecurringPlant.CapexAmount,formulajs.IFERROR(formulajs.IF(formulajs.INT((i-RecurringPlant.CapexPeriod)/RecurringPlant.RecurringPeriod)==(i-RecurringPlant.CapexPeriod)/RecurringPlant.RecurringPeriod,RecurringPlant.CapexAmount,0),0));    
  }
  console.log("Total Recurring Plant: "+TotalRecurringPlant);


  var RecurringProperty = {
    CapexAmount: 1000,
    CapexPeriod: 3,
    RecurringPeriod: 5
  }
  var TotalRecurringProperty = 0
  for (let j = 1; j <= 12; j++) {
    TotalRecurringProperty += formulajs.IF(j==RecurringProperty.CapexPeriod,RecurringProperty.CapexAmount,formulajs.IFERROR(formulajs.IF(formulajs.INT((j-RecurringProperty.CapexPeriod)/RecurringProperty.RecurringPeriod)==(j-RecurringProperty.CapexPeriod)/RecurringProperty.RecurringPeriod,RecurringProperty.CapexAmount,0),0));
  }
  console.log("Total Recurring Property: "+TotalRecurringProperty);


  var RecurringEquipment = {
    CapexAmount: 1000,
    CapexPeriod: 1,
    RecurringPeriod: 12
  }
  var TotalRecurringEquipment = 0
  for (let k = 1; k <= 12; k++) {
    TotalRecurringEquipment += formulajs.IF(k==RecurringEquipment.CapexPeriod,RecurringEquipment.CapexAmount,formulajs.IFERROR(formulajs.IF(formulajs.INT((k-RecurringEquipment.CapexPeriod)/RecurringEquipment.RecurringPeriod)==(k-RecurringEquipment.CapexPeriod)/RecurringEquipment.RecurringPeriod,RecurringEquipment.CapexAmount,0),0));
  }
  console.log("Total Recurring Equipment: "+TotalRecurringEquipment);


  var RecurringITEquip = {
    CapexAmount: 3000,
    CapexPeriod: 1,
    RecurringPeriod: 6
  }
  var TotalRecurringITEquip = 0;
  for (let l = 1; l <= 12; l++) {
    TotalRecurringITEquip += formulajs.IF(l==RecurringITEquip.CapexPeriod,RecurringITEquip.CapexAmount,formulajs.IFERROR(formulajs.IF(formulajs.INT((l-RecurringITEquip.CapexPeriod)/RecurringITEquip.RecurringPeriod)==(l-RecurringITEquip.CapexPeriod)/RecurringITEquip.RecurringPeriod,RecurringITEquip.CapexAmount,0),0));
  }
  console.log("Total Recurring IT Equip: "+TotalRecurringITEquip);

  var RecurringOfficeEquip = {
    CapexAmount: 0,
    CapexPeriod: 1,
    RecurringPeriod: 0
  }
  var TotalRecurringOfficeEquip = 0;
  for (let q = 1; q <= 12; q++) {
    TotalRecurringOfficeEquip += formulajs.IF(q==RecurringOfficeEquip.CapexPeriod,RecurringOfficeEquip.CapexAmount,formulajs.IFERROR(formulajs.IF(formulajs.INT((q-RecurringOfficeEquip.CapexPeriod)/RecurringOfficeEquip.RecurringPeriod)==(q-RecurringOfficeEquip.CapexPeriod)/RecurringOfficeEquip.RecurringPeriod,RecurringOfficeEquip.CapexAmount,0),0));
  }
  console.log("Total Recurring Office Equip: "+TotalRecurringOfficeEquip);


  var RecurringVechiles = {
    CapexAmount: 15000,
    CapexPeriod: 1,
    RecurringPeriod: 24
  }
  var TotalRecurringVechiles = 0;
  for (let w = 1; w <= 12; w++) {
    TotalRecurringVechiles += formulajs.IF(w==RecurringVechiles.CapexPeriod,RecurringVechiles.CapexAmount,formulajs.IFERROR(formulajs.IF(formulajs.INT((w-RecurringVechiles.CapexPeriod)/RecurringVechiles.RecurringPeriod)==(w-RecurringVechiles.CapexPeriod)/RecurringVechiles.RecurringPeriod,RecurringVechiles.CapexAmount,0),0));
  }
  console.log("Total Recurring Vechiles: "+TotalRecurringVechiles);

  var TotalCapex = formulajs.SUM([TotalOtherCapex, TotalEquipmentCapex, TotalPropertyCapex, TotalPlantCapex, TotalRecurringPlant, TotalRecurringProperty, TotalRecurringEquipment, TotalRecurringVechiles, TotalRecurringOfficeEquip, TotalRecurringITEquip])
  console.log("Total Capex: "+TotalCapex+"\n\n");

  
  //? ------ Income ------

  TotalOperatingIncome = formulajs.SUM([TotalSalesRevenue, TotalWageCosts, TotalOverheadCosts])
  console.log("Total Operating Income: " + TotalOperatingIncome + "\n");

  var DepreciationAmort = 0.2

  var xyz = 0
  for (let e = 1; e <= 12; e++) {
    xyz += (Utilities.MonthlyCost/12)
  }
  var tyu = xyz*TotalCapex
  console.log(tyu);


  res.render('index', {
    title: 'Financial',
    ProductUnitSold: ProductUnitSold,
    ProductRevenue: ProductRevenue,

  });
});

module.exports = router;
