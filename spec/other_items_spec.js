describe("Other items", function() {
  describe("When quality = 0", function() {
    it("quality should remain at 0", function() {
      const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(-1);
    });

    it("quality should remain at 0", function() {
      const gildedRose = new Shop([ new Item("foo", 1, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(0);
    });
  });

  describe("When quality > 0", function() {
    it("quality should decrease by 1", function() {
      const gildedRose = new Shop([ new Item("foo", 1, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(1);
      expect(items[0].sellIn).toEqual(0);
    });

    it("quality should decrease by 2", function() {
      const gildedRose = new Shop([ new Item("foo", 0, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(-1);
    });
  });
});