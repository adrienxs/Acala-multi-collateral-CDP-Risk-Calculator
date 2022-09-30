let x
let deposit
let minted_ausd
let collateral_asset_price
let risk_ratio
let req_collateral_ratio = [1.60, 2.80, 2.00, 2.85]
let liquidation_ratio = [1.30, 2.35, 1.65, 2.30]

let assetValue
let ausd_deposit
let liquidation_deposit_value
let liquidation_asset_price
let fa_can_mint
let ch_can_mint
let payback
let DCA_day

function returnData() {

	assetValue = document.querySelector('input[id="asset"]:checked').value
	if (assetValue == 0) {
		x = 0
	}
	if (assetValue == 1) {
		x = 1
	}
	if (assetValue == 2) {
		x = 2
	}
	if (assetValue == 3) {
		x = 3
	}

	deposit = document.getElementById("deposit").value;
	minted_ausd = document.getElementById("minted_ausd").value;
	collateral_asset_price = document.getElementById("collateral_asset_price").value;
	risk_ratio = document.getElementById("risk_ratio").value;
	ausd_deposit = collateral_asset_price * deposit;
	liquidation_deposit_value = minted_ausd * liquidation_ratio[x];
	liquidation_asset_price = liquidation_deposit_value / deposit;
	fa_can_mint = ausd_deposit / req_collateral_ratio[x];
	ch_can_mint = fa_can_mint - minted_ausd;
	payback = minted_ausd - (fa_can_mint * risk_ratio);
	DCA_day = fa_can_mint / minted_ausd;

	document.getElementById('ausd_deposit').textContent = "$" + ausd_deposit.toFixed(2);
	document.getElementById('liquidation_deposit_value').textContent = "$" + liquidation_deposit_value.toFixed(2);
	document.getElementById('liquidation_asset_price').textContent = "$" + liquidation_asset_price.toFixed(2);
	document.getElementById('fa_can_mint').textContent = "$" + fa_can_mint.toFixed(2);
	document.getElementById('ch_can_mint').textContent = "$" + ch_can_mint.toFixed(2);
	document.getElementById('payback').textContent = "$" + payback.toFixed(2);
	document.getElementById('DCA_day').textContent = "$" + DCA_day.toFixed(2);
	document.getElementById('assetValue').textContent = assetValue
}