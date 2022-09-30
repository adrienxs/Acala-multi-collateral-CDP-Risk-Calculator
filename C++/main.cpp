#include<iostream>
#include <string>
#include<conio.h>
#include<stdlib.h>
#include<time.h>
#include<iomanip> 
using namespace std;

void	progress_bar(float num, int ini1, int ini2, int a1, int a2)
{
	if(num >= ini1 && num < ini2)
	{
		cout << "[";
		for(float i = 0; i < a1; i++)
			cout << "==";
		for(float i = 0; i < a2; i++)
			cout << "  ";
		cout << "]";
	}
}

void	ft_CDP_Calc()
{
	string	a[] = {"DOT", "LcDOT", "ACA", "LDOT"};
	int		i;
	int		x;
	string	y;
	float	deposit;
	float	minted_ausd;
	float	collateral_asset_price;
	float	risk_ratio;
	float	req_collateral_ratio[]={1.60, 2.80, 2.00, 2.85};
	float	liquidation_ratio[]={1.30, 2.35, 1.65, 2.30};

	cout<<"Mint aUSD [My Vault]\nEach collateral type has its own unique risk profiles.\n";
	cout<<"\nSelect COLLATERAL: \n[0] DOT\n[1] LcDOT\n[2] ACA\n[3] LDOT\n\n>>> ";

	//Input
	cin>>y;

	i = 0;
	while (y[i])
	{
		if (isdigit(y[i]))
			break;
		i++;	
	}

	while (y[i] < '0' || y[i] > '3')
	{
		cout<<">>> ";
		cin>>y;
		i = 0;
		while (y[i])
		{
			if (isdigit(y[i]))
				break;
			i++;	
		}
	}

	system("cls");

	x = y[i] - 48;
	cout<<"Intro deposited "<<a[x]<<" : ";
	cin>>deposit;

	cout<<"Intro minted aUSD: $";
	cin>>minted_ausd;

	cout<<"Intro "<<a[x]<<" price:  $";
	cin>>collateral_asset_price;

	cout<<"Intro RISK ratio: ";
	cin>>risk_ratio;
	system("cls");

	//Calculos
	float ausd_deposit = collateral_asset_price * deposit;
	float liquidation_deposit_value = minted_ausd * liquidation_ratio[x];
	float liquidation_asset_price = liquidation_deposit_value / deposit;
	float fa_can_mint = ausd_deposit / req_collateral_ratio[x];
	float ch_can_mint = fa_can_mint - minted_ausd;
	float payback = minted_ausd - (fa_can_mint * risk_ratio);
	float DCA_day = fa_can_mint / minted_ausd;
	float num =(minted_ausd / fa_can_mint) * 100;

	//Output
	cout<<"Deposited aUSD: "<<"\t\t$"<<ausd_deposit<<"\n\n"
	<<"Can mint (MAX): "<<"\t\t$"<<fa_can_mint<<"\n"
	<<"Can mint (available): "<<"\t\t$"<<ch_can_mint<<"\n\n"
	<<"Liq. at (deposit value): "<<"\t$"<<liquidation_deposit_value<<"\n"
	<<"Liq. at (asset price): "<<"\t\t$"<<liquidation_asset_price<<"\n\n"
	<<"Payback (to safe): "<<"\t\t$"<<payback<<"\n"
	<<"\t\t\t\t"<<a[x]<<" "<<payback / collateral_asset_price<<"\n\n"
	<<"DCA (d): "<<"\t\t\t$";cout<<DCA_day<<"\n\n";

	//Indicador de Salud
	cout<<setprecision(4)<<num<<"% ";
	progress_bar(num,0,0,0,10);
	progress_bar(num,1,15,1,9);
	progress_bar(num,15,25,2,8);	
	progress_bar(num,25,35,3,7);
	progress_bar(num,35,45,4,6);
	progress_bar(num,45,55,5,5);
	progress_bar(num,55,65,6,4);
	progress_bar(num,65,75,7,3);
	progress_bar(num,75,85,8,2);					
	progress_bar(num,85,100,9,1);	
	progress_bar(num,100,9999,10,0);
	
	if(num<=80)
		cout<<" Safe!\n\n";
	else
		cout<<" Warning!\n\n";
		
	system("pause");
	system("cls");
}

int	main(void)
{
	system("Color 0a");
	cout<<"CDP (multi) - Risk Calculator v1.0.1 | 2022 By 0xAdrien\n"
	<<"Website: https://medium.com/@0xAdrien\n\n";

	while (true)
		ft_CDP_Calc();
	
	return (0);
}