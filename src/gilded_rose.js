class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === "Aged Brie") {
        this.decreaseSellIn(i)
        if (this.qualityBelow50(i)) {
          this.increaseQuality(i)
          if (this.items[i].sellIn < 0) {
            if (this.qualityBelow50(i)) {
              this.increaseQuality(i)
            }
          }
        }
      }
    }
    return this.items;
  }

  decreaseSellIn(index) {
    this.items[index].sellIn -= 1
  }

  decreaseQuality(index) {
    this.items[index].quality -= 1
  }

  increaseQuality(index) {
    this.items[index].quality += 1
  }

  qualityBelow50(index) {
    return this.items[index].quality < 50 ? true : false
  }

  // updateQuality() {
  //   for (var i = 0; i < this.items.length; i++) {
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.decreaseQuality(i);
  //         }
  //       }
  //     } else {
  //       if (this.qualityBelow50(i)) {
  //         this.increaseQuality(i);
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.qualityBelow50(i)) {
  //               this.increaseQuality(i);
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.qualityBelow50(i)) {
  //               this.increaseQuality(i);
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.decreaseSellIn(i)
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.decreaseQuality(i);
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = 0
  //         }
  //       } else {
  //         if (this.qualityBelow50(i)) {
  //           this.increaseQuality(i);
  //         }
  //       }
  //     }
  //   }
  //
  //   return this.items;
  // }
}
