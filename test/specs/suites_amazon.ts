import Amazon from  '../objects/amazon_page';

describe('SCENARIO SUITES AMAZON', () => {
    it('Open Website Amazon', async () => {
        await Amazon.openWebsite()
        await Amazon.searchItems()
    });
    it('Add to Cart', async () => {
        await Amazon.addCart()
    });
    it('Delete Items', async () => {
        await Amazon.deleteItem()
    });
});