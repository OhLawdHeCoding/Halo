#Projektgrupp Halo

#__Trello__#
url: https://trello.com/b/sRzNSATB/agile-board

#__Repo Structure and Critical File Relationships__#
##Documentation:##
** >Team reflections** can be found under "./Halo/Team Reflections" and are labeled by week
** > Individual reflections** can be found under "./Halo/individual_reflections/<Name>" and are labeled by week 

System: 
 > Original data can be found under "./Halo/Resources"
	> "aaq0216_datas2.xls" 	- Original data, excel file. Source: https://www.science.org/doi/abs/10.1126/science.aaq0216
	> "aaq0216_datas2.csv" 	- Select values of the original data. Contains "Product" and "GHG Emissions (kg CO2eq/FU, IPCC 2013 incl. CC feedbacks)" 
				  collumns. Also contains added "id"-collumn.
	> "data.json" 		- Contains a converted version of the above mentioned .csv file.
 App: "./Halo/CO2_calculator/co2/"
  > Source can be found under "./src"
  	> Live database can be found in "Data.json" 	
				- Based on "data.json" in "Halo/Resources/data.json" but also contains new data such as "Tags" and "PortionSize"-collumns
				  See object structure: [{
							  "Product"	: (string)"Product", 
							  "MeanC02"	: (string)"MeanC02",
							  "id"		: (string)"id",
							  "PortionSize"	: [{"name" : (string)"name",
							  		    "grams": (number)grams}]
							  "Tags"	: ["Tag"]
							}]
	> "index.js" is the first file read. It renders the "App.js" component which in turn renders the rest of the website.
	> "App.js" is the root component. It in turn calls all other pages and establishes their routes. It calls:
		> "./Components/Homepage.js"
		> "./Components/About.js"
		> "./Components/Donate.js"
	> <filename>.css handles stylig for <filename>.js
	> "./styling/" contains all .css files
	> "./Components/" contains all react components and their helperfunctions.
		> "Searchbar.js" recieves data.json from "App.js" and renders a searchbar, filters i
 
  > Public files can be found under "./public/", contains files read by the browser on launch

, description how to get to reflections
Crucial parts of the product system


