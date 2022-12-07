describe('Front page', () => {
    it('should first show front page elements', async () => {
        await expect($('.front-container')).toBeExisting()
        await expect($('.front-container-component-middle')).toBeExisting()
        await expect($('.front-container-component-top')).toBeExisting()
        await expect($('.front-item-link')).toBeExisting()
    });
});
