# Getting Started React App

- Comands to get the project running correcly.

 	`npm i`
	
 	`npm install eslint-config-airbnb -D`
	
  	`npm audit fix`
	
	 `npm install -D typescripnpm install -D typescrip `
	 
	 `npx eslint . --fix`

# Getting startend the backend in laravel

## Steps to get started the prject with laravel.
- Clone the backend laravel repository:

		git clone https://github.com/alejandroGonGon/anima-api.git
- Turn on Apache and MySql
- Run the databse.sql to create and have the database with data.
- Open the terminal in the repository and do :
		
		composer install
- Copy this at the end of this file `C:\xampp\apache\conf\extra\httpd-vhosts.conf`

		<VirtualHost *:80>
			DocumentRoot "C:/xampp/htdocs/anima-api/public"
			ServerName anima-api.localhost
			ErrorLog "logs/anima-api_error.localhost.log"
			CustomLog "logs/anima-api_access.localhost.log" common
		</VirtualHost>
