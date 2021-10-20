#Projektgrupp Halo

###__Trello__###
url: https://trello.com/b/sRzNSATB/agile-board

###__Repo Structure and Critical File Relationships__###
Documentation:
 > Team reflections can be found under "./Halo/Team Reflections" and are labeled by week
 > Individual reflections can be found under "./Halo/individual_reflections/<Name>" and are labeled by week 

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
		> "./Components/Login.js"
	> <filename>.css handles stylig for <filename>.js
	> "./styling/" contains all .css files
	> "./Components/" contains all react components and their helperfunctions.
		> "Searchbar.js" recieves data.json from "App.js" and renders a searchbar. It filters data.json based och 
		    the search and calls "Databasebox.js" with it. 
		>  "Databasebox.js" Renders most interactive content. 
		     * It makes the left hand side table with the data and also calls "AddItemButton.js" to populate it with buttons
		     * It makes the right hand side table with the selected items and calls "IncItemButton.js" and "DecItemButton.js" to populate each portion with buttons.
		     * It renders the graph and displays the totalCO2. For this, it references "Chart.js" and "TotalEmissions.js"
		     * Furthermore, anywhere where CO2KG/KG is displayed dispCO2 from "DisplayCO2" is called to colorize.
  > Public files can be found under "./public/", contains files read by the browser on launch



