let	x,
	deposit,
	minted_ausd,
	collateral_asset_price,
	risk_ratio,
	req_collateral_ratio = [1.60, 2.80, 2.00, 2.85],
	liquidation_ratio = [1.30, 2.35, 1.65, 2.30];

let	assetValue,
	ausd_deposit,
	liquidation_deposit_value,
	liquidation_asset_price,
	fa_can_mint,
	ch_can_mint,
	payback,
	DCA_day;

let	block1 = document.querySelector('div[class="main-01"]'),
	block2 = document.querySelector('div[class="main-02"]'),
	block3 = document.querySelector('div[class="main-03"]');

function checkAsset() {
	block1.style.display = "none";
	block2.style.display = "block"

	assetValue =
		document.querySelector('input[id="asset"]:checked').value
	if (assetValue == 0) {
		x = 0
		document.getElementById('assetName').textContent = "DOT"
	}
	if (assetValue == 1) {
		x = 1
		document.getElementById('assetName').textContent = "LcDOT"
	}
	if (assetValue == 2) {
		x = 2
		document.getElementById('assetName').textContent = "ACA"
	}
	if (assetValue == 3) {
		x = 3
		document.getElementById('assetName').textContent = "LDOT"
	}
}

function prevBlock2() {
	block1.style.display = "block";
	block2.style.display = "none"
}

function prevBlock3() {
	block1.style.display = "block";
	block3.style.display = "none"
}

function returnData() {
	block2.style.display = "none";
	block3.style.display = "block"

	deposit =
		document.getElementById("deposit").value;
	minted_ausd =
		document.getElementById("minted_ausd").value;
	collateral_asset_price =
		document.getElementById("collateral_asset_price").value;
	risk_ratio =
		document.getElementById("risk_ratio").value;

	ausd_deposit = collateral_asset_price * deposit;
	liquidation_deposit_value = minted_ausd * liquidation_ratio[x];
	liquidation_asset_price = liquidation_deposit_value / deposit;
	fa_can_mint = ausd_deposit / req_collateral_ratio[x];
	ch_can_mint = fa_can_mint - minted_ausd;
	payback = minted_ausd - (fa_can_mint * risk_ratio);
	safe_ratio =(minted_ausd / fa_can_mint) * 100;
	DCA_day = fa_can_mint / minted_ausd;

	document.getElementById('ausd_deposit').textContent =
		"$" + ausd_deposit.toFixed(2);
	document.getElementById('liquidation_deposit_value').textContent =
		"$" + liquidation_deposit_value.toFixed(2);
	document.getElementById('liquidation_asset_price').textContent =
		"$" + liquidation_asset_price.toFixed(2);
	document.getElementById('fa_can_mint').textContent =
		"$" + fa_can_mint.toFixed(2);
	document.getElementById('ch_can_mint').textContent =
		"$" + ch_can_mint.toFixed(2);
	document.getElementById('payback').textContent =
		"$" + payback.toFixed(2);
	document.getElementById('DCA_day').textContent =
		"$" + DCA_day.toFixed(2);
	document.getElementById('safe_ratio').textContent =
		"%" + safe_ratio.toFixed(2);	
	document.getElementById('assetValue').textContent =
		assetValue
}