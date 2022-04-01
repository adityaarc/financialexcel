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

  var Decpr = formulajs.IFERROR(formulajs.ROUNDDOWN((MonthlyProductSales*(1+ProductSalesGrowth))));
  var Novpr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((11-1)/11)*(Dec-MonthlyProductSales)))))
  var Octpr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((10-1)/11)*(Dec-MonthlyProductSales)))))
  var Seppr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((9-1)/11)*(Dec-MonthlyProductSales)))))
  var Augpr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((8-1)/11)*(Dec-MonthlyProductSales)))))
  var Julpr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((7-1)/11)*(Dec-MonthlyProductSales)))))
  var Junpr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((6-1)/11)*(Dec-MonthlyProductSales)))))
  var Maypr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((5-1)/11)*(Dec-MonthlyProductSales)))))
  var Aprpr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((4-1)/11)*(Dec-MonthlyProductSales)))))
  var Marpr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((3-1)/11)*(Dec-MonthlyProductSales)))))
  var Febpr = formulajs.IFERROR(formulajs.ROUNDDOWN(((MonthlyProductSales+((2-1)/11)*(Dec-MonthlyProductSales)))))
  var Janpr = MonthlyProductSales;
  
  var ProductUnitSold = formulajs.SUM([Janpr, Febpr, Marpr, Aprpr, Maypr, Junpr, Julpr, Augpr, Seppr, Octpr, Novpr, Decpr])
  var ProductRevenue = (ProductUnitSold*PricePerProduct)
  console.log("Product Unit Sold: " + ProductUnitSold);
  console.log("Product Revenue: " + ProductRevenue+ "\n");




  //*Service Revenue
  // Values from req.body.
  var PricePerService = 100;
  var MonthlyServiceSales = 15;
  var SerciceSalesGrowth = 0.45; 

  var Decsr = formulajs.IFERROR(formulajs.ROUNDDOWN((MonthlyServiceSales*(1+SerciceSalesGrowth))))
  var Novsr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((11-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Octsr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((10-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Sepsr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((9-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Augsr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((8-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Julsr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((7-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Junsr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((6-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Maysr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((5-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Aprsr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((4-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Marsr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((3-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Febsr = formulajs.IFERROR(formulajs.ROUNDDOWN(MonthlyServiceSales+((2-1)/11)*(Dec-MonthlyServiceSales),0),"")
  var Jansr = MonthlyServiceSales

  var ServiceUnitsSold = formulajs.SUM([Jansr, Febsr, Marsr, Aprsr, Maysr, Junsr, Julsr, Augsr, Sepsr, Octsr, Novsr, Decsr])

  var ServiceRevenues = (ServiceUnitsSold*PricePerService)
  console.log("Service Unit Sold: " + ServiceUnitsSold);
  console.log("Service Revenues: " + ServiceRevenues + "\n");



  //* Billable Hours Revenue
  // Values from req.body.
  var RatePerHour = 150;
  var BillableHoursPerMonth = 45;
  var BillableHoursGrowth = 0.3;

  var Decbr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth*(1+BillableHoursGrowth),1),"")
  var Novbr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((11-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Octbr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((10-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Sepbr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((9-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Augbr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((8-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Julbr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((7-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Junbr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((6-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Maybr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((5-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Aprbr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((4-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Marbr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((3-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Febbr = formulajs.IFERROR(formulajs.ROUNDDOWN(BillableHoursPerMonth+((2-1)/11)*(Dec-BillableHoursPerMonth),1),"")
  var Janbr = BillableHoursPerMonth

  var TotalBillableHoursPerMonth = formulajs.SUM([Janbr, Febbr, Marbr, Aprbr, Maybr, Junbr, Julbr, Augbr, Sepbr, Octbr, Novbr, Decbr])
  var BillableHoursRevenues = (TotalBillableHoursPerMonth*RatePerHour)
  console.log("Total Billable Hours Per Month: "+TotalBillableHoursPerMonth)
  console.log("Billable Hour Revenues: "+BillableHoursRevenues+"\n")



  //* Subscription Revenue
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

    //? ------ ---------------------DIRECT COST-----------------------------------------------

    var CostofGoodsSoldforProductRevenues = 0.03;
    var CostofGoodsSoldforServiceRevenues =0.03;
    var CostofGoodsSoldforBillableHoursRevenues=0.05;
    var CostofGoodsSoldforSubscriptionRevenues = 0.06;

    // Cost of Goods Sold for Product Revenues

    var Jangspr = ((Janpr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Febgspr = ((Febpr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Margspr = ((Marpr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Aprgspr = ((Aprpr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Maygspr = ((Maypr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Jungspr = ((Junpr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Julgspr = ((Julpr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Auggspr = ((Augpr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Sepgspr = ((Seppr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Octgspr = ((Octpr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Novgspr = ((Novpr*PricePerProduct)*CostofGoodsSoldforProductRevenues)
    var Decgspr = ((Decpr*PricePerProduct)*CostofGoodsSoldforProductRevenues)

    var SumCostofGoodsSoldforProductRevenues = formulajs.SUM([Jangspr, Febgspr, Margspr, Aprgspr, Maygspr, Jungspr, Julgspr, Auggspr, Sepgspr, Octgspr, Novgspr, Decgspr])
    console.log("Sum Cost of Goods Sold for Product Revenues: "+SumCostofGoodsSoldforProductRevenues+ "\n\n");
    // CostofGoodsSoldforServiceRevenues 


    var Jangssr =  ((Jansr*PricePerService)*CostofGoodsSoldforServiceRevenues)
    var Febgssr =  ((Febsr*PricePerService)*CostofGoodsSoldforServiceRevenues)
    var Margssr =  ((Marsr*PricePerService)*CostofGoodsSoldforServiceRevenues)
    var Aprgssr =  ((Aprsr*PricePerService)*CostofGoodsSoldforServiceRevenues)
    var Maygssr =  ((Maysr*PricePerService)*CostofGoodsSoldforServiceRevenues) 
    var Jungssr =  ((Junsr*PricePerService)*CostofGoodsSoldforServiceRevenues) 
    var Julgssr =  ((Julsr*PricePerService)*CostofGoodsSoldforServiceRevenues)
    var Auggssr =  ((Augsr*PricePerService)*CostofGoodsSoldforServiceRevenues) 
    var Sepgssr =  ((Sepsr*PricePerService)*CostofGoodsSoldforServiceRevenues) 
    var Octgssr =  ((Octsr*PricePerService)*CostofGoodsSoldforServiceRevenues) 
    var Novgssr =  ((Novsr*PricePerService)*CostofGoodsSoldforServiceRevenues) 
    var Decgssr =  ((Decsr*PricePerService)*CostofGoodsSoldforServiceRevenues)

    var SumCostofGoodsSoldforServiceRevenues  = formulajs.SUM([Jangssr, Febgssr, Margssr, Aprgssr, Maygssr, Jungssr, Julgssr, Auggssr, Sepgssr, Octgssr, Novgssr, Decgssr])
    console.log("Sum Cost of Goods Sold for Service Revenues: "+SumCostofGoodsSoldforServiceRevenues+ "\n\n");

    //CostofGoodsSoldforBillableHoursRevenues

    var Jangsbr =  ((Janbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues)
    var Febgsbr =  ((Febbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues)
    var Margsbr =  ((Marbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues)
    var Aprgsbr =  ((Aprbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues)
    var Maygsbr =  ((Maybr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues) 
    var Jungsbr =  ((Junbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues) 
    var Julgsbr =  ((Julbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues)
    var Auggsbr =  ((Augbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues)
    var Sepgsbr =  ((Sepbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues)
    var Octgsbr =  ((Octbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues)
    var Novgsbr =  ((Novbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues)
    var Decgsbr =  ((Decbr*RatePerHour)*CostofGoodsSoldforBillableHoursRevenues)

    var SumCostofGoodsSoldforBillableHoursRevenues  = formulajs.SUM([Jangsbr, Febgsbr, Margsbr, Aprgsbr, Maygsbr, Jungsbr, Julgsbr, Auggsbr, Sepgsbr, Octgsbr, Novgsbr, Decgsbr])
    console.log("Sum Cost of Goods Sold for Billable Hour Revenues: "+SumCostofGoodsSoldforBillableHoursRevenues+ "\n\n");

    //CostofGoodsSoldforSubscriptionRevenues


    var Jangsub =  (JanSub*CostofGoodsSoldforSubscriptionRevenues)
    var Febgsub =  (FebSub*CostofGoodsSoldforSubscriptionRevenues)
    var Margsub =  (MarSub*CostofGoodsSoldforSubscriptionRevenues)
    var Aprgsub =  (AprSub*CostofGoodsSoldforSubscriptionRevenues)
    var Maygsub =  (MaySub*CostofGoodsSoldforSubscriptionRevenues)
    var Jungsub =  (JunSub*CostofGoodsSoldforSubscriptionRevenues)
    var Julgsub =  (JulSub*CostofGoodsSoldforSubscriptionRevenues)
    var Auggsub =  (AugSub*CostofGoodsSoldforSubscriptionRevenues)
    var Sepgsub =  (SepSub*CostofGoodsSoldforSubscriptionRevenues)
    var Octgsub =  (OctSub*CostofGoodsSoldforSubscriptionRevenues)
    var Novgsub =  (NovSub*CostofGoodsSoldforSubscriptionRevenues)
    var Decgsub =  (DecSub*CostofGoodsSoldforSubscriptionRevenues)

    var SumCostofGoodsSoldforSubscriptionRevenues  = formulajs.SUM([Jangsub, Febgsub, Margsub, Aprgsub, Maygsub, Jungsub, Julgsub, Auggsub, Sepgsub, Octgsub, Novgsub, Decgsub])
    console.log("Sum Cost of Goods Sold for Subscription Revenues: "+SumCostofGoodsSoldforSubscriptionRevenues+ "\n\n");


    //? ------ VARIABLE COST ------

    var CommissiononProductRevenues = 0.03;
    var CommissiononServiceRevenues =0.02;
    var CommissiononBillableHoursRevenues=0.01;
    var CommissiononSubscriptionRevenues = 0.04;

    // Commission for Product Revenues

    var Jancpr = ((Janpr*PricePerProduct)*CommissiononProductRevenues)
    var Febcpr = ((Febpr*PricePerProduct)*CommissiononProductRevenues)
    var Marcpr = ((Marpr*PricePerProduct)*CommissiononProductRevenues)
    var Aprcpr = ((Aprpr*PricePerProduct)*CommissiononProductRevenues)
    var Maycpr = ((Maypr*PricePerProduct)*CommissiononProductRevenues)
    var Juncpr = ((Junpr*PricePerProduct)*CommissiononProductRevenues)
    var Julcpr = ((Julpr*PricePerProduct)*CommissiononProductRevenues)
    var Augcpr = ((Augpr*PricePerProduct)*CommissiononProductRevenues)
    var Sepcpr = ((Seppr*PricePerProduct)*CommissiononProductRevenues)
    var Octcpr = ((Octpr*PricePerProduct)*CommissiononProductRevenues)
    var Novcpr = ((Novpr*PricePerProduct)*CommissiononProductRevenues)
    var Deccpr = ((Decpr*PricePerProduct)*CommissiononProductRevenues)


    var SumofCommissiononProductRevenues  = formulajs.SUM([Jancpr, Febcpr, Marcpr, Aprcpr, Maycpr, Juncpr, Julcpr, Augcpr, Sepcpr, Octcpr, Novcpr, Deccpr])
    console.log("Sum of CommissiononProductRevenues: "+ SumofCommissiononProductRevenues + "\n\n");


    // Commission for Service Revenues

    
    var Jancsr =  ((Jansr*PricePerService)*CommissiononServiceRevenues)
    var Febcsr =  ((Febsr*PricePerService)*CommissiononServiceRevenues)
    var Marcsr =  ((Marsr*PricePerService)*CommissiononServiceRevenues)
    var Aprcsr =  ((Aprsr*PricePerService)*CommissiononServiceRevenues)
    var Maycsr =  ((Maysr*PricePerService)*CommissiononServiceRevenues) 
    var Juncsr =  ((Junsr*PricePerService)*CommissiononServiceRevenues) 
    var Julcsr =  ((Julsr*PricePerService)*CommissiononServiceRevenues)
    var Augcsr =  ((Augsr*PricePerService)*CommissiononServiceRevenues) 
    var Sepcsr =  ((Sepsr*PricePerService)*CommissiononServiceRevenues) 
    var Octcsr =  ((Octsr*PricePerService)*CommissiononServiceRevenues) 
    var Novcsr =  ((Novsr*PricePerService)*CommissiononServiceRevenues) 
    var Deccsr =  ((Decsr*PricePerService)*CommissiononServiceRevenues)

    var SumofCommissiononServiceRevenues  = formulajs.SUM([Jancsr, Febcsr, Marcsr, Aprcsr, Maycsr, Juncsr, Julcsr, Augcsr, Sepcsr, Octcsr, Novcsr, Deccsr])
    console.log("Sum of Commissionon Service Revenues: "+ SumofCommissiononServiceRevenues + "\n\n");

   // Commission for Billable Revenues

   var Jancbr =  ((Janbr*RatePerHour)*CommissiononBillableHoursRevenues)
   var Febcbr =  ((Febbr*RatePerHour)*CommissiononBillableHoursRevenues)
   var Marcbr =  ((Marbr*RatePerHour)*CommissiononBillableHoursRevenues)
   var Aprcbr =  ((Aprbr*RatePerHour)*CommissiononBillableHoursRevenues)
   var Maycbr =  ((Maybr*RatePerHour)*CommissiononBillableHoursRevenues) 
   var Juncbr =  ((Junbr*RatePerHour)*CommissiononBillableHoursRevenues) 
   var Julcbr =  ((Julbr*RatePerHour)*CommissiononBillableHoursRevenues)
   var Augcbr =  ((Augbr*RatePerHour)*CommissiononBillableHoursRevenues)
   var Sepcbr =  ((Sepbr*RatePerHour)*CommissiononBillableHoursRevenues)
   var Octcbr =  ((Octbr*RatePerHour)*CommissiononBillableHoursRevenues)
   var Novcbr =  ((Novbr*RatePerHour)*CommissiononBillableHoursRevenues)
   var Deccbr =  ((Decbr*RatePerHour)*CommissiononBillableHoursRevenues)

   var SumofCommissiononBillablerevenue = formulajs.SUM([Jancbr, Febcbr, Marcbr, Aprcbr, Maycbr, Juncbr, Julcbr, Augcbr, Sepcbr, Octcbr, Novcbr, Deccbr])
   console.log("Sum of Commissionon Billable Revenues: "+ SumofCommissiononBillablerevenue + "\n\n");

   
   // Commission for Subscription Revenues


   var Jancsub =  (JanSub*CommissiononSubscriptionRevenues)
   var Febcsub =  (FebSub*CommissiononSubscriptionRevenues)
   var Marcsub =  (MarSub*CommissiononSubscriptionRevenues)
   var Aprcsub =  (AprSub*CommissiononSubscriptionRevenues)
   var Maycsub =  (MaySub*CommissiononSubscriptionRevenues)
   var Juncsub =  (JunSub*CommissiononSubscriptionRevenues)
   var Julcsub =  (JulSub*CommissiononSubscriptionRevenues)
   var Augcsub =  (AugSub*CommissiononSubscriptionRevenues)
   var Sepcsub =  (SepSub*CommissiononSubscriptionRevenues)
   var Octcsub =  (OctSub*CommissiononSubscriptionRevenues)
   var Novcsub =  (NovSub*CommissiononSubscriptionRevenues)
   var Deccsub =  (DecSub*CommissiononSubscriptionRevenues)

   var SumofCommissiononSubscriptionerevenue = formulajs.SUM([Jancsub, Febcsub, Marcsub, Aprcsub, Maycsub, Juncsub, Julcsub, Augcsub, Sepcsub, Octcsub, Novcsub, Deccsub])
   console.log("Sum of Commissionon Subscription Revenues: "+ SumofCommissiononSubscriptionerevenue + "\n\n");

   var Jantsum =  (Jancbr+Jancpr+Jancsr+Jancsub);
   var Febtsum =  (Febcbr+Febcpr+Jancsr+Febcsub)
   var Martsum =  (Marcbr+Marcpr+Marcsr+Marcsub)
   var Aprtsum =  (Aprcbr+Aprcpr+Aprcsr+Aprcsub)
   var Maytsum =  (Maycbr+Maycpr+Maycsr+Maycsub)
   var Juntsum =  (Juncbr+Juncpr+Juncsr+Juncsub)
   var Jultsum =  (Julcbr+Julcpr+Julcsr+Julcsub)
   var Augtsum =  (Augcbr+Augcpr+Augcsr+Augcsub)
   var Septsum =  (Sepcbr+Sepcpr+Sepcsr+Sepcsub)
   var Octtsum =  (Octcbr+Octcpr+Octcsr+Octcsub)
   var Novtsum =  (Novcbr+Novcpr+Novcsr+Novcsub)
   var Dectsum =  (Deccbr+Deccpr+Deccsr+Deccsub)
   
   var TotalSumofCommissiononSubscriptionerevenue = formulajs.SUM([Jantsum, Febtsum, Martsum, Aprtsum, Maytsum, Juntsum, Jultsum, Augtsum, Septsum, Octtsum, Novtsum, Dectsum])
   console.log("Total Sum of Commissionon Subscription Revenues: "+ TotalSumofCommissiononSubscriptionerevenue + "\n\n");




  
  //? ------ Wage and Related Costs ------

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


  //? ------ Overhead Costs ------

  TotalOperatingIncome = formulajs.SUM([TotalSalesRevenue, TotalWageCosts, TotalOverheadCosts])

  console.log("Total Operating Income: "+TotalOperatingIncome);


  res.render('index', {
    title: 'Financial',
    ProductUnitSold: ProductUnitSold,
    ProductRevenue: ProductRevenue,

  });
});

module.exports = router;
