@echo off
set USERNAME=root
set PASSWORD=
set HOSTS=172.16.2.212
set SCRIPT="docker pull tranguyenngoc2862002/vgu-web-test:latest && docker run --name vgu-web-app -d -p 3000:3000 -v ~/app/public:/app/public tranguyenngoc2862002/vgu-web-test:latest"
set STOP_SCRIPT="docker stop vgu-web-app && docker rm vgu-web-app"

for %%H in (%HOSTS%) do (
	@echo Stoping currently running vgu-web-test container
	plink -ssh -l %USERNAME% -pw %PASSWORD% %%H %STOP_SCRIPT%
	
	@echo removing old public folder
	plink -ssh -l %USERNAME% -pw %PASSWORD% %%H "rm -r app & mkdir app & mkdir database"

	@echo copy local public folder to ~/app/public on server
	scp -r ./public/ %USERNAME%@%%H:./app

	@echo copy local database folder to ~/database on server
	scp -r ./database %USERNAME%@%%H:./database
	
	@echo Update and run vgu-web-test
	plink -ssh -l %USERNAME% -pw %PASSWORD% %%H %SCRIPT%
)