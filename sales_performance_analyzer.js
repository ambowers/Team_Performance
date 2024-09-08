
//Task 1
function calculateAverageSales(salesFigures) {
    let totalSales = salesFigures.reduce((total, sales) => total + sales, 0);
    let averageSales = totalSales/salesFigures.length;
    console.log(`Average sales: $${averageSales.toFixed(2)}`);
    return averageSales; 
}

//Task 2
function determinePerformanceRating (averageSales) {
// use if/else-if statements to return a message based on the employees average sales
    if (averageSales > 10000)
        return "Excellent";
    else if (averageSales >= 7000 && averageSales <= 10000)
        return "Good";
    else if (averageSales >= 4000 && averageSales < 7000)
        return "Satisfactory";
    else if (averageSales < 4000)
        return "Needs Improvement";
}
// Task 3
function findTopAndBottomPerformers (salesPeople){
    //using sort to sort the elements in ascending order
    salesPeople.sort ((a, b) => a.totalSales - b.totalSales);
    let performers = {
        topPerformer: salesPeople[salesPeople.length -1],
        bottomPerformer: salesPeople[0]
    }
    return performers;
}
// Task 4
function generatePerformanceReport(salesData){
    // Compute average sales for each salesperson using calculateAverageSales
    salesData.forEach(salesPerson => {
        salesPerson.averageSales = calculateAverageSales(salesPerson.sales);
        salesPerson.performanceRating = determinePerformanceRating(salesPerson.averageSales);
    });
 
    // Find total sales for each salesperson
    let salesPeople = salesData.map(salesPerson => ({
        name: salesPerson.name,
        totalSales: salesPerson.sales.reduce((sum, sale) => sum + sale, 0),
        averageSales: salesPerson.averageSales,
        performanceRating: salesPerson.performanceRating
    }));
     // Find top and bottom performers
     let performers = findTopAndBottomPerformers(salesPeople);
     return {
        salesData: salesData.map(salesPerson => ({
            name: salesPerson.name,
            sales: salesPerson.sales,
            averageSales: salesPerson.averageSales,
            performanceRating: salesPerson.performanceRating
        })),
        topPerformer: {
            name: performers.topPerformer.name,
            totalSales: performers.topPerformer.totalSales,
            averageSales: performers.topPerformer.averageSales,
            performanceRating: performers.topPerformer.performanceRating
        },
        bottomPerformer: {
            name: performers.bottomPerformer.name,
            totalSales: performers.bottomPerformer.totalSales,
            averageSales: performers.bottomPerformer.averageSales,
            performanceRating: performers.bottomPerformer.performanceRating
     }
}
}
// Task 5
const salesData = [
{ name: 'Alice', sales: [12000, 15000, 13000] },
{ name: 'Bob', sales: [7000, 6000, 7500] },
{ name: 'Charlie', sales: [3000, 4000, 3500] },
{ name: 'Diana', sales: [9000, 8500, 9200] },
];

const report = generatePerformanceReport(salesData);
console.log(report);