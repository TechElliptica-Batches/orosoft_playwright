
class BaseAction{
    constructor(page){
        this.page = page;
    }

    async enterData(locator, data){
        await this.page.locator(locator).hover();
        await this.page.locator(locator).fill(data);
        
    }

    async getTableDataBasedOnName(name){
        
    }
    

// Home work 
// Read the table. get data based on name, ocucpation and country 
// 1 - John - country
// 2 - how many emp belong to india
// 3 - Raj - occupation
}