@echo off
set USERNAME=root
set PASSWORD=
set HOSTS=172.16.2.212
set SCRIPT="docker pull tranguyenngoc2862002/vgu-web-test:latest && docker run --name vgu-web-app -d -p 3000:3000 -v ~/app/public:/app/public tranguyenngoc2862002/vgu-web-test:latest"
set STOP_SCRIPT="docker stop vgu-web directus && docker rm vgu-web directus"
set COMPOSE_SCRIPT="cp env .env && docker compose up -d"

for %%H in (%HOSTS%) do (
	@echo Stoping currently running vgu-web-test container
	plink -ssh -l %USERNAME% -pw %PASSWORD% %%H %STOP_SCRIPT%
	
	@echo removing old public folder
	plink -ssh -l %USERNAME% -pw %PASSWORD% %%H "rm -r app && rm -r uploads && rm -r database && rm -r extensions && rm -r snapshots"

	@echo copy data to temp folder
	rmdir .depTemp /S /Q
	robocopy  public .depTemp/app/public /E /IS
	robocopy database .depTemp/database /E /IS
	robocopy extensions .depTemp/extensions /E /IS
	robocopy snapshots .depTemp/snapshots /E /IS
	robocopy uploads .depTemp/uploads /E /IS
	xcopy /Y /F prod.docker-compose.yml ".depTemp/docker-compose.yml"*
	echo F | xcopy /Y /F sample.env ".depTemp/env"

	@echo copy files to server
	scp -rp ./.depTemp/* %USERNAME%@%%H:~
	
	@echo Update and run docker compose
	plink -ssh -l %USERNAME% -pw %PASSWORD% %%H %COMPOSE_SCRIPT%
)