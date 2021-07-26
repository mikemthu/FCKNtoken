const FCKN = artifacts.require("FCKN")

contract("FCKN", (accounts) => {

    before(async() => {
        fckn = await FCKN.deployed()
    })

    it("owner of the tokens get 16 tokens", async () => {
        let balance = await fckn.balanceOf(accounts[0]) //accounts 0 is owner just to check
    })
})