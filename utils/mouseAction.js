
export class MouseAction{

    constructor(page){
        this.page = page;
    }

    async scrollMouseToElement(locator){
        await this.page.locator(locator).hover();
    }

    async scrollMouse(mouseTime){
        await this.page.mouse.move(0, 50, {times: mouseTime})
    }
    
}
