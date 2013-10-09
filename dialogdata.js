function goNext(boxid){ 
	var feedbackData;
	switch(boxid){
		case 1:{
			feedbackData="You are partially correct. Apart from the selected option, SEBI has introduced some other changes which we will be discussing in this module. <br /><strong> Welcome to the module, SEBI Changes Affecting Distribution</strong> ";	
			break;
		}
		case 2:{
			feedbackData="You are right. Apart from these options,SEBI has introduced some other changes which we will be discussing in this module.<br /><strong> Welcome to the module, SEBI Changes Affecting Distribution</strong> "; 	
			break;
		}
		default :{
			break;
		}
	}
	document.getElementById("ourTitle").innerHTML = "Feedback";
	document.getElementById("ourMessage").innerHTML = feedbackData;
}
function displayFeedback(boxid){
	var feedbackData;
	var sTitle;
	switch(boxid){
	case 1:{
	sTitle="<strong> Investments  </strong> ";
		feedbackData="<p>As far as Mutual Funds are concerned, SEBI formulates policies and regulates the Mutual Funds to protect the interest of the investors. Some of the policies included are:</p>"+
		"<ul> "+
			"<li> "+
				"Gold ETFs are permitted and in existence&nbsp;</li> "+
			"<li> "+
			"	Regulatory framework for Real Estate Mutual Funds is in place&nbsp;</li> "+
			"<li> "+
			"	Schemes are allowed to invest abroad</li> "+
			"<li> "+
			"	Investment in securitized instruments is allowed "+
			"	<ul> "+
			"		<li> "+
			"			This exposure is distinct from holding instruments issued by original lender&nbsp;</li> "+
			"	</ul> "+
			"</li> "+
			"<li> "+
		"		Mutual Funds are not allowed to lend or borrow in the call money market</li> "+
		"	<li> "+
		"		Mutual Funds can offer capital protection oriented products to investors&nbsp;</li> "+
		"	<li> "+
		"		Liquid Funds must invest in debt and money market securities with maturity of up to 91 days only</li> "+
		"</ul> ";

	break;
	}
	case 2:{
	sTitle="<strong> Investments: Real Estate </strong>";	
		feedbackData="<ul><li>Real Estate Mutual Funds (REMFs) are permitted in India"+
		"<ul><li>They can be promoted by existing AMCs or even Real Estate companies</li></ul></li><li>Indian REMFs can invest in property directly<ul><li>In cities / urban agglomerations having population more than 1 million&nbsp;</li></ul></li><li>75% needs to be invested in:<ul><li>Real Estate Assets</li><li>Mortgage Backed Securities (MBS)</li></ul></li></ul> "+
		" <p>Equity shares and debentures of real estate companies</p>";
	break;
	}
	case 3:{
	sTitle="<strong> Investments: International Funds </strong>";	
		feedbackData="<ul><li>International Funds, floated in India, can invest abroad in:<ul><li>ADRs/GDRs issued by Indian or foreign companies*</li><li>Equity of overseas companies*&nbsp;</li><li>Initial and follow on public offerings*&nbsp;</li> "+
"<li>Foreign debt securities in the countries with fully convertible currencies **</li> "+
"<li>Short term as well as long term debt instruments**&nbsp;</li><li>Short term deposits with banks overseas**</li></ul></li>"+
		"<p>*  Have to be listed on a recognized stock exchange</p>"+
		"<p>**  Issuer and country credit rating has to be investment grade</p>"+		
"<li>A dedicated fund manager has to be identified for managing the overseas assets mentioned earlier&nbsp;</li><li>International Funds, floated in India, can also invest in: "+
"<ul><li>ETFs of other countries</li><li>Units of Passive Index Funds in other countries</li><li>Units of actively managed Mutual Funds in other countries</li></ul></li><li>When investing in other countries funds is subject to the following:&nbsp;</li><li>International Equity Funds may also hold some of their portfolios in Indian Equity or Debt</li><li>They can also hold some portion of the portfolio in money market instruments to manage liquidity</li><li> "+
"Investment Caps<ul><li>The aggregate ceiling for overseas investment by Indian MFs is USD 7 bn.<ul><li> "+
"Within the overall limit of USD 7 billion, MFs can make overseas investments, up to a maximum of USD 300 million per Mutual Fund</li></ul></li><li>The overall ceiling for investment in overseas ETFs that invest in securities is USD 1 billion<ul><li>Maximum of USD 50 million per Mutual Fund</li></ul></li><li>The overseas investment limit for resident individuals is $2,00,000 per year<ul> "+
"<li>Resident individuals use rupees to invest in Indian Mutual Funds, even when these schemes invest abroad. &nbsp;Such investments in rupees are not restricted by this limit&nbsp;</li></ul></li></ul></li></ul>";
	break;
	}
	case 4:{
	sTitle="<strong> Investments: Short Term Deposits </strong>";
	feedbackData="<ul><li>Short term&rsquo; means not exceeding 61 days</li><li>Investments in short term bank deposits should not exceed 15% of the net assets<ul><li>Can go up to 20% with prior approval of trustees&nbsp;</li></ul></li><li>Not more than 10% of the net assets can be parked in short term deposits with any one scheduled commercial bank including its subsidiaries</li> "+
	"<li>Trustees have to ensure that funds of a particular scheme are not parked in short term deposit of a bank which has invested in that scheme</li> "+
	"<li>In case of liquid and debt oriented schemes, AMC(s) cannot charge any investment management and advisory fees for parking of funds in short term deposits of scheduled commercial banks&nbsp;</li></ul>";
	break;
	}
	case 5:{
	sTitle="<strong> Investment: Derivatives   </strong>";		
	feedbackData="<ul><li>Mutual Funds can invest in derivative instruments after notifying investors<ul><li>Mutual Funds cannot write options or buy instruments with embedded written options</li><li>Total exposure related to option premium paid must not exceed 20% of the net assets of the scheme</li> "+
	"<li>Positions that are in the nature of hedging are exempted from the limits</li><li>Plain vanilla interest rate swaps can be executed with market makers recognized by RBI. &nbsp;</li><li>Single party exposure limit is 10% of net assets of scheme</li><li>Derivative position is to be disclosed in half-yearly portfolio disclosure reports&nbsp;</li></ul></li></ul>";
	break;
	}
	case 6:{
	sTitle="<strong> Investment: Repos in Corporate Debt Securities </strong>";	
		feedbackData="<ul><li>Mutual Funds are permitted to participate in Repos in Corporate Debt Securities, subject to the following:<ul> "+
		"<li>Repo exposure would be only in AAA rated corporate debentures</li><li>Borrowing transactions &nbsp;shall not be for more than 6 months</li><li>Gross exposure of any Mutual Fund scheme to such transactions cannot exceed 10% of net assets of the scheme</li> "+
		"<li>Gross exposure to such transactions along with exposure to debt, equity and derivative positions cannot exceed 100% of Net Assets of the scheme</li></ul></li></ul> ";
	break;
	}	
	default :{
		sTitle="";
		feedbackData = " ";
	break;
	}
   }
   document.getElementById("s2Title").innerHTML = sTitle;
	document.getElementById("feedback2").innerHTML = feedbackData;
}
function showFinal(boxid){
	var feedbackData;
	var sTitle;
	switch(boxid){
	case 1:{
	sTitle="Infrastructure Debt Funds";
	feedbackData="<ul><li>&quot;Infrastructure Debt Fund Scheme&quot; means a Mutual Fund scheme that invests primarily (minimum 90% of scheme assets) in the debt securities or securitized debt instrument of&nbsp;</li><li>Infrastructure companies<ul><li>Infrastructure capital companies&nbsp;</li><li>Infrastructure projects&nbsp;</li><li>Special purpose vehicles</li></ul></li></ul> "+
		"<p>These are created for the purpose of facilitating or promoting investment in infrastructure, and other permissible assets. These are &nbsp;in accordance with regulations or bank loans in respect of completed and revenue generating projects of infrastructure companies or special purpose vehicles</p> "+
		"<ul><li>The balance amount may be invested in equity shares, convertibles including mezzanine financing instruments of companies engaged in infrastructure, infrastructure development projects, whether listed on a recognized stock exchange in India or not; or money market instruments and bank deposits&nbsp;</li></ul> "+		
		"<strong>Infrastructure Debt Fund scheme:</strong></div> "+
		"<ul><li>Can be launched either as close-ended scheme maturing after more than five years, or</li><li>Interval scheme with lock-in of five years and interval period not longer than one month</li><li>Units are listed on a recognized stock exchange after they are fully paid up&nbsp;</li><li>Shall have minimum five investors and no single investor shall hold more than fifty per cent of net assets of the scheme</li><li>Requires Minimum investment by any investor of &nbsp;Rs1crore; minimum size of each unit being Rs10lakh</li> "+
		"<li>Shall have firm commitment from the strategic investors for contribution of an amount of at least Rupees twenty five crores before the allotment of units of the scheme are marketed to other potential investors</li></ul> "+
		" ";
	break;
	}
	case 2:{
	sTitle="<strong> FMPs     </strong>";		
	feedbackData="<ul><li>Investors cannot prematurely offer the units for re-purchase&nbsp;</li>"+
		" <img src='fmps.png' width='40%'>"+
		"<li>Closed-end schemes (including FMPs) have to be mandatorily listed</li><li>Post-NFO, investors can buy or sell the units only on the stock exchange</li></ul>"+	
		" ";
	break;
	}
	case 3:{
	sTitle="<strong> Interval Schemes </strong>";
	feedbackData="<ul><li>Interval schemes must be mandatorily listed</li><li>Redemption/ Repurchase of units will be allowed only during the specified transaction period (when units can be purchased and redeemed)</li>"+
		"<li>Transaction period shall be &nbsp;for a minimum of 2 days</li><li>Minimum duration of an interval period will be 15 days</li><li>Investment is allowed only in securities that mature on or before the opening of the next transaction period</li></ul>"+
		" ";
	break;
	}
	case 4:{
	sTitle="<strong>Minimum Number of Investors  </strong>";
	feedbackData="<ul><li>To avoid concentration of investors in a scheme, SEBI mandates that :<ul><li>Every Mutual Fund scheme should have at least 20 investors</li><li>No single investor should hold more than 25% of the corpus</li> "+
		"</ul></li><li>Open-ended schemes are given a three-month period to comply with this rule after the closure of the NFO&nbsp;</li> "+
		"<li>FMP and closed-end schemes will have to comply with the 20:25 rule at NFO closure; else the fund cannot make an allotment of units and will have to refund all NFO collections</li></ul> "+	
		" ";
	break;
	}
	case 5:{
	sTitle="<strong> Additional Plans </strong>";
	feedbackData="<ul><li>Additional plans cannot be launched under existing open ended schemes if they differ substantially from the scheme in terms of portfolio or other characteristics. &nbsp;They will have to be launched as separate schemes.</li><li>Plan(s) which are consistent with the characteristics of the scheme may be launched as additional plans as part of existing schemes by issuing an addendum.</li></ul> ";
	break;
	}	
	default :{
		sTitle="";
		feedbackData = " ";
	break;
	}
   }
	document.getElementById("s2Title").innerHTML = sTitle;
	document.getElementById("feedback2").innerHTML = feedbackData;
}