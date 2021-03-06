describe('Sulfuras', () => {
  describe('all situations', () => {
    it('should remain the same after sell in date when quality is 0', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(0);
    });

    it('should remain the same before sell in date when quality is 0', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 1, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(1);
    });

    it('should remain the same after sell in date when quality is above 0', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(1);
      expect(items[0].sellIn).toEqual(0);
    });

    it('should remain the same before sell in date is quality is above 0', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(1);
      expect(items[0].sellIn).toEqual(1);
    });
  });
});
